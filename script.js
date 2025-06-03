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
                                 'bg-lime-500', 'text-white', 'active-game-toggle',
                                 'bg-yellow-500', 'text-white'); // Added yellow for Case Reconstruction (DoP)
            // Apply default styling back
            if (btn.classList.contains('text-indigo-700')) btn.classList.add('bg-indigo-100');
            else if (btn.classList.contains('text-teal-700')) btn.classList.add('bg-teal-100');
            else if (btn.classList.contains('text-orange-700')) btn.classList.add('bg-orange-100');
            else if (btn.classList.contains('text-cyan-700')) btn.classList.add('bg-cyan-100');
            else if (btn.classList.contains('text-lime-700')) btn.classList.add('bg-lime-100');
            else if (btn.classList.contains('text-purple-700')) btn.classList.add('bg-purple-100');
            else if (btn.classList.contains('text-yellow-700')) btn.classList.add('bg-yellow-100');


        });

        // Apply active style to the clicked button based on its category
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
        } else if (buttonToActivate.classList.contains('text-yellow-700')) { // Added for Case Reconstruction (DoP)
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
                                     'u4aos1-case-reconstruction-dop-tool' // Added Case Reconstruction (DoP)
                                    ].includes(targetId);

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
    
    // Accordion Logic (REVISED)
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            // Ensure we are dealing with a valid accordion structure
            if (!content || !content.classList.contains('accordion-content')) {
                console.warn("Accordion structure issue for toggle:", toggle);
                return;
            }

            const arrow = toggle.querySelector('.arrow-icon');
            const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';

            // Check if this accordion is one of the main U4AOS1 content blocks
            const parentU4AOS1ContentBlock = toggle.closest('.u4aos1-content');
            const mainAccordionContainer = document.getElementById('u4aos1-accordion-container'); // Corrected ID
            
            // isMainU4AOS1Accordion: true if the toggle's parent '.u4aos1-content' is a direct child of '#u4aos1-accordion-container'
            const isMainU4AOS1Accordion = parentU4AOS1ContentBlock && parentU4AOS1ContentBlock.parentElement === mainAccordionContainer;

            if (!isExpanded && isMainU4AOS1Accordion) {
                // If this is a main U4AOS1 accordion and it's being opened, close all OTHER main U4AOS1 accordions
                mainAccordionContainer.querySelectorAll(':scope > .u4aos1-content > .border > .accordion-toggle').forEach(otherToggle => {
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
            
            // Toggle the current accordion
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
            name: "Koowarta v. Bjelke-Petersen (1982)",
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
    
    // Dynamically populate Case Explorer dropdown
    const caseSelectExplorer = document.getElementById('caseSelectExplorer');
    const caseDetailsExplorerDiv = document.getElementById('caseDetailsExplorer');
    if (caseSelectExplorer && window.caseExplorerData) {
        // Remove all existing options except the first (placeholder)
        while (caseSelectExplorer.options.length > 1) {
            caseSelectExplorer.remove(1);
        }
        // Add an <option> for each case
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

    // --- Categorized Glossary Data ---
const categorizedGlossaryData = {
    "The Australian Constitution": [
        { term: "Acquisition of Property on Just Terms", definition: "An express right under section 51(xxxi) of the Australian Constitution, giving the Commonwealth Parliament power to acquire property on just terms. The Commonwealth must provide 'just terms', like fair compensation. Limitations include no specific definition of 'just terms' and it not applying to states." },
        { term: "Australian Constitution", definition: "A set of rules for the nature, functions, powers, duties, and limits of government in Australia. It establishes the Commonwealth Parliament and High Court, outlines state matters, defines Commonwealth law-making powers, and provides a referendum mechanism for change. It also establishes state and Commonwealth parliamentary law-making powers and protects Australians through structures checking parliament." },
        { term: "Constitution", definition: "A set of rules and principles establishing the nature, functions, powers, duties, and limits of government. Australia has a formal written constitution." },
        { term: "Constitutional Monarchy", definition: "A system where the Crown is Head of State, but elected representatives create laws." },
        { term: "Constitutional Reform", definition: "The process of changing the Australian Constitution, requiring a referendum." },
        { term: "Division of Powers", definition: "The constitutional allocation of law-making powers between Commonwealth and state parliaments, divided into exclusive, concurrent, and residual powers to avoid power abuses and share responsibility." },
        { term: "Concurrent Powers", definition: "Law-making powers shared by Commonwealth and state parliaments, listed in section 51 of the Constitution (e.g., taxation, marriage, divorce)." },
        { term: "Exclusive Powers", definition: "Law-making powers granted only to the Commonwealth Parliament by sections 51 and 52 of the Constitution. States cannot legislate in these areas (e.g., currency, defence, customs)." },
        { term: "Residual Powers", definition: "Law-making powers left solely with state parliaments at federation, not explicitly listed in the Constitution (e.g., criminal law, medical procedures, education)." },
        { term: "Double Majority", definition: "A requirement for a successful referendum, needing a majority of voters nationwide and a majority of voters in a majority of states (at least four)." },
        { term: "Express Protection of Rights", definition: "Rights explicitly stated and entrenched in the Australian Constitution, changeable only by referendum. The five express rights are: acquisition of property on just terms, trial by jury for Commonwealth indictable offences, interstate trade and commerce, freedom of religion, and no discrimination based on state residence." },
        { term: "External Affairs Power", definition: "Commonwealth Parliament's law-making power under section 51(xxix) of the Constitution, interpreted by the High Court to allow legislation on areas covered by international treaties." },
        { term: "Freedom of Religion", definition: "An express right under section 116 of the Australian Constitution, stating the Commonwealth shall not make laws establishing religion, imposing observance, or prohibiting free exercise. It primarily limits the Commonwealth, not states." },
        { term: "High Court of Australia (HCA)", definition: "Established by the Constitution, with jurisdiction under sections 75 and 76 to hear matters arising under or interpreting the Constitution. It acts as guardian of the Constitution, interprets it, settles disputes, and can declare laws ultra vires." },
        { term: "Implied Right", definition: "A right not explicitly in the Constitution but interpreted by the High Court to exist, like the implied right to freedom of political communication from sections 7 and 24." },
        { term: "Interstate Trade and Commerce", definition: "An express right under section 92 of the Constitution, stating 'trade, commerce, and intercourse among the States... shall be absolutely free'. Not absolute; laws can restrict movement if non-discriminatory." },
        { term: "Referendum", definition: "A compulsory national vote on a proposed change to the Australian Constitution's wording, as per section 128. Requires a double majority." },
        { term: "Section 109", definition: "A section of the Constitution resolving inconsistencies between state and Commonwealth laws in concurrent areas. If inconsistent, Commonwealth law prevails, and state law is invalid to the extent of the inconsistency. Can restrict state parliaments." },
        { term: "Sections 7 and 24", definition: "Sections of the Constitution establishing Senate and House of Representatives composition, stipulating members be 'directly chosen by the people' via regular elections. They enforce representative government." },
        { term: "Significance of High Court Cases", definition: "The impact of a High Court constitutional interpretation on state and Commonwealth law-making powers, e.g., Brislan (telecommunications) and Tasmanian Dams (external affairs) cases." },
        { term: "Significance of Referendums", definition: "The impact a referendum has on changing the Constitution, e.g., the 1967 referendum altering law-making powers regarding Indigenous Australians." },
        { term: "Trial by Jury (Commonwealth Indictable Offences)", definition: "An express right under section 80 of the Constitution, requiring jury trial for Commonwealth indictable offences. Limited to Commonwealth indictable offences, not state or summary ones." }
    ],
    "Parliament and Statute Law": [
        { term: "Abrogation of Common Law", definition: "Parliament overruling common law by creating a contrary statute. Parliament can override most common law, except High Court constitutional decisions." },
        { term: "Act of Parliament (Legislation/Statute Law)", definition: "A law made by parliament. A bill becomes an Act after agreement by both houses and royal assent." },
        { term: "Bicameral Parliament/Structure", definition: "A law-making body with two houses that must approve new bills or amendments. Required by Victorian and Commonwealth constitutions. A second house can prevent purely partisan legislation." },
        { term: "Bill", definition: "A proposed law introduced in parliament. Becomes law after agreement by both houses and royal assent." },
        { term: "Codification of Common Law", definition: "Parliament making laws to affirm common law decisions, possible due to its supreme law-making power." },
        { term: "Commonwealth Parliament", definition: "The federal bicameral parliament: King (via Governor-General), Senate (upper house), House of Representatives (lower house)." },
        { term: "Debate (Parliament)", definition: "Bills are debated during the second reading stage." },
        { term: "Delegated Legislation (Secondary Legislation)", definition: "Rules made by secondary authorities (councils, departments, statutory authorities) empowered by an enabling Act." },
        { term: "Factors Affecting Parliament's Ability to Make Law", definition: "Includes bicameral structure, international pressures, and representative nature." },
        { term: "Governor (Victorian)", definition: "The Crown's representative in Victorian Parliament, primary role is granting royal assent." },
        { term: "Governor-General (Commonwealth)", definition: "The Crown's representative in Commonwealth Parliament, primary role is granting royal assent." },
        { term: "Hostile Upper House", definition: "When government lacks a majority in the upper house, and balance of power is held by opposition, minor parties, and independents. Increases bill scrutiny but can slow law-making." },
        { term: "House of Representatives (Commonwealth Lower House)", definition: "Lower house with 151 members representing electorates. Majority party/coalition forms government. Roles: initiating most bills (especially money bills), determining government, representing people, scrutinising administration." },
        { term: "Initiating Legislation", definition: "Introducing a bill into parliament. Most in lower house; money bills only in lower house." },
        { term: "Legislative Assembly (Victorian Lower House)", definition: "Lower house with 88 members from electoral districts. Majority party forms government, led by premier. Roles: initiating most legislation (especially financial), representing people, reviewing Legislative Council legislation, scrutinising administration." },
        { term: "Legislative Council (Victorian Upper House)", definition: "Upper house with 40 members from eight regions, often called 'house of review'. Roles: house of review, scrutinising administration, initiating non-money bills." },
        { term: "Legislative Power", definition: "Power vested in parliament to make laws. At Commonwealth level, vested in Commonwealth Parliament." },
        { term: "Money Bills", definition: "Bills on government expenditure or taxation. Commonwealth: must initiate in House of Reps. Victoria: Legislative Council cannot introduce bills for spending government funds." },
        { term: "Parliament", definition: "Formal assembly of elected representatives making laws. Supreme law-making body within its jurisdiction." },
        { term: "Parliamentary Counsel", definition: "Lawyers drafting legislation on MPs' instructions, aiming for broad coverage but specific enough to avoid ambiguity." },
        { term: "Representative Government", definition: "System where people choose elected representatives to parliament to make laws on their behalf. Established by sections 7 and 24 of the Constitution." },
        { term: "Representative Nature of Parliament", definition: "Parliament's duty to represent voters' interests through law-making, based on the election system. Affected by nominee diversity and parliamentary diversity." },
        { term: "Responsible Government", definition: "Principle where the party/coalition with a lower house majority forms government, and the executive council is responsible to parliament." },
        { term: "Royal Assent", definition: "Formal final approval by monarchy/representative for a bill. Necessary final step for a bill to become law." },
        { term: "Rubber Stamp (Upper House)", definition: "Government holds majority in both houses, so bills may not be scrutinised properly. Lower house bills unlikely to be contested by upper house." },
        { term: "Scrutinising Government/Legislation", definition: "Close examination of bills or government administration. Commonwealth: Senate's primary role for House of Reps bills. Victoria: Legislative Council's primary role as house of review." },
        { term: "Secondary Legislation", definition: "See Delegated Legislation." },
        { term: "Senate (Commonwealth Upper House)", definition: "Upper house with 76 members (12/state, 2/territory). Often 'states' house' or house of review. Roles: house of review, equal state representation, scrutinising bills, initiating non-money bills." },
        { term: "Statute Law", definition: "See Act of Parliament." },
        { term: "Supremacy of Parliament", definition: "Parliament can make, amend, or abolish laws (subject to constitution) and is supreme over other government arms. Can confirm/cancel common law (except High Court constitutional decisions)." },
        { term: "Victorian Parliament", definition: "King (via Governor), Legislative Council (upper), Legislative Assembly (lower)." },
        { term: "Voting 'Along Party Lines'", definition: "Party members vote identically, especially with a majority, even if not representing constituents' views." }
    ],
    "Courts and Common Law": [
        { term: "Binding Precedent", definition: "Legal reasoning of a higher court that lower courts in the same hierarchy must follow with similar material facts. Judges must follow if binding, regardless of agreement." },
        { term: "Broadening and Narrowing Statutes", definition: "Effects of statutory interpretation; courts can expand (broaden) or restrict (narrow) legislation's scope." },
        { term: "Costs and Time (Courts)", definition: "Factors affecting courts' law-making ability. Pursuing claims can be time-consuming (backlogs, preparation). Costs include legal representation, court, and jury fees. High costs can deter plaintiffs." },
        { term: "Disapproving a Precedent", definition: "Lower court expresses disapproval of a higher court's precedent in its judgment but must still follow it. Does not change the precedent." },
        { term: "Distinguishing a Precedent", definition: "Court avoids a binding precedent by finding significant differences in material facts between the current case and the precedent case." },
        { term: "Doctrine of Precedent", definition: "Judges must follow reasons (ratio decidendi) of superior courts in the same hierarchy for cases with similar material facts. Based on 'stare decisis'." },
        { term: "Factors Affecting Courts' Ability to Make Law", definition: "Includes doctrine of precedent, judicial conservatism/activism, costs/time, and standing requirement." },
        { term: "Judicial Activism", definition: "Judges willing to consider social/political factors and own opinions when interpreting law and making decisions. Critics argue unelected judges shouldn't make substantial changes." },
        { term: "Judicial Conservatism", definition: "Judges adopt narrow legal interpretation, avoiding major/controversial changes, uninfluenced by political beliefs/community views. Tend to interpret legislation narrowly." },
        { term: "Judicial Power", definition: "Power vested in courts/tribunals to enforce laws and resolve legal matters. Commonwealth: vested mainly in High Court. Judiciary must be independent." },
        { term: "Juries", definition: "Role in criminal and civil trials. Criminal: determines guilt." },
        { term: "Just Terms", definition: "Fair and reasonable compensation by Commonwealth Parliament when acquiring property under s51(xxxi)." },
        { term: "Locus Standi (Standing)", definition: "Requirement to bring a case; individual/group must be affected by or have special interest in the issues." },
        { term: "Special Interest", definition: "Party must be affected more than the general public to have standing." },
        { term: "Material Facts", definition: "Key facts/details in a legal case critical to the decision." },
        { term: "Obiter Dictum", definition: "'Said by the way'; judge's comments not contributing to ratio decidendi but can be persuasive precedent. Disapproving a precedent is obiter dictum." },
        { term: "Overruling a Precedent", definition: "Superior court in a later, different case changes a precedent set by a lower court or one of same standing." },
        { term: "Persuasive Precedent", definition: "Legal reasoning guiding judges though not binding. E.g., obiter dictum, decisions from lower courts/different hierarchies." },
        { term: "Promoting Legislative Change", definition: "Effect of statutory interpretation; parliament may amend legislation for clarity or to confirm a court decision." },
        { term: "Quantum Translocator", definition: "Hypothetical device used in an example for statutory interpretation." },
        { term: "Ratio Decidendi", definition: "'The reason for the decision'; legal reason for the decision, binding part followed by lower courts." },
        { term: "Reasons for Statutory Interpretation", definition: "Include clarifying word meanings, changing word nature, applying legislation to unforeseen circumstances." },
        { term: "Reversing a Precedent", definition: "On appeal, superior court changes precedent set by a lower court in the same case. New precedent established by superior court. Differs from overruling (different case)." },
        { term: "Stare Decisis", definition: "'To stand by what has been decided'; basic principle underlying doctrine of precedent." },
        { term: "Statutory Interpretation", definition: "Courts giving meaning to words in legislation when applying it to a case. Judges interpret to resolve cases, clarify ambiguities, reflect changing meanings, apply to unforeseen circumstances. Establishes precedent." },
        { term: "Ultra Vires", definition: "'Beyond the powers'; act by a government body/corporation requiring legal authority but done without it. Courts may declare laws ultra vires if beyond parliament's powers." }
    ],
    "Key Legal Principles and Rights (Overarching)": [
        { term: "Access", definition: "All people should be able to engage with the justice system and its processes on an informed basis." },
        { term: "Equality", definition: "All people engaging with the justice system and its processes should be treated the same way; if same treatment creates disparity, adequate measures should be implemented." },
        { term: "Fairness", definition: "All people can participate in the justice system, and its processes should be impartial and open." },
        { term: "Principles of Justice", definition: "For VCE Legal Studies: fairness, equality, and access." },
        { term: "Presumption of Innocence", definition: "Accused is presumed innocent until proven guilty beyond reasonable doubt." }
    ],
    "Government, Politics, and Law Reform": [
        { term: "Balance of Power", definition: "Support of minor parties/independents enabling government to form a majority and enact laws. Occurs with a hostile upper house." },
        { term: "Cabinet", definition: "Central decision-making body: PM (federal)/Premier (state) + senior ministers, developing policy and addressing concerns. Exercises executive powers in practice." },
        { term: "Constituent", definition: "Person voting for and represented by an elected official." },
        { term: "Crossbench", definition: "MPs not belonging to major parties (independents or minor party members)." },
        { term: "Crown", definition: "British monarch, part of Australian government via representatives (Governor-General, Governors). Representatives grant royal assent and appoint Executive Council." },
        { term: "Election", definition: "Public voting process choosing new parliamentary representatives and determining government." },
        { term: "Electorate", definition: "Geographical area of approx. 110,000 voters for Commonwealth Parliament. Victoria: electoral district has 46,000-56,000 voters for Legislative Assembly." },
        { term: "Executive Council", definition: "Senior government ministers (including PM/Premier) advising Crown's representative and approving secondary legislation." },
        { term: "Executive Power", definition: "Power vested in King, exercised by Governor-General (Commonwealth)/Governor (state), to maintain/administer law and government business. In practice, rests with Cabinet and departments." },
        { term: "International Declarations", definition: "Non-binding agreements between countries establishing aspirational rights/obligations. Not subject to ratification. Parliament may face criticism for not upholding principles." },
        { term: "International Pressures", definition: "Influence from other countries/international organisations on parliaments to comply with international standards. Can come from countries, IGOs (e.g., UN), NGOs." },
        { term: "International Treaties", definition: "Binding agreements between countries/international organisations creating international rights/obligations. Binding after signing and ratifying. Parliament must pass legislation for domestic effect." },
        { term: "Ratification", definition: "Formal agreement by a country to be bound by an international treaty's terms." },
        { term: "Member of Parliament (MP)", definition: "Elected political representative for a district or state." },
        { term: "Minor Parties", definition: "Political parties without enough elected representatives to win government but can pressure government and target specific law reform areas. Small political parties." },
        { term: "Petitions", definition: "Formal written request to government for action or law reform, usually with signatures. Only way individuals can 'directly' present concerns to parliament." },
        { term: "Political Party", definition: "Organisation of members with similar ethos/worldviews aiming to compete in elections for societal/political goals." },
        { term: "Premier (Victorian)", definition: "Leader of the Victorian state government." },
        { term: "Region (Victorian Legislative Council)", definition: "One of eight larger Victorian divisions Legislative Council members represent." },
        { term: "Remand", definition: "Legal status of an accused held in custody awaiting trial." },
        { term: "United Nations (UN)", definition: "Intergovernmental organisation for peace, human rights, international cooperation. Australia is a founding Member State. UN Charter is a binding treaty. UN's Universal Periodic Review can recommend law reform." },
        { term: "Victorian Law Reform Commission (VLRC)", definition: "Victoria's leading independent law reform body; reviews, researches, recommends law changes to Parliament. Roles: inquiry, investigation, monitoring, education." },
        { term: "World Trade Organisation (WTO)", definition: "International body of 164 nations determining international trade rules. Can authorise sanctions for breaching trade agreements." }
    ],
    "VCE Legal Studies Meta-Terms": [
        { term: "Aims (of Study)", definition: "VCE Legal Studies aims: understand/apply legal terminology/principles, apply principles to scenarios, analyse law-making institutions/influences, understand rights, analyse dispute resolution, examine justice system's ability to achieve justice principles." },
        { term: "Employability Skills", definition: "Study offers opportunities to develop these; examples in Support materials." },
        { term: "Scope of Study", definition: "VCE Legal Studies examines institutions/principles essential to Australian legal system (rule of law, law-makers, legal institutions, people-Constitution relationship, rights protection, Victorian justice system)." },
        { term: "Victorian Study Design", definition: "VCE Legal Studies Study Design, outlining the curriculum." }
    ]
};
window.categorizedGlossaryData = categorizedGlossaryData;

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
    // (Variables already declared above, so do not redeclare here)
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

    // Exam Skills Helper Tabs (NEW Two-Level Structure)
    const primaryExamSkillTabs = document.querySelectorAll('.primary-exam-skill-tab-button');
    const primaryExamSkillContents = document.querySelectorAll('.primary-exam-skill-content');
    const taskWordTabs = document.querySelectorAll('.task-word-tab'); // Secondary tabs
    const taskWordContents = document.querySelectorAll('.task-word-content'); // Secondary content

    // Function to activate a secondary (task word) tab
    function activateTaskWordTab(tabToActivate) {
        const targetId = tabToActivate.dataset.target;
        taskWordTabs.forEach(t => {
            // Using 'active-task-word-tab' for active state, and specific styling classes
            t.classList.remove('active-task-word-tab', 'border-purple-500', 'font-semibold', 'text-purple-800', 'bg-purple-100');
            t.classList.add('border-transparent', 'text-purple-600');
        });
        tabToActivate.classList.add('active-task-word-tab', 'border-purple-500', 'font-semibold', 'text-purple-800', 'bg-purple-100');
        tabToActivate.classList.remove('border-transparent', 'text-purple-600');

        taskWordContents.forEach(content => {
            content.classList.toggle('hidden', content.id !== targetId);
        });
    }

    // Event listeners for secondary (task word) tabs
    taskWordTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            activateTaskWordTab(tab);
        });
    });

    // Event listeners for primary exam skill tabs
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

            // If "Task Word Deep Dive" is activated, activate its first task word tab
            if (primaryTargetId === 'task-word-deep-dive-content') {
                const firstTaskWordTab = document.querySelector('#taskWordTabs .task-word-tab');
                if (firstTaskWordTab) {
                    activateTaskWordTab(firstTaskWordTab); // Activate the first tab
                }
            }
             // If "Structured Answer Templates" is activated, ensure its content is shown
            if (primaryTargetId === 'esh-answer-templates') {
                const answerTemplatesContent = document.getElementById('esh-answer-templates');
                if (answerTemplatesContent) {
                    answerTemplatesContent.classList.remove('hidden');
                }
            }
        });
    });

    // Default state for Exam Skills Helper when it becomes visible
    // This will be triggered when the "Exam Skills Helper" accordion is opened.
    // We find the "Exam Skills Helper" main content block
    const examSkillsHelperContent = document.getElementById('u4aos1-exam-skills');
    if (examSkillsHelperContent) {
        // Use MutationObserver to detect when it becomes visible
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isHidden = examSkillsHelperContent.classList.contains('hidden');
                    if (!isHidden) { // When "Exam Skills Helper" is shown
                        let activePrimaryTab = document.querySelector('.primary-exam-skill-tab-button.active-primary-exam-skill-tab');
                        if (!activePrimaryTab) {
                             activePrimaryTab = document.querySelector('.primary-exam-skill-tab-button'); // Get first one
                             if (activePrimaryTab) activePrimaryTab.click();
                        } else {
                            // If a tab is already active, ensure its content is visible and initialized
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
                                }
                             }
                        }
                    }
                }
            }
        });
        observer.observe(examSkillsHelperContent, { attributes: true });
    }


    // Practice Questions Toggle Answer
    const practiceQuestionToggleButtons = document.querySelectorAll('.practice-question-toggle-answer');
    practiceQuestionToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const practiceQuestionDiv = button.closest('.practice-question');
            if (practiceQuestionDiv) {
                const answerDiv = practiceQuestionDiv.querySelector('.practice-question-answer');
                if (answerDiv) {
                    answerDiv.classList.toggle('hidden'); // Use hidden class
                }
            }
        });
    });

    // Practice Questions - Toggle Worked Example (NEW)
    const workedExampleToggleButtons = document.querySelectorAll('.practice-question-toggle-worked-example');
    workedExampleToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const practiceQuestionDiv = button.closest('.practice-question');
            if (practiceQuestionDiv) {
                const workedExampleDiv = practiceQuestionDiv.querySelector('.practice-question-worked-example');
                if (workedExampleDiv) {
                    workedExampleDiv.classList.toggle('hidden');
                    // Optional: Change button text based on visibility
                    if (workedExampleDiv.classList.contains('hidden')) {
                        button.textContent = 'Show Worked Example ✨';
                    } else {
                        button.textContent = 'Hide Worked Example  ocultar';
                    }
                } else {
                    console.warn('Worked example content div not found for button:', button);
                }
            } else {
                console.warn('Parent .practice-question div not found for button:', button);
            }
        });
    });

    // Initial default selections
    if (mainNavButtons.length > 0) { 
        mainNavButtons[0].click(); 
    }

}); // End of DOMContentLoaded
