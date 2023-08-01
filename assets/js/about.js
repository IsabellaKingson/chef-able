const AboutBoxEl = document.querySelector(".AboutBox")
const checkboxEl = document.querySelector(".checkBox");
const optionsEl = document.querySelector(".filled-in");
const submitBtnEl = document.querySelector("#submitBtn");
const respondel = document.querySelector("#response");
const firstNameEl = document.querySelector("#firstName");
const ageEl = document.querySelector("#age");
const genderEl = document.querySelector(".browser-default");
const othersEl = document.querySelector("#other");
const countryEl = document.querySelector("#country");


// get input data
function saveData() {
    console.log("here")
    let firstNameData = firstNameEl.value.trim()
    let ageData = ageEl.value.trim()
    let genderData = genderEl.value.trim()
    let otherData = othersEl.value.trim()
    let optionsData = optionsEl.value.trim()
    let countryData = countryEl.value.trim()
    let saveInputData = JSON.parse(localStorage.getItem("saveInputData")) || []


    // console.log(firstNameData, ageData, genderData,countryData)
    let newSaveData = {
        firstNameData: firstNameData,
        ageData: ageData,
        genderData: genderData,
        optionsData: optionsData,
        otherData: otherData,
        countryData: countryData

    }
    saveInputData.push(newSaveData)

    localStorage.setItem("saveInputData", JSON.stringify(saveInputData));
    renderSaveInputData()
}
function renderSaveInputData() {
    var inputData = JSON.parse(localStorage.getItem("saveInputData")) || [];
    console.log(inputData)
    if (inputData !== null) {
        document.getElementById("first").innerHTML = inputData[0].firstNameData;
        document.getElementById("ageNum").innerHTML = inputData[0].ageData;
        document.getElementById("gen").innerHTML = inputData[0].genderData;
        document.getElementById("allg").innerHTML = inputData[0].optionsData;
        document.getElementById("otherAllg").innerHTML = inputData[0].otherData;
        document.getElementById("con").innerHTML = inputData[0].countryData;
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

        const countrylist = data
        console.log(countrylist)
        const country = document.querySelector("#country");
        for (var i = 0; i < countrylist.length; i++) {
            var optionValue = document.createElement("option");
            console.log(optionValue)
            optionValue.textContent = countrylist[i].name;
            country.append(optionValue)
        }
        function recentCountries() {
            var countryHistory = JSON.parse(localStorage.getItem("countryHistory"))
            localStorage.setItem("countryHistory", JSON.stringify(countryHistory));


        }
    })


// Submit button
submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    saveData()
})

    ;

// // Select option: initalization (need to make seperate call for any dynamtically generate seelction)
// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
// });

