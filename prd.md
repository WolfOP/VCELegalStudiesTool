Product Requirements Document: VCE Legal Studies Interactive Study Hub
Version: 1.0
Date: May 31, 2025
Author/Owner: (User - you!) & Gemini AI
1. Introduction
The VCE Legal Studies Interactive Study Hub is a single-page web application (SPA) designed to provide Year 12 VCE Legal Studies students in Victoria, Australia, with a comprehensive, engaging, and interactive platform to aid their study and revision. The primary focus is on Unit 4: The People, the Law and Reform, with a structural foundation to expand to Unit 3: Rights and Justice. The application aims to go beyond static notes by offering interactive tools, self-assessment opportunities, and AI-powered explanations to deepen understanding and improve exam preparedness.
2. Goals and Objectives
 * Primary Goal: To enhance VCE Legal Studies students' understanding of core concepts, key skills, and case law, leading to improved confidence and performance in SACs and the final examination.
 * Objectives:
   * Provide a well-organized, easily navigable repository of key knowledge for selected VCE Legal Studies units and Areas of Study (AOS).
   * Offer diverse interactive tools (games, quizzes, deconstructors, guided activities) to reinforce learning of terminology, principles, case significance, and application skills.
   * Integrate AI (via Gemini API) to offer deeper explanations and insights on demand.
   * Facilitate active learning and self-assessment.
   * Be a user-friendly, accessible, and responsive tool across various devices.
   * Support students in developing VCAA-specified Key Skills.
3. Target Audience
 * Primary: Year 12 VCE Legal Studies students in Victoria, Australia, preparing for Unit 3 and Unit 4 assessments (SACs and end-of-year exam) under the current VCAA Study Design (e.g., 2024-2025).
 * Secondary: VCE Legal Studies teachers looking for supplementary interactive resources for their students.
4. Product Features (Scope)
4.1. Core Structure & Navigation
 * Single-Page Application (SPA) Design.
 * Main Unit Navigation:
   * Tab/Button for "Unit 3: Rights and Justice" (currently placeholder, planned for future content).
   * Tab/Button for "Unit 4: The People, the Law and Reform" (active development).
 * Unit 4 Sub-Navigation:
   * Tab/Button for "AOS 1: The People and the Law-makers" (primary focus, detailed content and tools).
   * Tab/Button for "AOS 2: The People, the Law and Reform" (placeholder, planned for future content).
 * U4AOS1 Tool/Content Navigation: A bar of buttons to toggle visibility of different informational sections and interactive tools within U4AOS1.
 * Accordion Sections: Used within content areas to manage information density and allow users to expand/collapse details.
4.2. Informational Content (Primarily U4AOS1)
 * Key Knowledge Sections: Structured content based on the VCE Legal Studies Study Design for U4AOS1 topics:
   * Parliament and the Australian Constitution (Roles of Crown/Houses, Division of Powers, s109, High Court impact).
   * Factors Affecting Parliament's Ability to Make Law (Bicameral structure, International pressures, Representative nature).
   * The Constitution as a Check on Parliament (High Court & representative government, Separation of Powers, Express Rights, Bicameralism, Referendum process).
   * Victorian Courts and High Court in Law-Making (Statutory Interpretation, Doctrine of Precedent).
   * Factors Affecting Courts' Ability to Make Law (Precedent, Judicial activism/conservatism, Costs/Time, Standing).
   * Relationship Between Courts and Parliament in Law-Making (Supremacy, Influence, Codification, Abrogation).
 * Placeholders: Sections for Unit 3 (AOS1 & AOS2) and Unit 4 AOS2 with brief descriptions of planned content.
4.3. Interactive Study Tools (Primarily U4AOS1)
 * Interactive Glossary:
   * Categorized display (6 themes: The Australian Constitution; Parliament and Statute Law; Courts and Common Law; Key Legal Principles and Rights; Government, Politics, and Law Reform; VCE Legal Studies Meta-Terms).
   * Click-to-show definitions.
   * Search functionality across all terms.
   * Gemini Integration: "Explain This Concept Further ✨" button for each term to generate an AI explanation.
 * Interactive Conceptual Diagrams:
   * Visual representations for: Division of Powers & s109; Separation of Powers; Victorian Law-Making Process.
   * Hover/click popups for information on diagram elements.
 * Case Explorer:
   * Dropdown selection of key High Court cases.
   * Display of facts, legal issue, decision, and significance.
   * Scrollable details area.
   * Gemini Integration: "Get AI Insights on this Case ✨" button to generate AI explanation of significance/impact.
 * Guided Answer Construction:
   * Practice questions with VCAA task word checklists.
   * Fill-in-the-blank sentence scaffolds to guide answer structure.
   * Answer checking and feedback.
 * Case Deconstructor:
   * Dropdown case selection.
   * Users match jumbled elements (Facts, Issue, Decision, Significance) to the case.
   * Users identify "Primary Impacted Area" and "Related Concepts."
   * Answer checking and feedback.
 * Term Match Game:
   * Drag-and-drop or click-to-match terms to their definitions.
   * Answer checking and feedback.
 * Exam Skills Helper:
   * Tabbed interface explaining VCAA task words (Explain, Discuss, Evaluate, Analyse, Compare, Distinguish) with structural advice.
 * Practice Questions Section:
   * List of practice questions with toggleable answer points/guides.
 * Key Skills Hub (U4AOS1 - In Progress & Planned):
   * Dedicated section with interactive tools for each VCAA Key Skill.
   * Implemented/Started:
     * Skill 1 (Define/use terminology): Glossary link & "Scenario Term Challenge" (MCQ).
     * Skill 2 (Discuss/interpret/analyse principles): "Source Analysis Challenge" (excerpt analysis).
   * Planned for Next Implementation:
     * Skill 3 (Explain law-making powers): "Power Classification Sort" (drag & drop with feedback including constitutional basis).
     * Skill 4 (Analyse parliament-court relationship): "Relationship Quadrant Matcher" (drag & drop scenarios to aspects of relationship).
   * Planned for Future Implementation (Key Skills Hub):
     * Skill 5 (Explain significance of s109): "Inconsistency Resolver" (enhanced guided response).
     * Skill 6 (Discuss HCA case significance): "Case Reconstruction (Division of Powers Focus)" (element matching).
     * Skill 7 (Discuss ability of parliament/courts to make law): "Parliament vs. Courts: Law-Making Abilities Sorter."
     * Skill 8 (Evaluate constitutional checks): "Constitutional Check Evaluator" (strengths/limitations matching) & "Check Application Scenario (Enhanced)."
     * Skill 9 (Synthesise and apply principles): "Extended Response Planner/Builder."
