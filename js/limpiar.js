function myFunction() {
    document.getElementById("myForm").reset();
}


function soloNumeros(e){
    var key = window.Event ? e.which : e.keyCode
    return (key >= 48 && key <= 57)
}