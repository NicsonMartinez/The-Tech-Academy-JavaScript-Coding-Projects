function getReceipt(){
    var x = document.getElementsByName("size");
    document.getElementById("testid").innerHTML = x[1].value;
    console.log(x[1].value);
}