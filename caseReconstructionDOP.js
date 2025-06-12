const caseReconstructionData = [
    {
        id: "tasDams",
        name: "Commonwealth v Tasmania (Tasmanian Dams Case) (1983)",
        elements: {
            facts: "The Tasmanian government planned to build a hydroelectric dam on the Franklin River. This area was listed for World Heritage protection. The Commonwealth Parliament passed an Act to prevent this.",
            issue: "Could the Cth use the 'external affairs' power (s51(xxix)) to legislate on an area of residual power (dam construction) to fulfill an international treaty obligation?",
            decision: "Yes, the High Court found the Cth Act valid. The external affairs power allows legislation on matters of international concern covered by a bona fide treaty.",
            impact: "Significantly expanded Cth's law-making power into areas previously residual, if a relevant international treaty obligation exists. Shifted balance towards Cth.",
            constitution: "s51(xxix) - External affairs power; s109 - Inconsistency rule."
        }
    },
    {
        id: "brislan",
        name: "R v Brislan (1935)",
        elements: {
            facts: "Mrs. Brislan was charged under a Cth Act for not having a license for her wireless set (radio).",
            issue: "Did 'postal, telegraphic, telephonic, and other like services' in s51(v) include radio broadcasting, a technology not foreseen at federation?",
            decision: "Yes, the High Court held 'other like services' could be interpreted broadly to include radio broadcasting as a similar communication service.",
            impact: "Broadened Cth's power in communications by interpreting s51(v) to cover new technologies, allowing Cth to regulate broadcasting.",
            constitution: "s51(v) - Postal, telegraphic, telephonic, and other like services."
        }
    },
    {
        id: "workChoices",
        name: "New South Wales v Commonwealth (WorkChoices Case) (2006)",
        elements: {
            facts: "The Cth passed the Workplace Relations Amendment (Work Choices) Act 2005, significantly altering industrial relations laws, largely based on the corporations power.",
            issue: "Was the Cth's extensive regulation of workplace relations, traditionally an area with significant state involvement, a valid exercise of the 'corporations' power (s51(xx))?",
            decision: "The High Court upheld the validity of the WorkChoices legislation, giving a broad interpretation to the corporations power.",
            impact: "Greatly expanded the Cth's power to regulate industrial relations for constitutional corporations, significantly reducing states' roles in this area. Demonstrated the potential breadth of the corporations power.",
            constitution: "s51(xx) - Corporations power."
        }
    },
    {
        id: "coleWhitfield",
        name: "Cole v Whitfield (1988)",
        elements: {
            facts: "Tasmanian law restricted the sale of undersized crayfish. The case questioned whether this breached s92's guarantee of free interstate trade.",
            issue: "Did the Tasmanian law contravene s92 of the Constitution by imposing a protectionist burden on interstate trade?",
            decision: "The High Court held the law was not protectionist but for conservation purposes, so it did not infringe s92.",
            impact: "Clarified that s92 prohibits discriminatory or protectionist laws but allows non-discriminatory regulations, influencing state powers to regulate trade.",
            constitution: "s92 - Interstate trade and commerce"
        }
    },
    {
        id: "roach",
        name: "Roach v Electoral Commissioner (2007)",
        elements: {
            facts: "Challenge to a Commonwealth law preventing all sentenced prisoners from voting in federal elections.",
            issue: "Whether the blanket ban on prisoner voting was consistent with the requirement in ss7 and 24 that parliament be 'directly chosen by the people'.",
            decision: "The High Court held the complete ban unconstitutional. Only prisoners serving significant sentences could be excluded.",
            impact: "Confirmed an implied right to vote as part of representative government, limiting Commonwealth power to restrict the franchise.",
            constitution: "ss7 & 24 - Representative government"
        }
    }
];

let draggedItem = null; // To store the item being dragged

