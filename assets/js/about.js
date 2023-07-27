const AboutBoxEl = document.getElementById(".AboutBox")
const firstNameEl = document.getElementById("#firstName");
const lastNameEl = document.getElementById("#lastName");
const ageEl = document.getElementById("#age");
const genderEl = document.getElementById(".browser-default");
const checkboxEl = document.getElementById(".checkBox");
const optionsEl = document.getElementById(".filled-in");
const othersEl = document.getElementById("#other");
const submitBtnEl = document.getElementById(".btn");

function onLoadFunct() {
    submitBtnEl.addEventListener("click", function (event) {
        event.preventDefault();

        var about = {
            firstname: firstNameEl.value,
            lastname: lastNameEl.value,
            age: ageEl.value,
            gender: genderEl.value,
            Optionr: optionsEl.value,
            other: othersEl.value.trim()
        }
        console.log(firstNameEl);
        localStorage.setItem("about", JSON.stringify(about));
        renderMessage();
    })
}






// Select option: initalization (need to make seperate call for any dynamtically generate seelction)
// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
// });

