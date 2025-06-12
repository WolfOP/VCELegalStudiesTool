document.addEventListener('DOMContentLoaded', function () {
    // --- Skill 1: Define and use legal terminology ---
    const goToGlossaryBtn = document.getElementById('goToGlossaryBtn');
    const stcQuestionArea = document.getElementById('stcQuestionArea');
    const stcOptionsArea = document.getElementById('stcOptionsArea');
    const stcCheckAnswerBtn = document.getElementById('stcCheckAnswerBtn');
    const stcNextQuestionBtn = document.getElementById('stcNextQuestionBtn');
    const stcFeedbackArea = document.getElementById('stcFeedbackArea');

    const answerTemplatesData = {
      "Explain": {
        "Low (2-4 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Explain (Low Marks, e.g., 2-4)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Clearly state the concept/role/reason, provide key details, and explain its function or significance briefly.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1 pl-4 mb-3">
            <li><strong>Point 1 / Element 1:</strong>
                <ul class="list-circle list-inside pl-4 text-xs">
                    <li>State the role/concept/reason clearly.</li>
                    <li>Explain <em>how</em> it is performed or <em>why</em> it is the case with relevant details.</li>
                    <li>Briefly explain its importance/significance.</li>
                </ul>
            </li>
            <li><em>(If multiple points/elements needed for marks, repeat above structure for each)</em></li>
          </ul>
          <p class="text-xs text-slate-500 italic"><strong>Key Reminders:</strong> Use precise legal terminology. Include a brief, relevant example if it fits within the mark allocation and clarifies your explanation.</p>
        `
      },
      "Evaluate": {
        "High (8-10+ marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Evaluate (High Marks, e.g., 8-10+)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Make a reasoned judgment on the topic's effectiveness or worth by examining strengths and limitations, supported by evidence.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly introduce the topic/concept being evaluated.</li>
                    <li>Clearly state the core issue or argument from the question.</li>
                    <li>(Optional) Briefly outline the scope of your evaluation or your main contention.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Body Paragraph 1 (e.g., Strength / Factor Supporting Effectiveness):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clear topic sentence introducing the strength or positive aspect.</li>
                    <li>Detailed explanation using precise legal knowledge and terminology.</li>
                    <li>Provide specific supporting evidence/examples (e.g., cases, legislation, constitutional provisions).</li>
                    <li>Link this point back to the question, explaining how it contributes to the effectiveness (or aspect being evaluated).</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Body Paragraph 2 (e.g., Limitation / Factor Detracting from Effectiveness):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clear topic sentence introducing the limitation or negative aspect.</li>
                    <li>Detailed explanation using precise legal knowledge and terminology.</li>
                    <li>Provide specific supporting evidence/examples.</li>
                    <li>Link this point back to the question, explaining how it detracts from effectiveness.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Repeat Body Paragraphs as needed to cover multiple strengths and limitations, ensuring balance and depth appropriate for the marks.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Summarize the main arguments (key strengths and limitations discussed).</li>
                    <li>Provide an overall, substantiated judgment that directly answers the question (e.g., "Overall, X is effective to a [significant/moderate/limited] extent because... while its limitations include...").</li>
                    <li>Use the language of "evaluate" (or the specific task word) in your judgment.</li>
                    <li>Avoid introducing new information.</li>
                </ul>
            </div>
          </div>
        `
      },
      "Scenario/Case Application": { // This is a 'type' rather than a task word combined with mark range
        "Scenario/Case Application": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Scenario/Case Application Questions</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Systematically apply relevant legal principles to the specific facts of the given scenario or case. (Often uses IRAC or similar structure: Issue, Rule, Application, Conclusion)</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">1. Identify Legal Issue(s):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly state the central legal question(s) or problem(s) raised by the scenario/case.</li>
                    <li>What needs to be resolved or advised upon? Be specific.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">2. State Relevant Legal Principles/Law (Rule):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Identify the specific area of law involved (e.g., constitutional law, negligence, statutory interpretation, elements of an offence).</li>
                    <li>Outline the relevant legal rules, definitions, elements of the offence/claim, or constitutional sections that apply to the identified issue(s).</li>
                    <li>Cite relevant sections of Acts or key precedent cases if applicable and necessary for the marks.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">3. Apply Law to Facts (Application/Analysis - The 'Reasoning' Step):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Systematically connect each element of the relevant law/principles to the specific facts provided in the scenario/case.</li>
                    <li>Explain <em>how</em> the law applies to those facts. This is where you demonstrate legal reasoning.</li>
                    <li>Avoid simply restating facts or law; show the connection and explain its consequence.</li>
                    <li>If comparing to a precedent case, explain how the facts are similar or different and why that matters.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">4. Reach a Conclusion:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Based on your application of the law to the facts, provide a reasoned conclusion.</li>
                    <li>Directly answer the question asked about the scenario (e.g., likely outcome, who is liable/not liable, whether a law is valid/invalid, advice to a party).</li>
                    <li>Be clear and concise. No new information or reasoning here.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Use precise legal terminology. Refer directly to facts from the scenario. Ensure each step logically flows to the next.</p>
        `
      },
      "Define": {
        "Low (2-4 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Define (Low Marks, e.g., 2-4)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Provide a clear, concise, and precise meaning of the legal term or concept.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1 pl-4 mb-3">
            <li><strong>Core Meaning:</strong> State the exact meaning of the term.</li>
            <li><strong>Key Characteristics/Components:</strong> Briefly list 1-2 essential features or elements that distinguish the term.</li>
            <li><em>(Optional, if marks allow or needed for clarity)</em> <strong>Example:</strong> A very brief example to illustrate the term.</li>
          </ul>
          <p class="text-xs text-slate-500 italic"><strong>Key Reminders:</strong> Accuracy is paramount. Avoid using the term itself in its definition. Use precise legal language.</p>
        `
      },
      "Describe": {
        "Low (2-4 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Describe (Low Marks, e.g., 2-4)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Provide key features, characteristics, or details about the concept, process, or institution.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1 pl-4 mb-3">
            <li><strong>Main Point 1:</strong> Identify and detail a key feature or characteristic.</li>
            <li><strong>Main Point 2:</strong> Identify and detail another key feature or characteristic.</li>
            <li><em>(Continue for the number of points appropriate for the marks, usually 1 point per mark for 'describe' at low marks).</em></li>
          </ul>
          <p class="text-xs text-slate-500 italic"><strong>Key Reminders:</strong> Focus on "what it is" or "what it involves." Use examples if they help illustrate the characteristics. Be factual and avoid deep analysis or evaluation.</p>
        `,
        "Mid (5-8 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Describe (Mid Marks, e.g., 5-8)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Provide a comprehensive account of the features, characteristics, or details of a concept, process, or institution, offering more depth and breadth than a low-mark description.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction (Optional but helpful for structure):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly state what is being described.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Aspect/Feature 1:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly state the first key aspect or feature.</li>
                    <li>Provide details, explanations, and examples to illustrate it.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Aspect/Feature 2:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly state the second key aspect or feature.</li>
                    <li>Provide details, explanations, and examples to illustrate it.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Continue with additional aspects/features as needed to meet mark allocation, ensuring each is well-detailed.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion (Optional, brief summary):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly summarize the main characteristics described.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Use precise legal terminology. Ensure a logical flow between points. Support descriptions with relevant examples or case names where appropriate.</p>
        `
      },
      "Outline": {
        "Low (2-4 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Outline (Low Marks, e.g., 2-4)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Provide the main features or steps in a logical sequence. Keep it brief and to the point.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1 pl-4 mb-3">
            <li><strong>Step/Feature 1:</strong> State the first main point/step.</li>
            <li><strong>Step/Feature 2:</strong> State the second main point/step.</li>
            <li><strong>Step/Feature 3:</strong> State the third main point/step.</li>
            <li><em>(Continue for the number of points appropriate for the marks. Usually 1 distinct point per mark).</em></li>
          </ul>
          <p class="text-xs text-slate-500 italic"><strong>Key Reminders:</strong> Focus on brevity and clarity. Use dot points or numbered lists if appropriate. No need for detailed explanation, just the main points.</p>
        `
      },
      "Explain": { // Existing "Low (2-4 marks)" is kept, adding "Mid (5-8 marks)"
        "Low (2-4 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Explain (Low Marks, e.g., 2-4)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Clearly state the concept/role/reason, provide key details, and explain its function or significance briefly.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1 pl-4 mb-3">
            <li><strong>Point 1 / Element 1:</strong>
                <ul class="list-circle list-inside pl-4 text-xs">
                    <li>State the role/concept/reason clearly.</li>
                    <li>Explain <em>how</em> it is performed or <em>why</em> it is the case with relevant details.</li>
                    <li>Briefly explain its importance/significance. Use linking words like 'because', 'therefore', 'as a result'.</li>
                </ul>
            </li>
            <li><em>(If multiple points/elements needed for marks, repeat above structure for each)</em></li>
          </ul>
          <p class="text-xs text-slate-500 italic"><strong>Key Reminders:</strong> Use precise legal terminology. Include a brief, relevant example if it fits within the mark allocation and clarifies your explanation.</p>
        `,
        "Mid (5-8 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Explain (Mid Marks, e.g., 5-8)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Provide a detailed clarification of *how* or *why* something occurs, its significance, or its workings. Make connections between concepts or cause and effect.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction (Brief):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly introduce the concept/process/relationship to be explained.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Explanation of Point 1 / Aspect 1:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly state the first point or aspect.</li>
                    <li>Provide detailed reasoning for <em>how</em> or <em>why</em> it occurs or is important.</li>
                    <li>Use examples, evidence, or legal principles (e.g., sections of Acts, case details) to support the explanation.</li>
                    <li>Use linking words (e.g., 'this leads to...', 'consequently...', 'this means that...') to show relationships.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Explanation of Point 2 / Aspect 2:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly state the second point or aspect.</li>
                    <li>Provide detailed reasoning and supporting evidence as above.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Continue with additional points/aspects if required for the marks, ensuring depth in each explanation.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion (Brief summary, if appropriate):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly summarize the key explanations or the overall significance.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Focus on cause and effect, relationships, and significance. Ensure explanations are well-supported with legal knowledge. Use precise terminology.</p>
        `
      },
      "Discuss": {
        "Mid (5-8 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Discuss (Mid Marks, e.g., 5-8)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Explore a topic from various viewpoints or consider multiple factors/arguments. Present different sides and elaborate with evidence.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly introduce the topic and the different aspects/viewpoints that will be explored.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Argument/Factor/Viewpoint 1:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Present the first argument or factor.</li>
                    <li>Elaborate with details, explanations, examples, or case law.</li>
                    <li>Explain its relevance to the question.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Argument/Factor/Viewpoint 2:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Present a different (possibly contrasting) argument or factor.</li>
                    <li>Elaborate with details, explanations, examples, or case law.</li>
                    <li>Explain its relevance to the question.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(If 'discuss the extent to which', ensure you cover factors that support the proposition AND factors that limit/challenge it.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion (Brief):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Summarise the main points discussed, perhaps highlighting the complexity or different perspectives.</li>
                    <li>(Optional) A brief concluding statement or overall observation.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Provide a balanced exploration. Support each viewpoint/argument with evidence. Use linking phrases to connect ideas (e.g., 'however', 'on the other hand', 'furthermore').</p>
        `,
        "High (8-10+ marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Discuss (High Marks, e.g., 8-10+)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Thoroughly explore a topic from multiple viewpoints, considering complexities, implications, and interrelationships. Present detailed arguments with substantial evidence.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly define the scope of the discussion.</li>
                    <li>Identify the key issues/contention(s) to be explored.</li>
                    <li>(Optional) Briefly outline the main arguments/perspectives you will cover.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Body Paragraph 1 (Argument/Factor/Perspective A):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Introduce the first main argument/factor clearly.</li>
                    <li>Provide detailed explanation, using specific legal terminology, principles, cases, and/or legislation.</li>
                    <li>Analyse the implications or consequences of this argument/factor.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Body Paragraph 2 (Argument/Factor/Perspective B - possibly contrasting):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Introduce the second main argument/factor.</li>
                    <li>Provide detailed explanation and evidence as above.</li>
                    <li>If contrasting, clearly show the points of difference from Perspective A.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Body Paragraph 3 (Argument/Factor/Perspective C - adding depth or nuance):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Introduce a further argument/factor that adds complexity or another dimension to the discussion.</li>
                    <li>Provide detailed explanation and evidence.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Ensure a balanced discussion, especially if the question involves 'to what extent'. Explore both sides comprehensively.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Synthesise the main arguments discussed.</li>
                    <li>Offer a thoughtful concluding statement that reflects the complexity of the issue. Avoid simply restating earlier points; aim for a nuanced summary.</li>
                    <li>If discussing 'extent', your conclusion should reflect this judgment based on the arguments presented.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Depth and breadth are key. Use sophisticated legal language. Ensure logical flow and clear links between arguments. Strong evidence is crucial.</p>
        `
      },
      "Evaluate": { // Existing "High (8-10+ marks)" is kept, adding "Mid (5-8 marks)"
        "Mid (5-8 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Evaluate (Mid Marks, e.g., 5-8)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Make a judgment on the topic's effectiveness or worth by examining strengths and limitations (or arguments for/against), supported by evidence. Provide a clear conclusion.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly introduce the concept/institution being evaluated.</li>
                    <li>State the criteria or aspects you will use for evaluation (e.g., effectiveness in achieving X, fairness, etc.).</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Strength / Positive Aspect 1 (or Argument For):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly state the strength or positive aspect.</li>
                    <li>Explain it with details and provide supporting evidence (e.g., case, legislation, specific feature).</li>
                    <li>Link back to how this demonstrates effectiveness or value.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Limitation / Negative Aspect 1 (or Argument Against):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly state the limitation or negative aspect.</li>
                    <li>Explain it with details and provide supporting evidence.</li>
                    <li>Link back to how this detracts from effectiveness or value.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Repeat with at least one more strength and/or limitation to ensure balance, depending on marks.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion (Judgment):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Weigh up the strengths and limitations discussed.</li>
                    <li>Make an overall judgment (e.g., "effective to a certain extent", "largely ineffective because...", "moderately successful").</li>
                    <li>Briefly justify your judgment based on the evidence presented.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Directly use the language of evaluation (strength, weakness, effective, ineffective). Ensure your judgment in the conclusion is clearly supported by the body paragraphs.</p>
        `,
        "High (8-10+ marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Evaluate (High Marks, e.g., 8-10+)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Make a reasoned judgment on the topic's effectiveness or worth by examining multiple strengths and limitations in depth, supported by substantial evidence and nuanced arguments.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly introduce the topic/concept being evaluated.</li>
                    <li>Clearly state the core issue or argument from the question.</li>
                    <li>(Optional) Briefly outline the scope of your evaluation or your main contention/thesis.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Body Paragraph 1 (e.g., Strength / Factor Supporting Effectiveness):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clear topic sentence introducing the strength or positive aspect.</li>
                    <li>Detailed explanation using precise legal knowledge and terminology.</li>
                    <li>Provide specific supporting evidence/examples (e.g., cases, legislation, constitutional provisions, statistics if relevant).</li>
                    <li>Link this point back to the question, explaining how it contributes to the effectiveness (or aspect being evaluated).</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Body Paragraph 2 (e.g., Limitation / Factor Detracting from Effectiveness):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clear topic sentence introducing the limitation or negative aspect.</li>
                    <li>Detailed explanation using precise legal knowledge and terminology.</li>
                    <li>Provide specific supporting evidence/examples.</li>
                    <li>Link this point back to the question, explaining how it detracts from effectiveness.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Body Paragraph 3 (Further Strength/Limitation or Nuance):</h6>
                 <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Introduce another significant strength or limitation, or a more nuanced point of evaluation.</li>
                    <li>Provide detailed explanation and evidence as above.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Repeat Body Paragraphs as needed to cover multiple strengths and limitations, ensuring balance and depth appropriate for the marks. Aim for 2-3 strengths and 2-3 limitations for higher mark questions.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Summarize the main arguments (key strengths and limitations discussed).</li>
                    <li>Provide an overall, substantiated judgment that directly answers the question (e.g., "Overall, X is effective to a [significant/moderate/limited] extent because... while its limitations include...").</li>
                    <li>Use the language of "evaluate" (or the specific task word) in your judgment.</li>
                    <li>Avoid introducing new information. Your conclusion should be a logical outcome of your discussion.</li>
                </ul>
            </div>
          </div>
           <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Ensure a balanced argument. Your judgment must be clearly supported by the evidence and arguments presented throughout the response. Use comparative language when weighing up points.</p>
        `
      },
      "Analyse": {
        "Mid (5-8 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Analyse (Mid Marks, e.g., 5-8)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Break down the topic into its key components, examine them, and show the relationships between them or their impacts/implications.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly introduce the topic and state what aspects/components will be analysed.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Component/Factor 1:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Identify the first key component or factor.</li>
                    <li>Explain it in detail, using legal terminology and principles.</li>
                    <li>Examine its relationship to other components OR its impact/implication on the overall topic. Provide evidence/examples.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Component/Factor 2:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Identify the second key component or factor.</li>
                    <li>Explain and examine its relationships or impacts as above, providing evidence/examples.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Continue with further components/factors as needed for the marks.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion (Synthesis):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Summarise the key relationships or impacts identified.</li>
                    <li>Provide an overall concluding statement about the nature of the topic based on your analysis.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Focus on breaking down the topic and explaining connections or effects. Use analytical language (e.g., 'this suggests...', 'the impact of this is...', 'this relationship demonstrates...').</p>
        `,
        "High (8-10+ marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Analyse (High Marks, e.g., 8-10+)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Systematically deconstruct the topic into its core components, critically examine each, and explore the complex interrelationships, effects, and underlying principles with depth and insight.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly define the subject of analysis and its context.</li>
                    <li>Identify the key components or themes that will be examined.</li>
                    <li>(Optional) Briefly state the overall argument or perspective that your analysis will develop.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Analysis of Component/Theme 1:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Introduce the first critical component/theme.</li>
                    <li>Provide a detailed examination of this component, using precise legal concepts, examples, cases, or legislation.</li>
                    <li>Critically explore its implications, connections to other components, or its contribution to the overall subject.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Analysis of Component/Theme 2:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Introduce the next critical component/theme.</li>
                    <li>Provide a detailed examination with supporting evidence, similar to above.</li>
                    <li>Focus on showing how it interacts with or influences other aspects of the topic.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Continue with additional components/themes, ensuring each paragraph builds on the analysis and explores interconnections or differing impacts.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Synthesis and Conclusion:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Draw together the key findings from your analysis of each component.</li>
                    <li>Offer a sophisticated concluding statement that summarises the overall nature, significance, or complexity of the topic as revealed by your analysis.</li>
                    <li>Highlight any overarching patterns, tensions, or critical insights.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> This requires more than just listing parts; it's about dissecting and understanding how they work together or influence each other. Critical thinking and insightful connections are key.</p>
        `
      },
      "Compare": {
        "Mid (5-8 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Compare (Mid Marks, e.g., 5-8)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Identify and explain both similarities and differences between two or more legal concepts, institutions, or processes. Use comparative language throughout.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly state the two (or more) items that will be compared.</li>
                    <li>Briefly indicate that both similarities and differences will be discussed.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Point of Comparison 1 (e.g., a Similarity):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Identify a specific feature or aspect to compare.</li>
                    <li>Explain how the items are similar in relation to this feature. Provide details/examples for each item.</li>
                    <li>Use comparative language (e.g., 'Similarly, both X and Y...', 'X and Y share the characteristic of...').</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Point of Comparison 2 (e.g., a Difference):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Identify another specific feature or aspect.</li>
                    <li>Explain how the items are different regarding this feature. Provide details/examples for each item.</li>
                    <li>Use contrasting language (e.g., 'However, X differs from Y in that...', 'In contrast to X, Y...').</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Continue with further points of comparison, ensuring a balance of similarities and differences relevant to the marks. Aim for at least two similarities and two differences for mid-range marks.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion (Brief Summary):</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly summarise the main similarities and differences identified.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Address both items being compared throughout your answer for each point. Don't describe one item fully, then the other. Integrate the comparison. Use specific examples for clarity.</p>
        `
      },
      "Distinguish": {
        "Low (2-4 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Distinguish (Low Marks, e.g., 2-4)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Clearly explain the key differences between two legal concepts. Focus only on what makes them different.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1 pl-4 mb-3">
            <li><strong>Point of Difference 1:</strong>
                <ul class="list-circle list-inside pl-4 text-xs">
                    <li>State the first key difference.</li>
                    <li>Explain the characteristic of Concept A regarding this difference.</li>
                    <li>Explain the characteristic of Concept B regarding this difference, highlighting the contrast.</li>
                </ul>
            </li>
            <li><strong>Point of Difference 2 (if marks allow):</strong>
                <ul class="list-circle list-inside pl-4 text-xs">
                     <li>State the second key difference and explain as above.</li>
                </ul>
            </li>
          </ul>
          <p class="text-xs text-slate-500 italic"><strong>Key Reminders:</strong> Use contrasting language (e.g., 'whereas', 'in contrast', 'however', 'on the other hand'). Do NOT discuss similarities. Be precise.</p>
        `
      },
      "Justify": {
        "Mid (5-8 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Justify (Mid Marks, e.g., 5-8)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Provide reasons and evidence to support a particular statement, decision, or viewpoint. Show why it is valid or necessary.</p>
          <div class="space-y-2 text-sm">
            <div>
                <h6 class="font-medium text-purple-600">Introduction:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Clearly state the position or claim that needs to be justified.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Reason/Argument 1 Supporting the Justification:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Present the first reason or argument.</li>
                    <li>Provide detailed explanation, evidence (e.g., legal principles, examples, benefits) to support this reason.</li>
                    <li>Explain how this reason validates the overall statement/decision.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Reason/Argument 2 Supporting the Justification:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Present the second reason or argument.</li>
                    <li>Provide detailed explanation and evidence as above.</li>
                </ul>
            </div>
            <div>
                <h6 class="font-medium text-purple-600"><em>(Continue with further reasons/arguments as needed for marks.)</em></h6>
            </div>
            <div>
                <h6 class="font-medium text-purple-600">Conclusion:</h6>
                <ul class="list-disc list-inside pl-4 text-xs">
                    <li>Briefly summarise the main reasons provided.</li>
                    <li>Reaffirm why the statement/decision is justified based on these reasons.</li>
                </ul>
            </div>
          </div>
          <p class="text-xs text-slate-500 italic mt-3"><strong>Key Reminders:</strong> Your arguments must directly support the claim being justified. Use strong, persuasive language backed by evidence. Focus on the "why it is so" or "why it is right/necessary."</p>
        `
      },
      "Interpret": {
        "Low (2-4 marks)": `
          <h5 class="text-md font-semibold text-purple-700 mb-2">Template: Interpret (Low Marks, e.g., 2-4)</h5>
          <p class="text-sm text-slate-600 mb-2"><strong>General Approach:</strong> Explain the meaning of given information (e.g., text, data, legal quote) in a specific context. Clarify its implications.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1 pl-4 mb-3">
            <li><strong>Point 1: Identify Key Information:</strong>
                <ul class="list-circle list-inside pl-4 text-xs">
                    <li>State the specific piece of information from the stimulus that you are interpreting.</li>
                    <li>Explain its direct meaning or significance in the context provided.</li>
                </ul>
            </li>
            <li><strong>Point 2: Explain Implication/Meaning (if needed for marks):</strong>
                 <ul class="list-circle list-inside pl-4 text-xs">
                    <li>Elaborate on what this information suggests or implies in relation to the question or legal context.</li>
                </ul>
            </li>
          </ul>
          <p class="text-xs text-slate-500 italic"><strong>Key Reminders:</strong> Refer directly to the stimulus material. Your interpretation should be grounded in the information provided. Explain what it means in practical terms or its legal consequence.</p>
        `
      }
      // More templates can be added here for other task words and mark ranges.
    };

    // --- Structured Answer Templates ---
    let templateTaskWordSelect, templateMarkRangeSelect, templateDisplayArea; // Declared here for broader access if needed

    function ksTemplatesDisplayTemplate() {
        // Ensure elements are available (might be called before full initialization in some edge cases or if structure changes)
        templateTaskWordSelect = document.getElementById('templateTaskWordSelect');
        templateMarkRangeSelect = document.getElementById('templateMarkRangeSelect');
        templateDisplayArea = document.getElementById('templateDisplayArea');

        if (!templateTaskWordSelect || !templateMarkRangeSelect || !templateDisplayArea) {
            // console.error("Structured Answer Templates: Display elements not found during display update.");
            return;
        }

        const selectedTaskWord = templateTaskWordSelect.value;
        const selectedMarkRange = templateMarkRangeSelect.value;

        if (!selectedTaskWord || !selectedMarkRange) {
            templateDisplayArea.innerHTML = '<p class="text-sm text-slate-500 italic">Please select both a task word and a mark range/type to view a template.</p>';
            return;
        }

        if (selectedMarkRange === "Scenario/Case Application") {
            // "Scenario/Case Application" is a special key in answerTemplatesData, directly under itself.
            if (answerTemplatesData["Scenario/Case Application"] && answerTemplatesData["Scenario/Case Application"]["Scenario/Case Application"]) {
                templateDisplayArea.innerHTML = answerTemplatesData["Scenario/Case Application"]["Scenario/Case Application"];
            } else {
                templateDisplayArea.innerHTML = '<p class="text-sm text-slate-500 italic">The template for "Scenario/Case Application" is not yet available.</p>';
            }
        } else if (answerTemplatesData[selectedTaskWord] && answerTemplatesData[selectedTaskWord][selectedMarkRange]) {
            templateDisplayArea.innerHTML = answerTemplatesData[selectedTaskWord][selectedMarkRange];
        } else {
            templateDisplayArea.innerHTML = `<p class="text-sm text-slate-500 italic">A specific template for "${selectedTaskWord}" with "${selectedMarkRange}" is not yet available. Please check general structural advice or similar task words.</p>`;
        }
    }

    function ksTemplatesInitialize() {
        templateTaskWordSelect = document.getElementById('templateTaskWordSelect');
        templateMarkRangeSelect = document.getElementById('templateMarkRangeSelect');
        templateDisplayArea = document.getElementById('templateDisplayArea');

        if (!templateTaskWordSelect || !templateMarkRangeSelect || !templateDisplayArea) {
            console.warn("Structured Answer Templates elements not found in the DOM. Feature will not initialize.");
            return;
        }

        // Populate Task Word Dropdown
        const vcaaTaskWords = [
            "Analyse", "Compare", "Define", "Describe", "Discuss", "Distinguish",
            "Evaluate", "Explain", "Interpret", "Justify", "Outline"
        ]; // Standard 11 VCAA task words, sorted alphabetically.

        const allTaskWordOptions = [...vcaaTaskWords].sort();


        templateTaskWordSelect.innerHTML = '<option value="">-- Select Task Word --</option>'; // Clear existing
        allTaskWordOptions.forEach(word => {
            const option = document.createElement('option');
            option.value = word;
            option.textContent = word;
            templateTaskWordSelect.appendChild(option);
        });

        // Populate Mark Range Dropdown
        const markRanges = ["Low (2-4 marks)", "Mid (5-8 marks)", "High (8-10+ marks)", "Scenario/Case Application"];
        templateMarkRangeSelect.innerHTML = '<option value="">-- Select Range/Type --</option>'; // Clear existing
        markRanges.forEach(range => {
            const option = document.createElement('option');
            option.value = range;
            option.textContent = range;
            templateMarkRangeSelect.appendChild(option);
        });

        // Add Event Listeners
        templateTaskWordSelect.addEventListener('change', ksTemplatesDisplayTemplate);
        templateMarkRangeSelect.addEventListener('change', ksTemplatesDisplayTemplate);

        // Initial State
        ksTemplatesDisplayTemplate(); // Call once to set initial message based on empty selections
        console.log("Structured Answer Templates tool initialized.");
    }
    // --- End of Structured Answer Templates ---

const ksBridgeData = [
    {
        id: "ksb_define_terminology",
        keySkillText: "Define and use legal terminology",
        relatedKnowledgePoints: [
            "This skill applies to all key knowledge areas in Unit 4 AOS 1, including understanding terms related to the Australian Constitution, parliamentary roles, law-making powers (exclusive, concurrent, residual), section 109, constitutional checks (bicameralism, separation of powers, express rights, High Court interpretation, referendums), court roles, precedent, statutory interpretation, and factors affecting law-making."
        ],
        exampleQuestionStems: [
            "Define 'bicameral structure of parliament'.",
            "Define 'ratio decidendi'.",
            "What is meant by 'separation of powers'?"
        ],
        directLinks: [{ text: "See Interactive Glossary", targetId: "u4aos1-glossary" }]
    },
    {
        id: "ksb_discuss_interpret_analyse",
        keySkillText: "Discuss, interpret and analyse legal principles and information",
        relatedKnowledgePoints: [
            "This skill is crucial for engaging with all key knowledge, including analysing High Court case impacts (e.g., Tasmanian Dams, Roach), interpreting constitutional sections (e.g., s7, s24, s51, s109), discussing factors affecting law-making, and evaluating constitutional checks."
        ],
        exampleQuestionStems: [
            "Analyse the impact of the Tasmanian Dams Case on the division of law-making powers.",
            "Interpret the meaning of 'ultra vires' in the context of a High Court challenge to legislation.",
            "Discuss the effectiveness of the bicameral structure as a check on parliamentary power."
        ],
        directLinks: [
            { text: "See Case Explorer for examples", targetId: "u4aos1-case-explorer" },
            { text: "Explore Constitutional Checks", targetId: "u4aos1-ks4"}
        ]
    },
    {
        id: "ksb_explain_lawmaking_powers",
        keySkillText: "Explain the law-making powers of state and Commonwealth parliaments, using examples",
        relatedKnowledgePoints: [
            "the Australian Constitution: division of law-making powers (exclusive, concurrent and residual), section 109."
        ],
        exampleQuestionStems: [
            "Explain, using an example, one exclusive power of the Commonwealth Parliament.",
            "Explain how concurrent powers operate, providing an example such as taxation.",
            "Using an example, explain what is meant by a residual power of state parliaments."
        ],
        directLinks: [
            { text: "See notes on Division of Powers", targetId: "u4aos1-ks2" },
            { text: "Try the 'Power Classification Sort' in Key Skills Hub", targetId: "u4aos1-key-skills-hub" }
        ]
    },
    {
        id: "ksb_analyse_parliament_courts_relationship",
        keySkillText: "Analyse the relationship between parliament and courts in law-making",
        relatedKnowledgePoints: [
            "features of the relationship between courts and parliament in law-making: supremacy of parliament, ability of courts to influence parliament, interpretation of statutes by courts, codification of common law, abrogation of common law."
        ],
        exampleQuestionStems: [
            "Analyse two features of the relationship between parliament and the courts in law-making, using examples.",
            "Analyse how the interpretation of statutes by courts can lead to parliamentary responses."
        ],
        directLinks: [
            { text: "See notes on 'Courts & Parliament Relationship'", targetId: "u4aos1-ks8" },
            { text: "Try the 'Relationship Quadrant Matcher' in Key Skills Hub", targetId: "u4aos1-key-skills-hub" }
        ]
    },
    {
        id: "ksb_explain_s109_significance",
        keySkillText: "Explain the significance of section 109 of the Australian Constitution",
        relatedKnowledgePoints: [
            "the Australian Constitution: division of law-making powers (exclusive, concurrent and residual), section 109."
        ],
        exampleQuestionStems: [
            "Explain the significance of section 109 of the Australian Constitution in resolving conflicts between state and Commonwealth laws.",
            "Using a relevant case, explain how section 109 ensures consistency in areas of concurrent law-making power."
            ],
        directLinks: [
            { text: "See notes on 'Significance of s109'", targetId: "u4aos1-ks3" },
            { text: "Try the 'Inconsistency Resolver' in Key Skills Hub", targetId: "u4aos1-key-skills-hub" }
        ]
    },
    {
        id: "ksb_discuss_hc_case_impact",
        keySkillText: "Discuss the significance of one High Court case which has had an impact on state and Commonwealth law-making powers",
        relatedKnowledgePoints: [
            "the significance of one High Court case relating to the division of law-making powers (e.g., Commonwealth v Tasmania (1983) (Tasmanian Dam Case) or R v Brislan (1935)).",
            "the significance of one High Court case interpreting sections 7 and 24 of the Australian Constitution (e.g., Roach v Electoral Commissioner (2007))."
        ],
        exampleQuestionStems: [
            "Discuss the significance of the R v Brislan (1935) case on Commonwealth law-making powers.",
            "Discuss how the Tasmanian Dams Case (Commonwealth v Tasmania (1983)) impacted the division of law-making powers in Australia."
        ],
        directLinks: [
            { text: "See Case Explorer (e.g. Brislan, Tasmanian Dams)", targetId: "u4aos1-case-explorer" },
            { text: "High Court Cases & Powers (general notes)", targetId: "u4aos1-ks5"}
        ]
    },
    {
        id: "ksb_discuss_ability_make_law",
        keySkillText: "Discuss the ability of parliament and the courts to make law",
        relatedKnowledgePoints: [
            "factors that affect the ability of parliament to make law: the roles of the houses of parliament, the representative nature of parliament, political pressures, restrictions on law-making powers.",
            "factors that affect the ability of courts to make law: the doctrine of precedent, judicial conservatism, judicial activism, costs and time in bringing a case to court, the requirement for standing."
        ],
        exampleQuestionStems: [
            "Discuss two factors that affect the ability of parliament to make law, using examples.",
            "Discuss the ability of courts to make law through the doctrine of precedent, considering both its strengths and limitations."
        ],
        directLinks: [
            { text: "See 'Constitution as a Check' (for Parliament factors)", targetId: "u4aos1-ks4" },
            { text: "See 'Factors Affecting Courts'", targetId: "u4aos1-ks7" }
        ]
    },
    {
        id: "ksb_evaluate_constitution_checks",
        keySkillText: "Evaluate the means by which the Australian Constitution acts as a check on parliament in law-making",
        relatedKnowledgePoints: [
            "the ways in which the Australian Constitution acts as a check on parliament in law-making: bicameral structure of parliament, separation of legislative, executive and judicial powers, express protection of rights, the role of the High Court in interpreting the Australian Constitution, the requirement for a referendum."
        ],
        exampleQuestionStems: [
            "Evaluate the separation of powers as a check on Commonwealth parliamentary law-making.",
            "Evaluate the effectiveness of the express protection of rights in limiting parliamentary power, using at least one example."
        ],
        directLinks: [{ text: "See notes on 'The Constitution as a Check on Parliament'", targetId: "u4aos1-ks4" }]
    },
    {
        id: "ksb_synthesise_apply_scenarios",
        keySkillText: "Synthesise and apply legal principles and information to actual and/or hypothetical scenarios",
        relatedKnowledgePoints: [
            "This skill draws on all key knowledge within Unit 4 AOS 1. Application requires understanding of constitutional provisions, law-making processes, roles of institutions, and precedent."
            ],
        exampleQuestionStems: [
            "Consider the following scenario... Applying your knowledge of [specific legal principle/topic], advise [character] on their legal position.",
            "A hypothetical law is proposed by the Commonwealth Parliament that conflicts with an existing state law. Explain the constitutional process for resolving such an inconsistency and predict the likely outcome."
            ],
        directLinks: [
            { text: "See Practice Questions for scenario examples", targetId: "u4aos1-practice-questions" },
            { text: "Review relevant content sections (e.g., s109, division of powers)", targetId: "u4aos1-accordion-container"}
        ]
    }
];

    // --- Bridging Skills to Knowledge ---
    let ksBridgeKeySkillSelect, ksBridgeDetailContainer, ksBridgeKeyKnowledgeDisplay, ksBridgeExampleQuestionsDisplay, ksBridgeDirectLinksDisplay;

    function ksBridgeHandleDirectLink(targetAccordionId) {
        console.log("ksBridgeHandleDirectLink: Attempting to navigate to targetAccordionId:", targetAccordionId);
        // Click the main U4AOS1 tab button if not already active
        const unit4Button = document.querySelector('button.main-nav-button[data-target="unit4-content"]');
        if (unit4Button && !unit4Button.classList.contains('active')) {
            unit4Button.click(); // Ensure Unit 4 content is visible
        }
        // Then ensure AOS1 tab is active
        const aos1Button = document.querySelector('button.unit4-nav-button[data-target="unit4-aos1"]');
        if (aos1Button && !aos1Button.classList.contains('active')) {
            aos1Button.click(); // Ensure AOS1 content is visible
        }

        const targetButton = document.querySelector(`.u4aos1-content-toggle[data-target="${targetAccordionId}"]`);
        if (targetButton) {
            targetButton.click();

            setTimeout(() => {
                const targetElement = document.getElementById(targetAccordionId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                    const innerAccordionToggle = targetElement.querySelector('.accordion-toggle');
                    const innerAccordionContent = targetElement.querySelector('.accordion-content');

                    if (innerAccordionToggle && innerAccordionContent) {
                        const isExpanded = innerAccordionContent.style.maxHeight && innerAccordionContent.style.maxHeight !== '0px';
                        if (!isExpanded) {
                            if (!innerAccordionToggle.classList.contains('opening')) {
                                innerAccordionToggle.classList.add('opening');
                                innerAccordionToggle.click();
                                setTimeout(() => innerAccordionToggle.classList.remove('opening'), 300);
                            }
                        }
                    }
                } else {
                    console.warn(`ksBridgeHandleDirectLink: Target element with ID "${targetAccordionId}" not found for scrolling.`);
                }
            }, 300);
        } else {
            console.warn(`ksBridgeHandleDirectLink: Target button for accordion ID "${targetAccordionId}" not found.`);
        }
    }

    function ksBridgeDisplaySkillInfo() {
        ksBridgeKeySkillSelect = document.getElementById('bridgeKeySkillSelect');
        ksBridgeDetailContainer = document.getElementById('bridgeSkillDetailContainer');
        ksBridgeKeyKnowledgeDisplay = document.getElementById('bridgeKeyKnowledgeDisplay');
        ksBridgeExampleQuestionsDisplay = document.getElementById('bridgeExampleQuestionsDisplay');
        ksBridgeDirectLinksDisplay = document.getElementById('bridgeDirectLinksDisplay');

        if (!ksBridgeKeySkillSelect || !ksBridgeDetailContainer || !ksBridgeKeyKnowledgeDisplay || !ksBridgeExampleQuestionsDisplay || !ksBridgeDirectLinksDisplay) {
            console.error("KS Bridge: One or more display elements missing in ksBridgeDisplaySkillInfo.");
            return;
        }

        const selectedSkillId = ksBridgeKeySkillSelect.value;
        console.log("ksBridgeDisplaySkillInfo: Selected skill ID:", selectedSkillId);

        ksBridgeKeyKnowledgeDisplay.innerHTML = '';
        ksBridgeExampleQuestionsDisplay.innerHTML = '';
        ksBridgeDirectLinksDisplay.innerHTML = '';

        if (!selectedSkillId) {
            ksBridgeDetailContainer.classList.add('hidden');
            return;
        }

        const skillData = ksBridgeData.find(skill => skill.id === selectedSkillId);
        if (!skillData) {
            console.error(`KS Bridge: No data found for skill ID: ${selectedSkillId}`);
            ksBridgeDetailContainer.classList.add('hidden');
            return;
        }
        console.log("ksBridgeDisplaySkillInfo: Displaying info for skill:", skillData.keySkillText);

        skillData.relatedKnowledgePoints.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            ksBridgeKeyKnowledgeDisplay.appendChild(li);
        });

        skillData.exampleQuestionStems.forEach(stem => {
            const li = document.createElement('li');
            li.textContent = stem;
            ksBridgeExampleQuestionsDisplay.appendChild(li);
        });

        skillData.directLinks.forEach(link => {
            const button = document.createElement('button');
            button.classList.add('ks-bridge-direct-link', 'py-1.5', 'px-4', 'bg-purple-600', 'text-white', 'rounded-md', 'hover:bg-purple-700', 'text-xs', 'mr-2', 'mb-2', 'focus:outline-none', 'focus:ring-2', 'focus:ring-purple-500', 'focus:ring-opacity-75');
            button.textContent = link.text;
            button.dataset.targetId = link.targetId;
            button.addEventListener('click', () => ksBridgeHandleDirectLink(link.targetId));
            ksBridgeDirectLinksDisplay.appendChild(button);
        });

        ksBridgeDetailContainer.classList.remove('hidden');
    }

    function ksBridgeInitialize() {
        console.log("DEBUG: ksBridgeInitialize: Function called.");
        ksBridgeKeySkillSelect = document.getElementById('bridgeKeySkillSelect');
        console.log("DEBUG: ksBridgeInitialize: keySkillSelect element:", ksBridgeKeySkillSelect);
        ksBridgeDetailContainer = document.getElementById('bridgeSkillDetailContainer');
        ksBridgeKeyKnowledgeDisplay = document.getElementById('bridgeKeyKnowledgeDisplay');
        ksBridgeExampleQuestionsDisplay = document.getElementById('bridgeExampleQuestionsDisplay');
        ksBridgeDirectLinksDisplay = document.getElementById('bridgeDirectLinksDisplay');

        if (!ksBridgeKeySkillSelect || !ksBridgeDetailContainer || !ksBridgeKeyKnowledgeDisplay || !ksBridgeExampleQuestionsDisplay || !ksBridgeDirectLinksDisplay) {
            console.warn("Bridging Skills to Knowledge tool elements not found in the DOM for Exam Skills Helper. Feature will not initialize.");
            return;
        }
        console.log("DEBUG: ksBridgeInitialize: Essential DOM elements found. ksBridgeData content:", JSON.parse(JSON.stringify(window.ksBridgeData || [])));

        while (ksBridgeKeySkillSelect.options.length > 1) {
            ksBridgeKeySkillSelect.remove(1);
        }
        console.log("DEBUG: ksBridgeInitialize: About to populate dropdown. Number of skills in ksBridgeData:", window.ksBridgeData ? window.ksBridgeData.length : 'ksBridgeData not found');
        if (typeof ksBridgeData !== 'undefined' && ksBridgeData.length > 0) {
            console.log("ksBridgeInitialize: ksBridgeData loaded with", ksBridgeData.length, "items.");
            ksBridgeData.forEach(item => {
                console.log(`DEBUG: ksBridgeInitialize: Processing item - ID: ${item.id}, Text: ${item.keySkillText}`);
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = item.keySkillText;
                console.log("DEBUG: ksBridgeInitialize: Created option:", option);
                if(ksBridgeKeySkillSelect) ksBridgeKeySkillSelect.appendChild(option); else console.error("DEBUG: keySkillSelect is null, cannot append option.");
            });
        } else {
            console.warn("ksBridgeData is not defined or empty. Dropdown will not be populated for Bridging Skills tool.");
        }
        if(ksBridgeKeySkillSelect) console.log("DEBUG: ksBridgeInitialize: Dropdown population complete. Total options:", ksBridgeKeySkillSelect.options.length);

        ksBridgeKeySkillSelect.addEventListener('change', ksBridgeDisplaySkillInfo);

        ksBridgeDetailContainer.classList.add('hidden');
        ksBridgeKeyKnowledgeDisplay.innerHTML = '';
        ksBridgeExampleQuestionsDisplay.innerHTML = '';
        ksBridgeDirectLinksDisplay.innerHTML = '';
        console.log("Bridging Skills to Knowledge tool initialized for Exam Skills Helper.");
    }
    // End of Bridging Skills to Knowledge ---

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
        },
        {
            scenario: "Parliament delegates power to a local council to make detailed parking regulations for a city district.",
            options: ["Delegated Legislation", "Judicial Conservatism", "Codification of Common Law", "Abrogation of Common Law"],
            answerIndex: 0,
            explanation: "This is an example of **delegated legislation**, where parliament gives law-making authority to subordinate bodies such as local councils or government departments."
        },
        {
            scenario: "A lower court follows a precedent set by a higher court but states that societal values have changed and urges parliament to update the law.",
            options: ["Binding Precedent", "Persuasive Precedent", "Ability of Courts to Influence Parliament", "Statutory Interpretation"],
            answerIndex: 2,
            explanation: "Courts can influence parliament by highlighting outdated precedents in obiter dictum and suggesting reform, even when bound to follow the precedent."
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
        },
        {
            excerpt: "The 1967 referendum altered the Constitution so that Aboriginal people would be counted in the census and allowed the Commonwealth to make laws for them.",
            question: "Discuss one way in which the 1967 referendum changed the division of law-making powers between the Commonwealth and the states.",
            keywords: ["1967 referendum", "constitutional change", "Indigenous Australians", "division of powers", "s51(xxvi)", "Commonwealth power"]
        },
        {
            excerpt: "A government bill proposing a national standard for environmental protection is heavily amended in the Senate after an inquiry hears evidence from experts and the public.",
            question: "Identify which role of the Senate is illustrated in this excerpt and explain how it can improve the quality of legislation.",
            keywords: ["House of review", "Senate inquiry", "amendments", "scrutiny", "bicameral structure", "improve legislation"]
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

    // --- Key Skill 5: Explain the significance of section 109 (Inconsistency Resolver) ---
    const irScenarioArea = document.getElementById('irScenarioArea');
    const irInputSection = document.getElementById('irInputSection');
    const irInputPrevails = document.getElementById('irInputPrevails');
    const irInputEffect = document.getElementById('irInputEffect');
    const irInputSignificance = document.getElementById('irInputSignificance');
    const irCheckAnswerBtn = document.getElementById('irCheckAnswerBtn');
    const irNextScenarioBtn = document.getElementById('irNextScenarioBtn');
    const irFeedbackArea = document.getElementById('irFeedbackArea');

    const inconsistencyResolverScenarios = [
        {
            id: 'ir1',
            scenario: "The Commonwealth Parliament passes the 'National Data Security Act 2025 (Cth)' which requires all businesses handling personal data to implement specific encryption standards. Victoria later passes the 'Victorian Data Privacy Act 2026 (Vic)' which sets lower encryption standards for small businesses operating only within Victoria, arguing it's less burdensome for them.",
            answers: {
                section: ["s109", "section 109", "109"],
                prevails: "Commonwealth",
                effect: ["invalid to the extent of the inconsistency", "inoperative to the extent of inconsistency"],
                significanceKeywords: ["restricts state power", "ensures uniformity", "commonwealth paramount", "concurrent powers"]
            },
            modelSignificance: "Section 109 ensures that in areas where both Commonwealth and State parliaments can make laws (concurrent powers), a single, uniform national approach (the Commonwealth's) will apply if there's a direct conflict, thus restricting state legislative power in such instances."
        },
        {
            id: 'ir2',
            scenario: "A state law mandates specific labeling requirements for all food products sold within that state, including detailed allergen warnings. The Commonwealth Parliament has an existing 'Food Standards Australia New Zealand Act 1991 (Cth)' that sets out national food labeling standards, which are less prescriptive regarding certain allergens than the new state law.",
            answers: {
                section: ["s109", "section 109", "109"],
                prevails: "Commonwealth",
                effect: ["invalid to the extent of the inconsistency", "inoperative to the extent of inconsistency"],
                significanceKeywords: ["national standard", "prevents conflicting regulations", "consistency in trade", "concurrent area (food standards)"]
            },
            modelSignificance: "Section 109 is significant here as it provides a mechanism to resolve conflicting regulations in areas of shared law-making power like food standards, ensuring that national standards set by the Commonwealth prevail over inconsistent state laws, promoting consistency for businesses and consumers across Australia."
        },
        {
            id: 'ir3',
            scenario: "The Commonwealth enacts a Telecommunications Security Act requiring all messaging apps to store encryption keys. A state law later prohibits storing such keys citing privacy concerns.",
            answers: {
                section: ["s109", "section 109", "109"],
                prevails: "Commonwealth",
                effect: ["invalid to the extent of the inconsistency", "inoperative to the extent of inconsistency"],
                significanceKeywords: ["communication", "national security", "consistency", "concurrent power"]
            },
            modelSignificance: "Where Commonwealth and state laws conflict in a concurrent area like communications security, section 109 ensures national requirements prevail, preventing fragmented standards." 
        },
        {
            id: 'ir4',
            scenario: "A state law sets a lower minimum wage than a Commonwealth industrial relations law covering the same employees.",
            answers: {
                section: ["s109", "section 109", "109"],
                prevails: "Commonwealth",
                effect: ["invalid to the extent of the inconsistency", "inoperative to the extent of the inconsistency"],
                significanceKeywords: ["workplace relations", "concurrent", "commonwealth overrides", "uniform standards"]
            },
            modelSignificance: "Section 109 protects the supremacy of Commonwealth industrial relations legislation, ensuring consistent workplace standards across Australia." 
        }
        // Additional scenarios can be added here
    ];
    let currentIRScenarioIndex = 0;

    window.loadIRScenario = function(index) { // Expose to window
        if (!irScenarioArea || index === undefined || index >= inconsistencyResolverScenarios.length) {
            // console.warn("IR Load: Invalid index or missing elements.");
            if (irScenarioArea) irScenarioArea.innerHTML = "<p>No more scenarios or error loading.</p>";
            return;
        }
        currentIRScenarioIndex = index;
        const scenarioData = inconsistencyResolverScenarios[index];
        irScenarioArea.innerHTML = `<p class="font-medium mb-1">Scenario ${index + 1}:</p><p>${scenarioData.scenario}</p>`;

        // Clear inputs and feedback
        if(irInputSection) irInputSection.value = '';
        if(irInputPrevails) irInputPrevails.value = '';
        if(irInputEffect) irInputEffect.value = '';
        if(irInputSignificance) irInputSignificance.value = '';

        [irInputSection, irInputPrevails, irInputEffect, irInputSignificance].forEach(el => {
            if(el) el.classList.remove('correct', 'incorrect');
        });

        if(irFeedbackArea) irFeedbackArea.innerHTML = '';
        if(irCheckAnswerBtn) irCheckAnswerBtn.classList.remove('hidden');
        if(irNextScenarioBtn) irNextScenarioBtn.classList.add('hidden');
    }

    if (irCheckAnswerBtn) {
        irCheckAnswerBtn.addEventListener('click', () => {
            if (!irFeedbackArea || currentIRScenarioIndex >= inconsistencyResolverScenarios.length) return;

            const scenarioData = inconsistencyResolverScenarios[currentIRScenarioIndex];
            let allCorrect = true;
            let feedbackHTML = "";

            // 1. Check Section
            const userSection = irInputSection.value.trim().toLowerCase();
            if (scenarioData.answers.section.map(s => s.toLowerCase()).includes(userSection)) {
                irInputSection.classList.add('correct');
                irInputSection.classList.remove('incorrect');
                feedbackHTML += `<div class="feedback-item feedback-correct">1. Relevant Section: Correct! (${irInputSection.value})</div>`;
            } else {
                irInputSection.classList.add('incorrect');
                irInputSection.classList.remove('correct');
                feedbackHTML += `<div class="feedback-item feedback-incorrect">1. Relevant Section: Incorrect. Hint: It's a key section for resolving Cth/State law conflicts. (Expected: s109)</div>`;
                allCorrect = false;
            }

            // 2. Check Prevails
            const userPrevails = irInputPrevails.value;
            if (userPrevails === scenarioData.answers.prevails) {
                irInputPrevails.classList.add('correct');
                irInputPrevails.classList.remove('incorrect');
                feedbackHTML += `<div class="feedback-item feedback-correct">2. Prevailing Law: Correct! (${userPrevails})</div>`;
            } else {
                irInputPrevails.classList.add('incorrect');
                irInputPrevails.classList.remove('correct');
                feedbackHTML += `<div class="feedback-item feedback-incorrect">2. Prevailing Law: Incorrect. Hint: Which level of government's law takes precedence under s109? (Expected: ${scenarioData.answers.prevails})</div>`;
                allCorrect = false;
            }

            // 3. Check Effect
            const userEffect = irInputEffect.value.trim().toLowerCase();
            let effectCorrect = false;
            for (const ans of scenarioData.answers.effect) {
                if (userEffect.includes(ans.toLowerCase())) { // Check if user's answer contains a valid phrase
                    effectCorrect = true;
                    break;
                }
            }
            if (effectCorrect) {
                irInputEffect.classList.add('correct');
                irInputEffect.classList.remove('incorrect');
                feedbackHTML += `<div class="feedback-item feedback-correct">3. Effect on State Law: Correct! (e.g., ${scenarioData.answers.effect[0]})</div>`;
            } else {
                irInputEffect.classList.add('incorrect');
                irInputEffect.classList.remove('correct');
                feedbackHTML += `<div class="feedback-item feedback-incorrect">3. Effect on State Law: Needs review. Hint: What happens to the state law where it clashes? (e.g., invalid to the extent of the inconsistency)</div>`;
                allCorrect = false;
            }

            // 4. Check Significance (Keyword based for simplicity)
            const userSignificance = irInputSignificance.value.trim().toLowerCase();
            let significanceKeywordsMet = 0;
            let significanceFeedback = "4. Significance: ";
            scenarioData.answers.significanceKeywords.forEach(keyword => {
                if (userSignificance.includes(keyword.toLowerCase())) {
                    significanceKeywordsMet++;
                }
            });
            if (significanceKeywordsMet >= 1) { // Require at least one keyword for "correct"
                irInputSignificance.classList.add('correct');
                irInputSignificance.classList.remove('incorrect');
                significanceFeedback += `<span class="feedback-correct">Looks good! You've touched on key aspects.</span><br><small class="feedback-hint">Model significance: ${scenarioData.modelSignificance}</small>`;
            } else {
                irInputSignificance.classList.add('incorrect');
                irInputSignificance.classList.remove('correct');
                significanceFeedback += `<span class="feedback-incorrect">Consider elaborating on the impact. Hint: Think about how s109 affects state power or ensures national consistency.</span><br><small class="feedback-hint">Model significance: ${scenarioData.modelSignificance}</small>`;
                allCorrect = false;
            }
            feedbackHTML += `<div class="feedback-item">${significanceFeedback}</div>`;

            irFeedbackArea.innerHTML = feedbackHTML;
            if (irCheckAnswerBtn) irCheckAnswerBtn.classList.add('hidden');
            if (irNextScenarioBtn) irNextScenarioBtn.classList.remove('hidden');
        });
    }

    if (irNextScenarioBtn) {
        irNextScenarioBtn.addEventListener('click', () => {
            currentIRScenarioIndex++;
            if (currentIRScenarioIndex >= inconsistencyResolverScenarios.length) {
                currentIRScenarioIndex = 0; // Loop back
                if(irScenarioArea) irScenarioArea.innerHTML = "<p>All scenarios completed! Resetting...</p>";
            }
            if(typeof window.loadIRScenario === 'function') window.loadIRScenario(currentIRScenarioIndex);
        });
    }

    // Update initializeKeySkillsHub to include setup for Inconsistency Resolver
    // This function should already be defined at the end of your keySkillsHub.js
    // We are modifying it here to add the new call.
    // Duplicate declaration removed to avoid redeclaration error

    // Ensure this is within your main DOMContentLoaded listener in keySkillsHub.js

// ... (existing code for Skill 1, Skill 2, Power Sort, Relationship Matcher, Gemini API, etc.) ...

// --- Key Skill 5: Explain the significance of section 109 (Inconsistency Resolver) ---
// (Existing code for Inconsistency Resolver - assumed to be correct and largely untouched, except for ensuring it's within the main IIFE)

// --- Key Skill 6: Case Reconstruction (Division of Powers Focus) ---
const ks6DopCaseData = [
    {
        id: "tasDams",
        name: "Commonwealth v Tasmania (Tasmanian Dams Case) (1983)",
        elements: {
            facts: "The Tasmanian government intended to build a dam on the Franklin River. The Commonwealth Parliament passed legislation to prevent this, based on Australia's obligations under an international treaty (World Heritage Convention).",
            issue: "Did the Commonwealth have the power to pass legislation to stop the dam construction, overriding Tasmania's residual powers over land management and infrastructure?",
            decision: "The High Court held (4:3) that the Commonwealth's 'external affairs' power (s51(xxix)) supported the legislation, as it was giving effect to an international treaty. The Commonwealth law was valid and overrode the inconsistent Tasmanian law.",
            impact: "Significantly expanded the Commonwealth's law-making power through the external affairs power, allowing it to legislate on matters previously considered solely state domain if related to international treaty obligations. Showed how s109 resolves conflicts involving external affairs.",
            constitution: "Section 51(xxix) (External Affairs power), Section 109 (Inconsistency between Commonwealth and State laws)."
        }
    },
    {
        id: "brislan",
        name: "R v Brislan (1935)",
        elements: {
            facts: "Mrs. Brislan was charged under the Wireless Telegraphy Act 1905 (Cth) for not having a license for her wireless set (radio).",
            issue: "Did the Commonwealth Parliament have the power under s51(v) of the Constitution (postal, telegraphic, telephonic, and other like services) to legislate regarding wireless radio sets?",
            decision: "The High Court held that 'other like services' could be interpreted to include radio broadcasting, even though it wasn't specifically envisaged by the Constitution's drafters in 1901. The Commonwealth law was valid.",
            impact: "Broadened the interpretation of s51(v), allowing the Commonwealth to legislate on new forms of communication technology. Demonstrated that constitutional powers can be interpreted to adapt to technological advancements.",
            constitution: "Section 51(v) (Postal, telegraphic, telephonic, and other like services)."
        }
    },
    {
        id: "coleWhitfield",
        name: "Cole v Whitfield (1988)",
        elements: {
            facts: "Tasmania restricted sale of undersized crayfish, raising s92 free trade issues.",
            issue: "Whether this law imposed a protectionist burden on interstate trade in breach of s92.",
            decision: "High Court ruled it was a non-protectionist conservation measure, so s92 not infringed.",
            impact: "Clarified that only discriminatory or protectionist laws breach s92, allowing reasonable regulation by states.",
            constitution: "Section 92 - Interstate trade and commerce"
        }
    },
    {
        id: "roach",
        name: "Roach v Electoral Commissioner (2007)",
        elements: {
            facts: "Commonwealth law banned all sentenced prisoners from voting in federal elections.",
            issue: "Did this blanket ban conflict with sections 7 and 24 requiring parliament be directly chosen by the people?",
            decision: "High Court held the complete ban invalid; only serious offenders could be excluded.",
            impact: "Recognised an implied constitutional protection of the right to vote, limiting Commonwealth power.",
            constitution: "Sections 7 & 24 - Representative government"
        }
    }
];

ks6DopCaseData.forEach(caseItem => {
    caseItem.allPrompts = Object.entries(caseItem.elements).map(([category, text]) => ({ category, text }));
});

let ks6CurrentSelectedCase = null;
let ks6DragSourceElement = null;

// Note: Element getters will be inside ks6InitializeDOPReconstructionTool to ensure DOM is ready for Key Skills Hub
let ks6CaseSelect, ks6SourceElementsContainer, ks6DropTargets, ks6CheckAnswersBtn, ks6FeedbackDiv;

function ks6ShuffleArray(array) { // Renamed from shuffleArray
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function ks6PopulateDOPCaseSelect() {
    if (!ks6CaseSelect) return;
    ks6CaseSelect.innerHTML = '<option value="">-- Select a Case --</option>'; // Clear existing options first
    ks6DopCaseData.forEach(caseItem => {
        const option = document.createElement('option');
        option.value = caseItem.id;
        option.textContent = caseItem.name;
        ks6CaseSelect.appendChild(option);
    });
}

function ks6DisplayDOPCaseElements(caseId) {
    ks6CurrentSelectedCase = ks6DopCaseData.find(c => c.id === caseId);
    if (!ks6CurrentSelectedCase) return;

    ks6ClearBoard();
    if(ks6FeedbackDiv) {
        ks6FeedbackDiv.innerHTML = '';
        ks6FeedbackDiv.className = 'mt-2 text-xs'; // Reset feedback class
    }

    const promptsToDisplay = ks6ShuffleArray([...ks6CurrentSelectedCase.allPrompts]);

    if (!ks6SourceElementsContainer) return;
    // Clear placeholder before adding items
    ks6SourceElementsContainer.innerHTML = '';

    promptsToDisplay.forEach((prompt, index) => {
        const draggableItem = document.createElement('div');
        draggableItem.classList.add('dop-draggable-item'); // Keep class for styling
        draggableItem.setAttribute('draggable', 'true');
        draggableItem.textContent = prompt.text;
        draggableItem.id = `ks6-dop-item-${ks6CurrentSelectedCase.id}-${index}`;
        draggableItem.dataset.correctCategory = prompt.category;
        
        draggableItem.addEventListener('dragstart', ks6HandleDragStart);
        draggableItem.addEventListener('dragend', ks6HandleDragEnd);
        ks6SourceElementsContainer.appendChild(draggableItem);
    });
}

function ks6ClearBoard() {
    if (ks6SourceElementsContainer) {
         ks6SourceElementsContainer.innerHTML = '<span class="text-xs text-slate-500 italic">Select a case to load elements.</span>';
    }
    if (ks6DropTargets) {
        Object.values(ks6DropTargets).forEach(target => {
            if (target) {
                const list = target.querySelector('.dropped-items-list');
                if(list) list.innerHTML = '';
                // Remove placement classes from the drop target itself if they were applied there
                target.classList.remove('correct-placement-target', 'incorrect-placement-target');
            }
        });
    }
    if(ks6FeedbackDiv) ks6FeedbackDiv.innerHTML = '';
}

function ks6HandleDragStart(e) {
    ks6DragSourceElement = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.id);
    setTimeout(() => this.classList.add('dragging'), 0);
}

function ks6HandleDragEnd() {
    this.classList.remove('dragging');
}

function ks6HandleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function ks6HandleDragEnter(e) {
    // Check if 'this' is a valid drop target before adding class
    if (this.classList.contains('dop-drop-target')) {
        this.classList.add('drag-over');
    }
}

function ks6HandleDragLeave(e) {
    if (this.classList.contains('dop-drop-target')) {
        this.classList.remove('drag-over');
    }
}

function ks6HandleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!this.classList.contains('dop-drop-target')) return; // Ensure drop is on a valid target
    this.classList.remove('drag-over');

    const draggedItemId = e.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(draggedItemId);

    if (draggedItem && ks6DragSourceElement) {
        const itemsList = this.querySelector('.dropped-items-list');
        if (itemsList) {
            if (itemsList.children.length > 0) {
                const existingItem = itemsList.children[0];
                if (ks6SourceElementsContainer) ks6SourceElementsContainer.appendChild(existingItem);
                existingItem.classList.remove('correct-placement', 'incorrect-placement');
            }
            itemsList.appendChild(draggedItem);
        }
    }
    ks6DragSourceElement = null;
}

