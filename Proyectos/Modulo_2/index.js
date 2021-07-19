var cuentas = [
    { nombre: "Mali", saldo: 200, password: '1825' },
    { nombre: "Gera", saldo: 290, password: '1335' },
    { nombre: "Maui", saldo: 67, password: '1234' }
  ];
  
var screen = document.getElementById('display')
var n = '';
var posicion ;
var validacion = false;
var password = document.getElementById('hidden4');
var passw = '';


function getData(num){
    let numeros = num.value;
    if(validacion){
        password.value = password.value + numeros

    }
    else{
    password.value = password.value + "*";
    passw = passw +  numeros;
}

}

function enter( ){
    if(!validacion) {
  for (let i = 0; i < cuentas.length; i++) {
    if (n === cuentas[i].nombre){
        if (passw === cuentas[i].password){
            screen.innerHTML = "Seleccione la operación"; 
            document.getElementById('hidden4').type = 'hidden'
            document.getElementById('hidden5').type = 'button'
            document.getElementById('hidden6').type = 'button'
            document.getElementById('hidden7').type = 'button'
            posicion = i ;
            validacion = true;
        }
        else {
            screen.innerHTML = "Contraseña incorrecta, ingrese de nuevo"; 

            clean();
        }
    } 
  } 
}


    else {
        let saldo = cuentas[posicion].saldo;
        
       
        if (n === "ingreso"){
            saldo = parseInt(saldo) + parseInt(password.value)
            if( saldo < 990){
            screen.innerHTML = "Tu nuevo saldo es <br/>" + "$"+ saldo +"<br/>¿Deseas realizar otra operación?";
                screen.style.fontSize = '40px'
                document.getElementById('hidden8').type = 'botton'
                document.getElementById('hidden9').type = 'botton'
            document.getElementById('hidden4').type = 'hidden'
            cuentas[posicion].saldo = saldo;}
            else {
                screen.innerHTML = " Tu saldo no puede ser mayor a $990. <br/> Ingresa otra monto"
                clean();
            }

        } else if(n === "retiro") {
            saldo = parseInt(saldo) - parseInt(password.value)
           if (saldo > 10){ 
            screen.innerHTML = "Tu nuevo saldo es <br/>" + "$" +saldo+"<br/>¿Deseas realizar otra operación?";
                screen.style.fontSize = '40px'
                document.getElementById('hidden8').type = 'botton'
                document.getElementById('hidden9').type = 'botton'
                document.getElementById('hidden4').type = 'hidden'
            cuentas[posicion].saldo = saldo;}

            else {
                screen.innerHTML = " Tu saldo no debe ser menor a $10 " 
                clean();
            }
        
        } 
    }

    
}

function clean(){
    password.value = '';
    passw = '';
}

function setDisplay(text){
    let nombre = text.value;
    if(nombre === "1. Consultar saldo"){
        {       let saldo = cuentas[posicion].saldo;
                screen.innerHTML = "El saldo de tu cuenta es $" + saldo + "<br/> <br/> ¿Deseas realizar otra operación?";
                screen.style.fontSize = '40px'
                document.getElementById('hidden5').type = 'hidden'
                document.getElementById('hidden6').type = 'hidden'
                document.getElementById('hidden7').type = 'hidden'
                document.getElementById('hidden8').type = 'botton'
                document.getElementById('hidden9').type = 'botton'
            }
    }
    else if(nombre === "2. Ingresar monto"){
                n = "ingreso"
                screen.innerHTML = "Ingrese el monto"  
                document.getElementById('hidden1').type = 'hidden'
                document.getElementById('hidden2').type = 'hidden'
                document.getElementById('hidden3').type = 'hidden'
                document.getElementById('hidden4').type = 'texto'
                document.getElementById('hidden5').type = 'hidden'
                document.getElementById('hidden6').type = 'hidden'
                document.getElementById('hidden7').type = 'hidden'
                clean();
        }

        else if(nombre === "3. Retirar monto"){
            n = "retiro"
            screen.innerHTML = "Ingrese el monto"  
            document.getElementById('hidden1').type = 'hidden'
            document.getElementById('hidden2').type = 'hidden'
            document.getElementById('hidden3').type = 'hidden'
            document.getElementById('hidden4').type = 'texto'
            document.getElementById('hidden5').type = 'hidden'
            document.getElementById('hidden6').type = 'hidden'
            document.getElementById('hidden7').type = 'hidden'
            clean();
    }

    else {
    n = nombre ;
    screen.innerHTML = "Ingrese contraseña";
    document.getElementById('hidden1').type = 'hidden'
    document.getElementById('hidden2').type = 'hidden'
    document.getElementById('hidden3').type = 'hidden'
    document.getElementById('hidden4').type = 'texto'}
    }

    function regresar(){
        screen.innerHTML = "Seleccione la operación"; 
            document.getElementById('hidden4').type = 'hidden'
            document.getElementById('hidden5').type = 'button'
            document.getElementById('hidden6').type = 'button'
            document.getElementById('hidden7').type = 'button'
            document.getElementById('hidden8').type = 'hidden'
            document.getElementById('hidden9').type = 'hidden'
        }

      function home(){
        screen.innerHTML = "¡Bienvenido! <br/>" + "Por favor, ingresa tu tarjeta";
        document.getElementById('hidden1').type = 'button'
        document.getElementById('hidden2').type = 'button'
        document.getElementById('hidden3').type = 'button'
        document.getElementById('hidden4').type = 'hidden'
        document.getElementById('hidden5').type = 'hidden'
        document.getElementById('hidden6').type = 'hidden'
        document.getElementById('hidden7').type = 'hidden'
        document.getElementById('hidden8').type = 'hidden'
        document.getElementById('hidden9').type = 'hidden'
        clean();
        validacion = false;
        n = '';

       
      }
        