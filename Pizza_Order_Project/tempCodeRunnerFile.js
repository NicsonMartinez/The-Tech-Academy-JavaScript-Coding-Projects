var myArray = ["fist","second","third"];
for (var i = 0; i < myArray.length; i++){

    if (myArray.length == 1){
        console.log(myArray[i]+".(fist)");
    } else if (myArray[i+1] !== undefined){
        console.log(myArray[i]+",");
    } else {
        console.log(myArray[i]+".(last)");
    }
    
}