var c = document.querySelector('.C');
var f = document.querySelector('.F')
var input = document.querySelector('#converter');
var result = document.querySelector('.result');
var convertButton = document.querySelector('.convertButton')
var resetButton = document.querySelector('.resetButton')
var changeButton = document.querySelector('.changeButton')
var flag = false;

function change(){
    if(flag){
        document.querySelector('title').textContent = '°C to °F'
        input.placeholder = '°C'
        c.innerHTML = '°C'
        f.innerHTML = '°F'
        flag = false
    }else{
        document.querySelector('title').textContent = '°F to °C'
        input.placeholder = '°F'
        c.innerHTML = '°F'
        f.innerHTML = '°C'
        flag = true
    }
}


function convert() {
    var inputValue = input.value
    //console.log(inputValue)
    if(flag) {
        result.innerHTML = ''
        var fResult = ((inputValue - 32) * 5/9).toFixed(2)
        result.innerHTML = `${inputValue}°F to ${fResult}°C`
       
    }else{
        result.innerHTML = ''
       var cResult = ((inputValue * 9/5) + 32).toFixed(2);
       result.innerHTML = `${inputValue}°C to ${cResult}°F`
    }
}

function reset(){
    result.innerHTML = ''
    input.value = ''
}

changeButton.addEventListener('click', change)
convertButton.addEventListener('click',convert)
resetButton.addEventListener('click',reset)