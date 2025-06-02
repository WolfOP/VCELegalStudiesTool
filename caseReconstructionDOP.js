(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const dopCaseData = [
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
            }
        ];

        // Populate allPrompts for each case
        dopCaseData.forEach(caseItem => {
            caseItem.allPrompts = Object.entries(caseItem.elements).map(([category, text]) => ({ category, text }));
        });

        let currentSelectedCase = null;
        let dragSourceElement = null;

        const caseSelect = document.getElementById('dopCaseSelect');
        const sourceElementsContainer = document.getElementById('dopSourceElements');
        const dropTargets = {
            facts: document.getElementById('dopDropTargetFacts'),
            issue: document.getElementById('dopDropTargetIssue'),
            decision: document.getElementById('dopDropTargetDecision'),
            impact: document.getElementById('dopDropTargetImpact'),
            constitution: document.getElementById('dopDropTargetConstitution')
        };
        const checkAnswersBtn = document.getElementById('checkDopReconstructionBtn');
        const feedbackDiv = document.getElementById('dopReconstructionFeedback');

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function populateDOPCaseSelect() {
            if (!caseSelect) return;
            dopCaseData.forEach(caseItem => {
                const option = document.createElement('option');
                option.value = caseItem.id;
                option.textContent = caseItem.name;
                caseSelect.appendChild(option);
            });
        }

        function displayDOPCaseElements(caseId) {
            currentSelectedCase = dopCaseData.find(c => c.id === caseId);
            if (!currentSelectedCase) return;

            clearBoard();
            feedbackDiv.innerHTML = '';
            feedbackDiv.className = 'mt-2 text-sm p-3 rounded'; // Reset feedback class

            const promptsToDisplay = shuffleArray([...currentSelectedCase.allPrompts]);

            promptsToDisplay.forEach((prompt, index) => {
                const draggableItem = document.createElement('div');
                draggableItem.classList.add('dop-draggable-item');
                draggableItem.setAttribute('draggable', 'true');
                draggableItem.textContent = prompt.text;
                draggableItem.id = `dop-item-${currentSelectedCase.id}-${index}`;
                draggableItem.dataset.correctCategory = prompt.category; // Store the true category

                draggableItem.addEventListener('dragstart', handleDragStart);
                draggableItem.addEventListener('dragend', handleDragEnd);
                sourceElementsContainer.appendChild(draggableItem);
            });
        }

        function clearBoard() {
            sourceElementsContainer.innerHTML = '<h5 class="text-center font-semibold text-slate-700">Jumbled Case Elements</h5>';
            Object.values(dropTargets).forEach(target => {
                const list = target.querySelector('.dropped-items-list');
                if(list) list.innerHTML = '';
                target.classList.remove('correct-placement', 'incorrect-placement');
            });
        }

        function handleDragStart(e) {
            dragSourceElement = this;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML); // Not strictly needed for this logic but good practice
            e.dataTransfer.setData('text/plain', this.id);
            setTimeout(() => this.classList.add('dragging'), 0); // Visual feedback
        }

        function handleDragEnd(e) {
            this.classList.remove('dragging');
        }

        function handleDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            return false;
        }

        function handleDragEnter(e) {
            this.classList.add('drag-over');
        }

        function handleDragLeave(e) {
            this.classList.remove('drag-over');
        }

        function handleDrop(e) {
            e.preventDefault();
            e.stopPropagation(); // Stop it from bubbling up.

            this.classList.remove('drag-over');
            const draggedItemId = e.dataTransfer.getData('text/plain');
            const draggedItem = document.getElementById(draggedItemId);

            if (draggedItem && dragSourceElement) { // dragSourceElement is the original element
                const targetCategory = this.id.replace('dopDropTarget', '').toLowerCase(); // e.g., "facts"

                // Allow only one item per drop target for this design
                const itemsList = this.querySelector('.dropped-items-list');
                if (itemsList.children.length > 0) {
                    // Move existing item back to source
                    const existingItem = itemsList.children[0];
                    sourceElementsContainer.appendChild(existingItem);
                     // Clear any placement classes from the item being moved back
                    existingItem.parentElement.classList.remove('correct-placement', 'incorrect-placement');
                    existingItem.classList.remove('correct-placement', 'incorrect-placement'); // Also on item itself
                }
                itemsList.appendChild(draggedItem);
                draggedItem.dataset.droppedInCategory = targetCategory; // Mark where it was dropped
            }
            dragSourceElement = null; // Reset
            return false;
        }

        function checkDOPAnswers() {
            if (!currentSelectedCase) {
                feedbackDiv.textContent = "Please select a case first.";
                feedbackDiv.className = 'mt-2 text-sm p-3 rounded bg-red-100 text-red-700';
                return;
            }

            let allCorrect = true;
            let feedbackHtml = `<strong>Results for ${currentSelectedCase.name}:</strong><ul>`;

            Object.entries(dropTargets).forEach(([categoryKey, targetDiv]) => {
                const itemsList = targetDiv.querySelector('.dropped-items-list');
                const droppedItem = itemsList ? itemsList.children[0] : null; // Assuming one item per target

                targetDiv.classList.remove('correct-placement', 'incorrect-placement'); // Reset target visual
                if (droppedItem) {
                     // Reset item visual before re-evaluating
                    droppedItem.classList.remove('correct-placement', 'incorrect-placement');

                    const correctCategoryForItem = droppedItem.dataset.correctCategory;
                    const targetCategory = categoryKey; // 'facts', 'issue', etc.

                    if (correctCategoryForItem === targetCategory) {
                        feedbackHtml += `<li class="text-green-700">${currentSelectedCase.elements[targetCategory].substring(0,20)}... (Category: ${targetCategory}): Correct!</li>`;
                        // Apply to the parent div of the item list for overall target feedback
                        targetDiv.classList.add('correct-placement');
                        // Optionally apply to item itself if more specific styling is needed
                        // droppedItem.classList.add('correct-placement');
                    } else {
                        feedbackHtml += `<li class="text-red-700">${currentSelectedCase.elements[targetCategory].substring(0,20)}... (Category: ${targetCategory}): Incorrect. (This belongs to ${correctCategoryForItem})</li>`;
                        targetDiv.classList.add('incorrect-placement');
                        // droppedItem.classList.add('incorrect-placement');
                        allCorrect = false;
                    }
                } else {
                    feedbackHtml += `<li class="text-orange-700">Category: ${categoryKey}: Empty.</li>`;
                    allCorrect = false; // Or handle as neutral
                }
            });

            feedbackHtml += "</ul>";
            feedbackDiv.innerHTML = feedbackHtml;

            if (allCorrect) {
                feedbackDiv.className = 'mt-2 text-sm p-3 rounded bg-green-100 text-green-700';
            } else {
                feedbackDiv.className = 'mt-2 text-sm p-3 rounded bg-red-100 text-red-700';
            }
        }

        function initializeDOPReconstructionTool() {
            if (!caseSelect || !sourceElementsContainer || !checkAnswersBtn || !feedbackDiv) {
                console.error("One or more DoP reconstruction tool elements not found.");
                return;
            }
            populateDOPCaseSelect();
            caseSelect.addEventListener('change', (e) => {
                if (e.target.value) {
                    displayDOPCaseElements(e.target.value);
                } else {
                    clearBoard();
                    currentSelectedCase = null;
                    feedbackDiv.innerHTML = '';
                    feedbackDiv.className = 'mt-2 text-sm p-3 rounded';
                }
            });

            Object.values(dropTargets).forEach(target => {
                if (target) { // Ensure target exists
                    target.addEventListener('dragover', handleDragOver);
                    target.addEventListener('dragenter', handleDragEnter);
                    target.addEventListener('dragleave', handleDragLeave);
                    target.addEventListener('drop', handleDrop);
                }
            });

            checkAnswersBtn.addEventListener('click', checkDOPAnswers);

            // Initial state: clear board if no case is selected by default or if it's the placeholder
            if (!caseSelect.value) {
                clearBoard();
            }
        }

        // Expose the initialization function to be called from script.js
        window.initializeDOPReconstructionTool = initializeDOPReconstructionTool;
    });
})();
