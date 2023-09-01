function cleartext() {

    document.getElementById("result").value ='';
    $("#result").empty();
}
 
// This function display values
function display(value) {
    console.log(value);
    document.getElementById("result").value += value;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}