function ks6CheckDOPAnswers() {
    if (!ks6CurrentSelectedCase || !ks6FeedbackDiv) {
        if(ks6FeedbackDiv) {
            ks6FeedbackDiv.textContent = "Please select a case first.";
            ks6FeedbackDiv.className = 'mt-2 text-xs p-2 rounded bg-red-100 text-red-700';
        }
        return;
    }

    let allCorrect = true;
    let feedbackHtml = `<strong>Results for ${ks6CurrentSelectedCase.name}:</strong><ul>`;

    Object.entries(ks6DropTargets).forEach(([categoryKey, targetDiv]) => {
        if (!targetDiv) return; // Skip if a target div is not found
        
        const itemsList = targetDiv.querySelector('.dropped-items-list');
        const droppedItem = itemsList ? itemsList.children[0] : null;

        // Reset visual feedback on the target div
        targetDiv.classList.remove('correct-placement-target', 'incorrect-placement-target');
        // Reset visual feedback on the item itself (if it exists)
        if (droppedItem) {
            droppedItem.classList.remove('correct-placement-item', 'incorrect-placement-item');
        }


        if (droppedItem) {
            const correctCategoryForItem = droppedItem.dataset.correctCategory;
            // Derive targetCategory from the key of ks6DropTargets (e.g. 'facts', 'issue')
            const targetCategory = categoryKey;

            if (correctCategoryForItem === targetCategory) {
                feedbackHtml += `<li class="text-green-700">${ks6CurrentSelectedCase.elements[targetCategory].substring(0,20)}... (Category: ${targetCategory}): Correct!</li>`;
                targetDiv.classList.add('correct-placement-target'); // Visual feedback for the target
                droppedItem.classList.add('correct-placement-item'); // Visual feedback for the item
            } else {
                feedbackHtml += `<li class="text-red-700">${ks6CurrentSelectedCase.elements[targetCategory].substring(0,20)}... (Category: ${targetCategory}): Incorrect. (This belongs to ${correctCategoryForItem})</li>`;
                targetDiv.classList.add('incorrect-placement-target');
                droppedItem.classList.add('incorrect-placement-item');
                allCorrect = false;
            }
        } else {
            feedbackHtml += `<li class="text-orange-700">Category: ${categoryKey}: Empty.</li>`;
            allCorrect = false;
        }
    });

    feedbackHtml += "</ul>";
    ks6FeedbackDiv.innerHTML = feedbackHtml;

    if (allCorrect) {
        ks6FeedbackDiv.className = 'mt-2 text-xs p-2 rounded bg-green-100 text-green-700';
    } else {
        ks6FeedbackDiv.className = 'mt-2 text-xs p-2 rounded bg-red-100 text-red-700';
    }
}

