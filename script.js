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
                    // Always click the first AOS button for Unit 4 to ensure its logic runs
                    firstUnit4AOSButton.click();
                }
            }
        });
    });

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
                // When AOS1 tab is clicked, ensure its first tool/content is shown by default
                const firstU4AOS1Button = document.querySelector('.u4aos1-content-toggle');
                if (firstU4AOS1Button) {
                    // Check if it's not already the active one to prevent re-triggering if not needed
                    if (!isActiveU4AOS1Toggle(firstU4AOS1Button)) {
                         handleU4AOS1ContentToggle(firstU4AOS1Button);
                    } else {
                        // If it is already active, ensure its content is visible (might have been hidden by other logic)
                        const firstU4AOS1ContentId = firstU4AOS1Button.dataset.target;
                        const firstU4AOS1ContentElement = document.getElementById(firstU4AOS1ContentId);
                        if (firstU4AOS1ContentElement) {
                            u4aos1AllContent.forEach(cs => cs.classList.add('hidden'));
                            firstU4AOS1ContentElement.classList.remove('hidden');
                            // Re-run initialization for this default active tool
                            initializeToolIfNeeded(firstU4AOS1ContentId);
                        }
                    }
                }
            }
        });
    });

    // --- Unit 4 AOS 1 Content Toggles ---
    const u4aos1ContentToggles = document.querySelectorAll('.u4aos1-content-toggle');
    const u4aos1AllContent = document.querySelectorAll('#unit4-aos1 .u4aos1-content');

    function isActiveU4AOS1Toggle(button) {
        return button.classList.contains('bg-indigo-500') || 
               button.classList.contains('bg-teal-500') || 
               button.classList.contains('bg-orange-500') ||
               button.classList.contains('bg-cyan-500') ||
               button.classList.contains('bg-lime-500') ||
               button.classList.contains('bg-purple-500');
    }
    
    function initializeToolIfNeeded(targetId) {
        // Call initialization functions for specific tools
        // These functions should be defined (either in this file or keySkillsHub.js and exposed via window)
        if (targetId === 'u4aos1-guided-answers' && typeof window.loadGuidedAnswerQuestion === 'function') {
            window.loadGuidedAnswerQuestion(0);
        }
        if (targetId === 'u4aos1-case-deconstruction' && typeof window.populateCaseDeconSelector === 'function') {
            window.populateCaseDeconSelector();
        }
        if (targetId === 'u4aos1-term-match-game' && typeof window.setupTermMatchGame === 'function') {
            window.setupTermMatchGame();
        }
        if (targetId === 'u4aos1-key-skills-hub' && typeof window.initializeKeySkillsHub === 'function') {
            window.initializeKeySkillsHub();
        }
        if (targetId === 'u4aos1-glossary' && typeof window.setupCategorizedGlossary === 'function') {
            window.setupCategorizedGlossary();
        }
    }

    function handleU4AOS1ContentToggle(buttonToActivate) {
        const targetId = buttonToActivate.dataset.target;
        
        u4aos1ContentToggles.forEach(btn => {
            // Reset active styles from all categories
            btn.classList.remove('bg-indigo-500', 'text-white', 
                                 'bg-teal-500', 'text-white', 
                                 'bg-orange-500', 'text-white', 
                                 'bg-cyan-500', 'text-white', 'active-skill-hub-toggle', 
                                 'bg-purple-500', 'text-white',
                                 'bg-lime-500', 'text-white', 'active-game-toggle');
        });

        // Apply active style to the clicked button based on its category
        if (buttonToActivate.classList.contains('text-indigo-700')) {
            buttonToActivate.classList.add('bg-indigo-500', 'text-white');
        } else if (buttonToActivate.classList.contains('text-teal-700')) {
            buttonToActivate.classList.add('bg-teal-500', 'text-white');
        } else if (buttonToActivate.classList.contains('text-orange-700')) {
            buttonToActivate.classList.add('bg-orange-500', 'text-white');
        } else if (buttonToActivate.classList.contains('text-cyan-700')) { 
            buttonToActivate.classList.add('bg-cyan-500', 'text-white', 'active-skill-hub-toggle');
        } else if (buttonToActivate.classList.contains('text-lime-700')) { 
            buttonToActivate.classList.add('bg-lime-500', 'text-white', 'active-game-toggle');
        } else if (buttonToActivate.classList.contains('text-purple-700')) {
            buttonToActivate.classList.add('bg-purple-500', 'text-white');
        }
        
        u4aos1AllContent.forEach(contentSection => {
            const isTarget = contentSection.id === targetId;
            contentSection.classList.toggle('hidden', !isTarget);
            
            if (isTarget) {
                const isComplexTool = ['u4aos1-key-skills-hub', 'u4aos1-guided-answers', 
                                     'u4aos1-case-deconstruction', 'u4aos1-term-match-game',
                                     'u4aos1-glossary', 'u4aos1-interactive-diagrams', 
                                     'u4aos1-case-explorer', 'u4aos1-exam-skills', 
                                     'u4aos1-practice-questions'].includes(targetId);

                if (!isComplexTool) { // Only reset accordions for simple informational sections
                    contentSection.querySelectorAll('.accordion-content').forEach(ac => {
                        ac.style.maxHeight = '0px';
                        const accordionButton = ac.previousElementSibling;
                        if (accordionButton && accordionButton.classList.contains('accordion-toggle')) {
                             const arrow = accordionButton.querySelector('.arrow-icon');
                             if (arrow) arrow.style.transform = 'rotate(0deg)';
                        }
                    });
                }
                initializeToolIfNeeded(targetId);
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
            if (!content || !content.classList.contains('accordion-content')) return;

            const arrow = toggle.querySelector('.arrow-icon');
            const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';
            
            const parentAccordionContainer = toggle.closest('#u4aos1-accordion-container');
            const isMainKnowledgeAccordion = parentAccordionContainer && !toggle.closest('#u4aos1-key-skills-hub, #u4aos1-guided-answers, #u4aos1-case-deconstruction, #u4aos1-term-match-game, #u4aos1-glossary, #u4aos1-interactive-diagrams, #u4aos1-case-explorer, #u4aos1-exam-skills, #u4aos1-practice-questions');

            if (!isExpanded && isMainKnowledgeAccordion) {
                parentAccordionContainer.querySelectorAll(':scope > .u4aos1-content > .border > .accordion-toggle').forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        const otherContent = otherToggle.nextElementSibling;
                        const otherArrow = otherToggle.querySelector('.arrow-icon');
                        if (otherContent && otherContent.classList.contains('accordion-content')) {
                           otherContent.style.maxHeight = '0px';
                           if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
                        }
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

    // --- Ensure Guided Answers, Case Deconstruction, and Term Match Game are initialized on page load if present ---
    if (typeof window.loadGuidedAnswerQuestion === 'function' && document.getElementById('guidedAnswerContainer')) {
        window.loadGuidedAnswerQuestion(0);
    }
    if (typeof window.populateCaseDeconSelector === 'function' && document.getElementById('caseDeconSelect')) {
        window.populateCaseDeconSelector();
    }
    if (typeof window.setupTermMatchGame === 'function' && document.getElementById('termMatchGameContainer')) {
        window.setupTermMatchGame();
    }

    // Expose caseExplorerData to window object if it's defined here
    // This is an example, ensure your actual caseExplorerData is defined and exposed
    window.caseExplorerData = { 
        tasmanianDams: { name: "Commonwealth v Tasmania (Tasmanian Dams Case) (1983)", details: "<strong>Facts:</strong> Tas wanted to build a dam; Cth passed law to stop it based on World Heritage Convention. HC upheld Cth power under external affairs.<br><strong>Significance:</strong> Expanded Cth power via s51(xxix)." },
        brislan: { name: "R v Brislan (1935)", details: "<strong>Facts:</strong> Challenge to Cth law requiring wireless set licences [cite: 251, 319, 1005-1006].<br><strong>Issue:</strong> Meaning of 'other like services' in s51(v)." },
        mcbain: { name: "McBain v Victoria (2000)", details: "<strong>Facts:</strong> Vic law restricted IVF to married/de facto couples; Cth law banned marital status discrimination [cite: 90, 247, 1008].<br><strong>Significance:</strong> s109: Cth law prevails." },
        roach: { name: "Roach v Electoral Commissioner (2007)", details: "<strong>Facts:</strong> Cth law banned all prisoners from voting [cite: 247, 316, 1022-1023].<br><strong>Issue:</strong> Did it breach representative government?" },
        mabo: { name: "Mabo v Queensland (No. 2) (1992)", details: "<strong>Facts:</strong> Indigenous activists challenged 'terra nullius', claiming native title.<br><strong>Issue:</strong> Existence of native title in Australian law." },
        deingTarola: { name: "Deing v Tarola (1993)", details: "<strong>Facts:</strong> Person charged for possessing studded belt as 'regulated weapon'.<br><strong>Significance:</strong> Statutory interpretation: what is a 'weapon'?" },
        kevinJennifer: { name: "Attorney-General (Cth) v Kevin and Jennifer (2003)", details: "<strong>Facts:</strong> Validity of marriage involving a transgender man (Kevin) challenged.<br><strong>Significance:</strong> Statutory interpretation of 'man' and 'woman'." },
        trigwell: { name: "State Insurance Commission v Trigwell (1979)", details: "<strong>Facts:</strong> Car accident involving straying sheep; issue of landowner duty of care [cite: 256, 1044].<br><strong>Significance:</strong> Precedent and legislative override." },
        communistParty: { name: "Australian Communist Party v Commonwealth (1951)", details: "<strong>Facts:</strong> Cth passed law banning Communist Party.<br><strong>Issue:</strong> Validity of Cth law under Constitution." }
    };
    
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
                diagramPopup.innerHTML = info; 
                diagramPopup.style.display = 'block';
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
            }
        });
        node.addEventListener('mouseleave', () => {
            if (diagramPopup) diagramPopup.style.display = 'none';
        });
        node.addEventListener('click', (event) => { 
            const info = node.dataset.info;
            if (info && diagramPopup) {
                diagramPopup.innerHTML = info;
                diagramPopup.style.display = 'block';
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
                setTimeout(() => { 
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

    // Case Explorer (Existing functionality)
    const caseSelectExplorer = document.getElementById('caseSelectExplorer');
    const caseDetailsExplorerDiv = document.getElementById('caseDetailsExplorer');
    if (caseSelectExplorer) {
        caseSelectExplorer.addEventListener('change', function() {
            const selectedCaseKey = this.value;
            if (selectedCaseKey && window.caseExplorerData[selectedCaseKey] && caseDetailsExplorerDiv) {
                caseDetailsExplorerDiv.innerHTML = `<h5 class="font-semibold text-teal-700 mb-1">${window.caseExplorerData[selectedCaseKey].name}</h5><p class="text-xs">${window.caseExplorerData[selectedCaseKey].details}</p>`;
            } else if (caseDetailsExplorerDiv) {
                caseDetailsExplorerDiv.innerHTML = '<p>Select a case to see details here.</p>';
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

    // Initial default selections
    if (mainNavButtons.length > 0) { 
        mainNavButtons[0].click(); 
    }

}); // End of DOMContentLoaded
