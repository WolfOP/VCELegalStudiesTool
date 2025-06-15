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
              answer: 'Section 51',
              difficulty: 'easy',
              topic: 'Constitution',
              skillType: 'recall',
              marks: 1,
              time: 1
            }
          ]
        }
      ]
    }
  }
};
