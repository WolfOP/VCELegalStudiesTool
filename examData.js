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
            }
          ]
        }
      ]
    }
  }
};