function ks6InitializeDOPReconstructionTool() {
    ks6CaseSelect = document.getElementById('ks6DopCaseSelect');
    ks6SourceElementsContainer = document.getElementById('ks6DopSourceElements');
    ks6DropTargets = {
        facts: document.getElementById('ks6DopDropTargetFacts'),
        issue: document.getElementById('ks6DopDropTargetIssue'),
        decision: document.getElementById('ks6DopDropTargetDecision'),
        impact: document.getElementById('ks6DopDropTargetImpact'),
        constitution: document.getElementById('ks6DopDropTargetConstitution')
    };
    ks6CheckAnswersBtn = document.getElementById('ks6CheckDopReconstructionBtn');
    ks6FeedbackDiv = document.getElementById('ks6DopReconstructionFeedback');

    if (!ks6CaseSelect || !ks6SourceElementsContainer || !ks6CheckAnswersBtn || !ks6FeedbackDiv) {
        console.warn("One or more KS6 DoP reconstruction tool elements not found. Initialization incomplete.");
        return;
    }

    // Check if all drop targets are found
    let allTargetsFound = true;
    for (const key in ks6DropTargets) {
        if (!ks6DropTargets[key]) {
            console.warn(`KS6 DoP drop target for '${key}' not found.`);
            allTargetsFound = false;
        }
    }
    if (!allTargetsFound) {
        console.warn("Not all KS6 DoP drop targets were found. Functionality may be impaired.");
    }

    ks6PopulateDOPCaseSelect();
    ks6CaseSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            ks6DisplayDOPCaseElements(e.target.value);
        } else {
            ks6ClearBoard();
            ks6CurrentSelectedCase = null;
            if(ks6FeedbackDiv) {
                 ks6FeedbackDiv.innerHTML = '';
                 ks6FeedbackDiv.className = 'mt-2 text-xs';
            }
        }
    });

    Object.values(ks6DropTargets).forEach(target => {
        if (target) {
            target.addEventListener('dragover', ks6HandleDragOver);
            target.addEventListener('dragenter', ks6HandleDragEnter);
            target.addEventListener('dragleave', ks6HandleDragLeave);
            target.addEventListener('drop', ks6HandleDrop);
        }
    });

    if(ks6CheckAnswersBtn) ks6CheckAnswersBtn.addEventListener('click', ks6CheckDOPAnswers);

    ks6ClearBoard(); // Initial clear
}

