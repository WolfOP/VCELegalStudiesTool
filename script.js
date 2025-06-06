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
                const firstU4AOS1Button = document.querySelector('.u4aos1-content-toggle');
                if (firstU4AOS1Button) {
                    if (!isActiveU4AOS1Toggle(firstU4AOS1Button)) {
                         handleU4AOS1ContentToggle(firstU4AOS1Button);
                    } else {
                        const firstU4AOS1ContentId = firstU4AOS1Button.dataset.target;
                        const firstU4AOS1ContentElement = document.getElementById(firstU4AOS1ContentId);
                        if (firstU4AOS1ContentElement) {
                            u4aos1AllContent.forEach(cs => cs.classList.add('hidden'));
                            firstU4AOS1ContentElement.classList.remove('hidden');
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
        if (targetId === 'u4aos1-guided-answers' && typeof window.loadGuidedAnswerQuestion === 'function') {
            window.loadGuidedAnswerQuestion(0);
        }
        if (targetId === 'u4aos1-case-deconstruction' && typeof window.populateCaseDeconSelector === 'function') {
            window.populateCaseDeconSelector();
        }
        if (targetId === 'u4aos1-term-match-game' && typeof window.initializeTermMatchGameTMG === 'function') { // Updated this line
            window.initializeTermMatchGameTMG();
        }
        if (targetId === 'u4aos1-key-skills-hub' && typeof window.initializeKeySkillsHub === 'function') {
            window.initializeKeySkillsHub();
        }
        // Added for standalone Case Reconstruction (DoP) tool
        if (targetId === 'u4aos1-case-reconstruction-dop-tool-content' && typeof window.initializeCaseReconstructionTool === 'function') {
            window.initializeCaseReconstructionTool();
        }
        if (targetId === 'u4aos1-exam-skills' && typeof window.initializeKeySkillsHub === 'function') {
            window.initializeKeySkillsHub();
        }
        if (targetId === 'u4aos1-glossary' && typeof window.setupCategorizedGlossary === 'function') {
            // Ensure categorizedGlossaryContainer is available before calling
            if(document.getElementById('categorizedGlossaryContainer')) {
                window.setupCategorizedGlossary();
            } else {
                console.warn("initializeToolIfNeeded: categorizedGlossaryContainer not found for u4aos1-glossary, setupCategorizedGlossary not called.");
            }
        }
    }

    function handleU4AOS1ContentToggle(buttonToActivate) {
        const targetId = buttonToActivate.dataset.target;
        
        u4aos1ContentToggles.forEach(btn => {
            btn.classList.remove('bg-indigo-500', 'text-white', 
                                 'bg-teal-500', 'text-white', 
                                 'bg-orange-500', 'text-white', 
                                 'bg-cyan-500', 'text-white', 'active-skill-hub-toggle', 
                                 'bg-purple-500', 'text-white',
                                 'bg-lime-500', 'text-white', 'active-game-toggle',
                                 'bg-yellow-500', 'text-white');
            if (btn.classList.contains('text-indigo-700')) btn.classList.add('bg-indigo-100');
            else if (btn.classList.contains('text-teal-700')) btn.classList.add('bg-teal-100');
            else if (btn.classList.contains('text-orange-700')) btn.classList.add('bg-orange-100');
            else if (btn.classList.contains('text-cyan-700')) btn.classList.add('bg-cyan-100');
            else if (btn.classList.contains('text-lime-700')) btn.classList.add('bg-lime-100');
            else if (btn.classList.contains('text-purple-700')) btn.classList.add('bg-purple-100');
            else if (btn.classList.contains('text-yellow-700')) btn.classList.add('bg-yellow-100');
        });

        if (buttonToActivate.classList.contains('text-indigo-700')) {
            buttonToActivate.classList.remove('bg-indigo-100');
            buttonToActivate.classList.add('bg-indigo-500', 'text-white');
        } else if (buttonToActivate.classList.contains('text-teal-700')) {
            buttonToActivate.classList.remove('bg-teal-100');
            buttonToActivate.classList.add('bg-teal-500', 'text-white');
        } else if (buttonToActivate.classList.contains('text-orange-700')) {
            buttonToActivate.classList.remove('bg-orange-100');
            buttonToActivate.classList.add('bg-orange-500', 'text-white');
        } else if (buttonToActivate.classList.contains('text-cyan-700')) { 
            buttonToActivate.classList.remove('bg-cyan-100');
            buttonToActivate.classList.add('bg-cyan-500', 'text-white', 'active-skill-hub-toggle');
        } else if (buttonToActivate.classList.contains('text-lime-700')) { 
            buttonToActivate.classList.remove('bg-lime-100');
            buttonToActivate.classList.add('bg-lime-500', 'text-white', 'active-game-toggle');
        } else if (buttonToActivate.classList.contains('text-purple-700')) {
            buttonToActivate.classList.remove('bg-purple-100');
            buttonToActivate.classList.add('bg-purple-500', 'text-white');
        } else if (buttonToActivate.classList.contains('text-yellow-700')) {
            buttonToActivate.classList.remove('bg-yellow-100');
            buttonToActivate.classList.add('bg-yellow-500', 'text-white');
        }
        
        u4aos1AllContent.forEach(contentSection => {
            const isTarget = contentSection.id === targetId;
            contentSection.classList.toggle('hidden', !isTarget);
            
            if (isTarget) {
                const isComplexTool = ['u4aos1-key-skills-hub', 'u4aos1-guided-answers', 
                                     'u4aos1-case-deconstruction', 'u4aos1-term-match-game',
                                     'u4aos1-glossary', 'u4aos1-interactive-diagrams', 
                                     'u4aos1-case-explorer', 'u4aos1-exam-skills', 
                                     'u4aos1-practice-questions',
                                     'u4aos1-case-reconstruction-dop-tool-content' // Matched to the content div ID
                                    ].includes(targetId);

                if (!isComplexTool) {
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
    
    // Combined selector for both types of accordion controls
    const allAccordionControls = document.querySelectorAll('.accordion-toggle, .accordion-header');
    allAccordionControls.forEach(control => {
        // Check if this control is part of the main U4AOS1 navigation or a nested accordion
        const isMainU4AOS1NavToggle = control.classList.contains('u4aos1-content-toggle');
        // Check if this control is part of the Exam Skills Helper primary tabs
        const isExamSkillPrimaryTab = control.classList.contains('primary-exam-skill-tab-button');
        // Check if this control is one of the task word tabs
        const isTaskWordTabButton = control.classList.contains('task-word-tab');
        // Check if this control is part of the exam pitfalls section
        const isPitfallHeader = control.classList.contains('pitfall-header');


        // Only apply accordion expand/collapse logic if it's NOT one of those other specific controls
        if (!isMainU4AOS1NavToggle && !isExamSkillPrimaryTab && !isTaskWordTabButton && !isPitfallHeader) {
            control.addEventListener('click', () => {
                const content = control.nextElementSibling;
                if (!content || !content.classList.contains('accordion-content')) {
                    // If next sibling isn't accordion-content, it might be a pitfall-item structure
                    if (control.classList.contains('pitfall-header')) {
                        // This case should be handled by ksPitfallsInitializeAccordions in keySkillsHub.js
                        // So, we can return or ensure this logic doesn't interfere.
                        // For now, let's assume specific handlers take precedence or this general one is okay if structured similarly.
                        // console.warn("Pitfall header clicked, expecting specific handler or ensuring this is fine:", control);
                        // The pitfall structure is button.pitfall-header then div.pitfall-content.
                        // So, this generic handler might actually work for pitfalls too if not handled elsewhere.
                        // Let's ensure it has .accordion-content or similar class if we want this to handle it.
                        // The current pitfall content is div.pitfall-content, not div.accordion-content.
                        // So, this check is important.
                        if (!content || !content.classList.contains('pitfall-content')) {
                             console.warn("Accordion structure issue for control (not .accordion-content or .pitfall-content):", control);
                             return;
                        }
                    } else {
                        console.warn("Accordion structure issue for control (not .accordion-content):", control);
                        return;
                    }
                }

                const arrow = control.querySelector('.arrow-icon'); // Arrow might only exist on certain accordions
                const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';

                // Standard accordion behavior: close others if this one is part of a "close others" group.
                // For the main U4AOS1 accordion items (KS1, KS2, Glossary, Diagrams etc.)
                // these are direct children of <div class="accordion">
                const parentAccordionItem = control.closest('.accordion-item');
                const parentAccordion = parentAccordionItem ? parentAccordionItem.parentElement : null;

                if (parentAccordion && parentAccordion.classList.contains('accordion')) { // Main U4AOS1 accordion
                    if (!isExpanded) { // If opening a new one
                        // Close siblings
                        const siblings = Array.from(parentAccordion.children).filter(child => child.classList.contains('accordion-item') && child !== parentAccordionItem);
                        siblings.forEach(sibling => {
                            const siblingHeader = sibling.querySelector('.accordion-header'); // or .accordion-toggle
                            const siblingContent = sibling.querySelector('.accordion-content');
                            const siblingArrow = siblingHeader ? siblingHeader.querySelector('.arrow-icon') : null;
                            if (siblingContent && siblingContent.style.maxHeight && siblingContent.style.maxHeight !== '0px') {
                                siblingContent.style.maxHeight = '0px';
                                if (siblingArrow) siblingArrow.style.transform = 'rotate(0deg)';
                            }
                        });
                    }
                }

                // Toggle current accordion item
                if (isExpanded) {
                    content.style.maxHeight = '0px';
                    if (arrow) arrow.style.transform = 'rotate(0deg)';
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    if (arrow) arrow.style.transform = 'rotate(180deg)';
                }
            });
        }
    });

    if (typeof window.loadGuidedAnswerQuestion === 'function' && document.getElementById('guidedAnswerContainer')) {
        window.loadGuidedAnswerQuestion(0);
    }
    if (typeof window.populateCaseDeconSelector === 'function' && document.getElementById('caseDeconSelect')) {
        window.populateCaseDeconSelector();
    }
    if (typeof window.setupTermMatchGame === 'function' && document.getElementById('termMatchGameContainer')) {
        window.setupTermMatchGame();
    }

    window.caseExplorerData = {
        brislan: {
            name: "R v Brislan; Ex parte Williams (1935)",
            details: "<strong>Facts:</strong> Challenge to the validity of the Wireless Telegraphy Act 1905 (Cth), requiring wireless set licences. The High Court interpreted 'other like services' in s51(v) to include broadcasting to a wireless set, thus validating the Commonwealth law.<br><strong>Significance:</strong> Extended Commonwealth power over broadcasting and influenced later decisions on communication technologies."
        },
        tasmanianDams: {
            name: "Commonwealth v Tasmania (Tasmanian Dam case) (1983)",
            details: "<strong>Facts:</strong> Tasmanian government planned to build a dam on the Gordon River, a World Heritage site. The Commonwealth passed legislation prohibiting the dam based on obligations under the World Heritage Convention. The High Court held the external affairs power allows the Commonwealth to legislate to fulfil international treaty obligations, even in areas traditionally considered state powers.<br><strong>Significance:</strong> Shifted law-making power towards the Commonwealth; Tasmanian law was invalid under s109."
        },
        mcbain: {
            name: "McBain v Victoria (2000)",
            details: "<strong>Facts:</strong> Conflict between Victorian law restricting IVF for single women and Commonwealth Sex Discrimination Act 1984 (Cth).<br><strong>Significance:</strong> High Court found the Victorian law inconsistent with the Commonwealth law and invalid to that extent under s109. Demonstrates how s109 resolves inconsistencies."
        },
        actv: {
            name: "Australian Capital Television Pty Ltd v Commonwealth (1992)",
            details: "<strong>Facts:</strong> Challenge to a Commonwealth law prohibiting TV advertising during election campaigns. The High Court interpreted sections 7 and 24 of the Constitution.<br><strong>Significance:</strong> Recognised an implied right to freedom of political communication as fundamental to representative government. Law was declared invalid for infringing this right."
        },
        roach: {
            name: "Roach v Electoral Commissioner (2007)",
            details: "<strong>Facts:</strong> Challenge to a Commonwealth law banning all sentenced prisoners from voting. The High Court interpreted sections 7 and 24 of the Constitution.<br><strong>Significance:</strong> Affirmed that the right to vote is a structural protection for representative government. A complete ban was unconstitutional; removal of the right to vote must be for significant reasons."
        },
        mabo: {
            name: "Mabo v Queensland (No. 2) (1992)",
            details: "<strong>Facts:</strong> Overturned terra nullius, recognising native title for Indigenous Australians maintaining a connection to traditional land.<br><strong>Significance:</strong> Established a new common law principle, later codified in the Native Title Act 1993 (Cth). Example of judicial activism."
        },
        coleWhitfield: {
            name: "Cole v Whitfield (1988)",
            details: "<strong>Facts:</strong> Interpreted s92 of the Constitution regarding interstate trade. Examined a Tasmanian law on crayfish size.<br><strong>Significance:</strong> s92 prevents discriminatory/protectionist laws against interstate trade, but allows non-discriminatory burdens. Tasmanian law was for conservation, not discrimination."
        },
        goryl: {
            name: "Goryl v Greyhound Australia Pty Ltd (1994)",
            details: "<strong>Facts:</strong> Interpreted s117 of the Constitution, which prevents discrimination based on state of residence. Queensland law limited damages for non-residents.<br><strong>Significance:</strong> Law was invalid under s117, affirming a wide interpretation of this right."
        },
        brown: {
            name: "Brown v R (1986)",
            details: "<strong>Facts:</strong> Interpreted s80 of the Constitution, guaranteeing trial by jury for Commonwealth indictable offences.<br><strong>Significance:</strong> Right to jury trial is mandatory for Commonwealth indictable offences and cannot be waived."
        },
        aon: {
            name: "AON Risk Services Aust Ltd v ANU (2009)",
            details: "<strong>Facts:</strong> Concerned whether a party could make significant amendments to their case late in the process.<br><strong>Significance:</strong> High Court overruled its previous decision in Queensland v JL Holdings Pty Ltd (1997), agreeing that allowing substantial amendments could disadvantage the other party."
        },
        carr: {
            name: "Carr v State of Western Australia (2007)",
            details: "<strong>Facts:</strong> Interpreted 'interview' in WA legislation regarding videotaping admissions. Court gave a broad interpretation, making a cell conversation admissible evidence.<br><strong>Significance:</strong> Broadened the application of the statute."
        },
        palmer: {
            name: "Palmer v State of Western Australia (2021)",
            details: "<strong>Facts:</strong> Challenge to WA's COVID-19 border closures, partly referencing s92 (interstate trade).<br><strong>Significance:</strong> High Court rejected the challenge, clarifying s92 does not apply to necessary, non-discriminatory public health measures."
        },
        kevinJennifer: {
            name: "Attorney-General (Cth) v Kevin and Jennifer (2003)",
            details: "<strong>Facts:</strong> Interpretation of 'man' in the Marriage Act 1961 (Cth) for a transgender man. Court held the word should be given a contemporary meaning, validating the marriage.<br><strong>Significance:</strong> Statutory interpretation and recognition of gender diversity."
        },
        trigwell: {
            name: "State Insurance Commission v Trigwell (1979)",
            details: "<strong>Facts:</strong> Applied an older common law precedent regarding landowner liability for animals straying onto highways.<br><strong>Significance:</strong> In obiter dictum, the Court expressed disapproval of the precedent and suggested law-making should be left to parliament. Demonstrates how courts can signal a need for legislative change."
        },
        communistParty: {
            name: "Australian Communist Party v Commonwealth (1951)",
            details: "<strong>Facts:</strong> Challenge to a Commonwealth law dissolving the Communist Party.<br><strong>Significance:</strong> High Court declared the law invalid, highlighting the judiciary's role in checking parliamentary power as part of the separation of powers."
        },
        koowarta: {
            name: "Koowarta v Bjelke-Petersen (1982)",
            details: "<strong>Facts:</strong> Concerned the external affairs power (s51(xxix)), with the Chief Justice expressing concern about unlimited legislative power if the Commonwealth could legislate to give effect to every international agreement.<br><strong>Significance:</strong> Also mentioned in relation to s109."
        },
        jones: {
            name: "Jones v The Commonwealth (No 2) (1965)",
            details: "<strong>Facts:</strong> Influenced by Brislan, the High Court decided that television broadcasts also fit within s51(v).<br><strong>Significance:</strong> Reinforced the broad interpretation of Commonwealth power over communication technologies."
        },
        croome: {
            name: "Croome v. Tasmania (1997)",
            details: "<strong>Facts:</strong> Challenge to Tasmanian laws criminalising homosexual acts, arguing inconsistency with Commonwealth human rights legislation based on an international covenant.<br><strong>Significance:</strong> High Court applied s109 to invalidate the Tasmanian law, making a residual power concurrent and increasing Commonwealth power."
        },
        lange: {
            name: "Lange v Australian Broadcasting Corporation (1997)",
            details: "<strong>Facts:</strong> Further developed the implied right to freedom of political communication from sections 7 and 24.<br><strong>Significance:</strong> High Court established a test to determine if a law infringes this implied freedom."
        },
        icm: {
            name: "ICM Agriculture Pty Ltd v Commonwealth (2009)",
            details: "<strong>Facts:</strong> Interpreted 'acquisition of property on just terms' under s51(xxxi).<br><strong>Significance:</strong> Clarified the scope of 'acquisition', distinguishing it from 'deprivation' of property rights."
        },
        mccloy: {
            name: "McCloy v NSW (2015)",
            details: "<strong>Facts:</strong> Expanded the test developed in Lange for determining whether a law infringes the implied freedom of political communication.<br><strong>Significance:</strong> Further clarified the application of the implied freedom."
        }
    };
    
    const caseSelectExplorer = document.getElementById('caseSelectExplorer');
    const caseDetailsExplorerDiv = document.getElementById('caseDetailsExplorer');
    if (caseSelectExplorer && window.caseExplorerData) {
        while (caseSelectExplorer.options.length > 1) {
            caseSelectExplorer.remove(1);
        }
        Object.entries(window.caseExplorerData).forEach(([key, caseObj]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = caseObj.name;
            caseSelectExplorer.appendChild(option);
        });
    }

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

// --- AI Case Insight Button Logic ---
const getAICaseInsightBtn = document.getElementById('getAICaseInsightBtn');
const aiCaseInsightLoading = document.getElementById('aiCaseInsightLoading');
const aiCaseInsightResult = document.getElementById('aiCaseInsightResult');
const aiCaseInsightError = document.getElementById('aiCaseInsightError');
// caseSelectExplorer and window.caseExplorerData are already defined in this script

if (getAICaseInsightBtn && caseSelectExplorer && aiCaseInsightLoading && aiCaseInsightResult && aiCaseInsightError) {
    getAICaseInsightBtn.addEventListener('click', async () => {
        const selectedCaseKey = caseSelectExplorer.value;
        if (!selectedCaseKey) {
            aiCaseInsightError.textContent = "Please select a case first.";
            aiCaseInsightError.style.display = 'block';
            aiCaseInsightResult.style.display = 'none';
            return;
        }

        const caseData = window.caseExplorerData[selectedCaseKey];
        if (!caseData) {
            aiCaseInsightError.textContent = "Could not find data for the selected case.";
            aiCaseInsightError.style.display = 'block';
            aiCaseInsightResult.style.display = 'none';
            return;
        }

        aiCaseInsightLoading.style.display = 'block';
        aiCaseInsightResult.style.display = 'none';
        aiCaseInsightError.style.display = 'none';
        getAICaseInsightBtn.disabled = true;
        getAICaseInsightBtn.classList.add('opacity-50'); // Visual cue for disabled

        try {
            // Strip HTML tags from details for a cleaner prompt
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = caseData.details;
            const strippedDetails = tempDiv.textContent || tempDiv.innerText || "";

            const prompt = `Provide a concise (2-3 sentences) VCE Legal Studies insight for the case "${caseData.name}". Focus on its core principle or significance. Case details: ${strippedDetails}`;

            // Assuming callGeminiAPI is globally available from keySkillsHub.js
            const insight = await callGeminiAPI(prompt);

            aiCaseInsightResult.innerHTML = insight.replace(/\n/g, '<br>');
            aiCaseInsightResult.style.display = 'block';
        } catch (error) {
            console.error("Error fetching AI Case Insight:", error);
            aiCaseInsightError.textContent = `Sorry, an error occurred while generating insights: ${error.message}`;
            aiCaseInsightError.style.display = 'block';
        } finally {
            aiCaseInsightLoading.style.display = 'none';
            getAICaseInsightBtn.disabled = false;
            getAICaseInsightBtn.classList.remove('opacity-50');
        }
    });
} else {
    console.warn("One or more AI Case Insight elements are missing from the DOM. AI Insight feature may not work.");
    if (!getAICaseInsightBtn) console.warn("Missing: getAICaseInsightBtn");
    // caseSelectExplorer is checked for existence when its event listener is added, so it should be fine here if that passed.
    if (!aiCaseInsightLoading) console.warn("Missing: aiCaseInsightLoading");
    if (!aiCaseInsightResult) console.warn("Missing: aiCaseInsightResult");
    if (!aiCaseInsightError) console.warn("Missing: aiCaseInsightError");
}

    // --- Categorized Glossary Logic ---
    const glossarySearchInput = document.getElementById('glossarySearch');
    const categorizedGlossaryContainer = document.getElementById('categorizedGlossaryContainer');
    const overallNoResultsMessage = document.getElementById('glossaryNoResults');

    if (glossarySearchInput && categorizedGlossaryContainer && overallNoResultsMessage) {
        glossarySearchInput.addEventListener('keyup', function() {
            const filter = glossarySearchInput.value.toLowerCase();
            let totalVisibleItems = 0;

            const categories = categorizedGlossaryContainer.querySelectorAll('.glossary-category');
            categories.forEach(category => {
                const items = category.querySelectorAll('.glossary-item');
                let categoryVisibleItems = 0;
                items.forEach(item => {
                    const termElement = item.querySelector('.glossary-term');
                    if (termElement) {
                        const termText = termElement.textContent.toLowerCase();
                        if (termText.includes(filter)) {
                            item.style.display = "";
                            categoryVisibleItems++;
                            totalVisibleItems++;
                        } else {
                            item.style.display = "none";
                        }
                    }
                });

                const noTermsMessage = category.querySelector('.no-terms-message');
                if (noTermsMessage) {
                    if (categoryVisibleItems === 0 && items.length > 0) {
                        noTermsMessage.classList.remove('hidden');
                    } else {
                        noTermsMessage.classList.add('hidden');
                    }
                }
            });

            if (totalVisibleItems === 0) {
                overallNoResultsMessage.classList.remove('hidden');
            } else {
                overallNoResultsMessage.classList.add('hidden');
            }
        });
    }
    // Note: The setup for glossary items (populating them and adding click listeners for definitions)
    // is handled in keySkillsHub.js by setupCategorizedGlossary().
    // The "Explain Further" AI buttons are also added there by addAIGlossaryExplainers().

    // Exam Skills Helper Tabs
    const primaryExamSkillTabs = document.querySelectorAll('.primary-exam-skill-tab-button');
    const primaryExamSkillContents = document.querySelectorAll('.primary-exam-skill-content');
    const taskWordTabs = document.querySelectorAll('.task-word-tab');
    const taskWordContents = document.querySelectorAll('.task-word-content');

    function activateTaskWordTab(tabToActivate) {
        if (!tabToActivate) return;
        const targetId = tabToActivate.dataset.target;
        taskWordTabs.forEach(t => {
            t.classList.remove('active-task-word-tab', 'border-purple-500', 'font-semibold', 'text-purple-800', 'bg-purple-100');
            t.classList.add('border-transparent', 'text-purple-600');
        });
        tabToActivate.classList.add('active-task-word-tab', 'border-purple-500', 'font-semibold', 'text-purple-800', 'bg-purple-100');
        tabToActivate.classList.remove('border-transparent', 'text-purple-600');

        taskWordContents.forEach(content => {
            content.classList.toggle('hidden', content.id !== targetId);
        });
    }

    taskWordTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            activateTaskWordTab(tab);
        });
    });

    primaryExamSkillTabs.forEach(primaryTab => {
        primaryTab.addEventListener('click', () => {
            const primaryTargetId = primaryTab.dataset.target || primaryTab.dataset.primaryTarget;

            primaryExamSkillTabs.forEach(pt => {
                pt.classList.remove('active-primary-exam-skill-tab', 'text-purple-700', 'font-semibold');
                pt.classList.add('text-gray-500', 'hover:text-purple-700');
            });
            primaryTab.classList.add('active-primary-exam-skill-tab', 'text-purple-700', 'font-semibold');
            primaryTab.classList.remove('text-gray-500', 'hover:text-purple-700');

            primaryExamSkillContents.forEach(pc => {
                pc.classList.toggle('hidden', pc.id !== primaryTargetId);
            });

            if (primaryTargetId === 'task-word-deep-dive-content') {
                const firstTaskWordTab = document.querySelector('#taskWordTabs .task-word-tab');
                if (firstTaskWordTab) {
                    activateTaskWordTab(firstTaskWordTab);
                }
                 if (typeof initializeAICoachButtons === 'function') {
                    initializeAICoachButtons(); // Re-initialize AI coach buttons for task words
                }
            }
            if (primaryTargetId === 'esh-answer-templates') {
                const answerTemplatesContent = document.getElementById('esh-answer-templates');
                if (answerTemplatesContent) {
                    answerTemplatesContent.classList.remove('hidden');
                }
                if (typeof ksTemplatesInitialize === 'function') { // from keySkillsHub.js
                    ksTemplatesInitialize();
                }
            }
            if (primaryTargetId === 'esh-bridging-skills') {
                 if (typeof ksBridgeInitialize === 'function') { // from keySkillsHub.js
                    ksBridgeInitialize();
                }
            }
            if (primaryTargetId === 'esh-exam-pitfalls') {
                 if (typeof ksPitfallsInitializeAccordions === 'function') { // from keySkillsHub.js
                    ksPitfallsInitializeAccordions();
                }
            }
        });
    });

    const examSkillsHelperContent = document.getElementById('u4aos1-exam-skills');
    if (examSkillsHelperContent) {
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isHidden = examSkillsHelperContent.classList.contains('hidden');
                    if (!isHidden) {
                        let activePrimaryTab = document.querySelector('.primary-exam-skill-tab-button.active-primary-exam-skill-tab');
                        if (!activePrimaryTab) {
                             activePrimaryTab = document.querySelector('.primary-exam-skill-tab-button');
                             if (activePrimaryTab) activePrimaryTab.click();
                        } else {
                             const primaryTargetId = activePrimaryTab.dataset.target || activePrimaryTab.dataset.primaryTarget;
                             const contentToShow = document.getElementById(primaryTargetId);
                             if (contentToShow) {
                                primaryExamSkillContents.forEach(pc => pc.classList.add('hidden'));
                                contentToShow.classList.remove('hidden');
                                if (primaryTargetId === 'task-word-deep-dive-content') {
                                    const firstTaskWordTab = document.querySelector('#taskWordTabs .task-word-tab');
                                    const activeTaskWordTab = document.querySelector('#taskWordTabs .task-word-tab.active-task-word-tab');
                                    if (!activeTaskWordTab && firstTaskWordTab) {
                                       activateTaskWordTab(firstTaskWordTab);
                                    }
                                     if (typeof initializeAICoachButtons === 'function') {
                                        initializeAICoachButtons();
                                    }
                                }
                                if (primaryTargetId === 'esh-answer-templates' && typeof ksTemplatesInitialize === 'function') {
                                    ksTemplatesInitialize();
                                }
                                if (primaryTargetId === 'esh-bridging-skills' && typeof ksBridgeInitialize === 'function') {
                                    ksBridgeInitialize();
                                }
                                 if (primaryTargetId === 'esh-exam-pitfalls' && typeof ksPitfallsInitializeAccordions === 'function') {
                                    ksPitfallsInitializeAccordions();
                                }
                             }
                        }
                    }
                }
            }
        });
        observer.observe(examSkillsHelperContent, { attributes: true });
    }

    // Corrected selector for "Toggle Answer Points" buttons
    const answerPointsToggleButtons = document.querySelectorAll('.toggle-answer-points');
    answerPointsToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const practiceQuestionDiv = button.closest('.practice-question');
            if (practiceQuestionDiv) {
                // Corrected selector for the answer points div
                const answerDiv = practiceQuestionDiv.querySelector('.answer-points');
                if (answerDiv) {
                    answerDiv.classList.toggle('hidden');
                    button.textContent = answerDiv.classList.contains('hidden') ? 'Show Answer Points' : 'Hide Answer Points';
                }
            }
        });
    });

    const workedExampleToggleButtons = document.querySelectorAll('.toggle-worked-example');
    workedExampleToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const practiceQuestionDiv = button.closest('.practice-question');
            if (practiceQuestionDiv) {
                const workedExampleDiv = practiceQuestionDiv.querySelector('.practice-question-worked-example');
                if (workedExampleDiv) {
                    workedExampleDiv.classList.toggle('hidden');
                    button.textContent = workedExampleDiv.classList.contains('hidden') ? 'Show Worked Example ✨' : 'Hide Worked Example';
                } else {
                    console.warn('Worked example content div not found for button:', button);
                }
            } else {
                console.warn('Parent .practice-question div not found for button:', button);
            }
        });
    });

    if (mainNavButtons.length > 0) { 
        mainNavButtons[0].click(); 
    }

