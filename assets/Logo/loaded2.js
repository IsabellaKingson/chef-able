
let count = 0;
let click = 0;





function displayShoppingList()
{  let status = "green";

    
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
            document.getElementById("food-item").innerHTML += "<br>" + foodItemList[i].fontcolor("red") + "<br>";
            document.getElementById("quantity-item").innerHTML += "<br>" + quantityItemList[i].fontcolor("red") + "<br>";
            document.getElementById("weight-item").innerHTML += "<br>" + weightList[i].fontcolor("red") + "<br>";
          

        }
        else
        {
            document.getElementById("food-item").innerHTML += "<br>" + foodItemList[i].fontcolor("black") + "<br>";
            document.getElementById("quantity-item").innerHTML += "<br>" + quantityItemList[i].fontcolor("black") + "<br>";
            document.getElementById("weight-item").innerHTML += "<br>" + weightList[i].fontcolor("black") + "<br>";


        }
      
        
        
    }
    /*
    if(click < count)
    {
        for(let i = 0; i < foodItemList.length; i++)
        {
            console.log(foodItemList[i]);
            
            if(foodItemList[i].slice(-1) === "*")
            {
                document.getElementById("food-item").innerHTML += "<br>" + foodItemList[i].fontcolor("red") + "<br>";
                document.getElementById("quantity-item").innerHTML += "<br>" +quantityItemList[i].fontcolor("red") + "<br>";
                document.getElementById("weight-item").innerHTML += "<br>" + weightList[i].fontcolor("red") + "<br>";
            }
            else
            {
                document.getElementById("food-item").innerHTML += "<br>" + foodItemList[i].fontcolor("black") + "<br>";
                document.getElementById("quantity-item").innerHTML += "<br>" +quantityItemList[i].fontcolor("black") + "<br>";
                document.getElementById("weight-item").innerHTML += "<br>" + weightList[i].fontcolor("black") + "<br>";
            }
            click += 1;          
        }
        

    }
    else
    {
        return;
    }*/

    
    
  
}