function displayCaseElements(caseId) {
    const selectedCase = caseReconstructionData.find(c => c.id === caseId);
    const sourceContainer = document.getElementById('dopToolSourceElements');

    // Clear previous elements
    sourceContainer.innerHTML = '<span class="text-xs text-slate-500 italic">Drag these elements to the correct boxes below.</span>'; // Keep instruction text or clear fully
    document.querySelectorAll('.dop-drop-target .dropped-items-list').forEach(list => list.innerHTML = '');
    document.getElementById('dopToolFeedbackArea').innerHTML = '';
     // Remove existing placement classes
    document.querySelectorAll('.dop-draggable-item-source, .dop-draggable-item-dropped').forEach(item => {
        item.classList.remove('correct-placement', 'incorrect-placement');
    });


    if (!selectedCase) {
        sourceContainer.innerHTML = '<span class="text-xs text-slate-500 italic">Please select a case.</span>';
        return;
    }

    let itemsToDrag = [];
    for (const category in selectedCase.elements) {
        const text = selectedCase.elements[category];
        const item = document.createElement('div');
        item.classList.add('dop-draggable-item', 'dop-draggable-item-source'); // Differentiate source items
        item.textContent = text;
        item.draggable = true;
        item.id = `dop-${caseId}-${category}`; // Unique ID for the draggable item
        item.dataset.correctCategory = category; // Store the correct category

        item.addEventListener('dragstart', (event) => {
            draggedItem = event.target;
            event.dataTransfer.setData('text/plain', event.target.id);
            event.dataTransfer.effectAllowed = 'move';
            setTimeout(() => { // Make it disappear from source, or style as being dragged
                event.target.classList.add('dragging');
            }, 0);
        });

        item.addEventListener('dragend', (event) => {
            draggedItem = null;
            event.target.classList.remove('dragging');
        });
        itemsToDrag.push(item);
    }

    // Shuffle items
    itemsToDrag.sort(() => Math.random() - 0.5);
    itemsToDrag.forEach(item => sourceContainer.appendChild(item));
}


