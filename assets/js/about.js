const AboutBoxEl = document.getElementById(".AboutBox")
const checkboxEl = document.getElementById(".checkBox");
const optionsEl = document.getElementById(".filled-in");
const submitBtnEl = document.getElementById(".btn");
const respondel = document.getElementById("#response");

// get input data
function saveInputData() {
    const firstNameEl = document.getElementById("#firstName").value.trim();
    const ageEl = document.getElementById("#age").value.trim();
    const genderEl = document.getElementById(".browser-default");
    const optionsEl = document.getElementById(".filled-in").value;
    const othersEl = document.getElementById("#other").value.trim();

    localStorage.setItem("saveInputData", JSON.stringify(saveInputData));

    function renderSaveInputData() {
        var inputData = JSON.parse(localStorage.getItem("saveInputData"));
        if (inputData !== null) {
            document.getElementById("first").innerHTML = inputData.firstNameEl;
            document.getElementById("ageNum").innerHTML = inputData.ageEl;
            document.getElementById("gen").innerHTML = inputData.genderEl;
            document.getElementById("allg").innerHTML = inputData.optionsEl;
            document.getElementById("OtherAllg").innerHTML = inputData.optionsEl;
        }
    }
}


// Fetch for country list
var requestUrl = 'https://date.nager.at/api/v3/AvailableCountries';

fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)

        const countrylist = data.name
        const country = document.querySelector("#country");
        for (var i = 0; i < data.length; i++) {
            var optionValue = document.createElement("value");
            console.log(optionValue)
            optionValue.textContent = data[i].name;
            country.append(optionValue)
        }
        function recentCountries() {
            var countryHistory = JSON.parse(localStorage.getItem("countryHistory"))
            localStorage.setItem("countryHistory", JSON.stringify(countryHistory));


        }
    })






// // Submit button
function onLoadFunct() {
    submitBtnEl.addEventListener("click", function (event) {
        event.preventDefault();
    })

};





// Select option: initalization (need to make seperate call for any dynamtically generate seelction)
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

