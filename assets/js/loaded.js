
$(document).ready(function()
{
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true});


})
function toggleModal()
{
    let instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}

let shopping_list_item = [];
let shopping_list_quantity = [];
let shopping_list_weight = [];
let count_item = 0;
let count_quantity = 0;
let count_weight = 0;

function shoppingList()
{

    let item_chosen = document.getElementById("item").value;
    if( item_chosen === "")
    {
        alert("Please enter a food item");
        return false
    }
    else
    {
        shopping_list_item.push(item_chosen);
        document.getElementById("shopping_list_array_item").innerHTML +=
            shopping_list_item[count_item] + "<br>";        
        count_item += 1;
        let item_input = document.getElementById("item");
        item_input.value = "";
    }    
    localStorage.setItem("Food Item", JSON.stringify(shopping_list_item));

    let quantity_chosen = document.getElementById("quantity").value;    
    if(quantity_chosen === "")
    {
        quantity_chosen = "none";
        shopping_list_quantity.push(quantity_chosen);
        document.getElementById("shopping_list_array_quantity").innerHTML += 
        shopping_list_quantity[count_quantity] + "<br>";
        count_quantity += 1;
        let quantity_item = document.getElementById("quantity");
        quantity_item.value = "";
    }
    else
    {
        shopping_list_quantity.push(quantity_chosen);
        document.getElementById("shopping_list_array_quantity").innerHTML +=
        shopping_list_quantity[count_quantity] + "<br>";
        count_quantity += 1;
        let quantity_item = document.getElementById("quantity");
        quantity_item.value = "";
    }
    localStorage.setItem("Quantity", JSON.stringify(shopping_list_quantity));

    let weight_chosen = document.getElementById("weight").value;    
    if(weight_chosen === "")
    {
        weight_chosen = "none";
        shopping_list_weight.push(weight_chosen);
        document.getElementById("shopping_list_array_weight").innerHTML += 
        shopping_list_weight[count_weight] +"<br>";
        count_weight += 1;
        let weight_item = document.getElementById("weight");
        weight_item.value = "";
    }
    else
    {
        shopping_list_weight.push(weight_chosen);
        document.getElementById("shopping_list_array_weight").innerHTML += 
        shopping_list_weight[count_weight] + "<br>";
        count_weight += 1;
        let weight_item = document.getElementById("weight");
        weight_item.value = "";
    }
    localStorage.setItem("Weight", JSON.stringify(shopping_list_weight));

}


