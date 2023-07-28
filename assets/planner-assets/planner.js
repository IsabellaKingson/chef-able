// Query Selector for all of buttons with the add-btn class
let addBtn = document.querySelectorAll(".add-btn");
// Event Handler for the add buttons
const eventHandler = function (EventTarget) {
  // Using the direct parent of the button that was clicked to append a text input for the user to enter their meal selection
  let parentEl = EventTarget.parentElement;
  let sectionId = parentEl.getAttribute("id");
  let inputEl = document.createElement("input");
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("class", "materialize-textarea meals");
  parentEl.append(inputEl);
};
// Adding event listener for each add button
addBtn.forEach((el) => {
  el.addEventListener("click", () => {
    eventHandler(el);
  });
});

let clearBtn = document.querySelectorAll(".clear-btn");

const clearForm = function (EventTarget) {
  let parentCard = EventTarget.parentElement.parentElement;
  let parentID = parentCard.getAttribute('id');
  let parentForm = document.getElementById(parentID);
  let inputs = parentForm.getElementsByTagName('input');
  for (const input of inputs) {
    input.remove();
  }
};

clearBtn.forEach((el) => {
  el.addEventListener("click", () => {
    clearForm(el);
  });
});

