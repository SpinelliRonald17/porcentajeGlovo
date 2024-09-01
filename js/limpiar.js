function percentage_1() {
  
  var numero1= document.getElementById("num1").value;
  var numero2= document.getElementById("num2").value;
  var numero3= document.getElementById("num3").value;
  var numero4= document.getElementById("num4").value;
  //var resut= document.getElementById("rsuma").value;
  
    
  //var totalRealizado = numero1 / 100  * numero2 + parseFloat(numero3) + parseFloat(numero4 ) - parseFloat(numero1); 
  //document.writeln(totalRealizado);

  try {

 //var totalRealizado = document.getElementById("rsuma").value;
 //document.getElementById("rsuma")
 //.value = numero1 / 100  * numero2 + parseFloat(numero3) + parseFloat(numero4 ) - parseFloat(numero1);


if(numero1,numero2,numero3,numero4) {
  var totalRealizado = numero1 / 100  * numero2 + parseFloat(numero3) + parseFloat(numero4 ) - parseFloat(numero1); 

 Swal.fire({
  title: "Calculo Realizado",
  text: "Total a pagar: " + totalRealizado,
  icon: "success"
});

}

else {
  
Swal.fire({
  title: "Iportante",
  text: "Revisar datos!",
  icon: "error"
});

}
    
  } catch (error) {
    
 Swal.fire({
  title: "Iportante",
  text: "Revisar datos!",
  icon: "error"
});
    
}

}


function limp() {

myForm.reset();
 
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Campos limpios",
    showConfirmButton: false,
    timer: 1500
  });
  
}

