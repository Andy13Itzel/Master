document.addEventListener("DOMContentLoaded", function() {
   
  
var cuentas = [
    { nombre: "Mali", saldo: 200, password: '1825' },
    { nombre: "Gera", saldo: 290, password: 'l335' },
    { nombre: "Maui", saldo: 67, password: '1234' }
  ];
  
  const listaCuentas = document.getElementById("lista-cuentas");

  cuentas.forEach(function(cuenta) {
    console.log("Cuenta:", cuenta);
    const elementoCuenta = document.createElement("div");

    elementoCuenta.innerHTML = '<input class="cuenta" type="button" value="Mi-cuenta" onclick="seleccionarCuenta(this)" />',
    listaCuentas.appendChild(elementoCuenta);
    
elementoCuenta.innerHTML = '<input class="cuenta" type="button" value="'+cuenta.nombre+'" onclick="seleccionarCuenta(this)" />';
  })

  
});