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
// --- Skill 3: Explain law-making powers ---
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
    { id: 'lm10', area: "Criminal Law (general offences)", correctCategory: "residual", constitutionRef: "Not in Cth Const." }
];
let draggedPowerItem = null;

function setupPowerSortGame() {
    if (!powerSortSourceItemsContainer || !powerSortFeedback) return;
    powerSortSourceItemsContainer.innerHTML = '';
    Object.values(powerDropZones).forEach(dz => { 
        if(dz) { 
            const list = dz.querySelector('.dropped-items-list');
            if(list) list.innerHTML = '';
        }
    });
    powerSortFeedback.innerHTML = '';

    shuffleArray([...lawMakingAreasData]).forEach(item => {
        const div = document.createElement('div');
        div.classList.add('power-item');
        div.textContent = item.area;
        div.draggable = true;
        div.dataset.id = item.id;
        div.dataset.correctCategory = item.correctCategory;
        div.dataset.ref = item.constitutionRef;
        div.addEventListener('dragstart', (e) => {
            draggedPowerItem = e.target;
            e.target.classList.add('dragging');
        });
        div.addEventListener('dragend', (e) => {
            if(draggedPowerItem) draggedPowerItem.classList.remove('dragging'); // Check if nullified
            draggedPowerItem = null;
        });
        powerSortSourceItemsContainer.appendChild(div);
    });
}

Object.values(powerDropZones).forEach(zone => {
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
                    list.appendChild(draggedPowerItem);
                    draggedPowerItem.classList.remove('dragging'); // Also remove this after drop
                }
                // draggedPowerItem should be nullified by its dragend event
            }
        });
    }
});

if (powerSortSourceItemsContainer) { // Also make source container a drop zone to return items
    powerSortSourceItemsContainer.addEventListener('dragover', (e) => e.preventDefault());
    powerSortSourceItemsContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedPowerItem) {
            powerSortSourceItemsContainer.appendChild(draggedPowerItem);
            draggedPowerItem.classList.remove('dragging');
        }
    });
}


if (checkPowerSortBtn) {
    checkPowerSortBtn.addEventListener('click', () => {
        if (!powerSortFeedback) return;
        let feedbackHTML = "<ul>";
        let allCorrect = true;
        lawMakingAreasData.forEach(correctItem => {
            const itemElement = document.querySelector(`.power-item[data-id='${correctItem.id}']`);
            if (!itemElement) return;

            itemElement.classList.remove('correct-placement', 'incorrect-placement');
            const parentZone = itemElement.closest('.power-drop-zone');
            let placedCategory = null;
            if (parentZone) {
                if (parentZone.id === 'exclusiveDropZone') placedCategory = 'exclusive';
                else if (parentZone.id === 'concurrentDropZone') placedCategory = 'concurrent';
                else if (parentZone.id === 'residualDropZone') placedCategory = 'residual';
            }

            if (placedCategory === correctItem.correctCategory) {
                itemElement.classList.add('correct-placement');
                feedbackHTML += `<li class="feedback-correct">'${correctItem.area}' is correctly placed as ${correctItem.correctCategory}. Ref: ${correctItem.constitutionRef}</li>`;
            } else if (parentZone) { // Only penalise if placed in a zone
                itemElement.classList.add('incorrect-placement');
                feedbackHTML += `<li class="feedback-incorrect">'${correctItem.area}' is incorrectly placed. It is ${correctItem.correctCategory}. Ref: ${correctItem.constitutionRef}</li>`;
                allCorrect = false;
            } else { // Not placed
                feedbackHTML += `<li class="feedback-incorrect">'${correctItem.area}' was not placed. It is ${correctItem.correctCategory}. Ref: ${correctItem.constitutionRef}</li>`;
                allCorrect = false;
            }
        });
        feedbackHTML += "</ul>";
        if (allCorrect && document.querySelectorAll('#powerSortSourceItems .power-item').length === 0) { // Check if source is empty too
            powerSortFeedback.innerHTML = "<p class='text-green-600 font-semibold'>All areas classified correctly!</p>" + feedbackHTML;
        } else {
            powerSortFeedback.innerHTML = feedbackHTML;
        }
    });
}

if (resetPowerSortBtn) {
    resetPowerSortBtn.addEventListener('click', setupPowerSortGame);
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

}); // End of DOMContentLoaded for keySkillsHub.js
