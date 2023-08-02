let count = 0;
let click = 0;
let recipe = [];





function displayShoppingList()
{  if(click < 1)
    {
        let status = "green";

    
        let foodItemList = JSON.parse(localStorage.getItem("Food Item"));
        console.log(foodItemList);    
          
        let quantityItemList = JSON.parse(localStorage.getItem("Quantity"));
        console.log(quantityItemList); 
         
        let weightList = JSON.parse(localStorage.getItem("Weight"));
        console.log(weightList);
    
        for(let i = 0; i < foodItemList.length; i++)
        {
            if(foodItemList[i].slice(-1) === "*")
            {
                document.getElementById("food-item").innerHTML += "<br>" +  foodItemList[i].fontcolor("red") + "<br>";
                document.getElementById("quantity-item").innerHTML +=  "<br>" +  quantityItemList[i].fontcolor("red") + "<br>";
                document.getElementById("weight-item").innerHTML +=  "<br>" + weightList[i].fontcolor("red") + "<br>";
              
    
            }
            else
            {
                document.getElementById("food-item").innerHTML +=  "<br>" +  foodItemList[i].fontcolor("black") + "<br>";
                document.getElementById("quantity-item").innerHTML +=  "<br>" +  quantityItemList[i].fontcolor("black") + "<br>";
                document.getElementById("weight-item").innerHTML += "<br>" +  weightList[i].fontcolor("black") + "<br>";
            }    
        } 
        click += 1;

    }
    else
    {
        return false;
    }
  
}

function calorieCount()
{
    let food_item = document.getElementById("input-text").value;
    let item_quantity = document.getElementById("input-quantity").value;

    let query = food_item;
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'skcHYEi7icyuCh5wj//zJg==hljSgIbyDIIh5Qbl'},
    contentType: 'application/json',
    success: function(result) {
        
        document.getElementById("itemQuantity").innerHTML = item_quantity;

        
        document.getElementById("display-calorie").innerHTML = item_quantity * (result[0].calories);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

}
function clearTable()
{
    document.getElementById("input-text").value = "";
    document.getElementById("input-quantity").value = "";
    document.getElementById("itemQuantity").innerHTML = "";
    document.getElementById("display-calorie").innerHTML = "";
}