function initializeCaseReconstructionTool() {
    console.log("Case Reconstruction (DoP) Tool Initializing...");
    const caseSelect = document.getElementById('caseReconstructionDopToolSelect');
    const sourceContainer = document.getElementById('dopToolSourceElements');
    const dropTargets = {
        facts: document.getElementById('dopToolDropTargetFacts'),
        issue: document.getElementById('dopToolDropTargetIssue'),
        decision: document.getElementById('dopToolDropTargetDecision'),
        impact: document.getElementById('dopToolDropTargetImpact'),
        constitution: document.getElementById('dopToolDropTargetConstitution')
    };
    const checkButton = document.getElementById('checkDopToolAnswersButton');
    const feedbackArea = document.getElementById('dopToolFeedbackArea');

    if (!caseSelect || !sourceContainer || Object.values(dropTargets).some(t => !t) || !checkButton || !feedbackArea) {
        console.error("One or more elements for Case Reconstruction Tool not found.");
        return;
    }

    // Populate dropdown
    if (caseSelect.options.length <= 1) { // Avoid re-populating if already done
        caseReconstructionData.forEach(caseItem => {
            const option = document.createElement('option');
            option.value = caseItem.id;
            option.textContent = caseItem.name;
            caseSelect.appendChild(option);
        });
    }

    caseSelect.addEventListener('change', (event) => {
        if (event.target.value) {
            displayCaseElements(event.target.value);
        } else {
            // Clear elements if "Select a Case" is chosen
            sourceContainer.innerHTML = '<span class="text-xs text-slate-500 italic">Select a case to load elements.</span>';
            Object.values(dropTargets).forEach(target => {
                const list = target.querySelector('.dropped-items-list');
                if (list) list.innerHTML = '';
            });
            feedbackArea.innerHTML = '';
        }
    });

    Object.entries(dropTargets).forEach(([category, targetDiv]) => {
        const listContainer = targetDiv.querySelector('.dropped-items-list');

        targetDiv.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        });

        targetDiv.addEventListener('dragenter', (event) => {
            event.preventDefault(); // Necessary for IE and some other browsers
            targetDiv.classList.add('drag-over');
        });

        targetDiv.addEventListener('dragleave', () => {
            targetDiv.classList.remove('drag-over');
        });

        targetDiv.addEventListener('drop', (event) => {
            event.preventDefault();
            targetDiv.classList.remove('drag-over');

            if (!draggedItem) return; // Should be set from dragstart

            const draggedItemId = event.dataTransfer.getData('text/plain');
            const actualDraggedItem = document.getElementById(draggedItemId) || draggedItem; // Fallback to global draggedItem if ID not found

            if (!actualDraggedItem) {
                console.error("Could not find dragged item for drop.");
                return;
            }

            // If target already has an item, move it back to source
            if (listContainer.children.length > 0) {
                const existingItem = listContainer.firstElementChild;
                existingItem.classList.remove('dop-draggable-item-dropped');
                existingItem.classList.add('dop-draggable-item-source');
                sourceContainer.appendChild(existingItem);
            }

            actualDraggedItem.classList.remove('dop-draggable-item-source');
            actualDraggedItem.classList.add('dop-draggable-item-dropped'); // Differentiate dropped items
            listContainer.appendChild(actualDraggedItem);
            draggedItem = null; // Clear after successful drop
        });
    });

    checkButton.addEventListener('click', () => {
        feedbackArea.innerHTML = '';
        let allCorrect = true;
        let itemsChecked = 0;

        Object.entries(dropTargets).forEach(([category, targetDiv]) => {
            const listContainer = targetDiv.querySelector('.dropped-items-list');
            const item = listContainer ? listContainer.firstElementChild : null;

            if (item) {
                itemsChecked++;
                item.classList.remove('correct-placement', 'incorrect-placement'); // Reset previous feedback
                const correctCategory = item.dataset.correctCategory;
                if (correctCategory === category) {
                    item.classList.add('correct-placement');
                    const p = document.createElement('p');
                    p.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}: Correct!`;
                    p.className = 'text-green-600 text-xs';
                    feedbackArea.appendChild(p);
                } else {
                    item.classList.add('incorrect-placement');
                    const p = document.createElement('p');
                    p.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}: Incorrect. This item belongs to '${correctCategory}'.`;
                    p.className = 'text-red-600 text-xs';
                    feedbackArea.appendChild(p);
                    allCorrect = false;
                }
            } else {
                // No item in this drop target - could be considered incorrect if an item is expected
                // For simplicity, we only grade placed items. Or, count expected items.
            }
        });

        const totalElements = caseReconstructionData.find(c => c.id === caseSelect.value)?.elements;
        const totalElementCount = totalElements ? Object.keys(totalElements).length : 0;

        if (itemsChecked === 0 && caseSelect.value) {
             feedbackArea.innerHTML = '<p class="text-blue-600 text-xs">Drag the elements from the top container into the category boxes below.</p>';
             allCorrect = false; // Cannot be all correct if nothing is placed
        } else if (itemsChecked < totalElementCount && itemsChecked > 0) {
            const p = document.createElement('p');
            p.textContent = 'Some elements are still in the source container. Drag all elements to their respective categories.';
            p.className = 'text-orange-600 text-xs mt-1';
            feedbackArea.appendChild(p);
            allCorrect = false;
        }


        if (allCorrect && itemsChecked === totalElementCount) {
            feedbackArea.innerHTML = '<p class="text-green-700 font-semibold text-sm">All elements placed correctly! Well done!</p>';
        } else if (allCorrect && itemsChecked > 0 && itemsChecked < totalElementCount) {
            // This case is covered by the orange message above.
        }
         else if (!allCorrect && itemsChecked > 0) {
            const p = document.createElement('p');
            p.textContent = 'Some elements are incorrect. Review the feedback above.';
            p.className = 'text-red-700 font-semibold text-sm mt-2';
            feedbackArea.appendChild(p);
        }
    });
}

// Make the initialization function globally available if it's to be called by other scripts (e.g. script.js)
// This is a common pattern for modular JavaScript that needs to be invoked by a master script.
window.initializeCaseReconstructionTool = initializeCaseReconstructionTool;

// The main script.js should ideally call this function when the
// "Case Reconstruction (DoP)" accordion section is made visible.
// Example in script.js (within initializeToolIfNeeded or similar):
// if (toolId === 'u4aos1-case-reconstruction-dop-tool' && typeof window.initializeCaseReconstructionTool === 'function') {
//     window.initializeCaseReconstructionTool();
// }
// This ensures the DOM elements are present and visible before this script tries to manipulate them.
// For now, the function is defined and exposed.
console.log("caseReconstructionDOP.js loaded and initializeCaseReconstructionTool is available.");
