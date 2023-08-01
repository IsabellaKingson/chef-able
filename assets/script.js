const searchBtn = document.getElementById('search-btn');
const recipeList = document.getElementById('recipe-list');
const  recipeDetailContent = document.querySelector('.recipe-detail-content');
const  recipeCloseBtn = document.getElementById('recipe-close-btn');

//add an event listener to make it function

searchBtn.addEventListener('click', getRecipeList);

// get meal list that matches the ingredients

function getRecipeList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch('https://tasty.p.rapidapi.com/recipes/list')
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })

}

