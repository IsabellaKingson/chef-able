document.addEventListener("DOMContentLoaded", function () {
    const featuresBanner = document.querySelectorAll(".slider");
    M.Slider.init(featuresBanner, { height: 800 });
    const fortuneTip = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(fortuneTip, {});
  });
  
  const fortuneBtn = document.querySelector(".fortune-button");
  
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
          fortune.textContent = quoteData.text;
          fortuneCookie.append(fortune);
        });
      fortuneBtn.setAttribute("class", "disabled");
    }
  });
  