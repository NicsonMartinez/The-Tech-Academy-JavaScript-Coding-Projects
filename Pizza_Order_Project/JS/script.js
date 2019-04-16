//--------------------------- GET RECEIPT -----------------------------
function getReceipt(){
    var fullText = "<br><br><h3>You Ordered</h3><br>";
    var orderTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    fullText = fullText+"<strong>Pizza: </strong>";
    for (var i = 0; i < sizeArray.length; i++){
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            if (selectedSize === "Personal_Pizza"){
                sizeTotal = 6;
            } else if (selectedSize === "Medium_Pizza"){
                sizeTotal = 10;
            } else if (selectedSize === "Large_Pizza"){
                sizeTotal = 14;
            } else if (selectedSize === "Extra_Large_Pizza"){
                sizeTotal = 16;
            }
            fullText = fullText+selectedSize+" ($"+sizeTotal+")<br><br>"; 
        }
    }

    orderTotal = sizeTotal;
    //console.log(selectedSize+" = $"+sizeTotal+".00");
	//console.log("size text: "+fullText);
    //console.log("subtotal: $"+orderTotal+".00");
    getCrust(orderTotal,fullText);
};
//--------------------------- END - GET RECEIPT -----------------------------


//--------------------------- GET CRUST -----------------------------
function getCrust(orderTotal,fullText){
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    fullText = fullText+"<strong>Crust: </strong>";
    for (var i = 0; i < crustArray.length; i++){
        if (crustArray[i].checked){
            var selectedCrust = crustArray[i].value;
            if (selectedCrust === "Plain_Crust"){
                crustTotal = 0;
                fullText = fullText+selectedCrust+" (no additional cost)<br><br>";
            } else if (selectedCrust === "Garlic_Butter_Crust"){
                crustTotal = 0;
                fullText = fullText+selectedCrust+" (no additional cost)<br><br>";
            } else if (selectedCrust === "Cheese_Stuffed_Crust"){
                crustTotal = 3;
                fullText = fullText+selectedCrust+" (+$"+crustTotal+")<br><br>";
            } else if (selectedCrust === "Spicy_Crust"){
                crustTotal = 0;
                fullText = fullText+selectedCrust+" (no additional cost)<br><br>";
            } else if (selectedCrust === "House_Special_Crust"){
                crustTotal = 0;
                fullText = fullText+selectedCrust+" (no additional cost)<br><br>";
            }

        }
            
    }

    orderTotal = (orderTotal + crustTotal);
    //console.log(selectedCrust+" = $"+crustTotal+".00");
	//console.log("crust text: "+fullText);
    //console.log("subtotal: $"+orderTotal+".00");

    getSauce(orderTotal,fullText);
};
//---------------------------END - GET CRUST -----------------------------


//--------------------------- GET SAUCE -----------------------------
function getSauce(orderTotal,fullText){
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName("sauce");
    fullText = fullText+"<strong>Sauce: </strong>";
    for (var i = 0; i < sauceArray.length; i++){
        if (sauceArray[i].checked){
            var selectedSauce = sauceArray[i].value;
            
            fullText = fullText+selectedSauce+" (no additional cost)<br><br>"; 
        }
    }
    if (selectedSauce === "Marinara_Sauce"){
        sauceTotal = 0;
    } else if (selectedSauce === "White_Sauce"){
        sauceTotal = 0;
    } else if (selectedSauce === "Barbeque_Sauce"){
        sauceTotal = 0;
    } else if (selectedSauce === "No_Sauce"){
        sauceTotal = 0;
    }
    orderTotal = (orderTotal + sauceTotal);
    //console.log(selectedSauce+" = $"+sauceTotal+".00");
	//console.log("sauce text: "+fullText);
    //console.log("subtotal: $"+orderTotal+".00");
    getCheese(orderTotal,fullText);
};
//--------------------------- END - GET SAUCE -----------------------------


