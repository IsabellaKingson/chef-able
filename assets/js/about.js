const AboutBoxEl = document.getElementById(".AboutBox")
const firstNameEl = document.getElementById("#firstName");
const lastNameEl = document.getElementById("#lastName");
const ageEl = document.getElementById("#age");
const genderEl = document.getElementById(".browser-default");
const checkboxEl = document.getElementById(".checkBox");
const optionsEl = document.getElementById(".filled-in");
const othersEl = document.getElementById("#other");
const submitBtnEl = document.getElementById(".btn");

// Submit button (button works nothing else works)
function onLoadFunct() {
    submitBtnEl.addEventListener("click", function (event) {
        event.preventDefault();

        var about = {
            firstname: firstNameEl.value.trim(),
            lastname: lastNameEl.value.trim(),
            age: ageEl.value.trim(),
            gender: genderEl.value.trim(),
            Optionr: optionsEl.value.trim(),
            other: othersEl.value.trim()
        }
        console.log(val);
        localStorage.setItem("about", JSON.stringify(about));
        renderMessage();
    })
}
// Checkbox
function getChecked() {
    if (checkboxEl === true) {
        console.log(true);
    } else {
        console.log(false);
    }
}





// Select option: initalization (need to make seperate call for any dynamtically generate seelction)
// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
// });

