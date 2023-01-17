let num1;
let num2;
let operacion;


function iniciar(){
    let resultado = document.getElementById('resultado');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let division = document.getElementById('division');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let multiplicacion = document.getElementById('multiplicacion');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let resta = document.getElementById('resta');
    let reset = document.getElementById('reset');
    let cero = document.getElementById('cero');
    let igual = document.getElementById('igual');
    let suma = document.getElementById('suma');
    


siete.onclick = function (n){ resultado.textContent = resultado.textContent + "7";}

ocho.onclick = function (n){ resultado.textContent = resultado.textContent + "8";}

nueve.onclick = function (n){ resultado.textContent = resultado.textContent + "9";}

division.onclick = function (n){ num1 = resultado.textContent; operacion = "/"; limpiar();}

cuatro.onclick = function (n){ resultado.textContent = resultado.textContent + "4";}

cinco.onclick = function (n){ resultado.textContent = resultado.textContent + "5";}

seis.onclick = function (n){ resultado.textContent = resultado.textContent + "6";}

multiplicacion.onclick = function (n){ num1 = resultado.textContent; operacion = "*"; limpiar();}

uno.onclick = function (n){ resultado.textContent = resultado.textContent + "1";}

dos.onclick = function (n){ resultado.textContent = resultado.textContent + "2";}

tres.onclick = function (n){ resultado.textContent = resultado.textContent + "3";}

resta.onclick = function (n){ num1 = resultado.textContent; operacion = "-"; limpiar();}

reset.onclick = function (n){ resetear();}

cero.onclick = function (n){ resultado.textContent = resultado.textContent + "0";}

igual.onclick = function (n){ num2 = resultado.textContent; resolver();}

suma.onclick = function (n){ num1 = resultado.textContent; operacion = "+"; limpiar();}

}


function limpiar() {resultado.textContent = ""};

function resetear(){
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
}


function resolver(){
    let res = 0;
    switch(operacion){
        case "+":
        res =
        parseFloat(num1) +
        parseInt(num2);
        break;

        case "-":
        res =
        parseFloat(num1) -
        parseInt(num2);
        break;

        case "*":
        res =
        parseFloat(num1) *
        parseInt(num2);
        break;

        case "/":
        res =
        parseFloat(num1) /
        parseInt(num2);
        break;
    }
        resetear();
        resultado.textContent = res;
    }

