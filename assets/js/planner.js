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
// Query Selector for the clear-btn class
let clearBtn = document.querySelectorAll(".clear-btn");
// Event Handler for the clear button
const clearForm = function (EventTarget) {
  // Removes the old data from storage
  localStorage.removeItem("savedMeals");
  localStorage.removeItem("Week's Meals");
  // Since the button type is 'reset', the text content is automatically removed, and when we reload, the inputs reset
  location.reload();
};
// Adding event listener for the clear button
clearBtn.forEach((el) => {
  el.addEventListener("click", () => {
    clearForm(el);
  });
});
// Query Selector to target the save button
let saveBtn = document.querySelectorAll(".save-btn");
// Function to save meals in local storage to persist upon reload
const saveMeals = function (EventTarget) {
  // Targeting the form to get every input that was added and saving in an array
  let parentForm = EventTarget.parentElement.parentElement;
  let inputs = parentForm.getElementsByTagName("input");
  let savedMeals = [];
  // Creates an object for each input with the input parent's id and the text content and pushes the objest to the array
  for (const input of inputs) {
    let thisMeal = Object.create({});
    let inputParent = input.parentElement;
    let inputID = inputParent.getAttribute("id");
    let inputMeal = input.value;
    thisMeal["id"] = inputID;
    thisMeal["name"] = inputMeal;
    savedMeals.push(thisMeal);
  }
  // Then saves the array with all the objects in local storage
  localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
};
// Function to store meals in local storage to reference when adding to your shopping list
const storeMeals = function (EventTarget) {
  // Gets all the form inputs and initializes an empty array
  let parentForm = EventTarget.parentElement.parentElement;
  let inputs = parentForm.getElementsByTagName("input");
  let meals = [];
  // Saves the input values and adds to the array
  for (const input of inputs) {
    let inputVal = input.value;
    meals.push(inputVal);
  }
  // Saves the array in local storage
  localStorage.setItem("Week's Meals", JSON.stringify(meals));
};
// Event Listener for the save button
saveBtn.forEach((el) => {
  el.addEventListener("click", () => {
    storeMeals(el);
    saveMeals(el);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Adds date pickers with respective options
  const weekStart = document.getElementById("datepicker1");
  M.Datepicker.init(weekStart, {
    autoClose: true,
    format: "yyyy-mm-dd",
    disableDayFn: function (date) {
      if (date.getDay() == 0) {
        return false;
      } else {
        return true;
      }
    },
  });
  const weekEnd = document.getElementById("datepicker2");
  M.Datepicker.init(weekEnd, {
    autoClose: true,
    format: "yyyy-mm-dd",
    disableDayFn: function (date) {
      if (date.getDay() == 6) {
        return false;
      } else {
        return true;
      }
    },
    onClose: getHolidays,
  });
  // Checking for saved meals and adding them to the page
  let storageMeals = JSON.parse(localStorage.getItem("savedMeals"));
  if (storageMeals) {
    for (meal in storageMeals) {
      let mealID = storageMeals[meal].id;
      let mealName = storageMeals[meal].name;
      let mealParent = document.getElementById(mealID);
      let refreshInput = document.createElement("input");
      refreshInput.value = mealName;
      mealParent.append(refreshInput);
    }
  }
});
// Initializes error modal to prevent the getHolidays function from failing
let errorModal = document.querySelector(".modal");
let instance = M.Modal.init(errorModal, {});
// Function to get the holidays within the selected week and alert the user
const getHolidays = function () {
  // Getting the user info from the About U page saved in local storage
  let userInputData = JSON.parse(localStorage.getItem("saveInputData"));
  // Alerting the user if they haven't input information on the About U page
  if (!userInputData) {
    instance.open();
    return;
  }
  // Getting the user's country id
  countryListUrl = "https://date.nager.at/api/v3/AvailableCountries";
  let myCountry = userInputData[0].countryData;
  let myCountryCode = "";
  fetch(countryListUrl)
    .then((response) => {
      return response.json();
    })
    .then((countryData) => {
      for (country in countryData) {
        if (myCountry === countryData[country].name) {
          myCountryCode = countryData[country].countryCode;
        }
      }
      // Get the user selected week and check for public holidays within those dates
      const startDate = document.getElementById("datepicker1").value;
      const endDate = document.getElementById("datepicker2").value;
      let year = startDate.slice(0, 4);
      let holidayDataUrl =
        "https://date.nager.at/api/v3/PublicHolidays/" +
        year +
        "/" +
        myCountryCode;
      fetch(holidayDataUrl)
        .then((response) => {
          return response.json();
        })
        .then((holidayData) => {
          for (holiday in holidayData) {
            // If there is a holiday within the selected dates, return the day of the week value and the name of the holiday
            if (
              holidayData[holiday].date >= startDate &&
              holidayData[holiday].date <= endDate
            ) {
              const holidayDate = new Date(holidayData[holiday].date);
              const day = holidayDate.getDay();
              const dayNames = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ];
              // Allow the user to see which holidays are in their selected week and which day they are
              const holidayDayName = dayNames[day];
              const dates = document.getElementById("dates");
              const date = document.createElement("p");
              const dateName = holidayData[holiday].name;
              date.textContent =
                dateName + " is this week " + holidayDayName + ".";
              dates.append(date);
            }
          }
        });
    });
};
