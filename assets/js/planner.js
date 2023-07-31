// Query Selector for all of buttons with the add-btn class
let addBtn = document.querySelectorAll(".add-btn");
// Event Handler for the add buttons
const eventHandler = function (EventTarget) {
  // Using the direct parent of the button that was clicked to append a text input for the user to enter their meal selection
  let parentEl = EventTarget.parentElement;
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
// Query Selector for all of the buttons with the clear-btn class
let clearBtn = document.querySelectorAll(".clear-btn");
// Event Handler for the clear buttons
const clearForm = function (EventTarget) {
  // Gets the parent form element's id and removes the input elements that were added
  // Since the button type is 'reset', the text content is automatically removed
  let parentCard = EventTarget.parentElement.parentElement;
  let parentID = parentCard.getAttribute("id");
  let parentForm = document.getElementById(parentID);
  let inputs = parentForm.getElementsByTagName("input");
  for (const input of inputs) {
    input.remove();
  }
};
// Adding event listener for each clear button
clearBtn.forEach((el) => {
  el.addEventListener("click", () => {
    clearForm(el);
  });
});
// Query Selector to target all the save buttons
let saveBtn = document.querySelectorAll(".save-btn");
// Function to save meals in local storage to persist upon reload
const saveMeals = function (EventTarget) {
  let parentCard = EventTarget.parentElement.parentElement;
  let parentID = parentCard.getAttribute("id");
  let parentForm = document.getElementById(parentID);
  let inputs = parentForm.getElementsByTagName("input");
  let savedMeals = Object.create({});
  for (const input of inputs) {
    let inputParent = input.parentElement;
    let inputID = inputParent.getAttribute("id");
    let inputMeal = input.value;
    savedMeals[inputID] = inputMeal;
  }
  console.log(savedMeals);
  localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
};
// Function to store meals in local storage to reference when adding to your shopping list
const storeMeals = function (EventTarget) {
  let parentCard = EventTarget.parentElement.parentElement;
  let parentID = parentCard.getAttribute("id");
  let parentForm = document.getElementById(parentID);
  let inputs = parentForm.getElementsByTagName("input");
  let meals = [];
  for (const input of inputs) {
    let inputVal = input.value;
    meals.push(inputVal);
  }
  localStorage.setItem("Week's Meals", JSON.stringify(meals));
};
// Event Listener for each save button
saveBtn.forEach((el) => {
  el.addEventListener("click", () => {
    storeMeals(el);
    saveMeals(el);
  });
});