// --- Update initializeKeySkillsHub ---
// This section is being removed as we will consolidate into the final initializeKeySkillsHub function.

// Ensure other initializers like for Guided Answers are also correctly handled if they are part of Key Skills Hub
// For example, if Guided Answers is part of Key Skills Hub, its initialization should also be here.
// This example assumes Guided Answers is separate or initialized elsewhere if not part of Key Skills Hub.

const guidedAnswerContainer = document.getElementById('guidedAnswerContainer'); // This seems to be for a separate tool
const checkGuidedAnswerBtn = document.getElementById('checkGuidedAnswerBtn');
const guidedAnswerFeedback = document.getElementById('guidedAnswerFeedback');
let currentGuidedQuestionIndex = 0; // Ensure this is defined if not already for this tool

// THIS IS THE ARRAY YOU NEED TO POPULATE
const guidedAnswerQuestions = [
    {
        id: 'gaq1',
        question: "Explain one reason for statutory interpretation. (3 marks)",
        taskWord: "Explain",
        taskWordChecklist: ["Provide details", "State reasons", "Link cause/effect"],
        scaffold: `One reason courts interpret statutes is to clarify the <input type="text" id="gaq1_blank1" data-gaq-id="gaq1" data-blank-index="0" class="guided-answer-blank" placeholder="e.g., specific meaning"> in an Act. This can occur if the words are <input type="text" id="gaq1_blank2" data-gaq-id="gaq1" data-blank-index="1" class="guided-answer-blank" placeholder="e.g., ambiguous">, or if new <input type="text" id="gaq1_blank3" data-gaq-id="gaq1" data-blank-index="2" class="guided-answer-blank" placeholder="e.g., technologies"> arise. For example, in <input type="text" id="gaq1_blank4" data-gaq-id="gaq1" data-blank-index="3" class="guided-answer-blank" placeholder="Case">, the court had to interpret <input type="text" id="gaq1_blank5" data-gaq-id="gaq1" data-blank-index="4" class="guided-answer-blank" placeholder="word/phrase">. Courts do this to <input type="text" id="gaq1_blank6" data-gaq-id="gaq1" data-blank-index="5" class="guided-answer-blank" placeholder="purpose">.`,
        blanks: [
            { id: "gaq1_blank1", answer: ["specific meaning", "meaning of words", "ambiguity"] },
            { id: "gaq1_blank2", answer: ["ambiguous", "unclear", "have multiple meanings"] },
            { id: "gaq1_blank3", answer: ["technologies", "circumstances", "situations"] },
            { id: "gaq1_blank4", answer: ["Deing v Tarola", "Kevin and Jennifer"] }, // Example cases
            { id: "gaq1_blank5", answer: ["'regulated weapon'", "'man'"] }, // Example phrases
            { id: "gaq1_blank6", answer: ["resolve the dispute", "clarify its application", "apply law to facts"] }
        ]
    },
    {
        id: 'gaq2',
        question: "Discuss two strengths of the bicameral structure as a check on parliament. (4 marks)",
        taskWord: "Discuss",
        taskWordChecklist: ["Present different viewpoints", "Provide examples", "Link to effectiveness"],
        scaffold: `One strength of having two houses is that the <input type="text" id="gaq2_blank1" data-gaq-id="gaq2" data-blank-index="0" class="guided-answer-blank" placeholder="upper house"> can <input type="text" id="gaq2_blank2" data-gaq-id="gaq2" data-blank-index="1" class="guided-answer-blank" placeholder="review"> bills thoroughly. Another strength is that it requires <input type="text" id="gaq2_blank3" data-gaq-id="gaq2" data-blank-index="2" class="guided-answer-blank" placeholder="agreement"> of both houses, preventing rushed legislation.`,
        blanks: [
            { id: "gaq2_blank1", answer: ["upper house", "Senate", "Legislative Council"] },
            { id: "gaq2_blank2", answer: ["review", "scrutinise", "examine"] },
            { id: "gaq2_blank3", answer: ["agreement", "approval", "consideration"] }
        ]
    }
    // Additional questions can be added here for the Guided Answer Construction tool
];

