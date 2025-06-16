// examSkillsHelper.js - handles Exam Skills Helper features

export const answerTemplatesData = {
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


export function initializeExamSkillsHelper() {
  ksTemplatesInitialize();
  initializeAICoachButtons();
}

