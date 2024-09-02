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
  icon: "success",
  title: "Calculo realizado total a pagar: " + totalRealizado,
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Aceptar",
  denyButtonText: `Recibo PDF`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Realizado Muchas Gracias", "", "success");
  } else if (result.isDenied) {

    var doc=new jsPDF();
  let mensaje1=document.getElementById('num1').value;
  let mensaje2= document.getElementById("num2").value;
  let mensaje3= document.getElementById("num3").value;
  let mensaje4= document.getElementById("num4").value;
  let mensaje5= document.getElementById("current_date").value;
  doc.text(10,20,'Suma total para resultado de pago en la quincena de Glovo App Delivery');
  doc.text(20,40,'Total realizado quincena: ' + mensaje1 + '€');
  doc.text(20,50,'Porcentaje: ' + mensaje2 + '%');
  doc.text(20,60,'Efectivo tomado: ' + mensaje3 + '€');
  doc.text(20,70,'Otros ajustes: ' + mensaje4 + '€');
  doc.text(20,80,'Total a pagar: ' + totalRealizado + '€');
  doc.addPage();
  doc.text(20,20,'Mi trabajo!!');
  doc.save('certificadoPdf.pdf');
    //genPDF();
    Swal.fire("Descargando PDF", "", "info");

    myForm.reset();
  }
});

}

else {
  
Swal.fire({
  title: "Importante Revisar",
  text: "Los campos no deben estar vacios",
  icon: "error"
});

}
    
  } catch (error) {
    
 Swal.fire({
  title: "Importante Revisar",
  text: "Error Pagina",
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

function genPDF(){

  var doc=new jsPDF();
  let mensaje1=document.getElementById('num1').value;
  let mensaje2= document.getElementById("num2").value;
  let mensaje3= document.getElementById("num3").value;
  let mensaje4= document.getElementById("num4").value;
  let mensaje5= document.getElementById("current_date").value;
  doc.text(10,20,'Suma total para resultado de pago en la quincena de Glovo App Delivery');
  doc.text(20,40,'Total realizado quincena: ' + mensaje1 + '€');
  doc.text(20,50,'Porcentaje: ' + mensaje2 + '%');
  doc.text(20,60,'Efectivo tomado: ' + mensaje3 + '€');
  doc.text(20,70,'Otros ajustes: ' + mensaje4 + '€');
  doc.text(20,80,'Otros ajustes: ' + totalRealizado + '€');
  doc.addPage();
  doc.text(20,20,'Mi trabajo!!');
  doc.save('certificadoPdf.pdf');
}