window.loadGuidedAnswerQuestion = function(index) { // Expose to window if called from script.js
    if (!guidedAnswerContainer || index === undefined || index >= guidedAnswerQuestions.length) {
        if (guidedAnswerContainer) guidedAnswerContainer.innerHTML = "<p>No more guided questions or error loading.</p>";
        console.warn("Guided Answers Load: Invalid index or missing elements. Index:", index, "Total Qs:", guidedAnswerQuestions.length);
        return;
    }
    currentGuidedQuestionIndex = index;
    const qData = guidedAnswerQuestions[index];

    let checklistHTML = '<h5 class="font-semibold text-sm text-orange-700 mb-1">Task Word Checklist (' + qData.taskWord + '):</h5><ul class="task-word-checklist text-xs mb-2">';
    qData.taskWordChecklist.forEach(item => {
        checklistHTML += `<li><label><input type="checkbox" class="task-word-item accent-orange-500"> ${item}</label></li>`;
    });
    checklistHTML += '</ul>';

    guidedAnswerContainer.innerHTML = `
        <h4 class="font-semibold text-orange-700">${qData.question}</h4>
        ${checklistHTML}
        <div class="text-sm mt-2">${qData.scaffold}</div>
    `;
    if (guidedAnswerFeedback) guidedAnswerFeedback.innerHTML = ""; // Clear previous feedback
    // Ensure check button is visible if it was hidden
    if (checkGuidedAnswerBtn) checkGuidedAnswerBtn.classList.remove('hidden');
}

