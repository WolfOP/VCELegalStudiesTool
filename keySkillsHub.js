document.addEventListener('DOMContentLoaded', function () {
    // --- Skill 1: Define and use legal terminology ---
    const goToGlossaryBtn = document.getElementById('goToGlossaryBtn');
    const stcQuestionArea = document.getElementById('stcQuestionArea');
    const stcOptionsArea = document.getElementById('stcOptionsArea');
    const stcCheckAnswerBtn = document.getElementById('stcCheckAnswerBtn');
    const stcNextQuestionBtn = document.getElementById('stcNextQuestionBtn');
    const stcFeedbackArea = document.getElementById('stcFeedbackArea');

    const scenarioTermChallenges = [
        {
            scenario: "Parliament passes a law that directly contradicts a previous High Court ruling on a non-constitutional common law matter.",
            options: ["Statutory Interpretation", "Abrogation of Common Law", "Codification of Common Law", "Judicial Activism"],
            answerIndex: 1,
            explanation: "Abrogation of common law occurs when parliament passes legislation that overrides or cancels a common law principle established by courts (except High Court constitutional interpretations)."
        },
        {
            scenario: "The High Court is asked to determine the meaning of the word 'vehicle' in a new Commonwealth Act regulating transport emissions, as the Act does not define it and new types of electric scooters have become popular.",
            options: ["Doctrine of Precedent", "Section 109", "Statutory Interpretation", "Residual Powers"],
            answerIndex: 2,
            explanation: "Statutory interpretation is the process where courts give meaning to words in legislation when applying it to a case, especially when words are ambiguous or new circumstances arise."
        },
        {
            scenario: "A judge in the County Court of Victoria is deciding a case with similar facts to a case previously decided by the Supreme Court of Victoria (Court of Appeal).",
            options: ["Persuasive Precedent", "Binding Precedent", "Obiter Dictum", "Distinguishing Precedent"],
            answerIndex: 1,
            explanation: "Binding precedent means the legal reasoning of a higher court in the same hierarchy must be followed by lower courts in that hierarchy when dealing with similar material facts."
        }
    ];
    let currentSTCQuestion = 0;

    function loadSTCQuestion(index) {
        if (!stcQuestionArea || !stcOptionsArea || index >= scenarioTermChallenges.length) return;
        const q = scenarioTermChallenges[index];
        stcQuestionArea.textContent = q.scenario;
        stcOptionsArea.innerHTML = '';
        q.options.forEach((option, i) => {
            stcOptionsArea.innerHTML += `
                <div>
                    <input type="radio" name="stcOption" id="stcOpt${i}" value="${i}" class="sr-only">
                    <label for="stcOpt${i}" class="stc-option-label">${option}</label>
                </div>
            `;
        });
        if (stcFeedbackArea) stcFeedbackArea.innerHTML = '';
        if (stcCheckAnswerBtn) stcCheckAnswerBtn.classList.remove('hidden');
        if (stcNextQuestionBtn) stcNextQuestionBtn.classList.add('hidden');
    }
    if (goToGlossaryBtn) {
        goToGlossaryBtn.addEventListener('click', () => {
            const glossaryToggleBtn = document.querySelector('button.u4aos1-content-toggle[data-target="u4aos1-glossary"]');
            if (glossaryToggleBtn) {
                glossaryToggleBtn.click();
                const glossarySection = document.getElementById('u4aos1-glossary');
                if (glossarySection) glossarySection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    if (stcCheckAnswerBtn) {
        stcCheckAnswerBtn.addEventListener('click', () => {
            const selectedOption = document.querySelector('input[name="stcOption"]:checked');
            if (!selectedOption || !stcFeedbackArea) {
                stcFeedbackArea.textContent = "Please select an option.";
                stcFeedbackArea.className = 'mt-2 text-xs text-amber-600';
                return;
            }
            const userAnswerIndex = parseInt(selectedOption.value);
            const correctAnswerIndex = scenarioTermChallenges[currentSTCQuestion].answerIndex;
            const explanation = scenarioTermChallenges[currentSTCQuestion].explanation;

            if (userAnswerIndex === correctAnswerIndex) {
                stcFeedbackArea.innerHTML = `<span class="correct">Correct!</span> ${explanation}`;
                stcFeedbackArea.className = 'mt-2 text-xs text-green-700';
            } else {
                stcFeedbackArea.innerHTML = `<span class="incorrect">Incorrect.</span> The correct answer is '${scenarioTermChallenges[currentSTCQuestion].options[correctAnswerIndex]}'. ${explanation}`;
                stcFeedbackArea.className = 'mt-2 text-xs text-red-700';
            }
            stcCheckAnswerBtn.classList.add('hidden');
            if (stcNextQuestionBtn) stcNextQuestionBtn.classList.remove('hidden');
        });
    }

    if (stcNextQuestionBtn) {
        stcNextQuestionBtn.addEventListener('click', () => {
            currentSTCQuestion++;
            if (currentSTCQuestion >= scenarioTermChallenges.length) {
                currentSTCQuestion = 0;
                if (stcQuestionArea) stcQuestionArea.textContent = "Term Challenge Complete! Resetting...";
                if (stcOptionsArea) stcOptionsArea.innerHTML = "";
            }
            loadSTCQuestion(currentSTCQuestion);
        });
    }

    // --- Skill 2: Discuss, interpret and analyse legal principles ---
    const sacExcerptArea = document.getElementById('sacExcerptArea');
    const sacQuestionArea = document.getElementById('sacQuestionArea');
    const sacAnswerInput = document.getElementById('sacAnswerInput');
    const sacCheckAnswerBtn = document.getElementById('sacCheckAnswerBtn');
    const sacNextExcerptBtn = document.getElementById('sacNextExcerptBtn');
    const sacFeedbackArea = document.getElementById('sacFeedbackArea');

    const sourceAnalysisChallenges = [
        {
            excerpt: "Section 109 of the Australian Constitution states: 'When a law of a State is inconsistent with a law of the Commonwealth, the latter shall prevail, and the former shall, to the extent of the inconsistency, be invalid.'",
            question: "Analyse this excerpt. What is the core legal principle established by Section 109, and what is one significant implication for state parliaments?",
            keywords: ["inconsistency", "commonwealth law prevails", "state law invalid", "concurrent powers", "restricts state power", "ensures uniformity"]
        },
        {
            excerpt: "In *R v Brislan (1935)*, the High Court had to interpret the phrase 'postal, telegraphic, telephonic, and other like services' in section 51(v) of the Constitution to determine if it included radio broadcasting. The Court found that it did.",
            question: "Interpret this information. What process did the High Court undertake, and what was a key effect of its decision on the division of law-making powers?",
            keywords: ["statutory interpretation", "constitutional interpretation", "broadened commonwealth power", "s51(v)", "communication", "division of powers", "concurrent power"]
        }
    ];
    let currentSACExcerpt = 0;

    function loadSACExcerpt(index) {
        if (!sacExcerptArea || !sacQuestionArea || !sacAnswerInput || index >= sourceAnalysisChallenges.length) return;
        const q = sourceAnalysisChallenges[index];
        sacExcerptArea.innerHTML = q.excerpt;
        sacQuestionArea.textContent = q.question;
        sacAnswerInput.value = '';
        if (sacFeedbackArea) sacFeedbackArea.innerHTML = '';
        if (sacCheckAnswerBtn) sacCheckAnswerBtn.classList.remove('hidden');
        if (sacNextExcerptBtn) sacNextExcerptBtn.classList.add('hidden');
    }

    if (sacCheckAnswerBtn) {
        sacCheckAnswerBtn.addEventListener('click', () => {
            if (!sacAnswerInput || !sacFeedbackArea) return;
            const userAnswer = sacAnswerInput.value.toLowerCase();
            const keywords = sourceAnalysisChallenges[currentSACExcerpt].keywords;
            let feedbackHTML = "<h5>Feedback on your analysis:</h5><ul class='list-disc list-inside'>";
            let metAll = true;

            keywords.forEach(keyword => {
                if (userAnswer.includes(keyword.toLowerCase())) {
                    feedbackHTML += `<li class="feedback-item met">Point on '${keyword}' seems addressed.</li>`;
                } else {
                    feedbackHTML += `<li class="feedback-item not-met">Consider addressing: '${keyword}'.</li>`;
                    metAll = false;
                }
            });
            feedbackHTML += "</ul>";
            if(metAll) feedbackHTML = "<p class='text-green-600 font-semibold'>Good analysis, key points covered!</p>" + feedbackHTML;

            sacFeedbackArea.innerHTML = feedbackHTML;
            sacCheckAnswerBtn.classList.add('hidden');
            if (sacNextExcerptBtn) sacNextExcerptBtn.classList.remove('hidden');
        });
    }

    if (sacNextExcerptBtn) {
        sacNextExcerptBtn.addEventListener('click', () => {
            currentSACExcerpt++;
            if (currentSACExcerpt >= sourceAnalysisChallenges.length) {
                currentSACExcerpt = 0;
                if(sacExcerptArea) sacExcerptArea.textContent = "Source Analysis Complete! Resetting...";
                if(sacQuestionArea) sacQuestionArea.textContent = "";
            }
            loadSACExcerpt(currentSACExcerpt);
        });
    }

    // --- Skill 3: Explain law-making powers (Power Classification Sort) ---
    const powerSortSourceItemsContainer = document.getElementById('powerSortSourceItems');
    const powerDropZones = {
        exclusive: document.getElementById('exclusiveDropZone'),
        concurrent: document.getElementById('concurrentDropZone'),
        residual: document.getElementById('residualDropZone')
    };
    const checkPowerSortBtn = document.getElementById('checkPowerSortBtn');
    const resetPowerSortBtn = document.getElementById('resetPowerSortBtn');
    const powerSortFeedback = document.getElementById('powerSortFeedback');

    const lawMakingAreasData = [
        { id: 'lm1', area: "Defence Force Matters", correctCategory: "exclusive", constitutionRef: "s51(vi), s114" },
        { id: 'lm2', area: "Primary School Education", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm3', area: "Taxation (Income Tax)", correctCategory: "concurrent", constitutionRef: "s51(ii)" },
        { id: 'lm4', area: "Marriage and Divorce", correctCategory: "concurrent", constitutionRef: "s51(xxi), (xxii)" },
        { id: 'lm5', area: "Coining Money (Currency)", correctCategory: "exclusive", constitutionRef: "s51(xii), s115" },
        { id: 'lm6', area: "Local Road Rules", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm7', area: "Customs and Excise Duties", correctCategory: "exclusive", constitutionRef: "s51(ii), s90" },
        { id: 'lm8', area: "Public Transport Systems", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm9', area: "Banking (not state banking)", correctCategory: "concurrent", constitutionRef: "s51(xiii)" },
        { id: 'lm10', area: "Criminal Law (general offences)", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm11', area: "External Affairs (Treaties)", correctCategory: "exclusive", constitutionRef: "s51(xxix) - Cth power, states limited" },
        { id: 'lm12', area: "Immigration and Emigration", correctCategory: "exclusive", constitutionRef: "s51(xxvii)" }
    ];
    let draggedPowerItem = null;

    function shuffleArray(array) { // Re-usable shuffle function
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    window.setupPowerSortGame = function() { // Expose to window if called from script.js
        if (!powerSortSourceItemsContainer || !powerSortFeedback || !powerDropZones.exclusive) {
            // console.warn("Power Sort Game elements not found, skipping setup.");
            return;
        }
        powerSortSourceItemsContainer.innerHTML = '';
        Object.values(powerDropZones).forEach(dz => { 
            if(dz) { 
                const list = dz.querySelector('.dropped-items-list');
                if(list) list.innerHTML = '';
                 dz.classList.remove('drag-over'); // Reset drag-over state
            }
        });
        powerSortFeedback.innerHTML = '';

        shuffleArray([...lawMakingAreasData]).forEach(item => {
            const div = document.createElement('div');
            div.classList.add('power-item');
            div.textContent = item.area;
            div.draggable = true;
            div.dataset.id = item.id;
            // Store correct category and ref for checking later
            div.dataset.correctCategory = item.correctCategory; 
            div.dataset.ref = item.constitutionRef;

            div.addEventListener('dragstart', (e) => {
                draggedPowerItem = e.target;
                setTimeout(() => e.target.classList.add('dragging'), 0); // Timeout for visual effect
            });
            div.addEventListener('dragend', (e) => {
                if(draggedPowerItem) draggedPowerItem.classList.remove('dragging');
                draggedPowerItem = null;
            });
            powerSortSourceItemsContainer.appendChild(div);
        });
    }

    Object.entries(powerDropZones).forEach(([key, zone]) => {
        if(zone) {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.classList.add('drag-over');
            });
            zone.addEventListener('dragleave', (e) => {
                zone.classList.remove('drag-over');
            });
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                if (draggedPowerItem) {
                    const list = zone.querySelector('.dropped-items-list');
                    if(list) {
                        list.appendChild(draggedPowerItem); // Move the item
                        // draggedPowerItem is nullified in its dragend event
                    }
                }
            });
        }
    });

    if (powerSortSourceItemsContainer) { // Allow dragging items back to the source container
        powerSortSourceItemsContainer.addEventListener('dragover', (e) => e.preventDefault());
        powerSortSourceItemsContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedPowerItem && !powerSortSourceItemsContainer.contains(draggedPowerItem)) { // Check if not already in source
                powerSortSourceItemsContainer.appendChild(draggedPowerItem);
            }
        });
    }


    if (checkPowerSortBtn) {
        checkPowerSortBtn.addEventListener('click', () => {
            if (!powerSortFeedback) return;
            let feedbackHTML = "<ul>";
            let allCorrectlyPlacedAndAllItemsPlaced = true;
            let itemsInSourceCount = powerSortSourceItemsContainer.querySelectorAll('.power-item').length;

            lawMakingAreasData.forEach(correctItemData => {
                const itemElement = document.querySelector(`.power-item[data-id='${correctItemData.id}']`);
                if (!itemElement) return;

                itemElement.classList.remove('correct-placement', 'incorrect-placement');
                const parentZoneDiv = itemElement.closest('.power-drop-zone');
                let placedCategoryKey = null;

                if (parentZoneDiv) {
                    for (const [key, zoneDiv] of Object.entries(powerDropZones)) {
                        if (zoneDiv === parentZoneDiv) {
                            placedCategoryKey = key;
                            break;
                        }
                    }
                }

                if (placedCategoryKey === correctItemData.correctCategory) {
                    itemElement.classList.add('correct-placement');
                    feedbackHTML += `<li class="feedback-correct">'${correctItemData.area}' is correctly placed as ${correctItemData.correctCategory}. (Ref: ${correctItemData.constitutionRef})</li>`;
                } else if (parentZoneDiv) { // Placed, but in wrong zone
                    itemElement.classList.add('incorrect-placement');
                    feedbackHTML += `<li class="feedback-incorrect">'${correctItemData.area}' is incorrectly placed in '${placedCategoryKey}'. Correct is: ${correctItemData.correctCategory}. (Ref: ${correctItemData.constitutionRef})</li>`;
                    allCorrectlyPlacedAndAllItemsPlaced = false;
                } else { // Not placed in any zone (still in source)
                    feedbackHTML += `<li class="feedback-incorrect">'${correctItemData.area}' was not placed. It is ${correctItemData.correctCategory}. (Ref: ${correctItemData.constitutionRef})</li>`;
                    allCorrectlyPlacedAndAllItemsPlaced = false;
                }
            });
            feedbackHTML += "</ul>";

            if (allCorrectlyPlacedAndAllItemsPlaced && itemsInSourceCount === 0) {
                powerSortFeedback.innerHTML = "<p class='text-green-600 font-semibold'>All areas classified correctly!</p>" + feedbackHTML;
            } else if (itemsInSourceCount > 0) {
                 powerSortFeedback.innerHTML = "<p class='text-orange-600 font-semibold'>Some items are not yet classified. Please drag all items to a category.</p>" + feedbackHTML;
            } else {
                powerSortFeedback.innerHTML = "<p class='text-red-600 font-semibold'>Some classifications are incorrect. Review the feedback.</p>" + feedbackHTML;
            }
        });
    }

    if (resetPowerSortBtn) {
        resetPowerSortBtn.addEventListener('click', () => {
            if(typeof window.setupPowerSortGame === 'function') window.setupPowerSortGame();
        });
    }

    // --- Skill 4: Analyse the relationship between parliament and courts ---
    const relationshipScenariosSourceContainer = document.getElementById('relationshipScenariosSource');
    const relationshipQuadrants = {
        supremacy: document.getElementById('supremacyQuadrant'),
        influence: document.getElementById('influenceQuadrant'),
        codification: document.getElementById('codificationQuadrant'),
        interpretation: document.getElementById('interpretationQuadrant')
    };
    const checkRelationshipMatchesBtn = document.getElementById('checkRelationshipMatchesBtn');
    const resetRelationshipMatcherBtn = document.getElementById('resetRelationshipMatcherBtn');
    const relationshipMatcherFeedback = document.getElementById('relationshipMatcherFeedback');

    const relationshipScenariosData = [
        { id: 'rs1', text: "Parliament passes an Act that changes a common law rule established by a recent Supreme Court decision regarding contract law.", correctQuadrant: "supremacy" },
        { id: 'rs2', text: "In a judgment, a High Court judge comments that a particular piece of Commonwealth legislation is unclear and causing confusion, suggesting Parliament may wish to clarify it.", correctQuadrant: "influence" },
        { id: 'rs3', text: "Following the Mabo (No.2) decision which recognised native title, the Commonwealth Parliament enacted the Native Title Act 1993 (Cth).", correctQuadrant: "codification" },
        { id: 'rs4', text: "A court is asked to determine if a new type of online service falls under the definition of 'broadcasting service' in an existing Act.", correctQuadrant: "interpretation" },
        { id: 'rs5', text: "Parliament creates a new law establishing specific penalties for cyberbullying, an area where common law was previously undeveloped.", correctQuadrant: "supremacy" },
        { id: 'rs6', text: "A judge, when sentencing, notes the limitations of current sentencing options under an Act and suggests legislative reform may be needed to address community concerns about a specific type of offence.", correctQuadrant: "influence" },
        { id: 'rs7', text: "The High Court decision in *Deing v Tarola* led to a clearer understanding of what constitutes a 'regulated weapon' under Victorian law.", correctQuadrant: "interpretation" },
        { id: 'rs8', text: "After a series of court cases highlighted inconsistencies in how negligence was applied in medical contexts, Parliament passed a comprehensive Civil Liability Act.", correctQuadrant: "codification"} // This could also be abrogation if it changed principles, or supremacy creating new law. For this game, let's aim for codification if it affirms.
    ];
    let draggedScenarioItem = null;

    function setupRelationshipMatcherGame() {
        if (!relationshipScenariosSourceContainer || !relationshipMatcherFeedback) return;
        relationshipScenariosSourceContainer.innerHTML = '';
         Object.values(relationshipQuadrants).forEach(q => {
            if(q) {
                const list = q.querySelector('.dropped-scenarios-list');
                if (list) list.innerHTML = '';
            }
        });
        relationshipMatcherFeedback.innerHTML = '';

        shuffleArray([...relationshipScenariosData]).forEach(item => {
            const div = document.createElement('div');
            div.classList.add('relationship-scenario-item');
            div.textContent = item.text;
            div.draggable = true;
            div.dataset.id = item.id;
            div.dataset.correctQuadrant = item.correctQuadrant;
            div.addEventListener('dragstart', (e) => {
                draggedScenarioItem = e.target;
                e.target.classList.add('dragging');
            });
            div.addEventListener('dragend', (e) => {
                if(draggedScenarioItem) draggedScenarioItem.classList.remove('dragging');
                draggedScenarioItem = null;
            });
            relationshipScenariosSourceContainer.appendChild(div);
        });
    }

    Object.entries(relationshipQuadrants).forEach(([key, quadrant]) => {
        if(quadrant) {
            quadrant.addEventListener('dragover', (e) => {
                e.preventDefault();
                quadrant.classList.add('drag-over');
            });
            quadrant.addEventListener('dragleave', (e) => {
                quadrant.classList.remove('drag-over');
            });
            quadrant.addEventListener('drop', (e) => {
                e.preventDefault();
                quadrant.classList.remove('drag-over');
                if (draggedScenarioItem) {
                    const list = quadrant.querySelector('.dropped-scenarios-list');
                    if(list) list.appendChild(draggedScenarioItem);
                    draggedScenarioItem.classList.remove('dragging');
                }
            });
        }
    });

    if (relationshipScenariosSourceContainer) { // Also make source container a drop zone to return items
        relationshipScenariosSourceContainer.addEventListener('dragover', (e) => e.preventDefault());
        relationshipScenariosSourceContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedScenarioItem) {
                relationshipScenariosSourceContainer.appendChild(draggedScenarioItem);
                draggedScenarioItem.classList.remove('dragging');
            }
        });
    }

    if (checkRelationshipMatchesBtn) {
        checkRelationshipMatchesBtn.addEventListener('click', () => {
            if (!relationshipMatcherFeedback) return;
            let feedbackHTML = "<ul>";
            let allCorrect = true;

            relationshipScenariosData.forEach(correctItem => {
                const itemElement = document.querySelector(`.relationship-scenario-item[data-id='${correctItem.id}']`);
                if (!itemElement) return;

                itemElement.classList.remove('correct-match', 'incorrect-match');
                const parentQuadrantDiv = itemElement.closest('.relationship-quadrant');
                let placedQuadrantKey = null;
                if (parentQuadrantDiv) {
                    for (const [key, quadDiv] of Object.entries(relationshipQuadrants)) {
                        if (quadDiv === parentQuadrantDiv) {
                            placedQuadrantKey = key;
                            break;
                        }
                    }
                }

                if (placedQuadrantKey === correctItem.correctQuadrant) {
                    itemElement.classList.add('correct-match');
                    feedbackHTML += `<li class="feedback-correct">Scenario starting "${correctItem.text.substring(0,30)}..." is correctly matched to ${correctItem.correctQuadrant}.</li>`;
                } else if (parentQuadrantDiv) {
                    itemElement.classList.add('incorrect-match');
                    feedbackHTML += `<li class="feedback-incorrect">Scenario starting "${correctItem.text.substring(0,30)}..." is incorrectly matched. Correct is: ${correctItem.correctQuadrant}.</li>`;
                    allCorrect = false;
                } else {
                    feedbackHTML += `<li class="feedback-incorrect">Scenario starting "${correctItem.text.substring(0,30)}..." was not matched. Correct is: ${correctItem.correctQuadrant}.</li>`;
                    allCorrect = false;
                }
            });
            feedbackHTML += "</ul>";
             if (allCorrect && document.querySelectorAll('#relationshipScenariosSource .relationship-scenario-item').length === 0) {
                relationshipMatcherFeedback.innerHTML = "<p class='text-green-600 font-semibold'>All scenarios matched correctly!</p>" + feedbackHTML;
            } else {
                relationshipMatcherFeedback.innerHTML = feedbackHTML;
            }
        });
    }

    if (resetRelationshipMatcherBtn) {
        resetRelationshipMatcherBtn.addEventListener('click', setupRelationshipMatcherGame);
    }

    // --- Gemini API Integration ---
    // REMOVE or leave empty: const GEMINI_API_KEY = ""; 
    // The API key will now be handled by your server-side proxy.

    // **IMPORTANT**: Replace this URL with the actual URL of your deployed serverless proxy function.
    // For local testing, you might run a local proxy server and use something like 'http://localhost:3001/api/gemini-proxy'.
    // For Netlify/Vercel, it might be a relative path like '/.netlify/functions/gemini-proxy' or '/api/gemini-proxy'.
    const PROXY_ENDPOINT_URL = "/.netlify/functions/gemini-proxy"; 

    async function callGeminiAPI(promptText) {
        if (PROXY_ENDPOINT_URL === "YOUR_DEPLOYED_SERVERLESS_FUNCTION_URL_HERE" || PROXY_ENDPOINT_URL === "") {
            const errorMessage = "Proxy endpoint URL is not configured. Please update PROXY_ENDPOINT_URL in keySkillsHub.js.";
            console.error(errorMessage);
            // Update UI with this specific error
            const activeAIContentDiv = document.querySelector('.ai-explanation-content:not([style*="display: none"])');
            if (activeAIContentDiv) {
                activeAIContentDiv.innerHTML = `<span class="text-red-600 font-semibold">Configuration Error:</span> ${errorMessage}`;
                activeAIContentDiv.classList.remove('loading-ai'); // Ensure loading state is removed
            }
            const aiCaseInsightErrorEl = document.getElementById('aiCaseInsightError');
            if (aiCaseInsightErrorEl) {
                aiCaseInsightErrorEl.textContent = errorMessage;
                aiCaseInsightErrorEl.classList.remove('hidden');
                const aiCaseInsightLoadingEl = document.getElementById('aiCaseInsightLoading');
                if(aiCaseInsightLoadingEl) aiCaseInsightLoadingEl.classList.add('hidden');
            }
            // Disable buttons if relevant
            const getAICaseInsightBtnEl = document.getElementById('getAICaseInsightBtn');
            if(getAICaseInsightBtnEl) getAICaseInsightBtnEl.disabled = false;
            const activeExplainBtn = document.querySelector('.ai-explain-further-btn:disabled');
            if(activeExplainBtn) activeExplainBtn.disabled = false;

            throw new Error(errorMessage);
        }

        try {
            const response = await fetch(PROXY_ENDPOINT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: promptText })
            });

            if (!response.ok) {
                let errorPayload;
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    errorPayload = await response.json(); // Read body once as JSON
                } else {
                    const textError = await response.text(); // Read body once as text
                    errorPayload = { error: { message: textError || "Proxy returned non-JSON error" } };
                }
                console.error("Proxy API Error Response:", errorPayload);
                const errorMessage = errorPayload?.error?.message || errorPayload?.message || response.statusText || 'Unknown proxy error.';
                throw new Error(`Proxy Error: ${response.status}. ${errorMessage}`);
            }

            const result = await response.json();

            if (result && result.text) {
                return result.text;
            } else if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                console.warn("Proxy returned full Gemini structure. Consider simplifying proxy response to { text: '...' }.");
                return result.candidates[0].content.parts[0].text;
            } else {
                console.error("Proxy API Response Unexpected Structure:", result);
                throw new Error("Could not extract text from proxy response. Ensure proxy returns { text: '...' } or standard Gemini structure.");
            }
        } catch (error) {
            console.error("Error calling Proxy API or processing response:", error);
            // Update UI with this error
            const activeAIContentDiv = document.querySelector('.ai-explanation-content:not([style*="display: none"])');
            if (activeAIContentDiv) {
                activeAIContentDiv.innerHTML = `<span class=\"text-red-600 font-semibold\">Error:</span> ${error.message}`;
                activeAIContentDiv.classList.remove('loading-ai');
            }
            const aiCaseInsightErrorEl = document.getElementById('aiCaseInsightError');
            if (aiCaseInsightErrorEl) {
                aiCaseInsightErrorEl.textContent = `Error: ${error.message}`;
                aiCaseInsightErrorEl.classList.remove('hidden');
                const aiCaseInsightLoadingEl = document.getElementById('aiCaseInsightLoading');
                if(aiCaseInsightLoadingEl) aiCaseInsightLoadingEl.classList.add('hidden');
            }
            // Re-enable buttons that might have been disabled
            const getAICaseInsightBtnEl = document.getElementById('getAICaseInsightBtn');
            if(getAICaseInsightBtnEl) getAICaseInsightBtnEl.disabled = false;
            const activeExplainBtn = document.querySelector('.ai-explain-further-btn:disabled');
            if(activeExplainBtn) activeExplainBtn.disabled = false;
            
            throw error; 
        }
    }

    // --- Feature 1: "Explain This Concept Further ✨" for Glossary ---
    function addAIGlossaryExplainers() {
        const glossaryItems = document.querySelectorAll('#categorizedGlossaryContainer .glossary-item');
        glossaryItems.forEach(itemDiv => {
            const termStrong = itemDiv.querySelector('.glossary-term');
            if (!termStrong) return;

            // Check if button already exists
            if (itemDiv.querySelector('.ai-explain-further-btn')) return;

            const termName = termStrong.textContent.replace(":", "").trim();

            const explainBtn = document.createElement('button');
            explainBtn.classList.add('ai-explain-further-btn');
            explainBtn.innerHTML = "Explain Further ✨";
            explainBtn.title = `Get an AI explanation for "${termName}"`;

            const aiContentDiv = document.createElement('div');
            aiContentDiv.classList.add('ai-explanation-content');
            aiContentDiv.style.display = 'none';

            termStrong.insertAdjacentElement('afterend', explainBtn);
            itemDiv.appendChild(aiContentDiv);

            explainBtn.addEventListener('click', async () => {
                if (aiContentDiv.style.display === 'block' && aiContentDiv.innerHTML !== "" && !aiContentDiv.classList.contains('loading-ai')) {
                    aiContentDiv.style.display = 'none';
                    return;
                }

                aiContentDiv.style.display = 'block';
                aiContentDiv.innerHTML = '<span>Loading AI explanation...</span>';
                aiContentDiv.classList.add('loading-ai');
                explainBtn.disabled = true;

                try {
                    const prompt = `Explain the legal term "${termName}" in the context of VCE Legal Studies in Australia. Keep the explanation concise (around 2-4 sentences) and suitable for a Year 12 student. Focus on its core meaning and relevance.`;
                    const explanation = await callGeminiAPI(prompt);
                    aiContentDiv.innerHTML = explanation.replace(/\n/g, '<br>');
                } catch (error) {
                    aiContentDiv.innerHTML = `Sorry, couldn't fetch an explanation at this time. Error: ${error.message}`;
                } finally {
                    aiContentDiv.classList.remove('loading-ai');
                    explainBtn.disabled = false;
                }
            });
        });
    }

    // --- Feature 2: "Get AI Insights on this Case ✨" for Case Explorer ---
    const aiCaseInsightContainer = document.getElementById('aiCaseInsightContainer');
    const getAICaseInsightBtn = document.getElementById('getAICaseInsightBtn');
    const aiCaseInsightLoading = document.getElementById('aiCaseInsightLoading');
    const aiCaseInsightResult = document.getElementById('aiCaseInsightResult');
    const aiCaseInsightError = document.getElementById('aiCaseInsightError');
    const caseSelectExplorerInstance = document.getElementById('caseSelectExplorer');

    if (getAICaseInsightBtn && caseSelectExplorerInstance && aiCaseInsightContainer && aiCaseInsightLoading && aiCaseInsightResult && aiCaseInsightError) {
        caseSelectExplorerInstance.addEventListener('change', function() {
            if (this.value && this.value !== "") {
                aiCaseInsightContainer.classList.remove('hidden');
                aiCaseInsightResult.innerHTML = "";
                aiCaseInsightError.classList.add('hidden');
                aiCaseInsightError.textContent = "";
            } else {
                aiCaseInsightContainer.classList.add('hidden');
            }
        });

        getAICaseInsightBtn.addEventListener('click', async () => {
            const selectedCaseKey = caseSelectExplorerInstance.value;
            const caseData = window.caseExplorerData && window.caseExplorerData[selectedCaseKey];

            if (!caseData) {
                aiCaseInsightError.textContent = "Please select a case first.";
                aiCaseInsightError.classList.remove('hidden');
                return;
            }

            aiCaseInsightLoading.classList.remove('hidden');
            aiCaseInsightResult.innerHTML = "";
            aiCaseInsightError.classList.add('hidden');
            getAICaseInsightBtn.disabled = true;

            try {
                const prompt = `For the VCE Legal Studies case "${caseData.name}", provide a concise AI-generated insight. Focus on its core significance and impact on Australian law, suitable for a Year 12 student. The known details are: ${caseData.details.replace(/<[^>]*>/g, ' ')}. Explain its importance in 3-5 key sentences.`;
                const insight = await callGeminiAPI(prompt);
                aiCaseInsightResult.innerHTML = insight.replace(/\n/g, '<br>');
            } catch (error) {
                aiCaseInsightError.textContent = `Sorry, couldn't fetch AI insights for this case. Error: ${error.message}`;
                aiCaseInsightError.classList.remove('hidden');
            } finally {
                aiCaseInsightLoading.classList.add('hidden');
                getAICaseInsightBtn.disabled = false;
            }
        });
    } else {
        console.warn("One or more AI Case Insight elements are missing from the DOM.");
    }

    // Make sure to call addAIGlossaryExplainers when the glossary is displayed/populated.
    window.addAIGlossaryExplainers = addAIGlossaryExplainers;
});

