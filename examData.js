// examData.js - central data structure for Exam Mastery Hub
// This file defines categories, objectives and question banks for exam practice

export const examData = {
  unit4: {
    aos1: {
      skills: [
        {
          id: 'divisionOfPowers',
          name: 'Division of Powers',
          objectives: [
            'Explain exclusive powers',
            'Distinguish between concurrent and residual powers'
          ],
          questions: [
            {
              id: 'dop-q1',
              text: 'Which section of the Constitution lists concurrent powers?',

              options: ['Section 51', 'Section 52', 'Section 109', 'Section 72'],

              answer: 'Section 51',
              difficulty: 'easy',
              topic: 'Constitution',
              skillType: 'recall',
              marks: 1,
              time: 1

            },
            {
              id: 'dop-q2',
              text: 'What name is given to powers solely exercised by the Commonwealth?',
              options: ['Concurrent powers', 'Exclusive powers', 'Residual powers', 'Referendum powers'],
              answer: 'Exclusive powers',
              difficulty: 'easy',
              topic: 'Constitution',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'dop-q3',
              text: 'Section 109 of the Constitution resolves conflicts between which powers?',
              options: ['Exclusive and concurrent', 'State and residual', 'Commonwealth and state', 'Referendum and executive'],
              answer: 'Commonwealth and state',
              difficulty: 'medium',
              topic: 'Constitution',
              skillType: 'understanding',
              marks: 2,
              time: 2

            },
            {
              id: 'dop-q4',
              text: 'Which of these is an example of an exclusive power of the Commonwealth Parliament?',
              options: ['Education', 'Health', 'Coining money', 'Roads'],
              answer: 'Coining money',
              difficulty: 'easy',
              topic: 'Division of Powers',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'dop-q5',
              text: 'Powers not listed in the Constitution and belonging to the states are known as:',
              options: ['Concurrent powers', 'Exclusive powers', 'Residual powers', 'Specific powers'],
              answer: 'Residual powers',
              difficulty: 'easy',
              topic: 'Division of Powers',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'dop-q6',
              text: 'If a state law and a Commonwealth law conflict on a concurrent matter, which law prevails?',
              options: ['The state law', 'The Commonwealth law', 'Neither, the matter is referred to the High Court', 'Both laws operate concurrently'],
              answer: 'The Commonwealth law',
              difficulty: 'medium',
              topic: 'Division of Powers',
              skillType: 'understanding',
              marks: 2,
              time: 2
            },
            {
              id: 'dop-q7',
              text: 'Section 51(xxxvii) of the Constitution allows states to refer powers to the Commonwealth. This is known as:',
              options: ['Referral of powers', 'Concurrent powers', 'Exclusive powers', 'Residual powers'],
              answer: 'Referral of powers',
              difficulty: 'medium',
              topic: 'Division of Powers',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'dop-q8',
              text: 'Which of the following is an example of a residual power?',
              options: ['Defence', 'Marriage', 'Primary education', 'Customs and excise duties'],
              answer: 'Primary education',
              difficulty: 'easy',
              topic: 'Division of Powers',
              skillType: 'application',
              marks: 1,
              time: 1
            },
            {
              id: 'dop-q9',
              text: 'The power to make laws on marriage is an example of what kind of power?',
              options: ['Exclusive power', 'Concurrent power', 'Residual power', 'Implied power'],
              answer: 'Concurrent power',
              difficulty: 'medium',
              topic: 'Division of Powers',
              skillType: 'application',
              marks: 2,
              time: 2
            },
            {
              id: 'dop-q10',
              text: 'What is the primary purpose of the division of powers in the Australian Constitution?',
              options: ['To ensure states have more power than the Commonwealth', 'To limit the power of the Commonwealth government and protect the rights of states', 'To make law-making more efficient', 'To give the High Court ultimate authority'],
              answer: 'To limit the power of the Commonwealth government and protect the rights of states',
              difficulty: 'hard',
              topic: 'Constitution',
              skillType: 'understanding',
              marks: 2,
              time: 3
            },
            {
              id: 'dop-q11',
              text: 'Which body has the authority to interpret the Constitution and resolve disputes about the division of powers?',
              options: ['The Governor-General', 'The Commonwealth Parliament', 'The High Court of Australia', 'The Prime Minister'],
              answer: 'The High Court of Australia',
              difficulty: 'medium',
              topic: 'Constitution',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'dop-q12',
              text: 'An example of a concurrent power listed in s51 is:',
              options: ['Coining money', 'Taxation', 'Education', 'Defence (naval and military)'],
              answer: 'Taxation',
              difficulty: 'easy',
              topic: 'Division of Powers',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'dop-q13',
              text: 'Exclusive powers are those that can only be exercised by:',
              options: ['The State Parliaments', 'The Commonwealth Parliament', 'Both Commonwealth and State Parliaments', 'The High Court'],
              answer: 'The Commonwealth Parliament',
              difficulty: 'easy',
              topic: 'Division of Powers',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'dop-q14',
              text: 'Section 109 states that if a valid Commonwealth law is inconsistent with a state law, the Commonwealth law shall:',
              options: ['Be invalid', 'Prevail', 'Be amended', 'Be repealed'],
              answer: 'Prevail',
              difficulty: 'medium',
              topic: 'Division of Powers',
              skillType: 'understanding',
              marks: 2,
              time: 2
            },
            {
              id: 'dop-q15',
              text: 'The establishment of national defence forces is an example of what type of power?',
              options: ['Residual Power', 'Concurrent Power', 'Exclusive Power', 'Delegated Power'],
              answer: 'Exclusive Power',
              difficulty: 'medium',
              topic: 'Division of Powers',
              skillType: 'application',
              marks: 1,
              time: 1
            },
            {
              id: 'dop-q16',
              text: 'Which of these areas is typically considered a residual power of the states?',
              options: ['Immigration', 'Criminal law', 'Bankruptcy', 'Patents'],
              answer: 'Criminal law',
              difficulty: 'medium',
              topic: 'Division of Powers',
              skillType: 'application',
              marks: 2,
              time: 2
            },
            {
              id: 'dop-q17',
              text: 'What does "ultra vires" mean in the context of the division of powers?',
              options: ['Within power', 'Beyond power', 'Shared power', 'Supreme power'],
              answer: 'Beyond power',
              difficulty: 'hard',
              topic: 'Constitution',
              skillType: 'understanding',
              marks: 2,
              time: 2
            },
            {
              id: 'dop-q18',
              text: 'The Commonwealth Parliament can only make laws on matters:',
              options: ['Granted to it by the High Court', 'Specifically listed in the Constitution or referred to it', 'That the states agree upon', 'Related to international treaties'],
              answer: 'Specifically listed in the Constitution or referred to it',
              difficulty: 'medium',
              topic: 'Constitution',
              skillType: 'understanding',
              marks: 2,
              time: 2
            },
            {
              id: 'dop-q19',
              text: 'A state government attempting to create its own currency would be an example of encroaching on:',
              options: ['Residual powers', 'Concurrent powers', 'Exclusive powers', 'Referral of powers'],
              answer: 'Exclusive powers',
              difficulty: 'hard',
              topic: 'Division of Powers',
              skillType: 'application',
              marks: 2,
              time: 3
            },
            {
              id: 'dop-q20',
              text: 'The referral of powers by a state to the Commonwealth must be:',
              options: ['Temporary and conditional', 'Permanent and unconditional', 'Approved by a referendum', 'Supported by all other states'],
              answer: 'Permanent and unconditional',
              difficulty: 'hard',
              topic: 'Division of Powers',
              skillType: 'recall',
              marks: 1,
              time: 2
            }
          ]
        },
        {
          id: 'constitutionalInterpretation',
          name: 'Constitutional Interpretation Principles',
          objectives: [
            'Explain the term "ultra vires"',
            'Describe a method of constitutional interpretation',
            'Understand the role of the High Court in interpreting the Constitution'
          ],
          questions: [
            {
              id: 'ci-sa-q1',
              type: 'shortAnswer',
              text: 'Explain the legal concept of "ultra vires" in the context of Australian constitutional law.',
              modelAnswer: 'Ultra vires, meaning "beyond the powers", refers to an action taken or a law made by a body (such as parliament or an executive official) that is outside the scope of the powers granted to that body by law (e.g., the Constitution). If a court determines a law is ultra vires, it is declared invalid.',
              difficulty: 'medium',
              topic: 'Constitution',
              skillType: 'understanding',
              marks: 3,
              time: 5
            },
            {
              id: 'ci-sa-q2',
              type: 'shortAnswer',
              text: 'Describe one method the High Court uses to interpret the Constitution and give a brief example of its application.',
              modelAnswer: "One method is literalism, where the Court gives words their ordinary, natural meaning. For example, in the Engineers' Case (1920), the High Court interpreted Commonwealth powers broadly based on the literal meaning of the text, without implying reserved state powers.",
              difficulty: 'hard',
              topic: 'High Court',
              skillType: 'analysis',
              marks: 4,
              time: 6
            },
            {
              id: 'ci-sa-q3',
              type: 'shortAnswer',
              text: 'What is the significance of Section 71 of the Australian Constitution regarding judicial power?',
              modelAnswer: 'Section 71 vests the judicial power of the Commonwealth in the High Court of Australia, and in such other federal courts as the Parliament creates, and in such other courts as it invests with federal jurisdiction. It establishes the High Court as the supreme court and is crucial for the separation of powers, ensuring judicial independence.',
              difficulty: 'medium',
              topic: 'Constitution',
              skillType: 'understanding',
              marks: 3,
              time: 5
            },
            {
              id: 'ci-sa-q4',
              type: 'shortAnswer',
              text: 'Briefly explain the principle of "stare decisis" and its relevance to High Court constitutional cases.',
              modelAnswer: 'Stare decisis, meaning "to stand by things decided," is the doctrine of precedent. Lower courts are bound by the decisions of higher courts. The High Court itself is not strictly bound by its own previous decisions in constitutional cases but will only depart from them with caution, as consistency and predictability in constitutional law are highly important.',
              difficulty: 'hard',
              topic: 'High Court',
              skillType: 'analysis',
              marks: 4,
              time: 6
            },
            {
              id: 'ci-er-q1',
              type: 'extendedResponse',
              text: 'Discuss the significance of the High Court\'s role in interpreting the Australian Constitution, referring to at least one relevant case and one interpretation method. (10 marks)',
              modelAnswer: "The High Court is pivotal as the ultimate interpreter of the Constitution. Its interpretations define the scope of Commonwealth and state powers, ensure government actions are constitutionally valid, and can adapt the Constitution to contemporary issues. \n\nOne key role is resolving disputes between the Commonwealth and states, often impacting federal balance. For example, in the Tasmanian Dams Case (1983), the High Court interpreted the 'external affairs' power (s51(xxix)) broadly, allowing the Commonwealth to legislate on matters of international concern (a UNESCO treaty to protect the Franklin River), even if those areas traditionally fell under state control. This demonstrated how High Court interpretation can expand Commonwealth power.\n\nA common interpretation method is legalism, focusing on the text and established legal principles. However, the Court also considers context and precedent (stare decisis). In the Engineers' Case (1920), a literalist approach ended the doctrine of implied intergovernmental immunities, significantly altering the Commonwealth-state power dynamic. \n\nThe Court's interpretations also protect (and sometimes imply) rights, such as the implied freedom of political communication. This judicial review function, while vital for upholding the rule of law, sometimes leads to accusations of judicial activism if interpretations appear to overstep into policy-making. Ultimately, the High Court ensures the Constitution remains a living document.",
              difficulty: 'hard',
              topic: 'High Court',
              skillType: 'evaluation',
              marks: 10,
              time: 15
            },
            {
              id: 'ci-er-q2',
              type: 'extendedResponse',
              text: "Evaluate the statement: 'The division of powers outlined in the Australian Constitution effectively limits government power and protects states' rights.' Refer to specific sections of the Constitution and relevant examples in your response. (8 marks)",
              modelAnswer: "The division of powers, comprising exclusive, concurrent (s51), and residual powers, aims to limit government power and protect states' rights, but its effectiveness is debatable and has evolved. \n\nInitially, specific exclusive powers (e.g., s52 - Commonwealth places, s90 - customs and excise) and a list of concurrent powers (s51) for the Commonwealth, with remaining powers (residual) left to states, suggested a clear demarcation. Section 109, which gives Commonwealth law precedence in cases of inconsistency in concurrent areas, was intended to resolve conflicts, not necessarily to centralise power. \n\nHowever, High Court interpretations have often broadened Commonwealth power. For instance, expansive interpretations of the corporations power (s51(xx)) and external affairs power (s51(xxix)) have allowed federal intervention in areas like environmental protection and industrial relations, traditionally state responsibilities. Financial dominance, through the uniform tax cases and control over grants (s96), further shifts power to the Commonwealth, as states become reliant on federal funding, often with conditions attached. \n\nWhile residual powers (e.g., education, health, criminal law) remain formally with the states, the practical scope of these can be encroached upon by tied grants or broad interpretations of concurrent powers. Thus, while the structural division exists, its capacity to strictly limit Commonwealth power and robustly protect states' rights has diminished over time, leading to a more centralised federation than perhaps originally envisaged.",
              difficulty: 'hard',
              topic: 'Division of Powers',
              skillType: 'analysis',
              marks: 8,
              time: 12
            },
            {
              id: 'ci-mc-q1',
              type: 'multipleChoice',
              text: 'The High Court case of Roach v Electoral Commissioner (2007) is significant primarily because it:',
              options: [
                'Established the principle of parliamentary sovereignty.',
                'Affirmed an implied constitutional right to vote derived from sections 7 and 24.',
                'Broadened the Commonwealth\'s external affairs power significantly.',
                'Decided that all prisoners should have the right to vote.'
              ],
              answer: 'Affirmed an implied constitutional right to vote derived from sections 7 and 24.',
              difficulty: 'medium',
              topic: 'High Court Cases',
              skillType: 'understanding',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mc-q2',
              type: 'multipleChoice',
              text: 'Which of the following is a primary reason why courts need to interpret statutes?',
              options: [
                'To ensure judges can change laws they disagree with.',
                'Because Parliament often requests judicial review before a bill becomes law.',
                'Words or phrases in the statute may be ambiguous or their meaning may change over time.',
                'To confirm that the High Court agrees with all legislation passed by Parliament.'
              ],
              answer: 'Words or phrases in the statute may be ambiguous or their meaning may change over time.',
              difficulty: 'easy',
              topic: 'Statutory Interpretation',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mc-q3',
              type: 'multipleChoice',
              text: 'The principle of "stare decisis" in the doctrine of precedent primarily means:',
              options: [
                'Judges should disregard previous decisions to remain impartial.',
                'Higher courts are bound by the decisions of lower courts.',
                'To stand by what has been decided; courts follow past decisions of higher courts in similar cases.',
                'All High Court judgments are automatically codified into statute law.'
              ],
              answer: 'To stand by what has been decided; courts follow past decisions of higher courts in similar cases.',
              difficulty: 'medium',
              topic: 'Doctrine of Precedent',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mc-q4',
              type: 'multipleChoice',
              text: 'Judicial activism is best described as:',
              options: [
                'Judges strictly adhering to only the literal meaning of statutes.',
                'Judges being reluctant to make new law, preferring Parliament to do so.',
                'Judges being more willing to consider social and political factors and develop common law, potentially leading to significant legal changes.',
                'Judges participating in political protests or lobbying efforts.'
              ],
              answer: 'Judges being more willing to consider social and political factors and develop common law, potentially leading to significant legal changes.',
              difficulty: 'medium',
              topic: 'Courts & Law-making',
              skillType: 'understanding',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mc-q5',
              type: 'multipleChoice',
              text: 'When Parliament passes legislation that overrides or nullifies a common law principle established by a court, this is known as:',
              options: [
                'Codification',
                'Abrogation',
                'Statutory interpretation',
                'Judicial review'
              ],
              answer: 'Abrogation',
              difficulty: 'easy',
              topic: 'Parliament & Courts',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-sa-q5',
              type: 'shortAnswer',
              text: 'Explain how a judge might distinguish a previous precedent. What is the effect of distinguishing a precedent?',
              modelAnswer: "A judge might distinguish a previous precedent by finding that the material facts of the current case are sufficiently different from the material facts of the case in which the precedent was set. This means the previous binding precedent is not applicable to the current case.\n\nThe effect of distinguishing a precedent is that the judge is not bound to follow it. This allows the judge to make a different decision and potentially create a new precedent for the specific set of facts in the current case, while the original precedent remains intact for cases with genuinely similar facts.",
              difficulty: 'medium',
              topic: 'Doctrine of Precedent',
              skillType: 'understanding',
              marks: 3,
              time: 4
            },
            {
              id: 'ci-sa-q6',
              type: 'shortAnswer',
              text: 'Briefly explain the impact of the High Court\'s decision in R v Brislan; Ex parte Williams (1935) on the division of law-making powers.',
              modelAnswer: "In R v Brislan, the High Court interpreted 'other like services' in section 51(v) of the Constitution (covering postal, telegraphic, and telephonic services) to include radio broadcasting. This broadened the Commonwealth's law-making power by extending its authority into a new area of communication technology that was not explicitly mentioned in the Constitution. The impact was a shift in the division of powers towards the Commonwealth for such technologies, as it set a precedent for the Commonwealth to legislate on new forms of communication.",
              difficulty: 'medium',
              topic: 'High Court Cases',
              skillType: 'analysis',
              marks: 3,
              time: 4
            },
            {
              id: 'ci-sa-q7',
              type: 'shortAnswer',
              text: 'Identify and explain one factor that can affect the ability of courts to make law, other than the doctrine of precedent.',
              modelAnswer: "One factor is judicial conservatism. This is where judges are reluctant to make significant changes to the law, preferring that Parliament, as the elected body, takes the lead in law reform. Conservative judges tend to interpret statutes narrowly and are less likely to overrule existing precedents or create new ones that depart significantly from established principles. This can limit the courts' ability to make new law, especially in controversial areas or where existing law is seen as needing major reform.",
              difficulty: 'medium',
              topic: 'Courts & Law-making',
              skillType: 'understanding',
              marks: 3,
              time: 4
            },
            {
              id: 'ci-sa-q8',
              type: 'shortAnswer',
              text: 'Explain the concept of codification of common law by parliament, using an example.',
              modelAnswer: "Codification of common law occurs when parliament passes legislation (an Act of Parliament) that incorporates and gives statutory force to legal principles previously established by court decisions (common law). This essentially affirms the common law, making it part of statute law.\n\nAn example is the Native Title Act 1993 (Cth). This Act codified the High Court's landmark decision in Mabo v Queensland (No. 2) (1992), which recognised the existence of native title in Australian common law. The Act provided a legislative framework for the recognition and protection of native title.",
              difficulty: 'hard',
              topic: 'Parliament & Courts',
              skillType: 'application',
              marks: 4,
              time: 5
            },
            {
              id: 'ci-er-q3',
              type: 'extendedResponse',
              text: 'Compare the processes of statutory interpretation and the development of common law through the doctrine of precedent as methods of law-making by courts. (8 marks)',
              modelAnswer: "Both statutory interpretation and the development of common law through precedent are key ways courts make law, but they differ in their origin and application.\n\nStatutory interpretation is the process where courts give meaning to words or phrases in legislation (Acts of Parliament) when applying it to a specific case. This is necessary because legislation can be ambiguous, contain drafting errors, or need to be applied to unforeseen circumstances. The court's interpretation clarifies the law and sets a precedent for how that particular statute is to be applied in future cases. The primary source material is the statute itself, and courts use rules and maxims of interpretation to guide their decisions. The effect is to refine or clarify existing statute law.\n\nThe development of common law through precedent, on the other hand, occurs when courts make decisions in cases where there is no existing relevant statute law. Judges make decisions based on legal principles, and the 'ratio decidendi' (reason for the decision) of a superior court becomes binding on lower courts in the same hierarchy in cases with similar material facts (stare decisis). This creates new legal principles or develops existing ones. This is how entire areas of law, like contract or negligence, were initially developed.\n\nA key difference is the starting point: statutory interpretation involves clarifying parliamentary law, while common law development via precedent involves creating law in the absence of it or extending existing common law. Furthermore, Parliament can abrogate (override) common law (except High Court constitutional interpretations) by passing a statute, whereas courts cannot override valid statutes but can only interpret them. However, both processes rely on the court hierarchy for the consistent application of precedent, and both contribute to the dynamic evolution of law. For instance, a court's interpretation of a statute becomes a precedent itself for that statute's application.",
              difficulty: 'hard',
              topic: 'Courts & Law-making',
              skillType: 'analysis',
              marks: 8,
              time: 12
            },
            {
              id: 'ci-er-q4',
              type: 'extendedResponse',
              text: 'Discuss the extent to which factors such as judicial conservatism, the requirement for standing, and the costs and time involved in bringing a case to court affect the ability of courts to make law. (10 marks)',
              modelAnswer: "Several factors significantly affect the ability of courts to make law, sometimes limiting this ability to a considerable extent.\n\nJudicial conservatism refers to the reluctance of some judges to make significant changes to the law, preferring Parliament to initiate reforms. Conservative judges often interpret laws narrowly and are hesitant to depart from established precedents. This can limit law-making, especially in areas needing bold reform. While it promotes stability and predictability, it can also mean that outdated or unjust common law principles persist longer than they should, restricting the courts' proactive law-making role.\n\nThe requirement for standing (locus standi) dictates that a party must have a direct and special interest in a case to bring it before a court. This ensures courts are not overwhelmed with frivolous cases and that those bringing cases are genuinely affected. However, it can also limit law-making by preventing public interest cases where no single individual is uniquely impacted, or where those most affected lack the resources or knowledge to initiate proceedings. This means important legal issues might not be tested, and opportunities for judicial law-making are missed.\n\nThe costs and time involved in bringing a case to court are substantial barriers. Legal representation, court fees, and expert witness costs can be prohibitive for many individuals and groups. Protracted legal battles can take years to resolve. These factors can deter potential litigants from pursuing meritorious cases, even those that could lead to important legal developments or clarification of the law. Consequently, the courts' ability to make law is often dependent on parties having the financial capacity and endurance to see a case through, which is not always aligned with the public importance of the legal issue at hand.\n\nIn conclusion, while courts do make law through precedent and interpretation, their ability to do so is significantly constrained. Judicial conservatism can lead to self-imposed restraint, the requirement for standing filters who can access the courts, and the high costs and lengthy timeframes can prevent many important legal questions from ever being adjudicated. These factors mean that judicial law-making is often reactive and incremental, rather than a comprehensive or proactive means of law reform.",
              difficulty: 'hard',
              topic: 'Courts & Law-making',
              skillType: 'evaluation',
              marks: 10,
              time: 15
            },
            {
              id: 'ci-er-q5',
              type: 'extendedResponse',
              text: 'Explain the significance of the Tasmanian Dams Case (Commonwealth v Tasmania) for the division of law-making powers in Australia. (6 marks)',
              modelAnswer: "The Tasmanian Dams Case (1983) is highly significant for the division of law-making powers in Australia as it substantially broadened the Commonwealth Parliament's legislative capacity through an expansive interpretation of the 'external affairs' power (section 51(xxix) of the Constitution).\n\nThe case arose when the Tasmanian government intended to build a hydro-electric dam on the Franklin River. This area was listed, or was in the process of being listed, for World Heritage protection under an international treaty to which Australia was a signatory. The Commonwealth Parliament passed legislation to prevent the dam's construction, relying on its external affairs power to implement the terms of this international treaty.\n\nThe High Court, in a majority decision, upheld the Commonwealth's legislation. It found that the external affairs power enabled the Commonwealth to make laws to fulfill bona fide (genuine) international treaty obligations, even if the subject matter of that treaty would otherwise fall within state residual powers (like environmental protection or land management in this instance).\n\nThe significance of this decision was a considerable shift in the federal balance of power towards the Commonwealth. It meant that if the Commonwealth entered into an international treaty on almost any subject, it could then legislate domestically to give effect to that treaty, potentially intruding into areas traditionally managed by the states. This expanded the reach of Commonwealth power without requiring a formal constitutional amendment, thereby impacting the scope of state residual powers. While states retain their powers, if the Commonwealth legislates based on a treaty and there's an inconsistency, s109 would ensure the Commonwealth law prevails.",
              difficulty: 'hard',
              topic: 'High Court Cases',
              skillType: 'analysis',
              marks: 6,
              time: 10
            },
            {
              id: 'ci-mcq-q6',
              type: 'multipleChoice',
              text: 'In R v Brislan (1935), the High Court interpreted section 51(v) "postal, telegraphic, telephonic, and other like services" to include radio. This primarily demonstrates:',
              options: [
                'The High Court strictly limiting Commonwealth power.',
                'The High Court using a purposive approach to find Parliament\'s intention.',
                'The High Court adapting the Constitution to new technologies through interpretation.',
                'The High Court referring power back to the states.'
              ],
              answer: 'The High Court adapting the Constitution to new technologies through interpretation.',
              difficulty: 'medium',
              topic: 'High Court Cases',
              skillType: 'understanding',
              marks: 1,
              time: 2
            },
            {
              id: 'ci-mcq-q7',
              type: 'multipleChoice',
              text: 'The "external affairs" power under s51(xxix) became particularly significant for expanding Commonwealth law-making ability after which High Court case?',
              options: [
                'Roach v Electoral Commissioner (2007)',
                'Engineers\' Case (1920)',
                'Mabo v Queensland (No. 2) (1992)',
                'Commonwealth v Tasmania (Tasmanian Dams Case) (1983)'
              ],
              answer: 'Commonwealth v Tasmania (Tasmanian Dams Case) (1983)',
              difficulty: 'medium',
              topic: 'High Court Cases',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mcq-q8',
              type: 'multipleChoice',
              text: 'If the High Court declares a Commonwealth Act "ultra vires", it means the Act is:',
              options: [
                'Within the legislative power of the Commonwealth.',
                'Beyond the legislative power of the Commonwealth and therefore invalid.',
                'Only applicable to states that agree to it.',
                'Automatically referred to a referendum for approval.'
              ],
              answer: 'Beyond the legislative power of the Commonwealth and therefore invalid.',
              difficulty: 'easy',
              topic: 'Constitution',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mcq-q9',
              type: 'multipleChoice',
              text: 'An "implied right" in the Constitution, such as the freedom of political communication, is best described as a right that is:',
              options: [
                'Explicitly written in the text of the Constitution.',
                'Read into the Constitution from its structure and text by the High Court.',
                'Granted by a specific Act of Parliament, not the Constitution itself.',
                'Only applicable during election periods.'
              ],
              answer: 'Read into the Constitution from its structure and text by the High Court.',
              difficulty: 'medium',
              topic: 'Interpretation',
              skillType: 'understanding',
              marks: 2,
              time: 2
            },
            {
              id: 'ci-mcq-q10',
              type: 'multipleChoice',
              text: 'Which section of the Constitution directly vests judicial power of the Commonwealth in the High Court?',
              options: [
                'Section 51',
                'Section 71',
                'Section 109',
                'Section 128'
              ],
              answer: 'Section 71',
              difficulty: 'easy',
              topic: 'Constitution',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mcq-q11',
              type: 'multipleChoice',
              text: 'A key outcome of the Tasmanian Dams Case regarding the division of powers was that:',
              options: [
                'State residual powers were significantly expanded.',
                'The Commonwealth could legislate on matters covered by bona fide international treaties, even if usually state matters.',
                'The High Court lost its power to interpret the Constitution.',
                'Section 109 was declared invalid.'
              ],
              answer: 'The Commonwealth could legislate on matters covered by bona fide international treaties, even if usually state matters.',
              difficulty: 'hard',
              topic: 'High Court Cases',
              skillType: 'analysis',
              marks: 2,
              time: 2
            },
            {
              id: 'ci-mcq-q12',
              type: 'multipleChoice',
              text: 'The High Court\'s interpretation in the Roach case confirmed that sections 7 and 24 of the Constitution:',
              options: [
                'Guarantee an unlimited right for all citizens to vote.',
                'Allow Parliament to ban any group from voting without restriction.',
                'Imply a system of representative government which requires the Parliament to be "directly chosen by the people".',
                'Only apply to Senate elections, not the House of Representatives.'
              ],
              answer: 'Imply a system of representative government which requires the Parliament to be "directly chosen by the people".',
              difficulty: 'medium',
              topic: 'High Court Cases',
              skillType: 'understanding',
              marks: 2,
              time: 2
            },
            {
              id: 'ci-mcq-q13',
              type: 'multipleChoice',
              text: 'When interpreting the Constitution, if the High Court focuses on the ordinary and natural meaning of the words used, it is primarily applying a:',
              options: [
                'Purposive approach',
                'Literal approach',
                'Historical approach',
                'Referential approach'
              ],
              answer: 'Literal approach',
              difficulty: 'easy',
              topic: 'Interpretation',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mcq-q14',
              type: 'multipleChoice',
              text: 'The power of the High Court to determine if a law passed by Parliament is constitutional is known as:',
              options: [
                'Legislative power',
                'Executive power',
                'Judicial review',
                'Referral of powers'
              ],
              answer: 'Judicial review',
              difficulty: 'medium',
              topic: 'High Court',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mcq-q15',
              type: 'multipleChoice',
              text: 'Which of these is NOT a primary role of the High Court of Australia?',
              options: [
                'Interpreting the Constitution.',
                'Hearing appeals from lower courts.',
                'Drafting and passing new legislation for the Commonwealth.',
                'Adjudicating disputes where the Commonwealth is a party.'
              ],
              answer: 'Drafting and passing new legislation for the Commonwealth.',
              difficulty: 'easy',
              topic: 'High Court',
              skillType: 'understanding',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mcq-q16',
              type: 'multipleChoice',
              text: 'The referral of powers (s51(xxxvii)) involves:',
              options: [
                'The High Court referring constitutional questions to Parliament.',
                'The Commonwealth referring its law-making powers to the States.',
                'The States voluntarily passing their law-making powers to the Commonwealth.',
                'Citizens referring unjust laws to an administrative tribunal.'
              ],
              answer: 'The States voluntarily passing their law-making powers to the Commonwealth.',
              difficulty: 'medium',
              topic: 'Constitution',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mcq-q17',
              type: 'multipleChoice',
              text: 'A major impact of the Engineers\' Case (1920) on constitutional interpretation was:',
              options: [
                'It reinforced the doctrine of implied intergovernmental immunities.',
                'It established that Commonwealth laws must not conflict with international treaties.',
                'It rejected the doctrine of implied intergovernmental immunities and favoured a more literal interpretation of Commonwealth powers.',
                'It gave the states the power to interpret the Constitution independently of the High Court.'
              ],
              answer: 'It rejected the doctrine of implied intergovernmental immunities and favoured a more literal interpretation of Commonwealth powers.',
              difficulty: 'hard',
              topic: 'High Court Cases',
              skillType: 'understanding',
              marks: 2,
              time: 2
            },
            {
              id: 'ci-mcq-q18',
              type: 'multipleChoice',
              text: 'The High Court finding an implied freedom of political communication is significant because it:',
              options: [
                'Is an express right listed in Section 51.',
                'Limits parliamentary power to legislate in a way that burdens political communication, without being explicitly written.',
                'Can only be changed by a referendum under section 128.',
                'Means that all political advertising is unregulated.'
              ],
              answer: 'Limits parliamentary power to legislate in a way that burdens political communication, without being explicitly written.',
              difficulty: 'hard',
              topic: 'Interpretation',
              skillType: 'analysis',
              marks: 2,
              time: 2
            },
            {
              id: 'ci-mcq-q19',
              type: 'multipleChoice',
              text: 'If the High Court takes a "purposive approach" to interpreting a statute, it means it will primarily focus on:',
              options: [
                'The dictionary definition of each word in the statute.',
                'The historical context at the time the statute was passed.',
                'What Parliament intended to achieve when passing the statute.',
                'The literal meaning of the words, even if it leads to an absurd result.'
              ],
              answer: 'What Parliament intended to achieve when passing the statute.',
              difficulty: 'medium',
              topic: 'Interpretation',
              skillType: 'understanding',
              marks: 1,
              time: 1
            },
            {
              id: 'ci-mcq-q20',
              type: 'multipleChoice',
              text: 'The interpretation of the Constitution by the High Court can affect the division of law-making powers by:',
              options: [
                'Formally amending the text of the Constitution.',
                'Changing the number of seats in Parliament.',
                'Clarifying or shifting the boundaries of Commonwealth and State powers.',
                'Always favouring the expansion of State residual powers.'
              ],
              answer: 'Clarifying or shifting the boundaries of Commonwealth and State powers.',
              difficulty: 'medium',
              topic: 'High Court',
              skillType: 'analysis',
              marks: 2,
              time: 2
            }
          ]
        },
        {
          id: 'checksOnParliament',
          name: 'Checks on Parliamentary Law-Making',
          objectives: [
            'Explain the operation of the bicameral structure as a check on parliament.',
            'Analyse the role of the separation of powers in limiting parliamentary power.',
            'Evaluate the effectiveness of express rights in protecting individuals from parliamentary overreach.',
            'Discuss the High Court\'s role in interpreting the Constitution as a check on parliament.'
          ],
          questions: [
            {
              id: 'cop-mcq-q1',
              type: 'multipleChoice',
              text: 'The bicameral structure of the Commonwealth Parliament acts as a check on law-making primarily because:',
              options: [
                'It ensures all laws are popular with voters.',
                'The Senate reviews bills from the House of Representatives, providing scrutiny.',
                'It doubles the speed of the law-making process.',
                'The Governor-General has more power over two houses.'
              ],
              answer: 'The Senate reviews bills from the House of Representatives, providing scrutiny.',
              difficulty: 'easy',
              topic: 'Bicameralism',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'cop-mcq-q2',
              type: 'multipleChoice',
              text: 'What is a potential weakness of bicameralism if the government controls the upper house?',
              options: [
                'The upper house may become a "rubber stamp," reducing scrutiny.',
                'The upper house will reject all government bills.',
                'The legislative process becomes too slow and deadlocked.',
                'The judiciary will intervene more frequently.'
              ],
              answer: 'The upper house may become a "rubber stamp," reducing scrutiny.',
              difficulty: 'medium',
              topic: 'Bicameralism',
              skillType: 'understanding',
              marks: 1,
              time: 1
            },
            {
              id: 'cop-mcq-q3',
              type: 'multipleChoice',
              text: 'The separation of powers doctrine divides governmental power between which three branches?',
              options: [
                'Monarchy, Parliament, Prime Minister',
                'Federal, State, Local',
                'Legislative, Executive, Judicial',
                'Senate, House of Representatives, Governor-General'
              ],
              answer: 'Legislative, Executive, Judicial',
              difficulty: 'easy',
              topic: 'Separation of Powers',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'cop-mcq-q4',
              type: 'multipleChoice',
              text: 'Which of these is an example of an express right in the Australian Constitution?',
              options: [
                'Freedom of speech',
                'Right to vote',
                'Right to trial by jury for Commonwealth indictable offences (s80)',
                'Right to legal aid'
              ],
              answer: 'Right to trial by jury for Commonwealth indictable offences (s80)',
              difficulty: 'medium',
              topic: 'Express Rights',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'cop-mcq-q5',
              type: 'multipleChoice',
              text: 'Section 51(xxxi) of the Constitution, providing for "acquisition of property on just terms", primarily acts as a check on:',
              options: [
                'The High Court\'s power to interpret statutes.',
                'The executive\'s power to make treaties.',
                'Parliament\'s power to acquire property without fair compensation.',
                'State parliaments\' power to levy taxes.'
              ],
              answer: 'Parliament\'s power to acquire property without fair compensation.',
              difficulty: 'medium',
              topic: 'Express Rights',
              skillType: 'understanding',
              marks: 1,
              time: 2
            },
            {
              id: 'cop-mcq-q6',
              type: 'multipleChoice',
              text: 'The independence of the judiciary is a crucial aspect of the separation of powers because it:',
              options: [
                'Ensures judges are elected by the people.',
                'Allows judges to make laws without parliamentary approval.',
                'Enables courts to interpret and apply the law without undue influence from the legislative or executive branches.',
                'Means judges hold their positions for life, regardless of performance.'
              ],
              answer: 'Enables courts to interpret and apply the law without undue influence from the legislative or executive branches.',
              difficulty: 'medium',
              topic: 'Separation of Powers',
              skillType: 'understanding',
              marks: 2,
              time: 2
            },
            {
              id: 'cop-sa-q1',
              type: 'shortAnswer',
              text: 'Explain how a "hostile Senate" can act as a check on the government\'s law-making power.',
              modelAnswer: 'A "hostile Senate" refers to a situation where the government does not hold a majority of seats in the upper house (Senate). This acts as a check on the government\'s law-making power because the government cannot easily pass its legislation through the Senate without negotiation and compromise with opposition or crossbench senators. These senators can scrutinise bills more thoroughly, propose amendments, or even reject government bills, forcing the government to modify its proposals or abandon them. This ensures greater accountability and potentially better legislative outcomes.',
              difficulty: 'medium',
              topic: 'Bicameralism',
              skillType: 'understanding',
              marks: 3,
              time: 4
            },
            {
              id: 'cop-sa-q2',
              type: 'shortAnswer',
              text: 'Describe one limitation of express rights in the Australian Constitution as a check on parliamentary power.',
              modelAnswer: 'One limitation of express rights is that there are very few of them explicitly stated in the Constitution (only five). This means that many rights commonly protected in other democracies (like a general right to freedom of speech or right to privacy) are not constitutionally entrenched at the Commonwealth level. Parliament can therefore legislate on many areas affecting rights without being constrained by specific constitutional provisions, relying instead on common law or statutes which can be more easily changed.',
              difficulty: 'medium',
              topic: 'Express Rights',
              skillType: 'analysis',
              marks: 3,
              time: 4
            },
            {
              id: 'cop-sa-q3',
              type: 'shortAnswer',
              text: 'Briefly explain the overlap that exists between the legislative and executive branches of government in Australia, despite the principle of separation of powers.',
              modelAnswer: 'In Australia, the principle of separation of powers is not absolute due to an overlap between the legislative and executive branches. Ministers who form the executive government (e.g., the Prime Minister and Cabinet) are also members of Parliament (the legislature). They are responsible for initiating and guiding bills through Parliament and also for administering the laws once passed. This fusion means the executive often has significant control over the legislative agenda and process, which can reduce the effectiveness of the separation of powers as a check.',
              difficulty: 'hard',
              topic: 'Separation of Powers',
              skillType: 'understanding',
              marks: 3,
              time: 5
            },
            {
              id: 'cop-sa-q4',
              type: 'shortAnswer',
              text: 'How does the High Court\'s power of judicial review act as a check on parliamentary law-making?',
              modelAnswer: 'The High Court\'s power of judicial review allows it to examine the constitutional validity of laws passed by the Commonwealth Parliament (and state parliaments). If a law is challenged, the High Court can interpret the Constitution and determine if Parliament acted within its constitutional law-making powers. If the Court finds that a law is unconstitutional (ultra vires - beyond power), it can declare the law invalid. This acts as a direct check on parliamentary power, ensuring Parliament does not exceed its authority or infringe upon constitutional principles.',
              difficulty: 'medium',
              topic: 'High Court',
              skillType: 'understanding',
              marks: 4,
              time: 5
            },
            {
              id: 'cop-er-q1',
              type: 'extendedResponse',
              text: 'Discuss the extent to which the bicameral structure of the Commonwealth Parliament effectively acts as a check on parliamentary law-making. (8 marks)',
              modelAnswer: "The bicameral structure of the Commonwealth Parliament, comprising the House of Representatives and the Senate, acts as a check on parliamentary law-making to a significant extent, though its effectiveness varies depending on political circumstances.\n\nOne major way it acts as a check is through the Senate's role as a house of review. Bills passed by the House of Representatives must also be passed by the Senate. This provides an opportunity for further scrutiny, debate, and amendment of proposed legislation. Senate committees can conduct inquiries into bills, allowing for expert and public input, potentially leading to improved legislation. This is particularly effective when the government does not control the Senate (a 'hostile Senate'), as it must negotiate with opposition or crossbench senators, enhancing accountability.\n\nHowever, the effectiveness of this check can be limited. If the government holds a majority in the Senate, it may become a 'rubber stamp,' merely confirming the decisions of the lower house with little genuine scrutiny. This diminishes the checking function. Conversely, a hostile Senate, while providing strong scrutiny, can also lead to legislative gridlock or force compromises that unduly favour minor parties, potentially obstructing the government's agenda even if it has a clear mandate.\n\nFurthermore, the focus on review can sometimes be politically rather than substantively motivated, with the Senate used to score political points rather than genuinely improve legislation. Despite these limitations, the requirement for bills to pass two distinct houses, often with different political compositions, generally ensures a more considered legislative process than a unicameral system might allow. Therefore, while not a perfect check, bicameralism is a crucial mechanism for accountability in the Australian parliamentary system.",
              difficulty: 'hard',
              topic: 'Bicameralism',
              skillType: 'evaluation',
              marks: 8,
              time: 12
            },
            {
              id: 'cop-er-q2',
              type: 'extendedResponse',
              text: 'Evaluate the effectiveness of the separation of powers doctrine in preventing the abuse of power by the Commonwealth Parliament. (10 marks)',
              modelAnswer: "The separation of powers doctrine, which notionally divides power between the legislative, executive, and judicial branches, is only partially effective in preventing the abuse of power by the Commonwealth Parliament in Australia.\n\nThe doctrine aims to ensure no single body has absolute control. The legislative branch (Parliament) makes the law, the executive (government) administers it, and the judiciary (courts) interprets and applies it. A key strength is the independence of the judiciary, particularly the High Court. The High Court can declare legislation made by Parliament unconstitutional if it exceeds Parliament's powers (judicial review), acting as a direct check. For example, the High Court has struck down laws that infringe upon implied rights or attempt to usurp judicial power.\n\nHowever, a significant weakness in the Australian system is the overlap between the legislative and executive branches. Ministers in the executive are also members of Parliament and typically control the lower house. This fusion means the executive can often dominate the legislative process, potentially reducing the scrutiny of proposed laws and enabling the passage of legislation that might favour executive interests. This is particularly true if the government also controls the Senate.\n\nWhile the judiciary is largely independent, judges are appointed by the executive, which some argue could subtly influence the composition of the bench over time. Moreover, courts cannot initiate reviews of legislation; they must wait for a case to be brought before them, which requires standing and resources, limiting the proactive nature of this check.\n\nIn conclusion, while the independent judiciary provides a crucial check on parliamentary power through constitutional interpretation and judicial review, the fusion of the executive and legislature means the separation of powers is not absolute. This overlap can reduce the effectiveness of the checks and balances intended by the doctrine, making Parliament (when controlled by a strong executive) very powerful. Thus, its effectiveness in preventing abuse of power is substantial but qualified.",
              difficulty: 'hard',
              topic: 'Separation of Powers',
              skillType: 'evaluation',
              marks: 10,
              time: 15
            },
            {
                id: 'cop-mcq-q7',
                type: 'multipleChoice',
                text: 'Section 116 of the Australian Constitution primarily provides for:',
                options: [
                    'Freedom of interstate trade and commerce.',
                    'The right to vote in federal elections.',
                    'Freedom of religion, by preventing the Commonwealth from establishing a religion or prohibiting its free exercise.',
                    'Just terms for the acquisition of property by the Commonwealth.'
                ],
                answer: 'Freedom of religion, by preventing the Commonwealth from establishing a religion or prohibiting its free exercise.',
                difficulty: 'medium',
                topic: 'Express Rights',
                skillType: 'recall',
                marks: 1,
                time: 1
            }
          ]
        },
        {
          id: 'courtLawMaking',
          name: 'Law-Making by Courts',
          objectives: [
            'Explain the doctrine of precedent and its key elements (stare decisis, ratio decidendi, obiter dictum).',
            'Analyse the process of statutory interpretation by courts.',
            'Discuss factors that affect the ability of courts to make law (e.g., judicial activism, conservatism, costs, time, standing).',
            'Evaluate the relationship between courts and parliament in law-making.'
          ],
          questions: [
            {
              id: 'clm-mcq-q1',
              type: 'multipleChoice',
              text: 'The legal reason for a court\'s decision, which is binding on lower courts, is known as:',
              options: [
                'Obiter dictum',
                'Ratio decidendi',
                'Stare decisis',
                'Ultra vires'
              ],
              answer: 'Ratio decidendi',
              difficulty: 'easy',
              topic: 'Doctrine of Precedent',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'clm-mcq-q2',
              type: 'multipleChoice',
              text: 'A precedent set by the Supreme Court of Victoria (Court of Appeal) is binding on:',
              options: [
                'The High Court of Australia',
                'The County Court of Victoria',
                'The Supreme Court of New South Wales',
                'All Australian parliaments'
              ],
              answer: 'The County Court of Victoria',
              difficulty: 'medium',
              topic: 'Doctrine of Precedent',
              skillType: 'understanding',
              marks: 1,
              time: 1
            },
            {
              id: 'clm-mcq-q3',
              type: 'multipleChoice',
              text: 'Which of the following is a primary reason why courts need to interpret statutes?',
              options: [
                'To change laws they personally disagree with.',
                'Because the legislation may contain ambiguous words or phrases.',
                'To ensure Parliament has followed the correct legislative process.',
                'To reduce the number of High Court appeals.'
              ],
              answer: 'Because the legislation may contain ambiguous words or phrases.',
              difficulty: 'easy',
              topic: 'Statutory Interpretation',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'clm-mcq-q4',
              type: 'multipleChoice',
              text: 'If a judge is "judicially conservative", they are more likely to:',
              options: [
                'Frequently overrule past precedents to reform the law.',
                'Interpret statutes broadly to achieve social change.',
                'Be reluctant to make significant changes to the law, preferring Parliament to do so.',
                'Ignore decisions from higher courts.'
              ],
              answer: 'Be reluctant to make significant changes to the law, preferring Parliament to do so.',
              difficulty: 'medium',
              topic: 'Factors Affecting Courts',
              skillType: 'understanding',
              marks: 1,
              time: 1
            },
            {
              id: 'clm-mcq-q5',
              type: 'multipleChoice',
              text: 'What does "abrogation" of common law mean?',
              options: [
                'Parliament passing legislation that confirms a common law principle.',
                'The High Court overruling one of its own previous decisions.',
                'Parliament passing legislation that overrides or cancels a common law principle.',
                'Courts refusing to hear a case due to lack of standing.'
              ],
              answer: 'Parliament passing legislation that overrides or cancels a common law principle.',
              difficulty: 'medium',
              topic: 'Parliament & Courts',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
            {
              id: 'clm-mcq-q6',
              type: 'multipleChoice',
              text: 'The requirement for "standing" (locus standi) means that a person bringing a case to court must:',
              options: [
                'Have enough money to pay all legal fees.',
                'Be a qualified lawyer.',
                'Have a direct and special interest in the matter being litigated.',
                'Be a resident of the state where the court is located.'
              ],
              answer: 'Have a direct and special interest in the matter being litigated.',
              difficulty: 'medium',
              topic: 'Factors Affecting Courts',
              skillType: 'recall',
              marks: 1,
              time: 1
            },
             {
              id: 'clm-sa-q1',
              type: 'shortAnswer',
              text: 'Explain the difference between binding precedent and persuasive precedent.',
              modelAnswer: 'A binding precedent is a decision from a superior court in the same hierarchy that must be followed by lower courts in that hierarchy when deciding cases with similar material facts. Persuasive precedent, on the other hand, is not strictly binding but can influence a judge\'s decision. It may come from courts in other hierarchies, lower courts, courts of the same standing, or be obiter dicta from a judgment.',
              difficulty: 'medium',
              topic: 'Doctrine of Precedent',
              skillType: 'understanding',
              marks: 3,
              time: 4
            },
            {
              id: 'clm-sa-q2',
              type: 'shortAnswer',
              text: 'Identify two reasons why statutory interpretation by courts is necessary.',
              modelAnswer: 'Two reasons for statutory interpretation are: \n1. Ambiguity: Words or phrases in a statute may be unclear, have multiple meanings, or be poorly drafted, requiring a court to clarify their meaning in the context of the case. \n2. Changing circumstances: Legislation may need to be applied to new situations or technologies that were not foreseen when the Act was originally passed, requiring courts to determine if and how the Act applies.',
              difficulty: 'easy',
              topic: 'Statutory Interpretation',
              skillType: 'recall',
              marks: 2,
              time: 3
            },
            {
              id: 'clm-sa-q3',
              type: 'shortAnswer',
              text: 'How can the high cost of legal action affect the ability of courts to make law?',
              modelAnswer: 'The high cost of legal action, including legal fees, court costs, and disbursements, can deter individuals and groups from pursuing meritorious cases, even if they have a strong legal argument. If cases are not brought before the courts due to financial barriers, courts do not get the opportunity to rule on those issues, clarify legal principles, or develop new precedents. This limits the courts\' ability to make or evolve the common law in those areas.',
              difficulty: 'medium',
              topic: 'Factors Affecting Courts',
              skillType: 'analysis',
              marks: 3,
              time: 4
            },
            {
              id: 'clm-sa-q4',
              type: 'shortAnswer',
              text: 'Describe one way courts can influence Parliament in the law-making process.',
              modelAnswer: 'Courts can influence Parliament through their judgments, particularly through comments made as obiter dicta. Judges might highlight problems with existing legislation, point out gaps in the law, or suggest areas where reform is needed. These judicial comments can draw public and parliamentary attention to these issues, prompting Parliament to consider amending existing laws or creating new legislation to address the concerns raised by the judiciary.',
              difficulty: 'medium',
              topic: 'Parliament & Courts',
              skillType: 'understanding',
              marks: 3,
              time: 4
            },
            {
              id: 'clm-er-q1',
              type: 'extendedResponse',
              text: 'Discuss two factors that can limit the ability of courts to make law, and one factor that can enhance it. (8 marks)',
              modelAnswer: "Courts make law through precedent and statutory interpretation, but several factors affect their ability to do so. \n\nOne factor that limits courts is the doctrine of precedent itself, specifically the principle of stare decisis. Lower courts are bound by decisions of higher courts in the same hierarchy. While this ensures consistency, it can also restrict a judge's ability to make new law if a binding precedent exists, even if they believe it is outdated or inappropriate for the current case. Judges must wait for a case with sufficiently different material facts to distinguish the precedent, or for a higher court to overrule it.\n\nAnother limiting factor is judicial conservatism. Some judges believe their primary role is to apply existing law, not create new law, viewing significant reform as Parliament's domain. Such judges are often reluctant to depart from established precedents or interpret statutes in a way that creates significant new legal principles. This can slow the development of common law.\n\nConversely, judicial activism can enhance courts\' ability to make law. Activist judges are more willing to consider social values and policy implications when making decisions. They may be more prepared to adapt common law principles to changing circumstances, overrule outdated precedents, or interpret statutes broadly to achieve what they see as a just outcome. This can lead to significant legal developments and reforms originating from the judiciary, as seen in landmark cases like Mabo v Queensland (No 2). However, judicial activism is also controversial, with some arguing it can lead to uncertainty or that judges are overstepping their role.",
              difficulty: 'hard',
              topic: 'Factors Affecting Courts',
              skillType: 'analysis',
              marks: 8,
              time: 12
            },
            {
              id: 'clm-er-q2',
              type: 'extendedResponse',
              text: 'Evaluate the relationship between courts and Parliament in the Australian law-making system, considering the concepts of parliamentary supremacy, statutory interpretation, codification, and abrogation. (10 marks)',
              modelAnswer: "The relationship between courts and Parliament in Australian law-making is dynamic and complementary, though ultimately characterized by parliamentary supremacy.\n\nParliamentary supremacy means that Parliament is the supreme law-making body. It can make or change any law within its constitutional powers and can override (abrogate) common law made by courts, with the exception of High Court interpretations of the Constitution. This ensures that laws are ultimately made by the elected representatives of the people. For example, if Parliament disagrees with a common law principle established by a court, it can pass legislation to change it, as seen in various tort law reforms that have modified common law principles of negligence.\n\nDespite this supremacy, courts play a vital role through statutory interpretation. When applying Acts of Parliament to specific cases, courts interpret the meaning of words and phrases. This is essential because legislation can be ambiguous or may not cover unforeseen situations. These interpretations clarify the law and can effectively broaden or narrow the application of statutes, creating precedents for future cases. This judicial function can also highlight areas where legislation is unclear or problematic, sometimes prompting Parliament to amend the Act.\n\nParliament may also choose to codify common law, which involves passing legislation that incorporates common law principles developed by courts into statute. This affirms the judge-made law and makes it more accessible. The Native Title Act 1993 (Cth), which codified aspects of the Mabo decision, is a key example. This demonstrates a cooperative aspect of their relationship.\n\nConversely, abrogation shows Parliament's power over judge-made law. If Parliament deems a common law principle unsuitable or outdated, it can pass an Act to abolish it. This ensures that the law can evolve to meet changing community needs and values, as determined by the legislature.\n\nIn evaluation, while courts significantly influence the development and application of law through interpretation and common law principles, Parliament holds the ultimate authority to make and unmake laws (excluding constitutional change). This creates a balance where judicial independence in interpreting law is respected, but democratic legislative processes prevail in shaping the legal framework.",
              difficulty: 'hard',
              topic: 'Parliament & Courts',
              skillType: 'evaluation',
              marks: 10,
              time: 15
            },
            {
              id: 'clm-mcq-q7',
              type: 'multipleChoice',
              text: 'When a judge "overrules" a previous precedent, it means:',
              options: [
                'They are following the precedent from a lower court.',
                'A higher court in a different, later case changes or invalidates a precedent set by a lower court in the same hierarchy.',
                'They are applying the precedent to a case with identical facts.',
                'Parliament has passed a law confirming the precedent.'
              ],
              answer: 'A higher court in a different, later case changes or invalidates a precedent set by a lower court in the same hierarchy.',
              difficulty: 'hard',
              topic: 'Doctrine of Precedent',
              skillType: 'understanding',
              marks: 1,
              time: 2
            }
          ]
        }
      ]
    }
  }
};