if (checkGuidedAnswerBtn) {
    checkGuidedAnswerBtn.addEventListener('click', () => {
        if (!guidedAnswerFeedback || currentGuidedQuestionIndex >= guidedAnswerQuestions.length) return;
        
        const qData = guidedAnswerQuestions[currentGuidedQuestionIndex];
        let allBlanksCorrect = true;
        let feedbackText = "<strong>Feedback:</strong><ul>";

        qData.blanks.forEach((blankInfo, idx) => {
            // The input elements are now created dynamically, so we need to select them based on their dynamic IDs or data attributes
            const inputElement = document.querySelector(`.guided-answer-blank[data-gaq-id="${qData.id}"][data-blank-index="${idx}"]`);
            
            if (inputElement) {
                const userAnswer = inputElement.value.trim().toLowerCase();
                const correctAnswers = blankInfo.answer.map(a => a.toLowerCase());
                let isCorrect = false;
                // Check if user's answer is one of the possible correct answers or contains a correct phrase
                if (correctAnswers.includes(userAnswer) || correctAnswers.some(ca => userAnswer.includes(ca) && userAnswer.length > 2)) {
                    isCorrect = true;
                }

                if (isCorrect) {
                    inputElement.classList.remove('incorrect');
                    inputElement.classList.add('correct');
                    feedbackText += `<li class="text-green-600">Blank ${idx + 1} (e.g., "${blankInfo.answer[0]}") appears correct!</li>`;
                } else {
                    inputElement.classList.remove('correct');
                    inputElement.classList.add('incorrect');
                    allBlanksCorrect = false;
                    feedbackText += `<li class="text-red-600">Blank ${idx + 1} (e.g., "${blankInfo.answer[0]}") - check your answer. One possible answer: ${blankInfo.answer[0]}</li>`;
                }
            } else {
                console.warn(`Could not find input element for blank index ${idx} in question ${qData.id}`);
                allBlanksCorrect = false; // Consider it incorrect if the element isn't found
            }
        });
        feedbackText += "</ul>";
        
        if (guidedAnswerFeedback) {
            guidedAnswerFeedback.innerHTML = feedbackText;
            if (allBlanksCorrect) {
                guidedAnswerFeedback.innerHTML = '<p class="text-green-600 font-semibold">All blanks filled correctly! Well done!</p>' + feedbackText;
            }
        }
    });
}

