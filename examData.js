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

            }
          ]
        }
      ]
    }
  }
};
