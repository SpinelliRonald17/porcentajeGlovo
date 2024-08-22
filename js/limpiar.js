function myFunction() {
    document.getElementById("myForm").reset();
}


function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}