// Update initializeKeySkillsHub OR ensure initializeToolIfNeeded in script.js calls this
// If initializeKeySkillsHub is your main initializer for tools in keySkillsHub.js:
// const originalInitializeKeySkillsHubForGuidedAnswers = window.initializeKeySkillsHub; // Removed
// window.initializeKeySkillsHub = function() { // Removed
//     if(typeof originalInitializeKeySkillsHubForGuidedAnswers === 'function' && originalInitializeKeySkillsHubForGuidedAnswers.toString() !== window.initializeKeySkillsHub.toString()) {
//         originalInitializeKeySkillsHubForGuidedAnswers();
//     } else {
//         // Fallback initializations if original was placeholder or for other tools in keySkillsHub.js
//         if (document.getElementById('scenarioTermChallengeContainer') && typeof window.loadSTCQuestion === 'function') { /* ... */ }
//         // ... other initializations from keySkillsHub.js ...
//     }
//     // Initialize Guided Answer Construction if its container exists
//     if (document.getElementById('guidedAnswerContainer') && typeof window.loadGuidedAnswerQuestion === 'function') {
//         window.loadGuidedAnswerQuestion(0); // Load the first question
//     }
//     console.log("Key Skills Hub Initialized/Re-initialized, ensuring Guided Answers is loaded if visible.");
// }; // Removed






    // --- Gemini API Integration ---
    // REMOVE or leave empty: const GEMINI_API_KEY = ""; 
    // The API key will now be handled by your server-side proxy.

    // **IMPORTANT**: Replace this URL with the actual URL of your deployed serverless proxy function.
    // For local testing, you might run a local proxy server and use something like 'http://localhost:3001/api/gemini-proxy'.
    // For Netlify/Vercel, it might be a relative path like '/.netlify/functions/gemini-proxy' or '/api/gemini-proxy'.
    const PROXY_ENDPOINT_URL = "/.netlify/functions/gemini-proxy"; 

    async function callGeminiAPI(promptText) {
 feature-review/logging-enhancements
       console.log("DEBUG: callGeminiAPI: Received prompt:", promptText); // Log prompt reception
console.log("DEBUG: callGeminiAPI: Using PROXY_ENDPOINT_URL:", PROXY_ENDPOINT_URL); // Log proxy URL
 main
        if (PROXY_ENDPOINT_URL === "YOUR_DEPLOYED_SERVERLESS_FUNCTION_URL_HERE" || PROXY_ENDPOINT_URL === "") {
            const errorMessage = "Proxy endpoint URL is not configured. Please update PROXY_ENDPOINT_URL in keySkillsHub.js.";
            console.error(errorMessage); // Log full error for dev
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
            console.log("callGeminiAPI: Attempting to fetch from proxy..."); // Log before fetch
            const response = await fetch(PROXY_ENDPOINT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: promptText })
            });
            console.log("DEBUG: callGeminiAPI: Raw fetch response status:", response.status);

            if (!response.ok) {
                let errorPayload;
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    errorPayload = await response.json();
                } else {
                    const textError = await response.text();
                    errorPayload = { error: { message: textError || "Proxy returned non-JSON error" } };
                }
                console.log("DEBUG: callGeminiAPI: Response not OK. errorPayload:", errorPayload);
                // Enhanced console log for non-OK responses
                console.error("callGeminiAPI: Proxy returned non-OK response. Status:", response.status, "Response body/payload:", errorPayload);
                const errorMessage = errorPayload?.error?.message || errorPayload?.message || response.statusText || 'Unknown proxy error.';
                throw new Error(`Proxy Error: ${response.status}. ${errorMessage}`);
            }

            console.log("callGeminiAPI: Raw fetch response status:", response.status); // Log raw status for successful response
            const result = await response.json();
< feature-review/logging-enhancements
            console.log("callGeminiAPI: Parsed JSON result:", result); // Log parsed JSON
=======
            console.log("DEBUG: callGeminiAPI: Parsed JSON result:", result);
 main

            if (result && result.text) {
                return result.text;
            } else if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                console.warn("Proxy returned full Gemini structure. Consider simplifying proxy response to { text: '...' }.");
                return result.candidates[0].content.parts[0].text;
            } else {
                console.log("DEBUG: callGeminiAPI: Unexpected response structure.");
                // Enhanced console log for unexpected structure
                console.error("callGeminiAPI: Unexpected response structure from proxy:", result);
                throw new Error("Could not extract text from proxy response. Ensure proxy returns { text: '...' } or standard Gemini structure.");
            }
        } catch (error) {
            console.error("DEBUG: callGeminiAPI: Error during fetch or processing. Full error object:", error);
            // This catch block now handles errors thrown from above (non-OK, structure issues) and network errors from fetch itself.
            console.error("Error calling Proxy API or processing response in callGeminiAPI:", error);
            
            // UI updates for errors are now primarily handled by the calling function (e.g., initializeAICoachButtons)
            // to provide more context-specific UI feedback.
            // However, we can keep a generic fallback here if needed, or ensure calling functions always handle UI.
            // For now, re-throwing allows the specific caller (like AI Coach or Case Insights) to handle its own UI.
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
                    console.error("Glossary AI Explainer Error for term:", termName, error); // Specific log
                    aiContentDiv.innerHTML = `Sorry, couldn't fetch an explanation. Error: ${error.message}. Check console for details.`;
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
                console.error("Case Insight API Error for case:", caseData.name, error); // Specific log
                aiCaseInsightError.textContent = `Sorry, couldn't fetch AI insights. Error: ${error.message}. Check console.`;
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

    // --- Key Skill 7: High Court & Judicial Review (Scenario Spotter) ---
    const ks7ScenarioData = [
        {
            id: "ks7scen1",
            text: "A community group believes a new Commonwealth law unfairly restricts freedom of speech by banning protests near Parliament House. They decide to challenge the law's validity.",
            options: ["HCA: Constitutional Interpretation", "HCA: Final Court of Appeal", "Judicial Review of Gov. Action/Law"],
            correctAnswer: "HCA: Constitutional Interpretation",
            feedback: "Correct! The High Court interprets the Constitution to determine if laws are valid. Challenging a law's impact on a constitutionally implied right (like freedom of political communication) falls under this role."
        },
        {
            id: "ks7scen2",
            text: "After losing a negligence case in the State Supreme Court (Court of Appeal), a company seeks to have the decision overturned by a higher judicial body, arguing a point of law was incorrectly applied.",
            options: ["HCA: Constitutional Interpretation", "HCA: Final Court of Appeal", "Judicial Review of Gov. Action/Law"],
            correctAnswer: "HCA: Final Court of Appeal",
            feedback: "Correct! The High Court is the ultimate appellate court in Australia (s73). It hears appeals (with special leave) from state Supreme Courts, ensuring consistency and correct application of law."
        },
        {
            id: "ks7scen3",
            text: "A government department makes a decision to deny a particular license to a business. The business believes the department did not follow the proper procedures outlined in the relevant Act when making this decision.",
            options: ["HCA: Constitutional Interpretation", "HCA: Final Court of Appeal", "Judicial Review of Gov. Action/Law"],
            correctAnswer: "Judicial Review of Gov. Action/Law",
            feedback: "Correct! Judicial review allows courts to assess the lawfulness of government decisions, ensuring they are made within the scope of the relevant legislation and that proper procedures are followed."
        },
        {
            id: "ks7scen4",
            text: "The Commonwealth Parliament passes an Act that attempts to give the Minister for Immigration the power to make final decisions on visa applications that cannot be challenged or reviewed by any court. This is challenged as unconstitutional.",
            options: ["HCA: Constitutional Interpretation", "HCA: Final Court of Appeal", "Judicial Review of Gov. Action/Law"],
            correctAnswer: "HCA: Constitutional Interpretation",
            feedback: "Correct! The High Court would interpret the Constitution (particularly Chapter III regarding judicial power) to determine if Parliament can validly oust the courts' jurisdiction. This is a core function of its role as guardian of the Constitution."
        }
    ];

    let currentKs7ScenarioIndex = 0;
    let ks7ScenarioTextEl, ks7ScenarioOptionsEl, ks7CheckScenarioBtnEl, ks7NextScenarioBtnEl, ks7ScenarioFeedbackEl;

    function ks7LoadScenario(index) {
        if (!ks7ScenarioTextEl || !ks7ScenarioOptionsEl || !ks7CheckScenarioBtnEl || !ks7NextScenarioBtnEl || !ks7ScenarioFeedbackEl) {
            console.warn("KS7 Scenario Spotter elements not fully initialized.");
            return;
        }

        if (index < 0 || index >= ks7ScenarioData.length) {
            ks7ScenarioTextEl.innerHTML = "<p>All scenarios completed! Click 'Next Scenario' to restart.</p>";
            ks7ScenarioOptionsEl.innerHTML = "";
            ks7CheckScenarioBtnEl.classList.add('hidden');
            ks7NextScenarioBtnEl.classList.remove('hidden'); // Allow restart
            currentKs7ScenarioIndex = -1; // Flag to restart on next click
            return;
        }
        const scenario = ks7ScenarioData[index];
        ks7ScenarioTextEl.innerHTML = `<p>${scenario.text}</p>`;
        ks7ScenarioOptionsEl.innerHTML = "";
        scenario.options.forEach((option, i) => {
            const optionId = `ks7opt${index}_${i}`;
            ks7ScenarioOptionsEl.innerHTML += `
                <div>
                    <input type="radio" name="ks7scenarioOption" id="${optionId}" value="${option}" class="sr-only">
                    <label for="${optionId}" class="cursor-pointer p-1.5 hover:bg-cyan-100 rounded block">${option}</label>
                </div>`;
        });
        ks7ScenarioFeedbackEl.innerHTML = "";
        ks7CheckScenarioBtnEl.classList.remove('hidden');
        ks7NextScenarioBtnEl.classList.add('hidden');
    }

    function ks7CheckScenarioAnswer() {
        if (!ks7ScenarioFeedbackEl || currentKs7ScenarioIndex < 0) return; // Do nothing if in completion state

        const selectedOptionInput = document.querySelector('input[name="ks7scenarioOption"]:checked');
        if (!selectedOptionInput) {
            ks7ScenarioFeedbackEl.textContent = "Please select an option.";
            ks7ScenarioFeedbackEl.className = 'mt-2 text-xs text-amber-600';
            return;
        }

        const userAnswer = selectedOptionInput.value;
        const correctAnswer = ks7ScenarioData[currentKs7ScenarioIndex].correctAnswer;
        const feedback = ks7ScenarioData[currentKs7ScenarioIndex].feedback;

        if (userAnswer === correctAnswer) {
            ks7ScenarioFeedbackEl.innerHTML = `<strong class="text-green-600">Correct!</strong> ${feedback}`;
            ks7ScenarioFeedbackEl.className = 'mt-2 text-xs text-green-700';
        } else {
            ks7ScenarioFeedbackEl.innerHTML = `<strong class="text-red-600">Not quite.</strong> The best fit is '${correctAnswer}'. ${feedback}`;
            ks7ScenarioFeedbackEl.className = 'mt-2 text-xs text-red-700';
        }
        ks7CheckScenarioBtnEl.classList.add('hidden');
        ks7NextScenarioBtnEl.classList.remove('hidden');
    }

    function ks7ShowNextScenario() {
        if (currentKs7ScenarioIndex === -1) { // Restart condition
            currentKs7ScenarioIndex = 0;
        } else {
            currentKs7ScenarioIndex++;
        }
        ks7LoadScenario(currentKs7ScenarioIndex);
    }

    function ks7InitializeHighCourtJudicialReview() {
        ks7ScenarioTextEl = document.getElementById('ks7ScenarioText');
        ks7ScenarioOptionsEl = document.getElementById('ks7ScenarioOptions');
        ks7CheckScenarioBtnEl = document.getElementById('ks7CheckScenarioBtn');
        ks7NextScenarioBtnEl = document.getElementById('ks7NextScenarioBtn');
        ks7ScenarioFeedbackEl = document.getElementById('ks7ScenarioFeedback');

        if (!ks7ScenarioTextEl || !ks7ScenarioOptionsEl || !ks7CheckScenarioBtnEl || !ks7NextScenarioBtnEl || !ks7ScenarioFeedbackEl) {
            console.warn("Could not initialize Key Skill 7 Scenario Spotter: one or more elements are missing.");
            return;
        }

        ks7CheckScenarioBtnEl.addEventListener('click', ks7CheckScenarioAnswer);
        ks7NextScenarioBtnEl.addEventListener('click', ks7ShowNextScenario);

        currentKs7ScenarioIndex = 0; // Reset index on initialization
        ks7LoadScenario(currentKs7ScenarioIndex);
        console.log("Key Skill 7 (High Court & Judicial Review) initialized.");
    }
    // End of Key Skill 7 specific logic
});