// --- Interactive Conceptual Diagrams ---
const interactiveDiagramNodes = document.querySelectorAll('.interactive-diagram-node');
const diagramPopup = document.getElementById('diagram-popup');

if (diagramPopup) { // Ensure the popup element exists
    interactiveDiagramNodes.forEach(node => {
        node.addEventListener('mouseover', function(event) {
            const info = this.dataset.info;
            diagramPopup.innerHTML = info;
            diagramPopup.style.display = 'block';
            // Position the popup near the mouse cursor
            // Adjust offsetX and offsetY to position the popup relative to the cursor
            let offsetX = 20;
            let offsetY = 10;
            let popupLeft = event.pageX + offsetX;
            let popupTop = event.pageY + offsetY;

            // Ensure popup doesn't go off-screen
            const PADDING = 10; // padding from viewport edges
            if (popupLeft + diagramPopup.offsetWidth + PADDING > window.innerWidth + window.scrollX) {
                popupLeft = window.innerWidth + window.scrollX - diagramPopup.offsetWidth - PADDING;
            }
            if (popupTop + diagramPopup.offsetHeight + PADDING > window.innerHeight + window.scrollY) {
                popupTop = event.pageY - diagramPopup.offsetHeight - offsetY; // Position above cursor if it overflows below
            }
             if (popupLeft < window.scrollX + PADDING) {
                popupLeft = window.scrollX + PADDING;
            }
            if (popupTop < window.scrollY + PADDING) {
                popupTop = window.scrollY + PADDING;
            }


            diagramPopup.style.left = popupLeft + 'px';
            diagramPopup.style.top = popupTop + 'px';
        });

        node.addEventListener('mouseout', function() {
            diagramPopup.style.display = 'none';
            diagramPopup.innerHTML = ''; // Clear content
        });

        // Optional: Add click event to keep popup open until next click, for touch devices
        node.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from immediately closing via a potential body click listener
            const info = this.dataset.info;
            diagramPopup.innerHTML = info;
            diagramPopup.style.display = 'block';
            let offsetX = 20;
            let offsetY = 10;
            let popupLeft = event.pageX + offsetX;
            let popupTop = event.pageY + offsetY;

            const PADDING = 10;
            if (popupLeft + diagramPopup.offsetWidth + PADDING > window.innerWidth + window.scrollX) {
                popupLeft = window.innerWidth + window.scrollX - diagramPopup.offsetWidth - PADDING;
            }
            if (popupTop + diagramPopup.offsetHeight + PADDING > window.innerHeight + window.scrollY) {
                popupTop = event.pageY - diagramPopup.offsetHeight - offsetY;
            }
            if (popupLeft < window.scrollX + PADDING) {
                popupLeft = window.scrollX + PADDING;
            }
            if (popupTop < window.scrollY + PADDING) {
                popupTop = window.scrollY + PADDING;
            }

            diagramPopup.style.left = popupLeft + 'px';
            diagramPopup.style.top = popupTop + 'px';
        });
    });

    // Close popup if clicked outside of a node (for click functionality)
    document.addEventListener('click', function(event) {
        if (diagramPopup.style.display === 'block') {
            let targetElement = event.target; // Clicked element
            do {
                if (targetElement.classList && targetElement.classList.contains('interactive-diagram-node')) {
                    // Click was on a node or inside it, do nothing
                    return;
                }
                // Move up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);
            // Click was outside a node
            diagramPopup.style.display = 'none';
            diagramPopup.innerHTML = '';
        }
    });
} else {
    console.warn("Diagram popup element ('diagram-popup') not found. Interactive diagram functionality will not work.");
}

});
