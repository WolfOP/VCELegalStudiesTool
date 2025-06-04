document.addEventListener('DOMContentLoaded', function () {
    // प्रिजर्व ALL EXISTING CODE from keySkillsHub.js here.
    // This includes:
    // - answerTemplatesData and its functions
    // - ksBridgeData and its functions
    // - guidedAnswerQuestions and its functions (loadGuidedAnswerQuestion, checkGuidedAnswers)
    // - scenarioTermChallenges and its functions (loadSTCQuestion, stcCheckAnswerBtn listener, stcNextQuestionBtn listener)
    // - sourceAnalysisChallenges and its functions (loadSACExcerpt, sacCheckAnswerBtn listener, sacNextExcerptBtn listener)
    // - caseDeconData and its functions (populateCaseDeconSelector, setupCaseDeconChallenge, etc.)
    // - PROXY_ENDPOINT_URL, callGeminiAPI
    // - AI explainer functions for glossary
    // - categorizedGlossaryData and its functions
    // - ksPitfallsInitializeAccordions, initializeAICoachButtons
    // - initializeKeySkillsHub

    // For brevity, existing code is represented by comments. It MUST be preserved.
    const answerTemplatesData = {
        "Define": {
            "1-2 marks": {
                structure: [
                    "Provide a precise meaning of the term.",
                    "Include key characteristics or essential qualities.",
                    "Keep it concise."
                ],
                tips: [
                    "Often, one sentence per mark is a good guide.",
                    "Refer to official VCAA definitions if known, but rephrase in your own words where possible unless a direct quote is effective.",
                    "Avoid using the term in its own definition."
                ],
                sentenceStarters: [
                    "[Term] can be defined as...",
                    "The essential meaning of [Term] is...",
                    "[Term] refers to..."
                ]
            }
        },
        "Explain": {
            "3-4 marks": {
                structure: [
                    "State the concept or topic clearly.",
                    "Provide details to clarify the concept (how/why).",
                    "Use an example to illustrate the concept.",
                    "Link back to the question if necessary."
                ],
                tips: [
                    "Aim for depth rather than breadth for a specific concept.",
                    "Ensure your example is relevant and clearly supports your explanation.",
                    "Use connecting words to show relationships (e.g., therefore, because, as a result)."
                ],
                sentenceStarters: [
                    "[Concept] is when...",
                    "This occurs because...",
                    "For example, if...",
                    "This means that..."
                ]
            },
            "5-6 marks": {
                structure: [
                    "Introduce the concept or topic.",
                    "Explain a first aspect/reason with details and examples.",
                    "Explain a second aspect/reason with details and examples.",
                    "Provide a concluding sentence that summarizes the explanation."
                ],
                tips: [
                    "Break down complex concepts into smaller, manageable parts.",
                    "Use distinct examples for each aspect if possible.",
                    "Ensure a logical flow between different parts of your explanation."
                ],
                sentenceStarters: [
                    "One reason for [phenomenon] is...",
                    "Another key aspect of [concept] involves...",
                    "For instance, the [example] demonstrates...",
                    "Therefore, [concept] can be understood as..."
                ]
            }
        },
        "Discuss": {
            "6-8 marks": {
                structure: [
                    "Introduce the topic and acknowledge its complexity or different facets.",
                    "Present a first argument/viewpoint/strength with supporting evidence/examples.",
                    "Present a second (often contrasting) argument/viewpoint/weakness with supporting evidence/examples.",
                    "Consider further aspects or implications if relevant (e.g., different perspectives).",
                    "Provide a reasoned conclusion or synthesis that weighs up the different points."
                ],
                tips: [
                    "Use comparative language (e.g., 'however', 'on the other hand', 'similarly').",
                    "Ensure a balanced treatment of different sides.",
                    "Your conclusion should not just be a summary but offer a judgment based on your discussion."
                ],
                sentenceStarters: [
                    "The issue of [topic] involves several important considerations...",
                    "One perspective on [topic] is that...",
                    "Conversely, another viewpoint suggests...",
                    "Evidence for this can be seen in...",
                    "In conclusion, while [point A] is valid, [point B] suggests that..."
                ]
            }
        }
    };
    // ksTemplatesDisplayTemplate, ksTemplatesInitialize would need to be implemented or verified if they exist below.
    // For now, assuming they are present and functional based on the original file structure.
    function ksTemplatesDisplayTemplate() {
        const taskWord = document.getElementById('templateTaskWordSelect').value;
        const markRange = document.getElementById('templateMarkRangeSelect').value;
        const displayArea = document.getElementById('templateDisplayArea');
        const titleEl = document.getElementById('templateTitle');
        const structureUl = document.getElementById('templateStructure');
        const tipsUl = document.getElementById('templateTips');
        const startersUl = document.getElementById('templateSentenceStarters');
        const errorArea = document.getElementById('templateErrorArea');

        displayArea.style.display = 'none';
        errorArea.style.display = 'none';
        [structureUl, tipsUl, startersUl].forEach(ul => ul.innerHTML = '');

        if (taskWord && markRange && answerTemplatesData[taskWord] && answerTemplatesData[taskWord][markRange]) {
            const template = answerTemplatesData[taskWord][markRange];
            titleEl.textContent = `${taskWord} (${markRange})`;
            template.structure.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point;
                structureUl.appendChild(li);
            });
            template.tips.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point;
                tipsUl.appendChild(li);
            });
            template.sentenceStarters.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point;
                startersUl.appendChild(li);
            });
            displayArea.style.display = 'block';
        } else if (taskWord && markRange) {
            errorArea.textContent = `No template available for ${taskWord} (${markRange}). Try a different combination.`;
            errorArea.style.display = 'block';
        } else {
            errorArea.textContent = 'Please select both a task word and a mark range.';
            errorArea.style.display = 'block';
        }
    }

    function ksTemplatesInitialize() {
        const taskWordSelect = document.getElementById('templateTaskWordSelect');
        const markRangeSelect = document.getElementById('templateMarkRangeSelect');
        if (!taskWordSelect || !markRangeSelect) return;

        // Populate Task Words
        if(taskWordSelect.options.length <= 1) { // Avoid re-populating
            Object.keys(answerTemplatesData).forEach(taskWord => {
                const option = document.createElement('option');
                option.value = taskWord;
                option.textContent = taskWord;
                taskWordSelect.appendChild(option);
            });
        }

        // Populate Mark Ranges (simplified - could be dynamic based on task word)
        if(markRangeSelect.options.length <=1) {
            const commonMarkRanges = ["1-2 marks", "3-4 marks", "5-6 marks", "6-8 marks", "8-10 marks"];
            commonMarkRanges.forEach(range => {
                const option = document.createElement('option');
                option.value = range;
                option.textContent = range;
                markRangeSelect.appendChild(option);
            });
        }

        taskWordSelect.addEventListener('change', ksTemplatesDisplayTemplate);
        markRangeSelect.addEventListener('change', ksTemplatesDisplayTemplate);
        // Initial call to display placeholder or error if nothing selected
        ksTemplatesDisplayTemplate();
    }

    const ksBridgeData = [
        {
            id: "ks1",
            skillText: "Principles of Justice (Fairness, Equality, Access)",
            knowledgePoints: [
                "Definitions of fairness, equality, and access.",
                "Examples of how each principle is upheld in the legal system (e.g., legal aid, interpreters, Koori Court)."
            ],
            exampleQuestions: [
                "Define 'equality' in the context of the principles of justice. (2 marks)",
                "Explain how the right to legal representation promotes fairness. (3 marks)",
                "Discuss the extent to which Victorian Legal Aid achieves access. (6 marks)"
            ],
            directLinks: [
                { text: "View KS1 Content", accordionId: "u4aos1-ks1-header" }
            ]
        },
        {
            id: "ks2",
            skillText: "Key Concepts in Criminal Justice (Summary/Indictable, Burden/Standard of Proof, Presumption of Innocence)",
            knowledgePoints: [
                "Distinction between summary and indictable offences.",
                "Meaning of burden and standard of proof in criminal cases.",
                "Significance of the presumption of innocence."
            ],
            exampleQuestions: [
                "Distinguish between a summary offence and an indictable offence. (4 marks)",
                "Explain the standard of proof in a criminal trial. (3 marks)",
                "Analyse the importance of the presumption of innocence for an accused. (5 marks)"
            ],
            directLinks: [
                { text: "View KS2 Content", accordionId: "u4aos1-ks2-header" }
            ]
        },
        {
            id: "ks7",
            skillText: "Reasons for a Victorian Court Hierarchy",
            knowledgePoints: [
                "Specialisation of courts.",
                "Appeals process.",
                "Operation of the doctrine of precedent.",
                "Administrative convenience."
            ],
            exampleQuestions: [
                "Outline two reasons for the Victorian court hierarchy. (4 marks)",
                "Explain how specialisation is a reason for the court hierarchy. (3 marks)",
                "Evaluate the effectiveness of the appeals process as a reason for the court hierarchy. (6 marks)"
            ],
            directLinks: [
                 { text: "View KS7 Content", accordionId: "u4aos1-ks7-header" }
            ]
        }
    ];

    function ksBridgeHandleDirectLink(targetAccordionId) {
        const headerButton = document.getElementById(targetAccordionId);
        if (headerButton && typeof headerButton.click === 'function') {
            // First, ensure the main "Unit 4 AOS 1" section is visible
            const u4aos1Section = document.getElementById('unit4-aos1');
            const mainUnit4Button = document.querySelector('button[data-target="unit4-content"]'); // Assuming this is how main sections are shown
            const u4aos1NavButton = document.querySelector('.unit4-nav-button[data-target="unit4-aos1"]');

            if (mainUnit4Button && !u4aos1Section.classList.contains('active')) {
                // This logic might need to be more robust depending on how main sections are displayed
                // For now, assuming clicking the U4AOS1 nav button is enough if it's part of a larger structure
            }
            if (u4aos1NavButton && !u4aos1Section.classList.contains('active')) {
                 // u4aos1NavButton.click(); // This might trigger other default behaviors
            }
            // Then, click the specific accordion header
             // Ensure the specific content area for U4AOS1 is shown if it's managed by its own tabs/buttons
            const u4aos1ContentToggle = document.querySelector(`.u4aos1-content-toggle[data-target="${headerButton.id.replace('-header','')}"]`) ||
                                      document.querySelector(`.u4aos1-content-toggle[data-target="${headerButton.parentElement.id}"]`);
            if(u4aos1ContentToggle && !u4aos1ContentToggle.classList.contains('bg-indigo-500')) { // Check if active
                // u4aos1ContentToggle.click(); // This might also be tricky due to event propagation or specific handlers
            }

            // Directly attempt to open the accordion item
            const content = headerButton.nextElementSibling;
            if (content && content.classList.contains('accordion-content')) {
                 if (!content.style.maxHeight || content.style.maxHeight === '0px') {
                    headerButton.click(); // Simulate click to open
                 }
            }
            headerButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            console.warn(`Target accordion header '${targetAccordionId}' not found or not clickable.`);
        }
    }

    function ksBridgeDisplaySkillInfo() {
        const select = document.getElementById('ksBridgeSelectSkill');
        const skillInfoDiv = document.getElementById('ksBridgeSkillInfo');
        const skillTextSpan = document.getElementById('ksBridgeSkillText');
        const knowledgePointsUl = document.getElementById('ksBridgeKnowledgePoints');
        const exampleQuestionsUl = document.getElementById('ksBridgeQuestionStems');
        const directLinksUl = document.getElementById('ksBridgeDirectLinks');

        if (!select || !skillInfoDiv || !skillTextSpan || !knowledgePointsUl || !exampleQuestionsUl || !directLinksUl) return;

        const selectedId = select.value;
        const selectedSkill = ksBridgeData.find(skill => skill.id === selectedId);

        knowledgePointsUl.innerHTML = '';
        exampleQuestionsUl.innerHTML = '';
        directLinksUl.innerHTML = '';

        if (selectedSkill) {
            skillTextSpan.textContent = selectedSkill.skillText;
            selectedSkill.knowledgePoints.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point;
                knowledgePointsUl.appendChild(li);
            });
            selectedSkill.exampleQuestions.forEach(q => {
                const li = document.createElement('li');
                li.textContent = q;
                exampleQuestionsUl.appendChild(li);
            });
            selectedSkill.directLinks.forEach(link => {
                const li = document.createElement('li');
                const button = document.createElement('button');
                button.textContent = link.text;
                button.classList.add('text-purple-600', 'hover:underline', 'text-sm');
                button.onclick = () => ksBridgeHandleDirectLink(link.accordionId);
                li.appendChild(button);
                directLinksUl.appendChild(li);
            });
            skillInfoDiv.style.display = 'block';
        } else {
            skillInfoDiv.style.display = 'none';
        }
    }

    function ksBridgeInitialize() {
        const select = document.getElementById('ksBridgeSelectSkill');
        if (!select) return;

        if (select.options.length <= 1) { // Avoid re-populating
            ksBridgeData.forEach(skill => {
                const option = document.createElement('option');
                option.value = skill.id;
                option.textContent = skill.skillText;
                select.appendChild(option);
            });
        }
        select.addEventListener('change', ksBridgeDisplaySkillInfo);
        // Initial call to display placeholder or first item if pre-selected
        ksBridgeDisplaySkillInfo();
    }

    const guidedAnswerQuestions = [ /* ... existing data ... */ ];
    let currentGuidedQuestionIndex = 0;
    window.loadGuidedAnswerQuestion = function(index) { /* ... existing implementation ... */ };
    function checkGuidedAnswers() { /* ... existing implementation ... */ };
    const scenarioTermChallenges = [ /* ... existing data ... */ ];
    let currentSTCQuestion = 0;
    window.loadSTCQuestion = function(index) { /* ... existing implementation ... */ };
    // STC Button Listeners (ensure these are preserved correctly, likely attached in loadSTCQuestion or globally)
    // const stcCheckAnswerBtn = document.getElementById('stcCheckAnswerBtn'); ... addEventListener ...
    // const stcNextQuestionBtn = document.getElementById('stcNextQuestionBtn'); ... addEventListener ...
    // The current implementation from Turn 78 attaches them inside loadSTCQuestion if elements exist, which is fine.

    const sourceAnalysisChallenges = [ /* ... existing data ... */ ];
    let currentSACExcerptIndex = 0;
    window.loadSACExcerpt = function(index) { /* ... existing implementation ... */ };
    // SAC Button Listeners (ensure these are preserved correctly, attached in loadSACExcerpt or globally)
    // const sacCheckAnswerBtn = document.getElementById('sacCheckAnswerBtn'); ... addEventListener ...
    // const sacNextExcerptBtn = document.getElementById('sacNextExcerptBtn'); ... addEventListener ...
     // The current implementation from Turn 80 attaches them if elements exist, which is fine.

    const caseDeconData = [ /* ... existing data ... */ ];
    const allImpactAreas = [ /* ... existing data ... */ ];
    const allRelatedConceptsList = [ /* ... existing data ... */ ];
    let currentCaseDeconId = null;
    window.populateCaseDeconSelector = function() { /* ... existing implementation ... */ };
    function setupCaseDeconChallenge(selectedCaseId) { /* ... existing implementation ... */ };
    function populateDeconDropdown(selectId, optionsArray) { /* ... existing implementation ... */ };
    const checkCaseDeconBtn = document.getElementById('checkCaseDeconBtn');
    if (checkCaseDeconBtn) { /* ... existing event listener from Turn 73 ... */ }


    // --- Power Classification Sort ---
    const lawMakingAreasData = [
        { id: "lm_defence", area: "National Defence", correctCategory: "Exclusive", constitutionRef: "s51(vi), s114" },
        { id: "lm_currency", area: "Coinage and Currency", correctCategory: "Exclusive", constitutionRef: "s51(xii), s115" },
        { id: "lm_customs", area: "Customs and Excise Duties", correctCategory: "Exclusive", constitutionRef: "s90" },
        { id: "lm_taxation", area: "Taxation (general)", correctCategory: "Concurrent", constitutionRef: "s51(ii)" },
        { id: "lm_marriage", area: "Marriage and Divorce", correctCategory: "Concurrent", constitutionRef: "s51(xxi), s51(xxii)" },
        { id: "lm_trade", area: "Interstate & International Trade", correctCategory: "Concurrent", constitutionRef: "s51(i)" }, // Cth has power, states can trade too but Cth can override.
        { id: "lm_education", area: "Education (schools)", correctCategory: "Residual", constitutionRef: "N/A (States)" },
        { id: "lm_criminal", area: "Criminal Law (general)", correctCategory: "Residual", constitutionRef: "N/A (States)" },
        { id: "lm_health", area: "Public Health (hospitals)", correctCategory: "Residual", constitutionRef: "N/A (States)" },
        { id: "lm_environment", area: "Environment (local parks)", correctCategory: "Residual", constitutionRef: "N/A (States)" },
        { id: "lm_bankruptcy", area: "Bankruptcy and Insolvency", correctCategory: "Concurrent", constitutionRef: "s51(xvii)" },
        { id: "lm_lighthouses", area: "Astronomical & Meteorological Observations (Lighthouses)", correctCategory: "Concurrent", constitutionRef: "s51(viii)" }
    ];

    let draggedPowerItemPS = null; // Suffix PS for Power Sort

    function createDraggablePowerItem(itemData) {
        const item = document.createElement('div');
        item.classList.add('power-item', 'p-2', 'bg-gray-200', 'rounded', 'cursor-grab', 'mb-1', 'text-xs', 'hover:bg-gray-300');
        item.textContent = itemData.area;
        item.draggable = true;
        item.dataset.id = itemData.id;
        item.dataset.correctCategory = itemData.correctCategory;
        item.dataset.ref = itemData.constitutionRef;
        item.addEventListener('dragstart', handleDragStartPS);
        item.addEventListener('dragend', handleDragEndPS);
        return item;
    }

    function handleDragStartPS(e) {
        draggedPowerItemPS = this;
        this.classList.add('dragging', 'opacity-50');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.dataset.id); // Optional, for some browser compatibility
    }

    function handleDragEndPS() {
        this.classList.remove('dragging', 'opacity-50');
        draggedPowerItemPS = null;
    }

    function handleDragOverPS(e) {
        e.preventDefault(); // Necessary to allow dropping
        e.dataTransfer.dropEffect = 'move';
        if (this.classList.contains('power-drop-zone') || this.id === 'powerSortSourceItems') {
             this.classList.add('drag-over');
        }
    }
    
    function handleDragEnterPS(e) {
        e.preventDefault();
        if (this.classList.contains('power-drop-zone') || this.id === 'powerSortSourceItems') {
            this.classList.add('drag-over');
        }
    }

    function handleDragLeavePS(e) {
         if (this.classList.contains('power-drop-zone') || this.id === 'powerSortSourceItems') {
            this.classList.remove('drag-over');
        }
    }

    function handleDropPS(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        if (draggedPowerItemPS && (this.classList.contains('power-drop-zone') || this.id === 'powerSortSourceItems')) {
            const targetList = this.id === 'powerSortSourceItems' ? this : this.querySelector('.dropped-items-list');
            if (targetList) {
                 // Remove item from its original parent list before appending to new one
                if(draggedPowerItemPS.parentNode) {
                    draggedPowerItemPS.parentNode.removeChild(draggedPowerItemPS);
                }
                targetList.appendChild(draggedPowerItemPS);
            }
        }
         // Clear any visual feedback from previous check
        draggedPowerItemPS.classList.remove('correct-placement', 'incorrect-placement');
        const refSpan = draggedPowerItemPS.querySelector('.constitution-ref');
        if (refSpan) refSpan.remove();
        document.getElementById('powerSortFeedback').innerHTML = ''; // Clear overall feedback on drop
    }

    window.setupPowerSortGame = function() {
        const sourceContainer = document.getElementById('powerSortSourceItems');
        const dropZones = document.querySelectorAll('.power-drop-zone');
        const feedbackArea = document.getElementById('powerSortFeedback');
        const checkBtn = document.getElementById('checkPowerSortBtn');
        const resetBtn = document.getElementById('resetPowerSortBtn');

        if (!sourceContainer || dropZones.length !== 3 || !feedbackArea || !checkBtn || !resetBtn) {
            console.error("Power Sort Game elements missing from DOM.");
            if (sourceContainer) sourceContainer.innerHTML = "<p>Error: Power Sort components not found.</p>";
            return;
        }

        // Clear source and drop zones
        sourceContainer.innerHTML = '<h5 class="text-sm font-semibold text-slate-600 mb-2 text-center">Drag from here:</h5>'; // Keep header
        dropZones.forEach(zone => {
            const list = zone.querySelector('.dropped-items-list');
            if(list) list.innerHTML = '';
            zone.classList.remove('drag-over');
            zone.removeEventListener('dragover', handleDragOverPS); // Remove old before adding new
            zone.removeEventListener('dragenter', handleDragEnterPS);
            zone.removeEventListener('dragleave', handleDragLeavePS);
            zone.removeEventListener('drop', handleDropPS);

            zone.addEventListener('dragover', handleDragOverPS);
            zone.addEventListener('dragenter', handleDragEnterPS);
            zone.addEventListener('dragleave', handleDragLeavePS);
            zone.addEventListener('drop', handleDropPS);
        });

        sourceContainer.removeEventListener('dragover', handleDragOverPS);
        sourceContainer.removeEventListener('dragenter', handleDragEnterPS);
        sourceContainer.removeEventListener('dragleave', handleDragLeavePS);
        sourceContainer.removeEventListener('drop', handleDropPS);

        sourceContainer.addEventListener('dragover', handleDragOverPS);
        sourceContainer.addEventListener('dragenter', handleDragEnterPS);
        sourceContainer.addEventListener('dragleave', handleDragLeavePS);
        sourceContainer.addEventListener('drop', handleDropPS);


        // Shuffle and add items to source
        const shuffledData = shuffleArray([...lawMakingAreasData]);
        shuffledData.forEach(itemData => {
            const itemElement = createDraggablePowerItem(itemData);
            sourceContainer.appendChild(itemElement);
        });

        feedbackArea.innerHTML = '';
        checkBtn.onclick = checkPowerSortAnswers; // Assign event directly
        resetBtn.onclick = setupPowerSortGame; // Assign event directly
    }

    function checkPowerSortAnswers() {
        const feedbackArea = document.getElementById('powerSortFeedback');
        feedbackArea.innerHTML = '';
        let allCorrectlyPlaced = true;
        let placedItemCount = 0;

        document.querySelectorAll('.power-drop-zone').forEach(zone => {
            const zoneCategory = zone.dataset.category;
            const itemsInZone = zone.querySelectorAll('.power-item');

            itemsInZone.forEach(item => {
                placedItemCount++;
                item.classList.remove('correct-placement', 'incorrect-placement');
                const refSpan = item.querySelector('.constitution-ref');
                if (refSpan) refSpan.remove(); // Remove old ref if any

                const correctCategory = item.dataset.correctCategory;
                const constitutionRef = item.dataset.ref;

                if (zoneCategory === correctCategory) {
                    item.classList.add('correct-placement');
                    const refDisplay = document.createElement('span');
                    refDisplay.classList.add('constitution-ref', 'block', 'text-green-700', 'text-xs', 'mt-1');
                    refDisplay.textContent = `Ref: ${constitutionRef}`;
                    item.appendChild(refDisplay);
                } else {
                    item.classList.add('incorrect-placement');
                    const incorrectInfo = document.createElement('span');
                    incorrectInfo.classList.add('constitution-ref', 'block', 'text-red-700', 'text-xs', 'mt-1');
                    incorrectInfo.textContent = `(Should be: ${correctCategory}, Ref: ${constitutionRef})`;
                    item.appendChild(incorrectInfo);
                    allCorrectlyPlaced = false;
                }
            });
        });

        const itemsInSource = document.getElementById('powerSortSourceItems').querySelectorAll('.power-item');
        if (itemsInSource.length > 0) {
            allCorrectlyPlaced = false;
            feedbackArea.innerHTML += `<p class="text-amber-700 text-sm mt-2">${itemsInSource.length} item(s) not classified.</p>`;
            itemsInSource.forEach(item => {
                 item.classList.add('unplaced-item-feedback'); // Needs CSS
                 const correctCategory = item.dataset.correctCategory;
                 const constitutionRef = item.dataset.ref;
                 const unplacedInfo = document.createElement('span');
                 unplacedInfo.classList.add('constitution-ref', 'block', 'text-amber-700', 'text-xs', 'mt-1');
                 unplacedInfo.textContent = `(Unplaced - Correct: ${correctCategory}, Ref: ${constitutionRef})`;
                 item.appendChild(unplacedInfo);
            });
        }

        if (allCorrectlyPlaced && placedItemCount === lawMakingAreasData.length) {
            feedbackArea.innerHTML = '<p class="text-green-700 font-semibold text-sm mt-2">Excellent! All powers correctly classified.</p>' + feedbackArea.innerHTML;
        } else if (placedItemCount > 0) {
            feedbackArea.innerHTML = '<p class="text-orange-600 font-semibold text-sm mt-2">Some classifications are incorrect or incomplete. Review the feedback on each item.</p>' + feedbackArea.innerHTML;
        } else if (placedItemCount === 0 && itemsInSource.length > 0) {
             feedbackArea.innerHTML = '<p class="text-slate-600 font-semibold text-sm mt-2">Drag items to the power categories to begin.</p>' + feedbackArea.innerHTML;
        }
    }
    // --- End of Power Classification Sort ---

    // --- Relationship Quadrant Matcher ---
    const relationshipScenariosData = [
        { id: "rqm_s1", text: "Parliament passes an Act that overrules a previous High Court decision on native title.", correctQuadrant: "supremacy" },
        { id: "rqm_s2", text: "A judge in the County Court refers to Hansard to understand the purpose of a particular section of an Act.", correctQuadrant: "interpretation" },
        { id: "rqm_s3", text: "The Victorian Parliament enacts legislation that puts into statute form the common law principles of negligence.", correctQuadrant: "codification" },
        { id: "rqm_s4", text: "A Supreme Court judge clarifies the meaning of 'reasonable force' in a self-defence case, as used in the Crimes Act.", correctQuadrant: "interpretation" },
        { id: "rqm_s5", text: "Parliament includes a clause in a new law stating, 'This Act overrides any existing common law principles to the contrary'.", correctQuadrant: "supremacy" }, // Also abrogation, but supremacy is stronger aspect here.
        { id: "rqm_s6", text: "A judge finds a new piece of legislation to be unclear and issues a detailed judgment on how its terms should be applied.", correctQuadrant: "interpretation" },
        { id: "rqm_s7", text: "Following a series of court cases that expanded liability for online defamation, Parliament passes a law to limit such liability.", correctQuadrant: "abrogation" },
        { id: "rqm_s8", text: "The Mabo case led to the Native Title Act 1993 (Cth), which formally recognised native title in Australian law.", correctQuadrant: "codification" }, // Also illustrates courts influencing parliament.
        { id: "rqm_s9", text: "Parliament amends an existing Act to clarify a definition after a court case revealed ambiguity in the original wording.", correctQuadrant: "supremacy" }, // Supremacy in action to clarify
        { id: "rqm_s10", text: "A court decision establishes a new duty of care for gig economy platforms, which Parliament later legislates to limit.", correctQuadrant: "abrogation" }
    ];

    let draggedScenarioItemRQM = null;

    function createDraggableScenarioItem(scenarioData) {
        const item = document.createElement('div');
        item.classList.add('relationship-scenario-item', 'p-2', 'bg-gray-200', 'rounded', 'cursor-grab', 'mb-1', 'text-xs', 'hover:bg-gray-300');
        item.textContent = scenarioData.text;
        item.draggable = true;
        item.dataset.id = scenarioData.id;
        item.dataset.correctQuadrant = scenarioData.correctQuadrant;
        item.addEventListener('dragstart', handleDragStartRQM);
        item.addEventListener('dragend', handleDragEndRQM);
        return item;
    }

    function handleDragStartRQM(e) {
        draggedScenarioItemRQM = this;
        this.classList.add('dragging', 'opacity-50');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.dataset.id);
    }

    function handleDragEndRQM() {
        this.classList.remove('dragging', 'opacity-50');
        draggedScenarioItemRQM = null;
    }

    function handleDragOverRQM(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (this.classList.contains('relationship-quadrant') || this.id === 'relationshipScenariosSource') {
            this.classList.add('drag-over');
        }
    }

    function handleDragEnterRQM(e) {
        e.preventDefault();
        if (this.classList.contains('relationship-quadrant') || this.id === 'relationshipScenariosSource') {
            this.classList.add('drag-over');
        }
    }

    function handleDragLeaveRQM(e) {
        if (this.classList.contains('relationship-quadrant') || this.id === 'relationshipScenariosSource') {
            this.classList.remove('drag-over');
        }
    }

    function handleDropRQM(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        if (draggedScenarioItemRQM) {
            let targetDropArea = this;
            // If dropping onto the quadrant title or the quadrant itself, append to its .dropped-scenarios-list
            if (this.classList.contains('relationship-quadrant')) {
                targetDropArea = this.querySelector('.dropped-scenarios-list');
            }
            // If dropping onto source or directly into a list
            else if (this.id === 'relationshipScenariosSource' || this.classList.contains('dropped-scenarios-list')) {
                 targetDropArea = this; // It's already the correct container or list
            } else {
                return; // Not a valid drop target
            }

            if (draggedScenarioItemRQM.parentNode) {
                 draggedScenarioItemRQM.parentNode.removeChild(draggedScenarioItemRQM);
            }
            targetDropArea.appendChild(draggedScenarioItemRQM);
            draggedScenarioItemRQM.classList.remove('correct-match', 'incorrect-match'); // Clear previous feedback
        }
    }

    window.setupRelationshipMatcherGame = function() {
        const sourceContainer = document.getElementById('relationshipScenariosSource');
        const quadrants = document.querySelectorAll('.relationship-quadrant');
        const feedbackArea = document.getElementById('relationshipMatcherFeedback');
        const checkBtn = document.getElementById('checkRelationshipMatchesBtn');
        const resetBtn = document.getElementById('resetRelationshipMatcherBtn');

        if (!sourceContainer || quadrants.length !== 4 || !feedbackArea || !checkBtn || !resetBtn) {
            console.error("Relationship Matcher elements missing. Expected: sourceContainer, 4 quadrants, feedbackArea, checkBtn, resetBtn.");
            if(sourceContainer) sourceContainer.innerHTML = "<p>Error: RQM components not found.</p>";
            return;
        }

        sourceContainer.innerHTML = '<p class="font-semibold text-sm text-center">Scenarios (Drag these)</p>'; // Keep header
        quadrants.forEach(quad => {
            const list = quad.querySelector('.dropped-scenarios-list');
            if(list) list.innerHTML = '';
            quad.classList.remove('drag-over');
            quad.removeEventListener('dragover', handleDragOverRQM);
            quad.removeEventListener('dragenter', handleDragEnterRQM);
            quad.removeEventListener('dragleave', handleDragLeaveRQM);
            quad.removeEventListener('drop', handleDropRQM);

            quad.addEventListener('dragover', handleDragOverRQM);
            quad.addEventListener('dragenter', handleDragEnterRQM);
            quad.addEventListener('dragleave', handleDragLeaveRQM);
            quad.addEventListener('drop', handleDropRQM);
        });

        sourceContainer.removeEventListener('dragover', handleDragOverRQM);
        sourceContainer.removeEventListener('dragenter', handleDragEnterRQM);
        sourceContainer.removeEventListener('dragleave', handleDragLeaveRQM);
        sourceContainer.removeEventListener('drop', handleDropRQM);

        sourceContainer.addEventListener('dragover', handleDragOverRQM);
        sourceContainer.addEventListener('dragenter', handleDragEnterRQM);
        sourceContainer.addEventListener('dragleave', handleDragLeaveRQM);
        sourceContainer.addEventListener('drop', handleDropRQM);

        const shuffledScenarios = shuffleArray([...relationshipScenariosData]);
        shuffledScenarios.forEach(scenarioData => {
            const itemElement = createDraggableScenarioItem(scenarioData);
            sourceContainer.appendChild(itemElement);
        });

        feedbackArea.innerHTML = '';
        checkBtn.onclick = checkRelationshipMatches;
        resetBtn.onclick = setupRelationshipMatcherGame;
    }

    function checkRelationshipMatches() {
        const feedbackArea = document.getElementById('relationshipMatcherFeedback');
        feedbackArea.innerHTML = '';
        let correctMatches = 0;
        let totalPlaced = 0;

        document.querySelectorAll('.relationship-quadrant').forEach(quad => {
            const quadrantKey = quad.dataset.quadrantKey;
            const itemsInQuadrant = quad.querySelectorAll('.relationship-scenario-item');
            itemsInQuadrant.forEach(item => {
                totalPlaced++;
                item.classList.remove('correct-match', 'incorrect-match'); // Reset classes
                if (item.dataset.correctQuadrant === quadrantKey) {
                    item.classList.add('correct-match');
                    correctMatches++;
                } else {
                    item.classList.add('incorrect-match');
                }
            });
        });

        const itemsInSource = document.getElementById('relationshipScenariosSource').querySelectorAll('.relationship-scenario-item');
        const unplacedCount = itemsInSource.length;

        if (totalPlaced === 0 && unplacedCount > 0) {
            feedbackArea.innerHTML = '<p class="text-sm text-slate-600">Please drag scenarios into the quadrants to check your answers.</p>';
        } else if (unplacedCount > 0) {
            feedbackArea.innerHTML = `<p class="text-sm text-orange-600">You have ${correctMatches} correct matches out of ${totalPlaced} placed. ${unplacedCount} scenarios are still unplaced.</p>`;
        } else if (totalPlaced > 0 && correctMatches === totalPlaced) {
            feedbackArea.innerHTML = `<p class="text-sm text-green-600 font-semibold">Excellent! All ${totalPlaced} scenarios are correctly placed!</p>`;
        } else {
            feedbackArea.innerHTML = `<p class="text-sm text-red-600">You have ${correctMatches} correct matches out of ${totalPlaced} placed. Some are incorrect.</p>`;
        }
    }

    // Helper function (if not already present from other tools)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- End of Relationship Quadrant Matcher ---

    // --- Inconsistency Resolver (s109) ---
    const inconsistencyResolverScenariosKSH = [
        {
            id: "ir_s1",
            scenario: "The Commonwealth Parliament passes a law setting a minimum wage of $25 per hour for all retail workers nationally. Victoria has an existing law that sets the minimum wage for retail workers in Victoria at $23 per hour.",
            answers: {
                section: "s109",
                prevails: "Commonwealth",
                effect: ["invalid", "extent", "inconsistency"], // keywords
                significanceKeywords: ["uniformity", "resolves conflict", "Cth power"]
            },
            modelSignificance: "Section 109 ensures that where a valid Commonwealth law and a state law are inconsistent, the Commonwealth law will prevail. This creates uniformity across Australia in areas where the Commonwealth has legislated, and resolves conflicts between the two levels of government, generally reinforcing the Commonwealth's intended legislative scope in areas of concurrent power."
        },
        {
            id: "ir_s2",
            scenario: "Victoria passes a law that defines 'employee' to include independent contractors for the purpose of WorkCover insurance. The Commonwealth Fair Work Act has a different definition of 'employee' that excludes independent contractors for most purposes. A worker is injured and seeks WorkCover based on the Victorian definition.",
            answers: {
                section: "s109",
                prevails: "Commonwealth",
                effect: ["invalid", "extent", "inconsistency", "Victorian law"],
                significanceKeywords: ["operational inconsistency", "concurrent powers", "Cth prevails"]
            },
            modelSignificance: "Section 109 is crucial for determining which law applies when state and Commonwealth laws conflict. If both laws cannot logically operate together (operational inconsistency), s109 dictates the Commonwealth law overrides the state law to the extent of that inconsistency. This maintains a coherent legal framework in areas of shared power."
        },
        {
            id: "ir_s3",
            scenario: "The Commonwealth enacts a detailed national code for food safety standards. A state has its own, slightly less stringent, food safety laws. A food producer in the state argues they only need to meet the state standards.",
            answers: {
                section: "s109",
                prevails: "Commonwealth",
                effect: ["state law inoperative", "inconsistent", "covered the field"],
                significanceKeywords: ["cover the field", "intention", "uniform national standard"]
            },
            modelSignificance: "Section 109 applies if the Commonwealth Parliament intends its law to be the complete statement on a matter (i.e., 'cover the field'). If so, any state law in that field, even if not directly contradictory, becomes inoperative. This ensures the Commonwealth's policy objectives for a national, uniform standard are achieved."
        }
    ];
    let currentIRScenarioIndexKSH = 0;

    window.loadIRScenarioKSH = function(index) {
        const scenarioArea = document.getElementById('irScenarioAreaKSH');
        const sectionInput = document.getElementById('irInputSectionKSH');
        const prevailsSelect = document.getElementById('irInputPrevailsKSH');
        const effectInput = document.getElementById('irInputEffectKSH');
        const significanceTextarea = document.getElementById('irInputSignificanceKSH');
        const checkBtn = document.getElementById('irCheckAnswerBtnKSH');
        const nextBtn = document.getElementById('irNextScenarioBtnKSH');
        const feedbackArea = document.getElementById('irFeedbackAreaKSH');

        if (!scenarioArea || !sectionInput || !prevailsSelect || !effectInput || !significanceTextarea || !checkBtn || !nextBtn || !feedbackArea) {
            console.error("One or more Inconsistency Resolver elements are missing from the DOM.");
            return;
        }

        currentIRScenarioIndexKSH = index;
        const scenarioData = inconsistencyResolverScenariosKSH[index];
        scenarioArea.innerHTML = `<p>${scenarioData.scenario}</p>`;

        // Clear inputs and feedback
        sectionInput.value = '';
        prevailsSelect.value = '';
        effectInput.value = '';
        significanceTextarea.value = '';
        feedbackArea.innerHTML = '';
        sectionInput.classList.remove('input-correct', 'input-incorrect');
        prevailsSelect.classList.remove('input-correct', 'input-incorrect');
        effectInput.classList.remove('input-correct', 'input-incorrect');
        significanceTextarea.classList.remove('input-correct', 'input-incorrect');


        checkBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';

        checkBtn.onclick = () => checkIRAnswerKSH(scenarioData.answers, scenarioData.modelSignificance); // Pass current answers and model significance
        nextBtn.onclick = () => {
            currentIRScenarioIndexKSH = (currentIRScenarioIndexKSH + 1) % inconsistencyResolverScenariosKSH.length;
            loadIRScenarioKSH(currentIRScenarioIndexKSH);
        };
    }

    function checkIRAnswerKSH(correctAnswers, modelSignificance) {
        const sectionInput = document.getElementById('irInputSectionKSH');
        const prevailsSelect = document.getElementById('irInputPrevailsKSH');
        const effectInput = document.getElementById('irInputEffectKSH');
        const significanceTextarea = document.getElementById('irInputSignificanceKSH');
        const feedbackArea = document.getElementById('irFeedbackAreaKSH');

        let feedbackHTML = '';
        let allCorrect = true;

        // 1. Section
        const sectionVal = sectionInput.value.toLowerCase().replace(/\s+/g, '');
        if (sectionVal === correctAnswers.section || sectionVal === "section109") {
            feedbackHTML += '<p class="text-green-600"><strong>Constitutional Section:</strong> Correct! It is s109.</p>';
            sectionInput.classList.add('input-correct'); sectionInput.classList.remove('input-incorrect');
        } else {
            feedbackHTML += `<p class="text-red-600"><strong>Constitutional Section:</strong> Incorrect. The relevant section is s109.</p>`;
            sectionInput.classList.add('input-incorrect'); sectionInput.classList.remove('input-correct');
            allCorrect = false;
        }

        // 2. Prevails
        const prevailsVal = prevailsSelect.value;
        if (prevailsVal.toLowerCase() === correctAnswers.prevails.toLowerCase()) {
            feedbackHTML += `<p class="text-green-600"><strong>Which Law Prevails:</strong> Correct! ${correctAnswers.prevails} law prevails.</p>`;
            prevailsSelect.classList.add('input-correct'); prevailsSelect.classList.remove('input-incorrect');
        } else {
            feedbackHTML += `<p class="text-red-600"><strong>Which Law Prevails:</strong> Incorrect. ${correctAnswers.prevails} law should prevail.</p>`;
            prevailsSelect.classList.add('input-incorrect'); prevailsSelect.classList.remove('input-correct');
            allCorrect = false;
        }

        // 3. Effect
        const effectVal = effectInput.value.toLowerCase();
        let effectMatch = correctAnswers.effect.every(keyword => effectVal.includes(keyword.toLowerCase()));
        if (effectMatch) {
            feedbackHTML += '<p class="text-green-600"><strong>Effect on State Law:</strong> Correct! Your answer captures the key aspects.</p>';
            effectInput.classList.add('input-correct'); effectInput.classList.remove('input-incorrect');
        } else {
            feedbackHTML += `<p class="text-red-600"><strong>Effect on State Law:</strong> Needs refinement. Key idea: the state law is invalid/inoperative <em>to the extent of the inconsistency</em>.</p>`;
            effectInput.classList.add('input-incorrect'); effectInput.classList.remove('input-correct');
            allCorrect = false;
        }
        
        // 4. Significance
        const significanceVal = significanceTextarea.value.toLowerCase();
        let significanceMatchCount = 0;
        correctAnswers.significanceKeywords.forEach(keyword => {
            if (significanceVal.includes(keyword.toLowerCase())) {
                significanceMatchCount++;
            }
        });
        if (significanceMatchCount >= Math.min(2, correctAnswers.significanceKeywords.length)) { // Require at least 2 or all if less than 2
            feedbackHTML += `<p class="text-green-600"><strong>Significance of s109:</strong> Good! You've highlighted key aspects of its significance.</p>`;
            significanceTextarea.classList.add('input-correct'); significanceTextarea.classList.remove('input-incorrect');
        } else {
            feedbackHTML += `<p class="text-red-600"><strong>Significance of s109:</strong> Consider further aspects. Model answer below provides more detail.</p>`;
            significanceTextarea.classList.add('input-incorrect'); significanceTextarea.classList.remove('input-correct');
            allCorrect = false;
        }

        feedbackHTML += `<div class="mt-2 pt-2 border-t"><p class="font-semibold text-sm">Model Explanation for Significance:</p><p class="text-xs">${modelSignificance}</p></div>`;
        
        if(allCorrect) {
            feedbackArea.innerHTML = '<p class="text-green-700 font-bold text-sm mb-2">Excellent! All aspects correctly analyzed.</p>' + feedbackHTML;
        } else {
            feedbackArea.innerHTML = '<p class="text-orange-600 font-bold text-sm mb-2">Some aspects need review. See details below:</p>' + feedbackHTML;
        }

        document.getElementById('irCheckAnswerBtnKSH').style.display = 'none';
        document.getElementById('irNextScenarioBtnKSH').style.display = 'inline-block';
    }

    // --- End of Inconsistency Resolver (s109) ---

    // --- KS6 Case Reconstruction (DoP) for Key Skills Hub ---
    const ks6DopCaseDataKSH = [ // Copied and renamed from caseReconstructionDOP.js
        {
            id: "tasDamsKSH",
            name: "Commonwealth v Tasmania (Tasmanian Dams Case) (1983)",
            elements: {
                facts: "The Tasmanian government planned to build a hydroelectric dam on the Franklin River. This area was listed for World Heritage protection. The Commonwealth Parliament passed an Act to prevent this.",
                issue: "Could the Cth use the 'external affairs' power (s51(xxix)) to legislate on an area of residual power (dam construction) to fulfill an international treaty obligation?",
                decision: "Yes, the High Court found the Cth Act valid. The external affairs power allows legislation on matters of international concern covered by a bona fide treaty.",
                impact: "Significantly expanded Cth's law-making power into areas previously residual, if a relevant international treaty obligation exists. Shifted balance towards Cth.",
                constitution: "s51(xxix) - External affairs power; s109 - Inconsistency rule."
            }
        },
        {
            id: "brislanKSH",
            name: "R v Brislan (1935)",
            elements: {
                facts: "Mrs. Brislan was charged under a Cth Act for not having a license for her wireless set (radio).",
                issue: "Did 'postal, telegraphic, telephonic, and other like services' in s51(v) include radio broadcasting, a technology not foreseen at federation?",
                decision: "Yes, the High Court held 'other like services' could be interpreted broadly to include radio broadcasting as a similar communication service.",
                impact: "Broadened Cth's power in communications by interpreting s51(v) to cover new technologies, allowing Cth to regulate broadcasting.",
                constitution: "s51(v) - Postal, telegraphic, telephonic, and other like services."
            }
        },
        {
            id: "workChoicesKSH",
            name: "New South Wales v Commonwealth (WorkChoices Case) (2006)",
            elements: {
                facts: "The Cth passed the Workplace Relations Amendment (Work Choices) Act 2005, significantly altering industrial relations laws, largely based on the corporations power.",
                issue: "Was the Cth's extensive regulation of workplace relations, traditionally an area with significant state involvement, a valid exercise of the 'corporations' power (s51(xx))?",
                decision: "The High Court upheld the validity of the WorkChoices legislation, giving a broad interpretation to the corporations power.",
                impact: "Greatly expanded the Cth's power to regulate industrial relations for constitutional corporations, significantly reducing states' roles in this area. Demonstrated the potential breadth of the corporations power.",
                constitution: "s51(xx) - Corporations power."
            }
        }
    ];

    let draggedItemKSH = null;

    function ks6DisplayDOPCaseElementsKSH(caseId) {
        const selectedCase = ks6DopCaseDataKSH.find(c => c.id === caseId);
        const sourceContainer = document.getElementById('ks6DopSourceElementsKSH');

        sourceContainer.innerHTML = '<span class="text-xs text-slate-500 italic">Drag these elements to the correct boxes below.</span>';
        document.querySelectorAll('#ks6DopDropTargetsKSH .dropped-items-list').forEach(list => list.innerHTML = '');
        document.getElementById('ks6DopReconstructionFeedbackKSH').innerHTML = '';
        document.querySelectorAll('#ks6DopSourceElementsKSH .dop-draggable-item, #ks6DopDropTargetsKSH .dop-draggable-item').forEach(item => {
            item.classList.remove('correct-placement', 'incorrect-placement');
        });

        if (!selectedCase) {
            sourceContainer.innerHTML = '<span class="text-xs text-slate-500 italic">Please select a case.</span>';
            return;
        }

        let itemsToDrag = [];
        for (const category in selectedCase.elements) {
            const text = selectedCase.elements[category];
            const item = document.createElement('div');
            item.classList.add('dop-draggable-item', 'p-1', 'bg-gray-200', 'rounded', 'cursor-grab', 'mb-1', 'text-xs', 'hover:bg-gray-300');
            item.textContent = text;
            item.draggable = true;
            item.id = `ks6dop-${caseId}-${category}-ksh`; // Unique ID for KSH tool
            item.dataset.correctCategory = category;

            item.addEventListener('dragstart', (event) => {
                draggedItemKSH = event.target;
                event.dataTransfer.setData('text/plain', event.target.id);
                event.dataTransfer.effectAllowed = 'move';
                setTimeout(() => event.target.classList.add('dragging'), 0);
            });

            item.addEventListener('dragend', (event) => {
                draggedItemKSH = null;
                event.target.classList.remove('dragging');
            });
            itemsToDrag.push(item);
        }

        itemsToDrag.sort(() => Math.random() - 0.5);
        itemsToDrag.forEach(item => sourceContainer.appendChild(item));
    }

    function ks6PopulateDOPCaseSelectKSH() {
        const caseSelect = document.getElementById('ks6DopCaseSelectKSH');
        if (!caseSelect) return;
        if (caseSelect.options.length <= 1) {
            ks6DopCaseDataKSH.forEach(caseItem => {
                const option = document.createElement('option');
                option.value = caseItem.id;
                option.textContent = caseItem.name;
                caseSelect.appendChild(option);
            });
        }
    }

    function ks6CheckDOPAnswersKSH() {
        const feedbackArea = document.getElementById('ks6DopReconstructionFeedbackKSH');
        const caseSelect = document.getElementById('ks6DopCaseSelectKSH');
        if (!feedbackArea || !caseSelect || !caseSelect.value) {
            if(feedbackArea) feedbackArea.innerHTML = '<p class="text-red-600">Please select a case first.</p>';
            return;
        }
        feedbackArea.innerHTML = '';
        let allCorrect = true;
        let itemsChecked = 0;

        const dropTargetsKSH = {
            facts: document.getElementById('ks6DopDropTargetFactsKSH'),
            issue: document.getElementById('ks6DopDropTargetIssueKSH'),
            decision: document.getElementById('ks6DopDropTargetDecisionKSH'),
            impact: document.getElementById('ks6DopDropTargetImpactKSH'),
            constitution: document.getElementById('ks6DopDropTargetConstitutionKSH')
        };

        Object.entries(dropTargetsKSH).forEach(([category, targetDiv]) => {
            if (!targetDiv) {
                console.error(`Drop target for ${category} not found for KSH tool.`);
                allCorrect = false;
                return;
            }
            const listContainer = targetDiv.querySelector('.dropped-items-list');
            const item = listContainer ? listContainer.firstElementChild : null;
            
            if (item) {
                itemsChecked++;
                item.classList.remove('correct-placement', 'incorrect-placement');
                const correctCategory = item.dataset.correctCategory;
                if (correctCategory === category) {
                    item.classList.add('correct-placement');
                    // Optionally add specific text feedback per item later
                } else {
                    item.classList.add('incorrect-placement');
                    allCorrect = false;
                }
            } else {
                allCorrect = false; // All categories must have an item for full correctness
            }
        });
        
        const selectedCaseData = ks6DopCaseDataKSH.find(c => c.id === caseSelect.value);
        const totalElementCount = selectedCaseData ? Object.keys(selectedCaseData.elements).length : 0;

        if (itemsChecked === 0 && caseSelect.value) {
             feedbackArea.innerHTML = '<p class="text-blue-600 text-xs">Drag the elements into the category boxes.</p>';
        } else if (allCorrect && itemsChecked === totalElementCount) {
            feedbackArea.innerHTML = '<p class="text-green-700 font-semibold text-sm">All elements placed correctly! Well done!</p>';
        } else {
            let summaryMessage = 'Some elements are incorrect or missing. ';
            if (itemsChecked < totalElementCount && itemsChecked > 0) {
                summaryMessage += `${totalElementCount - itemsChecked} element(s) still need to be placed. `;
            }
            summaryMessage += 'Review the highlighted boxes.';
            feedbackArea.innerHTML = `<p class="text-red-700 font-semibold text-sm">${summaryMessage}</p>`;
        }
    }

    window.initializeKS6DOPReconstructionKSH = function() {
        console.log("KS6 Case Reconstruction (DoP) KSH Tool Initializing...");
        const caseSelect = document.getElementById('ks6DopCaseSelectKSH');
        const sourceContainer = document.getElementById('ks6DopSourceElementsKSH');
        const dropTargetsKSH = {
            facts: document.getElementById('ks6DopDropTargetFactsKSH'),
            issue: document.getElementById('ks6DopDropTargetIssueKSH'),
            decision: document.getElementById('ks6DopDropTargetDecisionKSH'),
            impact: document.getElementById('ks6DopDropTargetImpactKSH'),
            constitution: document.getElementById('ks6DopDropTargetConstitutionKSH')
        };
        const checkButton = document.getElementById('ks6CheckDopReconstructionBtnKSH');

        if (!caseSelect || !sourceContainer || Object.values(dropTargetsKSH).some(t => !t) || !checkButton) {
            console.error("One or more elements for KSH Case Reconstruction Tool not found.");
            return;
        }

        ks6PopulateDOPCaseSelectKSH();

        caseSelect.addEventListener('change', (event) => {
            if (event.target.value) {
                ks6DisplayDOPCaseElementsKSH(event.target.value);
            } else {
                sourceContainer.innerHTML = '<span class="text-xs text-slate-500 italic">Select a case to load elements.</span>';
                Object.values(dropTargetsKSH).forEach(target => {
                    const list = target.querySelector('.dropped-items-list');
                    if (list) list.innerHTML = '';
                });
                document.getElementById('ks6DopReconstructionFeedbackKSH').innerHTML = '';
            }
        });

        Object.values(dropTargetsKSH).forEach(targetDiv => {
            if (!targetDiv) return; // Should have been caught above, but good practice
            const listContainer = targetDiv.querySelector('.dropped-items-list');

            targetDiv.addEventListener('dragover', (event) => {
                event.preventDefault(); event.dataTransfer.dropEffect = 'move';
            });
            targetDiv.addEventListener('dragenter', (event) => {
                event.preventDefault(); targetDiv.classList.add('drag-over');
            });
            targetDiv.addEventListener('dragleave', () => targetDiv.classList.remove('drag-over'));
            targetDiv.addEventListener('drop', (event) => {
                event.preventDefault();
                targetDiv.classList.remove('drag-over');
                if (!draggedItemKSH) return;

                const draggedItemId = event.dataTransfer.getData('text/plain');
                const actualDraggedItem = document.getElementById(draggedItemId) || draggedItemKSH;

                if (!actualDraggedItem) return;

                if (listContainer.children.length > 0) {
                    const existingItem = listContainer.firstElementChild;
                    sourceContainer.appendChild(existingItem);
                }
                listContainer.appendChild(actualDraggedItem);
                draggedItemKSH = null;
            });
        });
        checkButton.addEventListener('click', ks6CheckDOPAnswersKSH);
        console.log("KS6 Case Reconstruction (DoP) KSH Tool Initialized.");
    };
    // --- End of KS6 Case Reconstruction (DoP) for Key Skills Hub ---

    // --- KS7 Scenario Spotter (High Court & Judicial Review) KSH ---
    const ks7ScenarioDataKSH = [
        {
            id: "ks7_s1",
            text: "A state parliament passes a law that the Commonwealth government believes infringes on an area of Commonwealth legislative power. The Commonwealth government challenges this state law in the High Court.",
            options: ["High Court acting as a final court of appeal.", "High Court interpreting the Constitution (division of powers).", "High Court conducting judicial review of delegated legislation.", "A state court exercising its original jurisdiction."],
            correctAnswer: "High Court interpreting the Constitution (division of powers).",
            feedback: "Correct. When there's a dispute between state and Commonwealth laws regarding their law-making powers, the High Court interprets the Constitution (especially sections like s51, s52, s109) to determine the validity of the laws. This is a key aspect of its original jurisdiction in constitutional matters."
        },
        {
            id: "ks7_s2",
            text: "A person is convicted of a serious crime in their state's Supreme Court (Court of Appeal). They believe there was an error in law during their trial and have exhausted all appeal options within the state. They seek to have their case heard by the High Court.",
            options: ["High Court exercising original jurisdiction in a constitutional matter.", "Judicial review of an administrative decision.", "High Court acting as the ultimate court of appeal.", "The Governor-General referring a matter for an advisory opinion."],
            correctAnswer: "High Court acting as the ultimate court of appeal.",
            feedback: "Correct. The High Court is the final court of appeal in Australia. It can hear appeals from state Supreme Courts (usually requiring special leave to appeal) on matters of both state and federal law, ensuring consistency and correctness in the application of law across Australia."
        },
        {
            id: "ks7_s3",
            text: "A federal government minister makes a decision under a Commonwealth Act. A person adversely affected by the decision believes the minister did not follow the procedures required by the Act when making the decision.",
            options: ["The High Court interpreting s109 of the Constitution.", "A committal hearing in the Magistrates' Court.", "Judicial review of an administrative action/decision.", "The Commonwealth Parliament codifying common law."],
            correctAnswer: "Judicial review of an administrative action/decision.",
            feedback: "Correct. This scenario describes a situation ripe for judicial review of an administrative decision. Courts (like the Federal Court or, in some instances, the High Court) can review government decisions to ensure they are lawful, procedurally fair, and made within the scope of the relevant legal power. This is not necessarily a constitutional interpretation matter unless the Act itself is challenged."
        }
    ];
    let currentKS7ScenarioIndexKSH = 0;

    function ks7LoadScenarioKSH(index) {
        const scenarioTextEl = document.getElementById('ks7ScenarioTextKSH');
        const optionsContainerEl = document.getElementById('ks7ScenarioOptionsKSH');
        const feedbackEl = document.getElementById('ks7ScenarioFeedbackKSH');
        const checkBtn = document.getElementById('ks7CheckScenarioBtnKSH');
        const nextBtn = document.getElementById('ks7NextScenarioBtnKSH');

        if (!scenarioTextEl || !optionsContainerEl || !feedbackEl || !checkBtn || !nextBtn) {
            console.error("KS7 Scenario Spotter KSH elements missing from DOM.");
            return;
        }

        currentKS7ScenarioIndexKSH = index;
        const data = ks7ScenarioDataKSH[index];

        scenarioTextEl.innerHTML = `<p>${data.text}</p>`;
        optionsContainerEl.innerHTML = ''; // Clear previous options

        data.options.forEach((optionText, i) => {
            const radioId = `ks7_opt_${index}_${i}`;
            const li = document.createElement('div'); // Using divs for option layout
            li.classList.add('flex', 'items-center', 'mb-1');

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = radioId;
            radio.name = 'ks7_scenario_options';
            radio.value = optionText;
            radio.classList.add('mr-2', 'h-4', 'w-4', 'text-cyan-600', 'border-gray-300', 'focus:ring-cyan-500');

            const label = document.createElement('label');
            label.htmlFor = radioId;
            label.textContent = optionText;
            label.classList.add('text-xs', 'text-slate-700');

            li.appendChild(radio);
            li.appendChild(label);
            optionsContainerEl.appendChild(li);
        });

        feedbackEl.innerHTML = '';
        checkBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
    }

    function ks7CheckScenarioAnswerKSH() {
        const feedbackEl = document.getElementById('ks7ScenarioFeedbackKSH');
        const checkBtn = document.getElementById('ks7CheckScenarioBtnKSH');
        const nextBtn = document.getElementById('ks7NextScenarioBtnKSH');
        const selectedOption = document.querySelector('input[name="ks7_scenario_options"]:checked');

        if (!selectedOption) {
            feedbackEl.innerHTML = '<p class="text-red-500">Please select an option.</p>';
            return;
        }

        const currentScenario = ks7ScenarioDataKSH[currentKS7ScenarioIndexKSH];
        if (selectedOption.value === currentScenario.correctAnswer) {
            feedbackEl.innerHTML = `<p class="text-green-600 font-semibold">Correct!</p><p class="text-xs">${currentScenario.feedback}</p>`;
        } else {
            feedbackEl.innerHTML = `<p class="text-red-600 font-semibold">Incorrect.</p><p class="text-xs">${currentScenario.feedback}</p>`;
        }
        checkBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    }

    window.initializeKS7ScenarioSpotterKSH = function() {
        const checkBtn = document.getElementById('ks7CheckScenarioBtnKSH');
        const nextBtn = document.getElementById('ks7NextScenarioBtnKSH');
        const container = document.getElementById('ks7ScenarioSpotterContainerKSH');

        if (!container || !checkBtn || !nextBtn) {
            console.log("KS7 Scenario Spotter KSH not fully initialized as some elements are missing.");
            return;
        }

        checkBtn.addEventListener('click', ks7CheckScenarioAnswerKSH);
        nextBtn.addEventListener('click', () => {
            currentKS7ScenarioIndexKSH = (currentKS7ScenarioIndexKSH + 1) % ks7ScenarioDataKSH.length;
            ks7LoadScenarioKSH(currentKS7ScenarioIndexKSH);
        });

        ks7LoadScenarioKSH(0); // Load the first scenario
        console.log("KS7 Scenario Spotter KSH Initialized.");
    }
    // --- End of KS7 Scenario Spotter KSH ---

    // --- Term Match Game (TMG) ---
    const termMatchDataTMG = [
        { id: "tmg1", term: "Burden of Proof", definition: "The responsibility of a party to prove the facts of the case. In criminal cases, this rests with the prosecution." },
        { id: "tmg2", term: "Standard of Proof", definition: "The strength of evidence needed to prove a case. In criminal cases, it is 'beyond reasonable doubt'." },
        { id: "tmg3", term: "Presumption of Innocence", definition: "A guarantee that an accused person is considered innocent until proven guilty." },
        { id: "tmg4", term: "Summary Offence", definition: "A minor criminal offence generally heard in the Magistrates' Court." },
        { id: "tmg5", term: "Indictable Offence", definition: "A serious criminal offence, which may be heard before a judge and jury in the County or Supreme Court." },
        { id: "tmg6", term: "Committal Proceeding", definition: "A pre-trial process in the Magistrates' Court for indictable offences to determine if there is sufficient evidence for a conviction." },
        { id: "tmg7", term: "Plea Negotiation", definition: "Discussions between the prosecutor and an accused about the charges, potentially leading to a guilty plea for a lesser charge." }
    ];

    let draggedTermTMG = null;

    function setupTermMatchGameTMG() {
        const termsContainer = document.getElementById('termsContainerTMG');
        const definitionsContainer = document.getElementById('definitionsContainerTMG');
        const feedbackArea = document.getElementById('termMatchFeedbackTMG');
        const checkBtn = document.getElementById('checkTermMatchesBtnTMG');
        const resetBtn = document.getElementById('resetTermMatchGameBtnTMG');

        if (!termsContainer || !definitionsContainer || !feedbackArea || !checkBtn || !resetBtn) {
            console.error("Term Match Game elements missing from DOM for TMG.");
            if (termsContainer) termsContainer.innerHTML = "<p>Error: TMG components not found.</p>";
            return;
        }

        termsContainer.innerHTML = '<h4 class="text-md font-semibold text-purple-700 mb-2 text-center">Terms</h4>';
        definitionsContainer.innerHTML = '<h4 class="text-md font-semibold text-blue-700 mb-2 text-center">Definitions</h4>';
        feedbackArea.innerHTML = '';

        const shuffledTerms = shuffleArray([...termMatchDataTMG]);
        const shuffledDefinitions = shuffleArray([...termMatchDataTMG]); // Separate shuffle for definitions

        shuffledTerms.forEach(item => {
            const termDiv = document.createElement('div');
            termDiv.textContent = item.term;
            termDiv.classList.add('term-item-tmg', 'p-2', 'bg-purple-200', 'rounded', 'cursor-grab', 'mb-2', 'text-sm');
            termDiv.draggable = true;
            termDiv.dataset.id = item.id;
            termDiv.addEventListener('dragstart', handleDragStartTMG);
            termDiv.addEventListener('dragend', handleDragEndTMG);
            termsContainer.appendChild(termDiv);
        });

        shuffledDefinitions.forEach(item => {
            const definitionSlot = document.createElement('div');
            definitionSlot.classList.add('definition-slot-tmg', 'p-3', 'bg-blue-100', 'rounded', 'mb-2', 'min-h-[50px]', 'border-2', 'border-dashed', 'border-blue-300', 'flex', 'items-center', 'justify-center');
            definitionSlot.dataset.matchingId = item.id; // This ID is for the definition itself

            const definitionText = document.createElement('span');
            definitionText.textContent = item.definition;
            definitionText.classList.add('text-sm');
            definitionSlot.appendChild(definitionText);

            definitionSlot.addEventListener('dragover', handleDragOverTMG);
            definitionSlot.addEventListener('dragenter', handleDragEnterTMG);
            definitionSlot.addEventListener('dragleave', handleDragLeaveTMG);
            definitionSlot.addEventListener('drop', handleDropTMG);
            definitionsContainer.appendChild(definitionSlot);
        });

        checkBtn.onclick = checkTermMatchesTMG;
        resetBtn.onclick = setupTermMatchGameTMG;
    }

    function handleDragStartTMG(e) {
        draggedTermTMG = this;
        this.classList.add('dragging', 'opacity-50');
        e.dataTransfer.setData('text/plain', this.dataset.id);
    }

    function handleDragEndTMG() {
        this.classList.remove('dragging', 'opacity-50');
        draggedTermTMG = null;
    }

    function handleDragOverTMG(e) {
        e.preventDefault();
        if (this.classList.contains('definition-slot-tmg')) {
            this.classList.add('drag-over-tmg');
        }
    }

    function handleDragEnterTMG(e) {
        e.preventDefault();
        if (this.classList.contains('definition-slot-tmg')) {
            this.classList.add('drag-over-tmg');
        }
    }

    function handleDragLeaveTMG() {
        this.classList.remove('drag-over-tmg');
    }

    function handleDropTMG(e) {
        e.preventDefault();
        this.classList.remove('drag-over-tmg');
        const termsContainer = document.getElementById('termsContainerTMG');

        if (this.classList.contains('definition-slot-tmg') && draggedTermTMG) {
            // If slot already has a term, move it back to terms container
            if (this.children.length > 1) { // Has definition text (child 0) and a term (child 1)
                const existingTerm = this.querySelector('.term-item-tmg');
                if (existingTerm) {
                    termsContainer.appendChild(existingTerm); // Return to source
                    existingTerm.classList.remove('correct-match-tmg', 'incorrect-match-tmg');
                }
            }
            // Append the dragged term, replacing the definition text temporarily
            // Clone the term to leave original in list until all matched
            // No, actually move the term. If it's already in a slot, it will be moved from there.
             if (draggedTermTMG.parentNode !== this) { // Avoid re-appending to same parent if logic changes
                // Keep definition text, append term alongside it for checking.
                // Clear placeholder text if it's the definition span
                if (this.firstChild && this.firstChild.nodeName === "SPAN" && this.children.length === 1) {
                    // This is the initial definition text, do nothing to it yet.
                    // We will append the term, and on check, compare term's data-id to slot's data-matching-id
                }
             }
            this.appendChild(draggedTermTMG); // Add the term div into the slot
            draggedTermTMG.classList.remove('correct-match-tmg', 'incorrect-match-tmg'); // Clear previous feedback
        }
    }

    function checkTermMatchesTMG() {
        const feedbackArea = document.getElementById('termMatchFeedbackTMG');
        feedbackArea.innerHTML = '';
        let correctCount = 0;
        let totalPlaced = 0;

        document.querySelectorAll('.definition-slot-tmg').forEach(slot => {
            const placedTerm = slot.querySelector('.term-item-tmg');
            const definitionTextSpan = slot.querySelector('span'); // The original definition text

            if (placedTerm) {
                totalPlaced++;
                const termId = placedTerm.dataset.id;
                const correctDefinitionId = slot.dataset.matchingId;

                placedTerm.classList.remove('correct-match-tmg', 'incorrect-match-tmg');
                slot.classList.remove('slot-correct-tmg', 'slot-incorrect-tmg');


                if (termId === correctDefinitionId) {
                    placedTerm.classList.add('correct-match-tmg');
                    slot.classList.add('slot-correct-tmg');
                    correctCount++;
                    // Hide original definition text, show term prominently
                    if(definitionTextSpan) definitionTextSpan.style.display = 'none';
                    placedTerm.style.margin = 'auto'; // Center the term
                } else {
                    placedTerm.classList.add('incorrect-match-tmg');
                    slot.classList.add('slot-incorrect-tmg');
                     if(definitionTextSpan) definitionTextSpan.style.display = 'inline'; // Ensure definition text is visible for incorrect
                }
            } else {
                // Slot is empty, ensure original definition is visible
                if(definitionTextSpan) definitionTextSpan.style.display = 'inline';
                slot.classList.remove('slot-correct-tmg', 'slot-incorrect-tmg');
            }
        });

        if (totalPlaced === 0) {
            feedbackArea.innerHTML = '<p class="text-blue-600">Drag terms to the definition slots to match them.</p>';
        } else if (correctCount === termMatchDataTMG.length && totalPlaced === termMatchDataTMG.length) {
            feedbackArea.innerHTML = `<p class="text-green-600 font-semibold">Congratulations! All ${termMatchDataTMG.length} terms correctly matched!</p>`;
        } else {
            feedbackArea.innerHTML = `<p class="text-orange-600">You have ${correctCount} correct matches out of ${totalPlaced} placed. ${termMatchDataTMG.length - totalPlaced} terms still in the list. Keep trying!</p>`;
        }
    }

    window.initializeTermMatchGameTMG = function() {
        const gameContainer = document.getElementById('u4aos1-term-match-game');
        if (gameContainer) {
            console.log("Initializing Term Match Game (TMG)...");
            setupTermMatchGameTMG();
        } else {
            // console.log("Term Match Game (TMG) container not found on this page or not yet visible.");
        }
    };
    // --- End of Term Match Game (TMG) ---


    // Master Initialization function
    window.initializeKeySkillsHub = function() {
        console.log("Initializing Key Skills Hub submodule...");
        if (document.getElementById('scenarioTermChallengeContainer') && typeof loadSTCQuestion === 'function') {
            loadSTCQuestion(0);
        }
        if (document.getElementById('sourceAnalysisChallengeContainer') && typeof loadSACExcerpt === 'function') {
            loadSACExcerpt(0);
        }
        if (document.getElementById('powerSortGameContainer') && typeof setupPowerSortGame === 'function') {
            setupPowerSortGame(); // Initialize Power Sort
        }
        if (document.getElementById('relationshipMatcherContainer') && typeof setupRelationshipMatcherGame === 'function') {
            setupRelationshipMatcherGame();
        }
        if (document.getElementById('inconsistencyResolverContainerKSH') && typeof loadIRScenarioKSH === 'function') {
            loadIRScenarioKSH(0);
        }
        if (document.getElementById('ks6DopReconstructionContainerKSH') && typeof initializeKS6DOPReconstructionKSH === 'function') {
            initializeKS6DOPReconstructionKSH();
        }
        if (document.getElementById('ks7ScenarioSpotterContainerKSH') && typeof initializeKS7ScenarioSpotterKSH === 'function') {
            initializeKS7ScenarioSpotterKSH();
        }
        if (document.getElementById('u4aos1-term-match-game') && typeof initializeTermMatchGameTMG === 'function') { // Added this line
            initializeTermMatchGameTMG();
        }

        console.log("Key Skills Hub specific tools initialized/re-checked.");
    };

    // Preserve other existing functions and data like PROXY_ENDPOINT_URL, callGeminiAPI, addAIGlossaryExplainers, etc.
    const PROXY_ENDPOINT_URL = "/.netlify/functions/gemini-proxy";
    async function callGeminiAPI(promptText) { /* ... existing implementation ... */ }
    function addAIGlossaryExplainers() { /* ... existing implementation ... */ }
    window.addAIGlossaryExplainers = addAIGlossaryExplainers;
    window.setupCategorizedGlossary = function() { /* ... existing implementation ... */ };
    function ksPitfallsInitializeAccordions() { /* ... existing implementation ... */ }
    function initializeAICoachButtons() { /* ... existing implementation ... */ }

});
