# TODO: Content Integration Plan

This repository contains several markdown files with detailed source material.
Many sections of the site still rely on placeholder content or small demo
arrays in the JavaScript code. The following tasks identify where the code
needs additional data and which markdown files contain that information.

## Top 3 Immediate Tasks

1. **Populate Unit 4 AOS1 section content**
   - HTML location: `index.html` inside each `u4aos1-content` accordion.
   - Source: `updated section heading.md` provides the full notes for the
     headings such as *Roles of the Crown*, *Division of Law‑making Powers*,
     *Significance of Section 109* etc.
   - Action: Replace the placeholder paragraphs in the accordions with the
     detailed explanations from the markdown file.

2. **Fill out Exam Skills Helper data**
   - JavaScript: `keySkillsHub.js` contains objects such as
     `answerTemplatesData`, `ksBridgeData` and other helpers for the
     "Exam Skills Helper" tab.
   - Source: `update exam skills.md` describes the task word guide,
     structured answer templates and common pitfalls.
   - Action: Convert that markdown content into entries in the JS data
     structures so the helper tabs show full information and examples.

3. **Expand interactive tool datasets**
   - JavaScript files `keySkillsHub.js` and `caseReconstructionDOP.js` define
     arrays for activities (e.g. `lawMakingAreasData`,
     `relationshipScenariosData`, `scenarioTermChallenges`,
     `sourceAnalysisChallenges`, `ks6DopCaseData`).
   - Sources: `phase1.md` and `phase2.md` outline which tools are complete and
     which need more entries.
   - Action: Use details from the markdown files (and other notes) to populate
     these arrays with more scenarios, cases and questions.

## Additional Tasks

- Review `prd.md` and `plan.md` for remaining features planned for later
  phases (e.g. Unit 3 content and AI integration) and create follow‑up issues.
- Ensure glossary terms (`categorizedGlossaryData` in `script.js`) cover all
  terminology from the notes.
- Populate practice question lists and answer scaffolds referenced in the
  markdown files.
- Configure a build step or loader if markdown files are to be fetched
  dynamically instead of copying text manually.