// Modify initializeKeySkillsHub to include new setups
function initializeKeySkillsHub() {
    console.log("Key Skills Hub Initialized or Re-initialized");
    // Existing initializations
    if (document.getElementById('scenarioTermChallengeContainer')) loadSTCQuestion(currentSTCQuestion);
    if (document.getElementById('sourceAnalysisChallengeContainer')) loadSACExcerpt(currentSACExcerpt);

    // NEW initializations
    if (document.getElementById('powerSortGameContainer')) setupPowerSortGame();
    if (document.getElementById('relationshipMatcherContainer')) setupRelationshipMatcherGame();
    // Add other initializations for future key skill activities here
}
window.initializeKeySkillsHub = initializeKeySkillsHub; // Ensure it's globally accessible

window.setupCategorizedGlossary = function() { // Expose to window
    if (!categorizedGlossaryContainer) {
        console.error("Glossary container not found!");
        return;
    }
    // Use explicit mapping to match index.html IDs exactly
    const categoryMappings = {
        "The Australian Constitution": "glossaryCategory-the-australian-constitution",
        "Parliament and Statute Law": "glossaryCategory-parliament-and-statute-law",
        "Courts and Common Law": "glossaryCategory-courts-and-common-law",
        "Key Legal Principles and Rights (Overarching)": "glossaryCategory-key-legal-principles-and-rights-overarching",
        "Government, Politics, and Law Reform": "glossaryCategory-government-politics-and-law-reform",
        "VCE Legal Studies Meta-Terms": "glossaryCategory-vce-legal-studies-meta-terms"
    };

    Object.values(categoryMappings).forEach(id => {
        const div = document.getElementById(id);
        if (div) div.innerHTML = ''; // Clear previous terms
    });

    Object.entries(categorizedGlossaryData).forEach(([categoryName, terms]) => {
        const categoryKey = categoryMappings[categoryName]; // <-- Ensure this matches HTML IDs
        const categoryDiv = document.getElementById(categoryKey);
        if (categoryDiv) {
            terms.sort((a, b) => a.term.localeCompare(b.term));
            terms.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('glossary-item');
                const termStrong = document.createElement('strong');
                termStrong.classList.add('glossary-term');
                termStrong.textContent = item.term + ":";
                const defSpan = document.createElement('span');
                defSpan.classList.add('glossary-definition');
                defSpan.textContent = item.definition;
                itemDiv.appendChild(termStrong);
                itemDiv.appendChild(defSpan);
                categoryDiv.appendChild(itemDiv);
                termStrong.addEventListener('click', () => {
                    defSpan.style.display = defSpan.style.display === 'block' ? 'none' : 'block';
                });
            });
        } else {
            console.warn("Could not find div for category ID:", categoryKey, "(Derived from: ", categoryName, ")");
        }
    });
    // After populating, add AI explainers if the function exists
    if (typeof window.addAIGlossaryExplainers === 'function') {
        window.addAIGlossaryExplainers();
    }
}



