document.addEventListener("DOMContentLoaded", function () {
  // initializes the image slider
  const featuresBanner = document.querySelectorAll(".slider");
  M.Slider.init(featuresBanner, { height: 800 });
  // initializes the tool tip for the fortune cookie
  const fortuneTip = document.querySelectorAll(".tooltipped");
  M.Tooltip.init(fortuneTip, { enterDelay: 0, outDuration: 100 });
});
// Grabs the fortune cookie button
const fortuneBtn = document.querySelector(".fortune-button");
// Event listener for the fortune cookie button that gets the daily quote from the API but only allows you to click once
fortuneBtn.addEventListener("click", () => {
  if (fortuneBtn.getAttribute("class") != "disabled") {
    const url =
      "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "931cc76cebmsh73308c27deb6d18p1ffc78jsn7d43fa67f228",
        "X-RapidAPI-Host":
          "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((quoteData) => {
        let fortuneCookie = document.querySelector(".fortune-cookie");
        let fortune = document.createElement("p");
        fortune.textContent =
          '"' + quoteData.text + '" ' + " - " + quoteData.author;
        fortune.setAttribute("style", "background-color:white;padding:5px");
        fortuneCookie.append(fortune);
      });
    fortuneBtn.setAttribute("class", "disabled");
  }
});
