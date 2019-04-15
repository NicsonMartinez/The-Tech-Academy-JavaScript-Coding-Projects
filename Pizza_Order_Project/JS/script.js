function getReceipt(){
    var fullText = "<h3>You Ordered</h3>";
    var orderTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    console.log(sizeArray);
    for (var i = 0; i < sizeArray.length; i++){
        if (sizeArray[i].checked){
            console.log(sizeArray[i].value);
            var selectedSize = sizeArray[i].Value;
            console.log(selectedSize); //Why does this return unidentified..?
            fullText = fullText+selectedSize+"<br>"; 
        }
    }
    if (selectedSize === "Personal_Pizza"){
        sizeTotal = 6;
    } else if (selectedSize === "Medium_Pizza"){
        sizeTotal = 10;
    } else if (selectedSize === "Large_Pizza"){
        sizeTotal = 14;
    } else if (selectedSize === "Extra_Large_Pizza"){
        sizeTotal = 16;
    }
    orderTotal = sizeTotal;
    //console.log(selectedSize+" = $"+sizeTotal+".00");
	//console.log("size text1: "+fullText);
	//console.log("subtotal: $"+orderTotal+".00");
}