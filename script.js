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
                    if (!firstUnit4AOSButton.classList.contains('active')) {
                        firstUnit4AOSButton.click();
                    } else {
                        const firstAOSContentId = firstUnit4AOSButton.dataset.target;
                        document.querySelectorAll('.unit4-aos-section').forEach(s => s.classList.remove('active'));
                        const targetSection = document.getElementById(firstAOSContentId);
                        if(targetSection) targetSection.classList.add('active');
                        if (firstAOSContentId === 'unit4-aos1') {
                            const firstU4AOS1Button = document.querySelector('#u4aos1-guided-answers.u4aos1-content-toggle') || document.querySelector('.u4aos1-content-toggle'); // Prioritize new tools or first available
                            if (firstU4AOS1Button && !isActiveU4AOS1Toggle(firstU4AOS1Button)) {
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

    function isActiveU4AOS1Toggle(button) {
        return button.classList.contains('bg-indigo-500') || button.classList.contains('bg-teal-500') || button.classList.contains('bg-purple-500') || button.classList.contains('bg-orange-500');
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
                const firstU4AOS1Button = document.querySelector('#u4aos1-guided-answers.u4aos1-content-toggle') || document.querySelector('.u4aos1-content-toggle');
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
            btn.classList.remove('bg-indigo-500', 'text-white', 'bg-teal-500', 'bg-purple-500', 'bg-orange-500');
            
            if (btn.classList.contains('text-indigo-700')) btn.classList.add('hover:bg-indigo-200');
            else if (btn.classList.contains('text-teal-700')) btn.classList.add('hover:bg-teal-200');
            else if (btn.classList.contains('text-purple-700')) btn.classList.add('hover:bg-purple-200');
            else if (btn.classList.contains('text-orange-700')) btn.classList.add('hover:bg-orange-200');
        });

        if (button.classList.contains('text-indigo-700')) button.classList.add('bg-indigo-500', 'text-white');
        else if (button.classList.contains('text-teal-700')) button.classList.add('bg-teal-500', 'text-white');
        else if (button.classList.contains('text-purple-700')) button.classList.add('bg-purple-500', 'text-white');
        else if (button.classList.contains('text-orange-700')) button.classList.add('bg-orange-500', 'text-white');
        
        u4aos1AllContent.forEach(contentSection => {
            contentSection.classList.toggle('hidden', contentSection.id !== targetId);
            if (contentSection.id === targetId) {
                contentSection.querySelectorAll('.accordion-content').forEach(ac => {
                    ac.style.maxHeight = '0px';
                    const arrow = ac.previousElementSibling.querySelector('.arrow-icon');
                    if (arrow) arrow.style.transform = 'rotate(0deg)';
                });
                 // Initialize specific tool if it's being shown
                if (targetId === 'u4aos1-guided-answers') loadGuidedAnswerQuestion(0); // Load first question
                if (targetId === 'u4aos1-case-deconstruction') populateCaseDeconSelector(); // Populate case selector
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
            
            const parentAccordionContainer = toggle.closest('#u4aos1-accordion-container');
            if (!isExpanded && parentAccordionContainer) {
                parentAccordionContainer.querySelectorAll('.accordion-toggle').forEach(otherToggle => {
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
    const caseExplorerData = {
        tasmanianDams: { name: "Commonwealth v Tasmania (Tasmanian Dams Case) (1983)", details: "<strong>Facts:</strong> Tas wanted to build a dam; Cth passed law to stop it based on World Heritage treaty [cite: 998-1000].<br><strong>Issue:</strong> Scope of 'external affairs' power (s51(xxix)).<br><strong>Decision:</strong> Cth law valid; external affairs power allows legislating to fulfill international treaty obligations.<br><strong>Significance:</strong> Shifted law-making power to Cth in areas covered by treaties, potentially making residual state areas concurrent [cite: 98, 1003-1004, 250, 325, 424]." },
        brislan: { name: "R v Brislan (1935)", details: "<strong>Facts:</strong> Challenge to Cth law requiring wireless set licences [cite: 251, 319, 1005-1006].<br><strong>Issue:</strong> Meaning of 'postal, telegraphic, telephonic, and other like services' (s51(v)).<br><strong>Decision:</strong> Wireless broadcasting is a 'like service'; Cth law valid.<br><strong>Significance:</strong> Extended Cth power over communications, shifting power from states to Cth (concurrent) [cite: 95, 252, 321, 1009-1010]. Influenced future tech interpretation." },
        mcbain: { name: "McBain v Victoria (2000)", details: "<strong>Facts:</strong> Vic law restricted IVF to married/de facto couples; Cth law banned marital status discrimination [cite: 90, 230, 1012-1013].<br><strong>Issue:</strong> Inconsistency between Vic and Cth laws.<br><strong>Decision:</strong> Vic law invalid under s109 due to inconsistency with Cth Sex Discrimination Act.<br><strong>Significance:</strong> Demonstrated s109 application; state laws must be consistent with Cth laws in concurrent areas." },
        roach: { name: "Roach v Electoral Commissioner (2007)", details: "<strong>Facts:</strong> Cth law banned all prisoners from voting [cite: 247, 316, 1022-1023].<br><strong>Issue:</strong> Consistency with representative government (ss 7 & 24 Constitution).<br><strong>Decision:</strong> Complete ban unconstitutional; original ban (3+ yrs) valid.<br><strong>Significance:</strong> Affirmed structural right to vote; HCA check on Parliament's power to legislate on voting rights." },
        mabo: { name: "Mabo v Queensland (No. 2) (1992)", details: "<strong>Facts:</strong> Indigenous activists challenged 'terra nullius', claiming native title.<br><strong>Issue:</strong> Existence of native title.<br><strong>Decision:</strong> 'Terra nullius' rejected; native title can exist.<br><strong>Significance:</strong> Overturned common law principle (judicial activism); led to Native Title Act 1993 (Cth) (codification) [cite: 262, 445, 1030-1031]." },
        deingTarola: { name: "Deing v Tarola (1993)", details: "<strong>Facts:</strong> Person charged for possessing studded belt as 'regulated weapon'.<br><strong>Issue:</strong> Interpretation of 'regulated weapon' in Vic law.<br><strong>Decision:</strong> Studded belt not a 'regulated weapon'; definition narrowed.<br><strong>Significance:</strong> Example of statutory interpretation (narrowing statute)." },
        kevinJennifer: { name: "Attorney-General (Cth) v Kevin and Jennifer (2003)", details: "<strong>Facts:</strong> Validity of marriage involving a transgender man (Kevin) challenged.<br><strong>Issue:</strong> Interpretation of 'man' in Marriage Act.<br><strong>Decision:</strong> 'Man' given contemporary meaning; marriage valid.<br><strong>Significance:</strong> Statutory interpretation reflecting changing societal values." },
        trigwell: { name: "State Insurance Commission v Trigwell (1979)", details: "<strong>Facts:</strong> Car accident involving straying sheep; issue of landowner duty of care [cite: 256, 1044-1045]. HCA followed old English precedent.<br><strong>Issue:</strong> Application of existing common law precedent.<br><strong>Decision:</strong> Followed outdated precedent (judicial conservatism).<br><strong>Significance:</strong> Example of disapproving precedent; led to Parliament abrogating common law with Wrongs (Animals Straying on Highways) Act 1984 (Vic)." },
        communistParty: { name: "Australian Communist Party v Commonwealth (1951)", details: "<strong>Facts:</strong> Cth passed law banning Communist Party.<br><strong>Issue:</strong> Validity of the Cth law.<br><strong>Decision:</strong> Legislation invalid.<br><strong>Significance:</strong> Example of judicial independence under separation of powers; HCA checking parliamentary power." }
    };
    if (caseSelectExplorer) {
        caseSelectExplorer.addEventListener('change', function() {
            const selectedCaseKey = this.value;
            if (selectedCaseKey && caseExplorerData[selectedCaseKey] && caseDetailsExplorerDiv) {
                caseDetailsExplorerDiv.innerHTML = `<h5 class="font-semibold text-teal-700 mb-1">${caseExplorerData[selectedCaseKey].name}</h5><p class="text-xs">${caseExplorerData[selectedCaseKey].details}</p>`;
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

    // --- NEW: Guided Answer Construction ---
    const guidedAnswerContainer = document.getElementById('guidedAnswerContainer');
    const checkGuidedAnswerBtn = document.getElementById('checkGuidedAnswerBtn');
    const guidedAnswerFeedback = document.getElementById('guidedAnswerFeedback');
    let currentGuidedQuestionIndex = 0;

    const guidedAnswerQuestions = [
        {
            id: 'gaq1',
            question: "Explain one reason for statutory interpretation. (3 marks)",
            taskWord: "Explain",
            taskWordChecklist: ["Provide details", "State reasons", "Link cause/effect"],
            scaffold: `One reason courts interpret statutes is to clarify the <input type="text" id="gaq1_blank1" class="guided-answer-blank" placeholder="e.g., specific meaning"> in an Act. This is necessary because words can be <input type="text" id="gaq1_blank2" class="guided-answer-blank" placeholder="e.g., ambiguous">, or new <input type="text" id="gaq1_blank3" class="guided-answer-blank" placeholder="e.g., technologies"> may arise that were not foreseen by Parliament. For example, in the case of <input type="text" id="gaq1_blank4" class="guided-answer-blank" placeholder="e.g., Deing v Tarola">, the court had to interpret <input type="text" id="gaq1_blank5" class="guided-answer-blank" placeholder="e.g., 'regulated weapon'">. The effect of this interpretation was <input type="text" id="gaq1_blank6" class="guided-answer-blank" placeholder="e.g., to narrow the scope">.`,
            blanks: [
                { id: "gaq1_blank1", answer: ["specific meaning", "meaning of words", "ambiguity"] },
                { id: "gaq1_blank2", answer: ["ambiguous", "unclear", "have multiple meanings"] },
                { id: "gaq1_blank3", answer: ["technologies", "circumstances", "situations"] },
                { id: "gaq1_blank4", answer: ["Deing v Tarola", "Kevin and Jennifer"] },
                { id: "gaq1_blank5", answer: ["'regulated weapon'", "'man'"] },
                { id: "gaq1_blank6", answer: ["to narrow the scope of the Act", "to clarify its application", "to reflect societal values"] }
            ]
        }
        // Add more questions here
    ];

    function loadGuidedAnswerQuestion(index) {
        if (!guidedAnswerContainer || index >= guidedAnswerQuestions.length) return;
        const qData = guidedAnswerQuestions[index];
        currentGuidedQuestionIndex = index;

        let checklistHTML = '<h5 class="font-semibold text-sm mb-1">Task Word Checklist (' + qData.taskWord + '):</h5><ul class="task-word-checklist text-xs mb-2">';
        qData.taskWordChecklist.forEach(item => {
            checklistHTML += `<li><label><input type="checkbox" class="task-word-item"> ${item}</label></li>`;
        });
        checklistHTML += '</ul>';

        guidedAnswerContainer.innerHTML = `
            <h4 class="font-semibold text-orange-700">${qData.question}</h4>
            ${checklistHTML}
            <div class="text-sm">${qData.scaffold}</div>
        `;
        if (guidedAnswerFeedback) guidedAnswerFeedback.innerHTML = ""; // Clear previous feedback
    }

    if (checkGuidedAnswerBtn) {
        checkGuidedAnswerBtn.addEventListener('click', () => {
            if (!guidedAnswerFeedback) return;
            const qData = guidedAnswerQuestions[currentGuidedQuestionIndex];
            let allCorrect = true;
            let feedbackText = "Feedback:<ul>";

            qData.blanks.forEach(blankInfo => {
                const inputElement = document.getElementById(blankInfo.id);
                if (inputElement) {
                    const userAnswer = inputElement.value.trim().toLowerCase();
                    const correctAnswers = blankInfo.answer.map(a => a.toLowerCase());
                    if (correctAnswers.includes(userAnswer)) {
                        inputElement.classList.remove('incorrect');
                        inputElement.classList.add('correct');
                        feedbackText += `<li class="text-green-600">Blank for "${blankInfo.answer[0]}" (or similar) is correct!</li>`;
                    } else {
                        inputElement.classList.remove('correct');
                        inputElement.classList.add('incorrect');
                        allCorrect = false;
                        feedbackText += `<li class="text-red-600">Blank for "${blankInfo.answer[0]}" (or similar) - check your answer. One possible answer: ${blankInfo.answer[0]}</li>`;
                    }
                }
            });
            feedbackText += "</ul>";
            guidedAnswerFeedback.innerHTML = feedbackText;
            if (allCorrect) {
                guidedAnswerFeedback.innerHTML = '<p class="text-green-600 font-semibold">All blanks filled correctly! Well done!</p>' + feedbackText;
            }
        });
    }
    
    // --- NEW: Case Deconstruction ---
    const caseDeconSelect = document.getElementById('caseDeconSelect');
    const caseDeconArea = document.getElementById('caseDeconArea');
    const checkCaseDeconBtn = document.getElementById('checkCaseDeconBtn');
    const caseDeconFeedback = document.getElementById('caseDeconFeedback');
    let currentCaseDeconData = null;

    const caseDeconstructionData = [
        {
            id: "tasmanianDams",
            name: "Commonwealth v Tasmania (Tasmanian Dams Case) (1983)",
            elements: {
                facts: "Tasmania planned to build a hydro-electric dam on the Gordon River, an area listed for World Heritage protection after Australia ratified the World Heritage Convention. The Commonwealth Parliament passed legislation to stop the dam construction.",
                issue: "Did the Commonwealth have the constitutional power (under s51(xxix) 'external affairs') to pass legislation to prevent the dam construction, thereby overriding Tasmania's residual power over land management and dam construction?",
                decision: "The High Court held (4:3 majority) that the Commonwealth's legislation was valid. The 'external affairs' power extends to legislating to fulfill obligations under bona fide international treaties.",
                significance: "Significantly expanded the Commonwealth's law-making power by allowing it to legislate on matters previously considered within state residual powers, provided it was to implement a genuine international treaty. This altered the division of powers."
            },
            allSnippets: [ // Jumbled snippets for dropdowns
                "Tasmania planned to build a hydro-electric dam on the Gordon River, an area listed for World Heritage protection after Australia ratified the World Heritage Convention. The Commonwealth Parliament passed legislation to stop the dam construction.",
                "Did the Commonwealth have the constitutional power (under s51(xxix) 'external affairs') to pass legislation to prevent the dam construction, thereby overriding Tasmania's residual power over land management and dam construction?",
                "The High Court held (4:3 majority) that the Commonwealth's legislation was valid. The 'external affairs' power extends to legislating to fulfill obligations under bona fide international treaties.",
                "Significantly expanded the Commonwealth's law-making power by allowing it to legislate on matters previously considered within state residual powers, provided it was to implement a genuine international treaty. This altered the division of powers.",
                "A prisoner challenged a Commonwealth law banning all prisoners from voting.", // Incorrect snippet
                "The High Court interpreted 'other like services' in s51(v) to include wireless radio broadcasting." // Incorrect snippet
            ],
            impactedAreaOptions: ["Division of Powers", "Express Rights", "Separation of Powers", "Representative Government"],
            correctImpactedArea: "Division of Powers",
            relatedConceptsOptions: ["s51(xxix) External Affairs", "s109 Inconsistency", "Residual Powers", "High Court Interpretation", "s80 Trial by Jury"],
            correctRelatedConcepts: ["s51(xxix) External Affairs", "s109 Inconsistency", "Residual Powers", "High Court Interpretation"]
        }
        // Add more cases here
    ];

    function populateCaseDeconSelector() {
        if (!caseDeconSelect) return;
        caseDeconSelect.innerHTML = '<option value="">-- Select a Case --</option>'; // Reset
        caseDeconstructionData.forEach(caseItem => {
            const option = document.createElement('option');
            option.value = caseItem.id;
            option.textContent = caseItem.name;
            caseDeconSelect.appendChild(option);
        });
    }

    function loadCaseDeconstructionTool(caseId) {
        if (!caseDeconArea) return;
        currentCaseDeconData = caseDeconstructionData.find(c => c.id === caseId);
        if (!currentCaseDeconData) {
            caseDeconArea.classList.add('hidden');
            return;
        }
        caseDeconArea.classList.remove('hidden');
        if(caseDeconFeedback) caseDeconFeedback.innerHTML = "";

        const selects = caseDeconArea.querySelectorAll('.case-decon-select');
        selects.forEach(select => {
            const type = select.dataset.type; // 'facts', 'issue', etc.
            select.innerHTML = `<option value="">Select ${type.charAt(0).toUpperCase() + type.slice(1)}...</option>`;
            // Shuffle snippets for variety
            const shuffledSnippets = [...currentCaseDeconData.allSnippets].sort(() => 0.5 - Math.random());
            shuffledSnippets.forEach(snippet => {
                const option = document.createElement('option');
                option.value = snippet;
                // Truncate long snippets for display in dropdown
                option.textContent = snippet.length > 70 ? snippet.substring(0, 67) + "..." : snippet;
                select.appendChild(option);
            });
        });

        const impactOptionsContainer = document.getElementById('caseDeconImpactOptions');
        if (impactOptionsContainer) {
            impactOptionsContainer.innerHTML = "";
            currentCaseDeconData.impactedAreaOptions.forEach(opt => {
                impactOptionsContainer.innerHTML += `<label class="block"><input type="radio" name="impactArea" value="${opt}"> ${opt}</label>`;
            });
        }

        const conceptOptionsContainer = document.getElementById('caseDeconConceptOptions');
         if (conceptOptionsContainer) {
            conceptOptionsContainer.innerHTML = "";
            currentCaseDeconData.relatedConceptsOptions.forEach(opt => {
                conceptOptionsContainer.innerHTML += `<label class="block"><input type="checkbox" name="relatedConcept" value="${opt}"> ${opt}</label>`;
            });
        }
    }

    if (caseDeconSelect) {
        caseDeconSelect.addEventListener('change', function() {
            loadCaseDeconstructionTool(this.value);
        });
    }

    if (checkCaseDeconBtn) {
        checkCaseDeconBtn.addEventListener('click', () => {
            if (!currentCaseDeconData || !caseDeconFeedback) return;
            let feedbackHTML = "Deconstruction Feedback:<ul>";
            let allCorrect = true;

            // Check element selections (Facts, Issue, Decision, Significance)
            const elementSelects = caseDeconArea.querySelectorAll('.case-decon-select');
            elementSelects.forEach(select => {
                const type = select.dataset.type;
                const userAnswer = select.value;
                const correctAnswer = currentCaseDeconData.elements[type];
                const label = select.previousElementSibling.textContent;

                if (userAnswer === correctAnswer) {
                    feedbackHTML += `<li class="case-decon-feedback-item correct">${label} Correct!</li>`;
                    select.classList.remove('border-red-500');
                    select.classList.add('border-green-500');
                } else {
                    feedbackHTML += `<li class="case-decon-feedback-item incorrect">${label} Incorrect.</li>`;
                    select.classList.remove('border-green-500');
                    select.classList.add('border-red-500');
                    allCorrect = false;
                }
            });

            // Check impacted area
            const selectedImpact = caseDeconArea.querySelector('input[name="impactArea"]:checked');
            if (selectedImpact && selectedImpact.value === currentCaseDeconData.correctImpactedArea) {
                feedbackHTML += `<li class="case-decon-feedback-item correct">Impacted Area: Correct!</li>`;
            } else {
                feedbackHTML += `<li class="case-decon-feedback-item incorrect">Impacted Area: Incorrect. Correct was: ${currentCaseDeconData.correctImpactedArea}</li>`;
                allCorrect = false;
            }

            // Check related concepts
            const selectedConcepts = Array.from(caseDeconArea.querySelectorAll('input[name="relatedConcept"]:checked')).map(cb => cb.value);
            const correctConcepts = currentCaseDeconData.correctRelatedConcepts;
            let conceptsMatch = selectedConcepts.length === correctConcepts.length && selectedConcepts.every(val => correctConcepts.includes(val));
            
            if (conceptsMatch) {
                feedbackHTML += `<li class="case-decon-feedback-item correct">Related Concepts: Correct!</li>`;
            } else {
                feedbackHTML += `<li class="case-decon-feedback-item incorrect">Related Concepts: Incorrect. Correct concepts are: ${correctConcepts.join(', ')}</li>`;
                allCorrect = false;
            }

            feedbackHTML += "</ul>";
            if (allCorrect) {
                feedbackHTML = '<p class="text-green-600 font-semibold">Case Deconstruction Perfect!</p>' + feedbackHTML;
            }
            caseDeconFeedback.innerHTML = feedbackHTML;
        });
    }

});