// Modify initializeKeySkillsHub to include new setups
 feature-review/logging-enhancements
function initializeKeySkillsHub() { // This is now the single, comprehensive initializer
=======
function initializeKeySkillsHub() {
    console.log("DEBUG: initializeKeySkillsHub: Function called.");
 main
    console.log("Key Skills Hub Initialized or Re-initialized");

    // Standard tool initializations (if their containers exist)
    if (document.getElementById('scenarioTermChallengeContainer') && typeof loadSTCQuestion === 'function') {
        loadSTCQuestion(typeof currentSTCQuestion !== 'undefined' ? currentSTCQuestion : 0);
    }
    if (document.getElementById('sourceAnalysisChallengeContainer') && typeof loadSACExcerpt === 'function') {
        loadSACExcerpt(typeof currentSACExcerpt !== 'undefined' ? currentSACExcerpt : 0);
    }
    if (document.getElementById('powerSortGameContainer') && typeof setupPowerSortGame === 'function') {
        setupPowerSortGame();
    }
    if (document.getElementById('relationshipMatcherContainer') && typeof setupRelationshipMatcherGame === 'function') {
        setupRelationshipMatcherGame();
    }
    if (document.getElementById('inconsistencyResolverContainer') && typeof loadIRScenario === 'function') {
        loadIRScenario(0);
    }
    if (document.getElementById('ks6DopCaseDisplay') && typeof ks6InitializeDOPReconstructionTool === 'function') {
        ks6InitializeDOPReconstructionTool();
    }
    if (document.getElementById('ks7ScenarioSpotter') && typeof ks7InitializeHighCourtJudicialReview === 'function') {
        ks7InitializeHighCourtJudicialReview();
    }
    if (document.getElementById('guidedAnswerContainer') && typeof window.loadGuidedAnswerQuestion === 'function') {
        window.loadGuidedAnswerQuestion(0); // Initialize Guided Answers
    }

 feature-review/logging-enhancements
    // Initialize AI Coach Buttons for Task Words (not checking for a container, should always try to init if function exists)

    // Initialize AI Coach Buttons for Task Words
    console.log("DEBUG: initializeKeySkillsHub: About to call initializeAICoachButtons. AI Coach buttons found on page:", document.querySelectorAll('.ai-task-coach-btn').length);
 main
    if (typeof initializeAICoachButtons === 'function') {
        initializeAICoachButtons();
    }

    // Initialize Bridging Skills to Knowledge Tool
    console.log("DEBUG: initializeKeySkillsHub: Checking if bridgeKeySkillSelect exists for ksBridgeInitialize call. Element:", document.getElementById('bridgeKeySkillSelect'));
    if (document.getElementById('bridgeKeySkillSelect') && typeof ksBridgeInitialize === 'function') {
        ksBridgeInitialize();
    }

    // Initialize Exam Pitfalls Accordions
    if (document.getElementById('examPitfallsAccordionContainer') && typeof ksPitfallsInitializeAccordions === 'function') {
        ksPitfallsInitializeAccordions();
    }

    // Initialize Structured Answer Templates Tool
    if (document.getElementById('templateTaskWordSelect') && typeof ksTemplatesInitialize === 'function') {
        ksTemplatesInitialize();
    }
    // Add other initializers here as needed
}
window.initializeKeySkillsHub = initializeKeySkillsHub; // Ensure it's globally accessible


// --- Exam Pitfalls Accordion Logic ---
function ksPitfallsInitializeAccordions() {
    const pitfallAccordionToggles = document.querySelectorAll('.exam-pitfall-accordion-trigger'); // Updated selector

    if (pitfallAccordionToggles.length === 0) {
        // console.warn("No 'pitfall-accordion-toggle' elements found for Exam Pitfalls.");
        return;
    }

    pitfallAccordionToggles.forEach(toggle => {
        // Ensure this event listener is only added once or is idempotent
        if (toggle.dataset.pitfallInitialized) return;

        toggle.addEventListener('click', (event) => { // Added event parameter
            const content = toggle.nextElementSibling;
            // Ensure the content element is correctly identified by class
            if (!content || !content.classList.contains('exam-pitfall-accordion-content')) {
                console.warn('Exam Pitfall: Accordion content not found for toggle:', toggle);
                return;
            }
            const arrow = toggle.querySelector('.arrow-icon');

            const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';
            console.log(`Exam Pitfall Accordion: Clicked. Currently isExpanded: ${isExpanded}. Initial maxHeight: ${content.style.maxHeight}`);

            // Stop event propagation to prevent generic accordion handlers (if any) from firing
            if(event) event.stopPropagation(); // Added check for event, though it should always be present now

            if (isExpanded) {
                content.style.maxHeight = '0px';
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                    console.log(`Exam Pitfall Accordion: Collapsing. Set maxHeight to 0px. Arrow transform: rotate(0deg)`);
                } else {
                    console.log(`Exam Pitfall Accordion: Collapsing. Set maxHeight to 0px. No arrow found.`);
                }
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                if (arrow) {
                    arrow.style.transform = 'rotate(180deg)';
                    console.log(`Exam Pitfall Accordion: Expanding. Set maxHeight to ${content.scrollHeight}px. Arrow transform: rotate(180deg)`);
                } else {
                    console.log(`Exam Pitfall Accordion: Expanding. Set maxHeight to ${content.scrollHeight}px. No arrow found.`);
                }
            }
        });
        toggle.dataset.pitfallInitialized = 'true'; // Mark as initialized
    });
    console.log("Exam Pitfalls accordions initialized (or re-checked).");
}
// End of Exam Pitfalls Accordion Logic ---


// --- AI Coach for Task Words ---
function initializeAICoachButtons() {
    console.log("DEBUG: initializeAICoachButtons: Function called.");
    const aiCoachButtons = document.querySelectorAll('.ai-task-coach-btn');
    console.log("DEBUG: initializeAICoachButtons: Found aiCoachButtons elements:", aiCoachButtons.length);
    aiCoachButtons.forEach(button => {
        console.log("DEBUG: initializeAICoachButtons: Setting up button with data-taskword:", button.dataset.taskword);
        button.addEventListener('click', async (event) => {
            console.log("DEBUG: AI Coach button clicked for taskword:", button.dataset.taskword);
            const currentButton = event.currentTarget;
            const taskword = currentButton.dataset.taskword;
            console.log("AI Coach button clicked for taskword:", taskword); // Log button click
            const parentElement = currentButton.parentElement;

            if (!parentElement) {
                console.error("AI Coach: Could not find parent element for button:", currentButton);
                return;
            }

            const loadingDiv = parentElement.querySelector('.ai-coach-loading');
            const tipsDiv = parentElement.querySelector('.ai-coach-tips');
            const errorP = parentElement.querySelector('.ai-coach-error');

            if (!loadingDiv || !tipsDiv || !errorP) {
                console.error("AI Coach: Could not find all necessary child elements (loading, tips, error) for taskword:", taskword, "Parent:", parentElement);
                return;
            }

            // Update UI (Start)
            loadingDiv.classList.remove('hidden');
            tipsDiv.innerHTML = '<!-- AI tips will be displayed here -->'; // Clear previous tips
            tipsDiv.classList.add('hidden'); // Hide tips div while loading
            errorP.textContent = '';
            errorP.classList.add('hidden');
            currentButton.disabled = true;

            // Construct Gemini API Prompt
            const prompt = `You are an expert VCE Legal Studies exam coach. For the VCAA task word '${taskword}', provide 3-4 concise, actionable tips for a Year 12 student on how to structure a high-scoring response. Focus on what examiners look for and common pitfalls to avoid. Present as a bulleted list.`;
            console.log("DEBUG: initializeAICoachButtons: Calling callGeminiAPI with prompt for taskword '", taskword, "'. Prompt:", prompt);

            try {
                // Call Gemini API (ensure callGeminiAPI is defined and accessible)
                const responseText = await callGeminiAPI(prompt);
                console.log("DEBUG: initializeAICoachButtons: callGeminiAPI successful for '", taskword, "'. Response text:", responseText);

                // Handle Success: Convert markdown-style bullet points to HTML
                const lines = responseText.split('\n').filter(line => line.trim() !== '');
                let htmlList = '<ul>';
                lines.forEach(line => {
                    if (line.startsWith('* ') || line.startsWith('- ')) {
                        htmlList += `<li>${line.substring(2)}</li>`;
                    } else {
                        // If not a bullet point, still include it as a list item or paragraph
                        // For simplicity, treating all non-empty lines as list items if not bullets.
                        // Consider more sophisticated parsing if Gemini response varies greatly.
                        htmlList += `<li>${line}</li>`;
                    }
                });
                htmlList += '</ul>';

                tipsDiv.innerHTML = htmlList;
                tipsDiv.classList.remove('hidden');

            } catch (error) {
                // Handle Error
                console.error("DEBUG: initializeAICoachButtons: callGeminiAPI failed for '", taskword, "'. Full error object:", error);
                console.error("AI Coach API Call Failed for taskword:", taskword, error); // Enhanced log
                errorP.textContent = `Sorry, AI Coach could not provide tips at this time. Please check the browser console for more details. (Error: ${error.message})`; // Modified user message
                errorP.classList.remove('hidden');
            } finally {
                // Update UI (End)
                loadingDiv.classList.add('hidden');
                currentButton.disabled = false;
            }
        });
    });
    console.log("AI Coach buttons initialized.");
}
// End of AI Coach for Task Words ---


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

[end of keySkillsHub.js]
