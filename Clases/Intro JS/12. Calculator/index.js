var screen = document.getElementById('screen-result');

function getData(num){
    let value = num.value;
    screen.value = screen.value + value;
}

function clean(){
    screen.value = ' ';
}
    
