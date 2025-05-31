Development Plan: VCE Legal Studies Interactive Study Hub
Overall Goal: To continue developing the VCE Legal Studies Interactive Study Hub as per the PRD (vce_legal_hub_prd_v1), focusing on stabilizing current features, completing partially implemented tools, and then incrementally adding new functionality.
Phase 1: Stabilization & Core Functionality Fixes (Highest Priority)
This phase addresses the critical bugs preventing proper use of the U4AOS1 section.
Task 1.1: Debug U4AOS1 Tool Navigation Buttons
 * Objective: Ensure all buttons in the U4AOS1 tool/content navigation bar correctly show their respective content sections and hide others. Ensure active button states are correctly applied.
 * Reference PRD: Section 4.1 (Core Structure & Navigation), Section "What Needs Enhancement" (U4AOS1 Tool Navigation Buttons).
 * Action Required (from me, in the next code update if you confirm):
   * I will need to carefully review your latest script.js and index.html.
   * I will provide revised JavaScript code for the handleU4AOS1ContentToggle function and the event listener attachment loop (u4aos1ContentToggles.forEach(...)) to ensure they are correctly defined, scoped within DOMContentLoaded, and accurately manage the hidden and active styling classes for all U4AOS1 content sections.
   * I will also check the logic for default content display when AOS1 is first selected.
Task 1.2: Resolve Glossary Category ID Mismatch
 * Objective: Ensure the categorized glossary populates correctly without "Could not find div for category" errors.
 * Reference PRD: Section 4.3 (Interactive Glossary), Section "What Needs Enhancement" (Glossary Functionality).
 * Action Required (from you, based on my previous guidance, or I can provide the HTML changes):
   * The id attributes of the category div elements within the <div id="categorizedGlossaryContainer"> in your index.html file must precisely match the IDs that the setupCategorizedGlossary function in your JavaScript (likely keySkillsHub.js or script.js) dynamically generates and attempts to find using document.getElementById().
   * Recap of fix: Change HTML IDs from glossaryCategory-constitution to glossaryCategory-the-australian-constitution, etc., for all 6 categories to match the JS logic:
     * glossaryCategory-the-australian-constitution
     * glossaryCategory-parliament-and-statute-law
     * glossaryCategory-courts-and-common-law
     * glossaryCategory-key-legal-principles-and-rights-overarching
     * glossaryCategory-government-politics-and-law-reform
     * glossaryCategory-vce-legal-studies-meta-terms
Phase 2: Complete Initial Key Skills Hub Tools
Once Phase 1 is complete and the U4AOS1 section is stable and accessible:
Task 2.1: Implement Full Interactivity for "Power Classification Sort"
 * Objective: Make the "Power Classification Sort" tool fully functional, allowing users to drag and drop law-making areas and receive feedback.
 * Reference PRD: Section 4.3 (Key Skills Hub - Skill 3).
 * Action Required (from me, in a subsequent code update):
   * Provide the complete JavaScript logic in keySkillsHub.js for:
     * Populating draggable law-making area items.
     * Handling drag-and-drop into "Exclusive," "Concurrent," and "Residual" zones.
     * Checking the classifications against correct answers.
     * Displaying detailed feedback (correct/incorrect, constitutional references).
     * Resetting the game.
   * Ensure necessary HTML structure is in index.html and CSS in style.css (some of which was provided previously).
Task 2.2: Implement Full Interactivity for "Relationship Quadrant Matcher"
 * Objective: Make the "Relationship Quadrant Matcher" tool fully functional, allowing users to categorize scenarios illustrating the parliament-court relationship.
 * Reference PRD: Section 4.3 (Key Skills Hub - Skill 4).
 * Action Required (from me, in a subsequent code update):
   * Provide the complete JavaScript logic in keySkillsHub.js for:
     * Populating draggable scenario items.
     * Handling drag-and-drop into the four relationship quadrants.
     * Checking matches against correct answers.
     * Displaying feedback.
     * Resetting the game.
   * Ensure necessary HTML structure is in index.html and CSS in style.css (some of which was provided previously).
Phase 3: Content Population (User Task - Ongoing)
Task 3.1: Populate JavaScript Data Structures
 * Objective: To make all interactive tools rich and comprehensive.
 * Reference PRD: Section "What Needs Enhancement" (Content Population).
 * Action Required (from you):
   * Systematically go through all JavaScript data arrays/objects in script.js and keySkillsHub.js (e.g., categorizedGlossaryData, caseExplorerData, guidedAnswerQuestions, caseDeconstructionData, termMatchData, scenarioTermChallenges, sourceAnalysisChallenges, and the new data for Power Sort & Relationship Matcher).
   * Populate these with comprehensive and accurate content from your VCE Legal Studies source materials. This is crucial for the study hub's effectiveness.
Phase 4: Next Key Skills Hub Features & Enhancements
Once Phases 1-3 are well underway and stable:
Task 4.1: Implement "Inconsistency Resolver" (for s109)
 * Objective: Develop the interactive tool for Key Skill 5 ("Explain the significance of section 109").
 * Reference PRD: Section 4.3 (Key Skills Hub - Skill 5).
Task 4.2: Implement "Case Reconstruction (Division of Powers Focus)"
 * Objective: Develop the interactive tool for Key Skill 6 ("Discuss the significance of one High Court case...").
 * Reference PRD: Section 4.3 (Key Skills Hub - Skill 6).
Task 4.3: Continuous Enhancements
 * Objective: Improve feedback, UI/UX, and JS robustness based on usage.
 * Reference PRD: Section "What Needs Enhancement."
Development Workflow Reminder:
 * You will continue to manage your local Node.js environment.
 * Any CSS changes I provide will be for your source style.css. You will then need to run your build command (e.g., npm run dev or similar from your package.json) to generate the updated output.css that index.html links to.
This plan prioritizes fixing the current critical issues to ensure the existing framework is usable, then moves on to completing the interactive tools we've started for the Key Skills Hub.
Please let me know if you'd like to proceed with me providing the code fixes for Phase 1 (Tasks 1.1 and 1.2) in our next interaction.