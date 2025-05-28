document.addEventListener('DOMContentLoaded', function () {
    // Date for footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Main Navigation
    const mainNavButtons = document.querySelectorAll('.main-nav-button');
    const mainContentSections = document.querySelectorAll('.main-content-section');

    mainNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            mainNavButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-indigo-600', 'text-white');
                btn.classList.add('bg-slate-200', 'text-slate-700', 'hover:bg-indigo-500');
            });
            button.classList.add('active', 'bg-indigo-600', 'text-white');
            button.classList.remove('bg-slate-200', 'text-slate-700', 'hover:bg-indigo-500');

            mainContentSections.forEach(section => {
                section.classList.toggle('active', section.id === targetId);
            });
            
            if (targetId === 'unit4-content') {
                const firstUnit4AOSButton = document.querySelector('#unit4Nav .unit4-nav-button');
                if (firstUnit4AOSButton) {
                     // Check if it's already active to prevent re-triggering unnecessarily
                    if (!firstUnit4AOSButton.classList.contains('active')) {
                        firstUnit4AOSButton.click();
                    } else {
                        // If already active, ensure its content is shown (e.g., if navigating back)
                        const firstAOSContentId = firstUnit4AOSButton.dataset.target;
                        document.querySelectorAll('.unit4-aos-section').forEach(s => s.classList.remove('active'));
                        const targetSection = document.getElementById(firstAOSContentId);
                        if(targetSection) targetSection.classList.add('active');
                        // Also ensure the first U4AOS1 content toggle is active if that's the default AOS
                        if (firstAOSContentId === 'unit4-aos1') {
                            const firstU4AOS1Button = document.querySelector('.u4aos1-content-toggle');
                            if (firstU4AOS1Button && !firstU4AOS1Button.classList.contains('bg-indigo-500') && !firstU4AOS1Button.classList.contains('bg-teal-500') && !firstU4AOS1Button.classList.contains('bg-purple-500')) {
                                handleU4AOS1ContentToggle(firstU4AOS1Button);
                            }
                        }
                    }
                }
            }
        });
    });
     if (mainNavButtons.length > 0) { 
        mainNavButtons[0].click();
    }


    // Unit 4 AOS Navigation
    const unit4NavButtons = document.querySelectorAll('.unit4-nav-button');
    const unit4AosSections = document.querySelectorAll('.unit4-aos-section');

    unit4NavButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
             unit4NavButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-indigo-500', 'text-white');
                btn.classList.add('bg-slate-200', 'text-slate-700', 'hover:bg-indigo-400');
            });
            button.classList.add('active', 'bg-indigo-500', 'text-white');
            button.classList.remove('bg-slate-200', 'text-slate-700', 'hover:bg-indigo-400');

            unit4AosSections.forEach(section => {
                section.classList.toggle('active', section.id === targetId);
            });
            
            if (targetId === 'unit4-aos1') {
                const firstU4AOS1Button = document.querySelector('.u4aos1-content-toggle');
                 if (firstU4AOS1Button) {
                    handleU4AOS1ContentToggle(firstU4AOS1Button); 
                 } else { 
                    const allU4AOS1Content = document.querySelectorAll('#unit4-aos1 .u4aos1-content');
                    allU4AOS1Content.forEach(s => s.classList.add('hidden')); 
                 }
            }
        });
    });


    // Unit 4 AOS 1 Content Toggles
    const u4aos1ContentToggles = document.querySelectorAll('.u4aos1-content-toggle');
    const u4aos1AllContent = document.querySelectorAll('#unit4-aos1 .u4aos1-content');

    function handleU4AOS1ContentToggle(button) {
        const targetId = button.dataset.target;
        u4aos1ContentToggles.forEach(btn => {
            btn.classList.remove('bg-indigo-500', 'text-white', 'bg-teal-500', 'bg-purple-500');
            // Re-apply base hover styles, Tailwind handles the actual hover effect
            if (btn.classList.contains('text-indigo-700')) btn.classList.remove('hover:bg-indigo-200'); // Example, adjust if base style is different
            else if (btn.classList.contains('text-teal-700')) btn.classList.remove('hover:bg-teal-200');
            else if (btn.classList.contains('text-purple-700')) btn.classList.remove('hover:bg-purple-200');

            // Re-add specific hovers if needed, or rely on initial Tailwind classes
            if (btn.dataset.baseBg === 'bg-indigo-100') btn.classList.add('hover:bg-indigo-200');
            else if (btn.dataset.baseBg === 'bg-teal-100') btn.classList.add('hover:bg-teal-200');
            else if (btn.dataset.baseBg === 'bg-purple-100') btn.classList.add('hover:bg-purple-200');
        });

        if (button.classList.contains('text-indigo-700')) {
            button.classList.add('bg-indigo-500', 'text-white');
            button.dataset.baseBg = 'bg-indigo-100'; // Store base for reset
        } else if (button.classList.contains('text-teal-700')) {
            button.classList.add('bg-teal-500', 'text-white');
            button.dataset.baseBg = 'bg-teal-100';
        } else if (button.classList.contains('text-purple-700')) {
            button.classList.add('bg-purple-500', 'text-white');
            button.dataset.baseBg = 'bg-purple-100';
        }
        
        u4aos1AllContent.forEach(contentSection => {
            contentSection.classList.toggle('hidden', contentSection.id !== targetId);
             // If showing a content section, ensure its accordions are reset (closed)
            if (contentSection.id === targetId) {
                contentSection.querySelectorAll('.accordion-content').forEach(ac => {
                    ac.style.maxHeight = '0px';
                    const arrow = ac.previousElementSibling.querySelector('.arrow-icon');
                    if (arrow) arrow.style.transform = 'rotate(0deg)';
                });
            }
        });
    }
    
    u4aos1ContentToggles.forEach(button => {
        button.addEventListener('click', () => handleU4AOS1ContentToggle(button));
    });

    // Accordion Logic
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const arrow = toggle.querySelector('.arrow-icon');
            const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';
            
            // Only close others if this one is opening AND it's part of the main content accordions
            const parentAccordionContainer = toggle.closest('#u4aos1-accordion-container');
            if (!isExpanded && parentAccordionContainer) {
                parentAccordionContainer.querySelectorAll('.accordion-toggle').forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        const otherContent = otherToggle.nextElementSibling;
                        const otherArrow = otherToggle.querySelector('.arrow-icon');
                        otherContent.style.maxHeight = '0px';
                        if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
                    }
                });
            }
            
            if (isExpanded) {
                content.style.maxHeight = '0px';
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                if (arrow) arrow.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Glossary Interaction
    const glossaryItems = document.querySelectorAll('.glossary-item');
    const glossarySearch = document.getElementById('glossarySearch');

    glossaryItems.forEach(item => {
        const term = item.querySelector('.glossary-term');
        const definition = item.querySelector('.glossary-definition');
        if (term && definition) {
            term.addEventListener('click', () => {
                definition.style.display = definition.style.display === 'block' ? 'none' : 'block';
            });
        }
    });

    if(glossarySearch) {
        glossarySearch.addEventListener('keyup', function() {
            const filter = glossarySearch.value.toLowerCase();
            glossaryItems.forEach(item => {
                const termElement = item.querySelector('.glossary-term');
                if (termElement) {
                    const termText = termElement.textContent.toLowerCase();
                    if (termText.includes(filter)) {
                        item.style.display = "";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    }

    // Interactive Diagram Popups
    const diagramNodes = document.querySelectorAll('.interactive-diagram-node');
    const diagramPopup = document.getElementById('diagram-popup');

    diagramNodes.forEach(node => {
        node.addEventListener('mouseenter', (event) => {
            const info = node.dataset.info;
            if (info && diagramPopup) {
                diagramPopup.innerHTML = info; // Use innerHTML if info contains HTML tags
                diagramPopup.style.display = 'block';
                let rect = node.getBoundingClientRect();
                let popupRect = diagramPopup.getBoundingClientRect();

                let top = rect.bottom + window.scrollY + 5; // Below the node
                let left = rect.left + window.scrollX + (rect.width / 2) - (popupRect.width / 2); // Centered below

                // Adjust if going off-screen
                if (left < 0) left = 10;
                if (left + popupRect.width > window.innerWidth) left = window.innerWidth - popupRect.width - 10;
                if (top + popupRect.height > window.innerHeight + window.scrollY) { // If not enough space below
                    top = rect.top + window.scrollY - popupRect.height - 5; // Try above
                }
                 if (top < window.scrollY) top = window.scrollY + 10; // If still off-screen (e.g. node is at top)

                diagramPopup.style.top = `${top}px`;
                diagramPopup.style.left = `${left}px`;
            }
        });
        node.addEventListener('mouseleave', () => {
            if (diagramPopup) diagramPopup.style.display = 'none';
        });
         node.addEventListener('click', (event) => { // Keep popup on click too for mobile friendliness
            const info = node.dataset.info;
            if (info && diagramPopup) {
                diagramPopup.innerHTML = info;
                diagramPopup.style.display = 'block';
                // Same positioning logic as mouseenter
                let rect = node.getBoundingClientRect();
                let popupRect = diagramPopup.getBoundingClientRect();
                let top = rect.bottom + window.scrollY + 5;
                let left = rect.left + window.scrollX + (rect.width / 2) - (popupRect.width / 2);
                if (left < 0) left = 10;
                if (left + popupRect.width > window.innerWidth) left = window.innerWidth - popupRect.width - 10;
                if (top + popupRect.height > window.innerHeight + window.scrollY) {
                    top = rect.top + window.scrollY - popupRect.height - 5;
                }
                if (top < window.scrollY) top = window.scrollY + 10;
                diagramPopup.style.top = `${top}px`;
                diagramPopup.style.left = `${left}px`;

                // Hide on clicking outside
                setTimeout(() => { // Use timeout to avoid immediate re-hiding if node is clicked again
                    document.addEventListener('click', function hidePopupOnClickOutside(e) {
                        if (!diagramPopup.contains(e.target) && !node.contains(e.target)) {
                            diagramPopup.style.display = 'none';
                            document.removeEventListener('click', hidePopupOnClickOutside);
                        }
                    });
                }, 0);
            }
        });
    });

    // Case Explorer
    const caseSelector = document.getElementById('caseSelector');
    const caseDetailsDiv = document.getElementById('caseDetails');
    const caseData = {
        tasmanianDams: { name: "Commonwealth v Tasmania (Tasmanian Dams Case) (1983)", details: "<strong>Facts:</strong> Tas wanted to build a dam; Cth passed law to stop it based on World Heritage treaty.<br><strong>Issue:</strong> Scope of 'external affairs' power (s51(xxix))[cite: 1001].<br><strong>Decision:</strong> Cth law valid; external affairs power allows legislating to fulfill international treaty obligations[cite: 1002].<br><strong>Significance:</strong> Shifted law-making power to Cth in areas covered by treaties, potentially making residual state areas concurrent." },
        brislan: { name: "R v Brislan (1935)", details: "<strong>Facts:</strong> Challenge to Cth law requiring wireless set licences.<br><strong>Issue:</strong> Meaning of 'postal, telegraphic, telephonic, and other like services' (s51(v))[cite: 93, 1007].<br><strong>Decision:</strong> Wireless broadcasting is a 'like service'; Cth law valid[cite: 94, 321, 1008].<br><strong>Significance:</strong> Extended Cth power over communications, shifting power from states to Cth (concurrent). Influenced future tech interpretation[cite: 1011]." },
        mcbain: { name: "McBain v Victoria (2000)", details: "<strong>Facts:</strong> Vic law restricted IVF to married/de facto couples; Cth law banned marital status discrimination.<br><strong>Issue:</strong> Inconsistency between Vic and Cth laws[cite: 1015].<br><strong>Decision:</strong> Vic law invalid under s109 due to inconsistency with Cth Sex Discrimination Act[cite: 1016].<br><strong>Significance:</strong> Demonstrated s109 application; state laws must be consistent with Cth laws in concurrent areas[cite: 1017]." },
        roach: { name: "Roach v Electoral Commissioner (2007)", details: "<strong>Facts:</strong> Cth law banned all prisoners from voting.<br><strong>Issue:</strong> Consistency with representative government (ss 7 & 24 Constitution)[cite: 1024].<br><strong>Decision:</strong> Complete ban unconstitutional; original ban (3+ yrs) valid[cite: 317, 1025].<br><strong>Significance:</strong> Affirmed structural right to vote; HCA check on Parliament's power to legislate on voting rights[cite: 247, 318, 425, 1026]." },
        mabo: { name: "Mabo v Queensland (No. 2) (1992)", details: "<strong>Facts:</strong> Indigenous activists challenged 'terra nullius', claiming native title[cite: 1027].<br><strong>Issue:</strong> Existence of native title[cite: 1028].<br><strong>Decision:</strong> 'Terra nullius' rejected; native title can exist[cite: 1029].<br><strong>Significance:</strong> Overturned common law principle (judicial activism); led to Native Title Act 1993 (Cth) (codification)." },
        deingTarola: { name: "Deing v Tarola (1993)", details: "<strong>Facts:</strong> Person charged for possessing studded belt as 'regulated weapon'[cite: 258, 1032].<br><strong>Issue:</strong> Interpretation of 'regulated weapon' in Vic law[cite: 1033].<br><strong>Decision:</strong> Studded belt not a 'regulated weapon'; definition narrowed[cite: 1034].<br><strong>Significance:</strong> Example of statutory interpretation (narrowing statute)[cite: 1035]." },
        kevinJennifer: { name: "Attorney-General (Cth) v Kevin and Jennifer (2003)", details: "<strong>Facts:</strong> Validity of marriage involving a transgender man (Kevin) challenged[cite: 258, 1036].<br><strong>Issue:</strong> Interpretation of 'man' in Marriage Act[cite: 1037].<br><strong>Decision:</strong> 'Man' given contemporary meaning; marriage valid[cite: 1038].<br><strong>Significance:</strong> Statutory interpretation reflecting changing societal values[cite: 258, 1039]." },
        trigwell: { name: "State Insurance Commission v Trigwell (1979)", details: "<strong>Facts:</strong> Car accident involving straying sheep; issue of landowner duty of care. HCA followed old English precedent[cite: 1045].<br><strong>Issue:</strong> Application of existing common law precedent[cite: 1046].<br><strong>Decision:</strong> Followed outdated precedent (judicial conservatism)[cite: 1047].<br><strong>Significance:</strong> Example of disapproving precedent; led to Parliament abrogating common law with Wrongs (Animals Straying on Highways) Act 1984 (Vic)[cite: 256, 1048]." },
        communistParty: { name: "Australian Communist Party v Commonwealth (1951)", details: "<strong>Facts:</strong> Cth passed law banning Communist Party[cite: 385, 1049].<br><strong>Issue:</strong> Validity of the Cth law[cite: 1050].<br><strong>Decision:</strong> Legislation invalid[cite: 385, 1051].<br><strong>Significance:</strong> Example of judicial independence under separation of powers; HCA checking parliamentary power[cite: 385, 541, 1052]." }
    };

    if (caseSelector) {
        caseSelector.addEventListener('change', function() {
            const selectedCaseKey = this.value;
            if (selectedCaseKey && caseData[selectedCaseKey] && caseDetailsDiv) {
                caseDetailsDiv.innerHTML = `<h5 class="font-semibold text-teal-700 mb-1">${caseData[selectedCaseKey].name}</h5><p class="text-xs">${caseData[selectedCaseKey].details}</p>`;
            } else if (caseDetailsDiv) {
                caseDetailsDiv.innerHTML = '<p>Select a case to see details here.</p>';
            }
        });
    }

    // Exam Skills Helper Tabs
    const taskWordTabs = document.querySelectorAll('.task-word-tab');
    const taskWordContents = document.querySelectorAll('.task-word-content');

    taskWordTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.target;
            taskWordTabs.forEach(t => {
                t.classList.remove('border-purple-500', 'font-semibold', 'text-purple-800', 'bg-purple-100');
                t.classList.add('border-transparent', 'text-purple-600');
            });
            tab.classList.add('border-purple-500', 'font-semibold', 'text-purple-800', 'bg-purple-100');
            tab.classList.remove('border-transparent', 'text-purple-600');

            taskWordContents.forEach(content => {
                content.classList.toggle('hidden', content.id !== targetId);
            });
        });
    });
    if (taskWordTabs.length > 0) { 
        taskWordTabs[0].click();
    }


    // Practice Questions Toggle Answer
    const practiceQuestionToggleButtons = document.querySelectorAll('.practice-question-toggle-answer');
    practiceQuestionToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answerDiv = button.nextElementSibling;
            if (answerDiv) {
                answerDiv.style.display = answerDiv.style.display === 'none' || answerDiv.style.display === '' ? 'block' : 'none';
            }
        });
    });

});
