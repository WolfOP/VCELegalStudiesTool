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
        },
        {
            scenario: "A state parliament wants to make a law about military defence, including raising and maintaining armed forces.",
            options: ["Concurrent Powers", "Residual Powers", "Exclusive Powers", "Section 109"],
            answerIndex: 2,
            explanation: "**Exclusive powers** are law-making powers granted only to the Commonwealth Parliament, by sections 51 and 52 of the Australian Constitution. Defence is listed as an example of an exclusive power."
        },
        {
            scenario: "The High Court is asked to determine a case where a Victorian law regulating the transport of dangerous goods conflicts with a Commonwealth law on the same matter, due to inconsistencies.",
            options: ["Judicial Review", "Statutory Interpretation", "Doctrine of Precedent", "Section 109"],
            answerIndex: 3,
            explanation: "**Section 109** of the Australian Constitution is designed to resolve inconsistencies between state and Commonwealth laws. If a state law is inconsistent with a Commonwealth law, the Commonwealth law shall prevail to the extent of the inconsistency."
        },
        {
            scenario: "In a civil case regarding negligence, a Supreme Court judge expresses, in passing comments (obiter dictum), that while applying an old common law principle, they believe it is outdated due to changes in society and suggests Parliament should consider changing it.",
            options: ["Abrogation of Common Law", "Judicial Conservatism", "Ability of Courts to Influence Parliament", "Doctrine of Precedent"],
            answerIndex: 2,
            explanation: "The **ability of courts to influence parliament** occurs when judicial comments, particularly in **obiter dictum**, or decisions highlight issues with existing law or suggest the need for reform, which Parliament may then act upon. Judges may also remark that a principle is outdated but defer to Parliament's supremacy to change it."
        },
        {
            scenario: "Following several court decisions that had developed the common law regarding an employer's duty of care for employee mental health, Parliament passes a new Workplace Safety Act that contains specific statutory provisions overriding this judge-made law.",
            options: ["Codification of Common Law", "Statutory Interpretation", "Abrogation of Common Law", "Judicial Review"],
            answerIndex: 2,
            explanation: "**Abrogation of common law** is the process by which parliament overrules common law by creating a statute contrary to a decision of the courts. Due to parliamentary supremacy, common law is superseded by legislation passed by Parliament."
        },
        {
            scenario: "After the High Court established the common law principle of native title in the Mabo (No. 2) decision, the Commonwealth Parliament passed the Native Title Act 1993 (Cth).",
            options: ["Abrogation of Common Law", "Codification of Common Law", "Statutory Interpretation", "Judicial Activism"],
            answerIndex: 1,
            explanation: "**Codification** is the process of parliament confirming common law precedent by enacting legislation to give effect to the legal principles. Parliament agrees with a common law principle and incorporates it into statute law."
        },
        {
            scenario: "A group challenges a Commonwealth law that prevents people who were born overseas but are now citizens from running for federal elections, arguing it infringes upon the principle that members of parliament should be 'directly chosen by the people'.",
            options: ["Express Protection of Rights", "Separation of Powers", "High Court Protecting Representative Government", "Exclusive Powers"],
            answerIndex: 2,
            explanation: "The **High Court's role in protecting the principle of representative government** involves interpreting sections 7 and 24 of the Constitution, which require members of Parliament to be 'directly chosen by the people'. The High Court can declare laws invalid if they infringe upon this principle."
        },
        {
            scenario: "A state government passes a law requiring residents from other states to pay a special tax to access public services in that state, which is then challenged in the High Court.",
            options: ["Residual Powers", "Express Protection of Rights", "Section 109", "Separation of Powers"],
            answerIndex: 1,
            explanation: "**Express rights** are rights explicitly stated and entrenched in the Constitution. Section 117 is an express right stating that Australian Citizens of 'any State, shall not be subject in any other State to any disability or discrimination' which would not apply to residents of that state."
        },
        {
            scenario: "The Minister for Health introduces a bill in the Legislative Assembly proposing significant reforms to the state's hospital system.",
            options: ["Judicial Power", "Royal Assent", "Initiating Legislation", "Administrative Law"],
            answerIndex: 2,
            explanation: "A primary role of the lower house (House of Representatives federally or Legislative Assembly in Victoria) is to **initiate new legislation**, particularly government bills introduced by ministers."
        },
        {
            scenario: "After receiving a bill from the Legislative Assembly, the Legislative Council forms a committee to thoroughly examine the bill, hear submissions from the public, and propose detailed amendments before debating it.",
            options: ["Representative Nature", "International Pressures", "Bicameral Structure", "Section 109"],
            answerIndex: 2,
            explanation: "The **bicameral structure** of Parliament, consisting of two houses, includes the role of the upper house (Senate federally or Legislative Council in Victoria) to act as a house of review. This involves scrutinising bills, potentially through committees, and proposing amendments."
        },
        {
            scenario: "A case requires the High Court to interpret the meaning of 'telephonic services' in Section 51(v) of the Constitution to determine if a state government has the power to regulate mobile phone towers, or if this falls under Commonwealth power.",
            options: ["Doctrine of Precedent", "Constitutional Amendment", "Statutory Interpretation", "High Court Interpreting the Constitution"],
            answerIndex: 3,
            explanation: "The **High Court interprets the Australian Constitution** to give meaning to its words. This can involve interpreting specific sections like Section 51(v) ('postal, telegraphic, telephonic, and other like services'), and its interpretation can impact the division of law-making powers."
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
        },
        {
            excerpt: "The Senate refers a government bill back to the House of Representatives with significant amendments, requiring further debate and agreement between the two houses before it can become law.",
            question: "What is the primary role of the Senate in the Commonwealth Parliament's law-making process, and why is it often referred to as the 'states’ house'?",
            keywords: ["Representative Government", "Judicial Review", "House of Review", "Executive Council", "Senate", "upper house", "states' house", "house of review", "Commonwealth Parliament", "law-making role", "bicameral structure", "equal representation"]
        },
        {
            excerpt: "The government holds a clear majority of seats in both the House of Representatives and the Senate, leading to most government bills passing through the Senate with minimal debate or amendment.",
            question: "What is meant by a 'rubber stamp upper house' and how does it affect the passage of government bills?",
            keywords: ["Hostile Upper House", "Balance of Power", "Rubber Stamp Upper House", "Separation of Powers", "government majority", "upper house", "limited scrutiny", "passage of bills"]
        },
        {
            excerpt: "The High Court declares a Commonwealth law invalid because it was made beyond the law-making powers granted to the Commonwealth Parliament by the Constitution.",
            question: "How does the separation of powers allow the High Court to act as a check on the Commonwealth Parliament?",
            keywords: ["Judicial Conservatism", "Parliamentary Supremacy", "Separation of Powers", "Codification of Common Law", "judicial review", "ultra vires", "invalid law", "independent judiciary"]
        },
        {
            excerpt: "A state resident is unable to challenge a state law that they believe infringes upon a fundamental human right because that right is not explicitly listed in the Australian Constitution and there is no state Charter of Rights.",
            question: "What are express rights and how does their limited scope affect the ability to challenge state laws?",
            keywords: ["Residual Powers", "Ex Post Facto Law", "Express Protection of Rights", "Obiter Dictum", "express rights", "Australian Constitution", "limited rights", "state law challenge"]
        },
        {
            excerpt: "A public interest group wants to challenge a new Commonwealth law but is unable to bring a case before the High Court because they cannot demonstrate that they have been directly affected by the law.",
            question: "What is the requirement for standing and how does it limit access to the High Court?",
            keywords: ["Judicial Activism", "The Requirement for Standing", "Doctrine of Precedent", "Judicial Conservatism", "standing", "access to justice", "directly affected", "High Court"]
        },
        {
            excerpt: "Following recommendations from the United Nations Human Rights Council, the Commonwealth Parliament reviews its laws regarding the age of criminal responsibility and considers raising it to align with international standards.",
            question: "How can international pressures influence law reform in Australia?",
            keywords: ["Codification", "International Pressures", "Residual Powers", "Express Rights", "international law", "treaties", "law reform", "parliament"]
        },
        {
            excerpt: "The High Court hears a case challenging a Commonwealth law that restricts public advertising by political parties during election campaigns, arguing it infringes on the ability of people to make an informed choice about their representatives.",
            question: "How does the High Court protect the principle of representative government in Australia?",
            keywords: ["Section 109", "High Court Protecting Representative Government", "Separation of Powers", "Residual Powers", "representative government", "political communication", "sections 7 and 24", "invalid law"]
        },
        {
            excerpt: "The Victorian Law Reform Commission publishes a report recommending significant changes to the state's bail laws, based on extensive research and community consultation. The Victorian Parliament then considers these recommendations.",
            question: "What is the role of law reform bodies like the VLRC in the law-making process?",
            keywords: ["Statutory Interpretation", "Abrogation of Common Law", "Law Reform Bodies", "Judicial Activism", "VLRC", "law reform", "recommendations", "parliament"]
        },
        {
            excerpt: "A group of citizens organises a petition calling for a new state law to address climate change. The petition gathers thousands of signatures and is presented to the state parliament.",
            question: "How can petitions be used to influence law reform in Australia?",
            keywords: ["Doctrine of Precedent", "Petition as a means of influence", "Constitutional Amendment", "Judicial Review", "petitions", "law reform", "parliament", "public support"]
        },
        {
            excerpt: "An individual decides not to pursue a civil case in court despite believing their rights have been infringed, primarily due to the high costs associated with legal representation and court fees.",
            question: "How do costs and time affect access to justice and the courts' ability to make law?",
            keywords: ["Judicial Conservatism", "Requirement for Standing", "Costs and Time in Courts", "Adversarial System", "access to justice", "costs", "delays", "court fees"]
        },
        {
            excerpt: "The Senate is the upper house of the Commonwealth Parliament. It has 76 elected members from across Australia. The Senate is also referred to as ‘states’ house’... The Senate's main role is to review laws that have passed through the House of Representatives.",
            question: "Based on this excerpt, what is the primary role of the Senate in the Commonwealth Parliament's law-making process, and why is it often referred to as the 'states’ house'?",
            keywords: ["Senate", "upper house", "states' house", "house of review", "Commonwealth Parliament", "law-making role", "bicameral structure", "equal representation"]
        },
        {
            excerpt: "Residual powers belong solely to the state parliaments and they are not explicitly stated in the Australian Constitution... Examples: criminal law, medical procedures, road laws, education and public transport.",
            question: "Define 'residual powers' as described here. Explain one implication of residual powers for the uniformity of laws across different Australian states.",
            keywords: ["Residual powers", "state parliaments", "Australian Constitution", "exclusive powers", "concurrent powers", "division of powers", "state law variations", "education law", "criminal law"]
        },
        {
            excerpt: "A principle established by the Australian Constitution that ensures the legislative, executive, and judicial powers remain separate. Ensures there is no abuse of powers within the parliamentary or judicial system by defining which bodies have the power to perform certain functions.",
            question: "Analyse this principle. How does the separation of powers, as outlined here, act as a check on the power of the legislative branch (parliament) in law-making?",
            keywords: ["Separation of powers", "legislative power", "executive power", "judicial power", "checks and balances", "prevent abuse of power", "Australian Constitution", "independent judiciary"]
        },
        {
            excerpt: "In the case of Commonwealth v Tasmania, the High Court was required to interpret the words ‘external affairs’ in section 51(xxix) of the Constitution... The High Court held that the external affairs power gives the Commonwealth Parliament the power to create laws to fulfil its obligations under an international treaty.",
            question: "Interpret the significance of this High Court decision. How did the interpretation of the 'external affairs' power impact the division of law-making powers between the Commonwealth and the states?",
            keywords: ["External affairs power", "s51(xxix)", "High Court interpretation", "Commonwealth v Tasmania", "Tasmanian Dams case", "international treaty", "broadened Commonwealth power", "residual powers", "shift in power"]
        },
        {
            excerpt: "The Australian Constitution contains five express rights. An example is the right to trial by jury for indictable Commonwealth offences (s80)... This is restricted, in some ways — one has to plead not guilty to have a jury trial. Also, sometimes the prosecution may argue that some offences (such as terrorism offences) are summary to avoid a jury trial.",
            question: "Based on this excerpt, what is the express right protected by Section 80 of the Constitution? Identify and explain one limitation on the application of this right.",
            keywords: ["Express rights", "Australian Constitution", "s80", "trial by jury", "Commonwealth indictable offence", "entrenched rights", "limitations", "summary offence", "plead not guilty"]
        },
        {
            excerpt: "Petitions are a formal written request to the government to take some course of action or implement a specific area of law reform. It usually has a collection of signatures on it... Petitions provide an objective measure of the support of a proposal.",
            question: "Explain how a petition, as described in this excerpt, can be used by individuals or groups to influence law reform. Identify one strength of using petitions for this purpose.",
            keywords: ["Petitions", "influence law reform", "parliament", "formal request", "signatures", "public support", "means of influence", "strength of petition", "representative government"]
        },
        {
            excerpt: "The VLRC is Victoria’s leading independent law reform organisation. The VLRC reviews, researches and makes recommendations to Victorian Parliament about possible changes (improvements) to Victoria’s laws... While the VLRC was established by Victorian Parliament..., it is an independent organisation that operates free of political pressures and biases.",
            question: "Describe the primary role of the Victorian Law Reform Commission (VLRC). Explain one factor that contributes to the VLRC's ability to influence law reform.",
            keywords: ["Law reform bodies", "VLRC", "Victorian Law Reform Commission", "recommendations", "Victorian Parliament", "independent body", "inquiry", "research", "consultation", "influence law reform"]
        },
        {
            excerpt: "Judicial activism refers to the willingness of judges to consider a range of social and political factors, their own opinions on public matters, amongst other facts (other than the law itself) when interpreting the law and making decisions... Those who disapprove... have defined judicial activism as a judge acting outside of the constitutional and legislative power vested in them.",
            question: "Define 'judicial activism' based on this excerpt. Explain how judicial activism might affect the courts' ability to make new law.",
            keywords: ["Judicial activism", "judicial conservatism", "courts make law", "interpret law", "social factors", "political factors", "judicial creativity", "role of judges"]
        },
        {
            excerpt: "Pursuing a claim in court can be very time-consuming... individuals may have to wait months, or even years, to have a matter heard before the courts... The party initiating a court claim must be directly affected by the matter in question — they must have standing, or locus standi...",
            question: "Based on this excerpt, identify two factors that can limit the ability of individuals to bring a case before the courts. Explain how these factors might affect the courts' ability to make law.",
            keywords: ["Courts make law", "limitations", "costs", "time", "delays", "standing", "requirement for standing", "access to justice", "bringing a case"]
        },
        {
            excerpt: "A hostile upper house occurs when the government of the day does not hold a majority in the upper house... In these situations... [government] being forced to gather support from the opposition or the crossbench, by making amendments and compromises... This increases the level of scrutiny on bills... However... the law-making process... can be slowed and skewed...",
            question: "Explain what is meant by a 'hostile upper house' and how it operates within a bicameral parliament. Discuss one way a hostile upper house can impact the government's ability to pass legislation.",
            keywords: ["Bicameral structure", "upper house", "hostile upper house", "Senate", "Legislative Council", "government majority", "balance of power", "amendments", "delay legislation", "scrutiny of bills"]
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
        // EXCLUSIVE POWERS
        { id: 'lm1', area: "Defence Force Matters", correctCategory: "exclusive", constitutionRef: "s51(vi), s114" },
        { id: 'lm5', area: "Coining Money (Currency)", correctCategory: "exclusive", constitutionRef: "s51(xii), s115" },
        { id: 'lm7', area: "Customs and Excise Duties", correctCategory: "exclusive", constitutionRef: "s51(ii), s90" },
        { id: 'lm11', area: "External Affairs (Treaties)", correctCategory: "exclusive", constitutionRef: "s51(xxix) - Cth power, states limited" },
        { id: 'lm12', area: "Immigration and Emigration", correctCategory: "exclusive", constitutionRef: "s51(xxvii)" },
        { id: 'lm13', area: "Defence (naval and military forces)", correctCategory: "exclusive", constitutionRef: "s51(vi), s114" },
        { id: 'lm14', area: "Customs (import/export controls)", correctCategory: "exclusive", constitutionRef: "s90" },
        { id: 'lm15', area: "Currency and Coining Money", correctCategory: "exclusive", constitutionRef: "s51(xii), s115" },
        { id: 'lm16', area: "Raising Military Forces", correctCategory: "exclusive", constitutionRef: "s114" },
        // CONCURRENT POWERS
        { id: 'lm3', area: "Taxation (Income Tax)", correctCategory: "concurrent", constitutionRef: "s51(ii)" },
        { id: 'lm4', area: "Marriage and Divorce", correctCategory: "concurrent", constitutionRef: "s51(xxi), (xxii)" },
        { id: 'lm9', area: "Banking (not state banking)", correctCategory: "concurrent", constitutionRef: "s51(xiii)" },
        { id: 'lm17', area: "Trade and Commerce with other countries and among the States", correctCategory: "concurrent", constitutionRef: "s51(i)" },
        { id: 'lm18', area: "Insurance (other than state insurance)", correctCategory: "concurrent", constitutionRef: "s51(xiv)" },
        { id: 'lm19', area: "Bankruptcy and Insolvency", correctCategory: "concurrent", constitutionRef: "s51(xvii)" },
        { id: 'lm20', area: "Corporations (trading or financial)", correctCategory: "concurrent", constitutionRef: "s51(xx)" },
        { id: 'lm21', area: "Copyrights, patents, trademarks", correctCategory: "concurrent", constitutionRef: "s51(xviii)" },
        { id: 'lm22', area: "Weights and Measures", correctCategory: "concurrent", constitutionRef: "s51(xv)" },
        // RESIDUAL POWERS
        { id: 'lm2', area: "Primary School Education", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm6', area: "Local Road Rules", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm8', area: "Public Transport Systems", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm10', area: "Criminal Law (general offences)", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm23', area: "Police and Emergency Services", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm24', area: "Hospitals and Health Services", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm25', area: "Land and Property Law", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm26', area: "Local Government", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm27', area: "Civil Law (torts, contracts, wills)", correctCategory: "residual", constitutionRef: "Not in Cth Const." },
        { id: 'lm28', area: "Environment (unless covered by external affairs)", correctCategory: "residual", constitutionRef: "Not in Cth Const." }
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
        if (!powerSortSourceItemsContainer || !powerSortFeedback || !powerDropZones.exclusive || !powerDropZones.concurrent || !powerDropZones.residual) {
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
        if (powerSortFeedback) powerSortFeedback.innerHTML = '';

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
                setTimeout(() => { if(e.target) e.target.classList.add('dragging'); }, 0);
            });
            div.addEventListener('dragend', (e) => {
                if(e.target) e.target.classList.remove('dragging');
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
                    }
                    // draggedPowerItem is nullified in its dragend event
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
            let itemsInSourceCount = powerSortSourceItemsContainer ? powerSortSourceItemsContainer.querySelectorAll('.power-item').length : 0;

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
                    feedbackHTML += `<li class="feedback-incorrect">'${correctItemData.area}' is incorrectly placed in '${placedCategoryKey || 'an unknown zone'}'. Correct is: ${correctItemData.correctCategory}. (Ref: ${correctItemData.constitutionRef})</li>`;
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

    // --- Skill 4: Analyse the relationship between parliament and courts (Relationship Quadrant Matcher) ---
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
        // SUPREMACY OF PARLIAMENT
        { id: 'rs1', text: "The Victorian Parliament passes an Act establishing a new specialist drug court in a regional area, then later abolishes it, reallocating its cases to the Magistrates' Court. This demonstrates Parliament's power to create and abolish courts (except the High Court).", correctQuadrant: "supremacy" },
        { id: 'rs2', text: "Following a series of court decisions developing the common law of privacy, the Commonwealth Parliament passes a comprehensive Privacy Act. Where the Act differs from common law, the statute law prevails.", correctQuadrant: "supremacy" },
        { id: 'rs3', text: "The Victorian Parliament passes legislation introducing mandatory minimum sentences for certain assaults, limiting judicial discretion and compelling judges to impose at least a specified sentence.", correctQuadrant: "supremacy" },
        { id: 'rs4', text: "The Commonwealth Parliament changes the appeals process for migration decisions, creating a new Migration Appeal Division and altering the jurisdiction of courts and tribunals.", correctQuadrant: "supremacy" },
        // COURTS INFLUENCE PARLIAMENT
        { id: 'rs5', text: "In a civil negligence case, a Supreme Court judge, in obiter dictum, notes a gap in the law regarding duties in a new industry and suggests Parliament consider law reform. Parliament initiates an inquiry in response.", correctQuadrant: "influence" },
        { id: 'rs6', text: "The High Court interprets an old Commonwealth Act about digital communication services, revealing the Act's language is outdated and doesn't cover modern technologies, highlighting the need for legislative update.", correctQuadrant: "influence" },
        { id: 'rs7', text: "In a case about landowner liability for animals straying onto roads, the High Court follows an old precedent but several judges express disapproval in obiter dicta, prompting Parliament to consider legislative change.", correctQuadrant: "influence" },
        { id: 'rs8', text: "A series of court decisions on a consumer protection issue consistently result in outcomes seen as unfair. Media and public pressure prompt Parliament to reform the relevant legislation.", correctQuadrant: "influence" },
        // CODIFICATION OF COMMON LAW
        { id: 'rs9', text: "Following the Mabo (No. 2) decision, which recognised native title under common law, the Commonwealth Parliament passes the Native Title Act 1993 (Cth), codifying the principle into statute law.", correctQuadrant: "codification" },
        { id: 'rs10', text: "Parliament passes an Act that restates and consolidates various common law rules about implied terms in contracts, making the law more accessible and predictable.", correctQuadrant: "codification" },
        { id: 'rs11', text: "A common law precedent clarifying an aspect of negligence law is widely accepted. The Victorian Parliament amends the Wrongs Act 1958 (Vic) to incorporate this rule, codifying the common law.", correctQuadrant: "codification" },
        // ABROGATION OF COMMON LAW
        { id: 'rs12', text: "Courts develop a common law principle allowing damages for pure mental harm. Parliament passes legislation restricting such claims to stricter conditions, abrogating the broader common law principle.", correctQuadrant: "abrogation" },
        { id: 'rs13', text: "A long-standing common law rule does not consider a certain behaviour as harassment. Parliament, reflecting changing values, passes an Act making this behaviour a civil wrong, abrogating the old rule.", correctQuadrant: "abrogation" },
        { id: 'rs14', text: "The High Court interprets common law in a way that changes a long-held legal concept. Parliament disagrees and passes legislation restoring the previous understanding, abrogating the court's interpretation.", correctQuadrant: "abrogation" },
        { id: 'rs15', text: "A lower court applies an outdated common law precedent and expresses disapproval. Parliament passes an Act explicitly repealing the specific common law rule, directly abrogating it.", correctQuadrant: "abrogation" }
    ];
    let draggedScenarioItem = null;

    window.setupRelationshipMatcherGame = function() {
        if (!relationshipScenariosSourceContainer || !relationshipMatcherFeedback || !relationshipQuadrants.supremacy) {
            // console.warn("Relationship Matcher Game elements not found, skipping setup.");
            return;
        }
        relationshipScenariosSourceContainer.innerHTML = '';
         Object.values(relationshipQuadrants).forEach(q => {
            if(q) {
                const list = q.querySelector('.dropped-scenarios-list');
                if (list) list.innerHTML = '';
                 q.classList.remove('drag-over');
            }
        });
        if(relationshipMatcherFeedback) relationshipMatcherFeedback.innerHTML = '';

        shuffleArray([...relationshipScenariosData]).forEach(item => {
            const div = document.createElement('div');
            div.classList.add('relationship-scenario-item');
            div.textContent = item.text;
            div.draggable = true;
            div.dataset.id = item.id;
            div.dataset.correctQuadrant = item.correctQuadrant;
            div.addEventListener('dragstart', (e) => {
                draggedScenarioItem = e.target;
                setTimeout(() => { if(e.target) e.target.classList.add('dragging'); }, 0);
            });
            div.addEventListener('dragend', (e) => {
                if(e.target) e.target.classList.remove('dragging');
                draggedScenarioItem = null;
            });
            relationshipScenariosSourceContainer.appendChild(div);
        });
    }

    Object.entries(relationshipQuadrants).forEach(([key, quadrantDiv]) => {
        if(quadrantDiv) {
            quadrantDiv.dataset.quadrantKey = key; 
            quadrantDiv.addEventListener('dragover', (e) => {
                e.preventDefault();
                quadrantDiv.classList.add('drag-over');
            });
            quadrantDiv.addEventListener('dragleave', (e) => {
                quadrantDiv.classList.remove('drag-over');
            });
            quadrantDiv.addEventListener('drop', (e) => {
                e.preventDefault();
                quadrantDiv.classList.remove('drag-over');
                if (draggedScenarioItem) {
                    const list = quadrantDiv.querySelector('.dropped-scenarios-list');
                    if(list) list.appendChild(draggedScenarioItem);
                }
            });
        }
    });

    if (relationshipScenariosSourceContainer) { 
        relationshipScenariosSourceContainer.addEventListener('dragover', (e) => e.preventDefault());
        relationshipScenariosSourceContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedScenarioItem && !relationshipScenariosSourceContainer.contains(draggedScenarioItem)) {
                relationshipScenariosSourceContainer.appendChild(draggedScenarioItem);
            }
        });
    }

    if (checkRelationshipMatchesBtn) {
        checkRelationshipMatchesBtn.addEventListener('click', () => {
            if (!relationshipMatcherFeedback) return;
            let feedbackHTML = "<ul>";
            let allCorrectlyPlacedAndAllItemsPlacedRM = true;
            let itemsInSourceCountRM = relationshipScenariosSourceContainer ? relationshipScenariosSourceContainer.querySelectorAll('.relationship-scenario-item').length : 0;

            relationshipScenariosData.forEach(correctItemData => {
                const itemElement = document.querySelector(`.relationship-scenario-item[data-id='${correctItemData.id}']`);
                if (!itemElement) return;

                itemElement.classList.remove('correct-match', 'incorrect-match');
                const parentQuadrantDiv = itemElement.closest('.relationship-quadrant');
                let placedQuadrantKey = parentQuadrantDiv ? parentQuadrantDiv.dataset.quadrantKey : null;

                if (placedQuadrantKey === correctItemData.correctQuadrant) {
                    itemElement.classList.add('correct-match');
                    feedbackHTML += `<li class="feedback-correct">Scenario starting "${correctItemData.text.substring(0,30)}..." is correctly matched to '${correctItemData.correctQuadrant}'.</li>`;
                } else if (parentQuadrantDiv) {
                    itemElement.classList.add('incorrect-match');
                    feedbackHTML += `<li class="feedback-incorrect">Scenario starting "${correctItemData.text.substring(0,30)}..." is incorrectly matched to '${placedQuadrantKey || 'an unknown zone'}'. Correct is: '${correctItemData.correctQuadrant}'.</li>`;
                    allCorrectlyPlacedAndAllItemsPlacedRM = false;
                } else {
                    feedbackHTML += `<li class="feedback-incorrect">Scenario starting "${correctItemData.text.substring(0,30)}..." was not matched. Correct is: '${correctItemData.correctQuadrant}'.</li>`;
                    allCorrectlyPlacedAndAllItemsPlacedRM = false;
                }
            });
            feedbackHTML += "</ul>";

            if (allCorrectlyPlacedAndAllItemsPlacedRM && itemsInSourceCountRM === 0) {
                relationshipMatcherFeedback.innerHTML = "<p class='text-green-600 font-semibold'>All scenarios matched correctly!</p>" + feedbackHTML;
            } else if (itemsInSourceCountRM > 0) {
                relationshipMatcherFeedback.innerHTML = "<p class='text-orange-600 font-semibold'>Some scenarios are not yet matched. Please drag all items to a quadrant.</p>" + feedbackHTML;
            } else {
                relationshipMatcherFeedback.innerHTML = "<p class='text-red-600 font-semibold'>Some matches are incorrect. Review the feedback.</p>" + feedbackHTML;
            }
        });
    }

    if (resetRelationshipMatcherBtn) {
        resetRelationshipMatcherBtn.addEventListener('click', () => {
            if(typeof window.setupRelationshipMatcherGame === 'function') window.setupRelationshipMatcherGame();
        });
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



