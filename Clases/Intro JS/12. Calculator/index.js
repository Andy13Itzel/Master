var screen = document.getElementById('screen-result');

function getData(num){
    let value = num.value;
    screen.value = screen.value + value;
}

function clean(){
    screen.value = ' ';
}
    
function calcular (){
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'SYNTAX ERROR';
        
    }
}