4.4. Gemini API Integration
 * Secure Implementation: API calls to Gemini to be routed through a server-side proxy to protect the API key. The client-side will call this proxy.
 * Features:
   * Glossary: "Explain This Concept Further ✨"
   * Case Explorer: "Get AI Insights on this Case ✨"
 * User Feedback: Loading indicators and error message display for API calls.
5. Design & UX Considerations
 * Visual Design: Clean, professional, and calm aesthetic. Minimalist color palette (primarily warm neutrals, blues, indigos, with accent colors like teal, orange, lime, cyan, purple for different tool categories).
 * Typography: Legible, using 'Inter' font. Clear contrast.
 * Responsiveness: Fully responsive design for optimal viewing and usability on desktop, tablet, and mobile devices. No horizontal scrolling.
 * User Flow & Navigation: Intuitive tab-based and button-based navigation. Clear visual hierarchy.
 * Interactivity: Engaging interactive elements that encourage active learning. Clear instructions for each tool. Meaningful and constructive feedback for user actions.
 * Accessibility: Design with accessibility principles in mind (e.g., sufficient color contrast, keyboard navigability where possible, clear text).
6. Technical Requirements & Stack
 * Frontend:
   * HTML5
   * CSS3:
     * Tailwind CSS (v4.x) utilized via a PostCSS build process (from style.css to output.css).
     * Custom CSS in style.css for specific component styling not covered by Tailwind utilities.
   * JavaScript (ES6+):
     * Vanilla JavaScript for core DOM manipulation, event handling, and application logic.
     * Modularized into script.js (main site logic) and keySkillsHub.js (Key Skills Hub tools and potentially other newer features like categorized glossary and Gemini integration).
 * Development Setup:
   * Node.js and npm for managing dependencies (Tailwind CSS, PostCSS, Autoprefixer) as per package.json.
   * postcss-cli for building output.css.
 * Gemini API Access:
   * Client-side JS will make requests to a server-side proxy endpoint.
   * The server-side proxy (to be hosted on a serverless platform like Netlify Functions, Vercel, Google Cloud Functions, etc.) will securely store and use the Gemini API key to make calls to the Gemini API (e.g., gemini-2.0-flash model).
 * Deployment:
   * Static site files (index.html, output.css, script.js, keySkillsHub.js, etc.) suitable for deployment on platforms like GitHub Pages.
   * Serverless proxy function to be deployed separately on a compatible platform.
7. Success Metrics (How we'll know it's useful)
 * User Engagement: (If analytics were possible) Time spent on page, interaction rates with different tools.
 * Qualitative Feedback: Positive feedback from the primary user (you!) regarding ease of use, clarity of information, and effectiveness as a study aid.
 * Comprehensiveness: The tool covers the key knowledge and skills for the targeted AOS.
 * Functionality: All interactive features work as intended, providing correct information and feedback.
8. Future Considerations / Roadmap (Beyond current scope)
 * Full Content for Unit 3 and Unit 4 AOS 2: Including dedicated interactive tools for these sections.
 * Advanced Feedback Mechanisms: More detailed explanations for incorrect answers in interactive tools.
 * User Accounts & Progress Tracking: (Significant undertaking) Allowing users to save progress, track scores, or customize their study plan.
 * More Sophisticated AI Prompts & Interactions: Exploring more complex ways to leverage the Gemini API, e.g., AI-generated practice questions based on specific content, or AI-assisted essay planning.
 * Community Features: (Very advanced) Ways for students to share notes or insights (with moderation).
 * Offline Access: PWA (Progressive Web App) capabilities.
This PRD should serve as a solid reference point for the ongoing development of the VCE Legal Studies Interactive Study Hub.