//--------------------------- GET CHEESE -----------------------------
function getCheese(orderTotal,fullText){
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");
    fullText = fullText+"<strong>Cheese: </strong>";
    for (var i = 0; i < cheeseArray.length; i++){
        if (cheeseArray[i].checked){
            var selectedCheese = cheeseArray[i].value;
            if (selectedCheese === "Regular"){
                cheeseTotal = 0;
                fullText = fullText+selectedCheese+" (no additional cost)<br><br>"; 
            } else if (selectedCheese === "No_Cheese"){
                cheeseTotal = 0;
                fullText = fullText+selectedCheese+" (no additional cost)<br><br>"; 
            } else if (selectedCheese === "Extra_Cheese"){
                cheeseTotal = 3;
                fullText = fullText+selectedCheese+" (+$"+cheeseTotal+")<br><br>"; 
            }
            
            
        }
    }

    orderTotal = (orderTotal + cheeseTotal);
    //console.log(selectedCheese+" = $"+cheeseTotal+".00");
	//console.log(" text: "+fullText);
    //console.log("subtotal: $"+orderTotal+".00");
    getMeat(orderTotal,fullText);
};
//--------------------------- END - GET CHEESE -----------------------------


//--------------------------- GET MEAT -----------------------------
function getMeat(orderTotal,fullText){
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    fullText = fullText+"<strong>Meats: </strong>";
    for (var i = 0; i < meatArray.length; i++){
        if (meatArray[i].checked){
            selectedMeat.push(meatArray[i].value);
            //console.log("selected meat item: ("+meatArray[i].value+")");
            //console.log("selected meat length: "+selectedMeat.length);

                if (selectedMeat.length == 1){
                    fullText = fullText+meatArray[i].value+" (no additional cost) ";
                } else {
                    fullText = fullText+meatArray[i].value+" (+$1) ";
                }
                
        }

    }

    fullText = fullText+"<br><br>";
    var meatCount = selectedMeat.length;
    /* Since the line above gets the length of the newly populated array with the user selected meats,
    we can figure out the additional $1 charges (keeping in mind that there is no charge for one selection 
    of a meat and only for the additional selections).
    */
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    orderTotal = (orderTotal + meatTotal);
    getVeggies(orderTotal,fullText);
};
//--------------------------- END - GET MEAT -----------------------------


//--------------------------- GET VEGGIES -----------------------------
function getVeggies(orderTotal,fullText){
    var veggiesTotal = 0;
    var selectedVeggies = [];
    var veggiesArray = document.getElementsByClassName("veggies");
    fullText = fullText+"<strong>Veggies: </strong>";
    for (var i = 0; i < veggiesArray.length; i++){
        if (veggiesArray[i].checked){
            selectedVeggies.push(veggiesArray[i].value);
            console.log("selected meat item: ("+veggiesArray[i].value+")");
            console.log("selected meat length: "+selectedVeggies.length);

                if (selectedVeggies.length == 1){
                    fullText = fullText+veggiesArray[i].value+" (no additional cost) ";
                } else {
                    fullText = fullText+veggiesArray[i].value+" (+$1) ";
                }
            
        }
    }
    fullText = fullText+"<br>----------------------------------------------------------------------------------<br><br>";
    var veggiesCount = selectedVeggies.length;
    /* Since the line above gets the length of the newly populated array with the user selected veggies,
    we can figure out the additional $1 charges (keeping in mind that there is no charge for one selection 
    of a veggie and only for the additional selections).
    */
    if (veggiesCount > 1) {
        veggiesTotal = (veggiesCount - 1);
    } else {
        veggiesTotal = 0;
    }
    orderTotal = (orderTotal + veggiesTotal);
    document.getElementById("receiptId").style.opacity=1;
    document.getElementById("showText").innerHTML = fullText;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+orderTotal+".00"+"</strong></h3>";
};
//--------------------------- END - GET VEGGIES -----------------------------


//--------------------------- CANCEL BUTTON -----------------------------

// This code clears the form selections to their defaults and then sets the 
// corresponding div's CSS opacity to 0, effectively hiding it from view.
function clearAll() {
	document.getElementById("form").reset();
    document.getElementById("receiptId").style.opacity=0;
};

//--------------------------- END - CANCEL BUTTON -----------------------------
