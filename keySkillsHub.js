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
            answerIndex: 1, // Abrogation of Common Law
            explanation: "Abrogation of common law occurs when parliament passes legislation that overrides or cancels a common law principle established by courts (except High Court constitutional interpretations)."
        },
        {
            scenario: "The High Court is asked to determine the meaning of the word 'vehicle' in a new Commonwealth Act regulating transport emissions, as the Act does not define it and new types of electric scooters have become popular.",
            options: ["Doctrine of Precedent", "Section 109", "Statutory Interpretation", "Residual Powers"],
            answerIndex: 2, // Statutory Interpretation
            explanation: "Statutory interpretation is the process where courts give meaning to words in legislation when applying it to a case, especially when words are ambiguous or new circumstances arise."
        },
        {
            scenario: "A judge in the County Court of Victoria is deciding a case with similar facts to a case previously decided by the Supreme Court of Victoria (Court of Appeal).",
            options: ["Persuasive Precedent", "Binding Precedent", "Obiter Dictum", "Distinguishing Precedent"],
            answerIndex: 1, // Binding Precedent
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
                    <input type="radio" name="stcOption" id="stcOpt${i}" value="<span class="math-inline">\{i\}" class\="sr\-only"\>
                    <label for="stcOpt{i}" class="stc-option-label">${option}</label>
</div>
`;
});
if (stcFeedbackArea) stcFeedbackArea.innerHTML = '';
if (stcCheckAnswerBtn) stcCheckAnswerBtn.classList.remove('hidden');
if (stcNextQuestionBtn) stcNextQuestionBtn.classList.add('hidden');
}
if (goToGlossaryBtn) {
        goToGlossaryBtn.addEventListener('click', () => {
            // Find the glossary toggle button and click it
            const glossaryToggleBtn = document.querySelector('button.u4aos1-content-toggle[data-target="u4aos1-glossary"]');
            if (glossaryToggleBtn) {
                glossaryToggleBtn.click(); // This should trigger the main script's toggle logic
                // Scroll to glossary if needed (optional)
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
                currentSTCQuestion = 0; // Loop back or show completion message
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
        sacExcerptArea.innerHTML = q.excerpt; // Use innerHTML if excerpts contain citations as HTML
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
                currentSACExcerpt = 0; // Loop back or show completion
                if(sacExcerptArea) sacExcerptArea.textContent = "Source Analysis Complete! Resetting...";
                if(sacQuestionArea) sacQuestionArea.textContent = "";

            }
            loadSACExcerpt(currentSACExcerpt);
        });
    }

    // Initial load function for the Key Skills Hub if it's made active
    function initializeKeySkillsHub() {
        console.log("Key Skills Hub Initialized");
        loadSTCQuestion(currentSTCQuestion);
        loadSACExcerpt(currentSACExcerpt);
        // Add other initializations for future key skill activities here
    }

    // Make initializeKeySkillsHub globally accessible if needed by main script, or listen for custom event
    window.initializeKeySkillsHub = initializeKeySkillsHub;

}); // End of DOMContentLoaded for keySkillsHub.js
```
