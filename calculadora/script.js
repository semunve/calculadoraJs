var input=document.getElementById("input")

//Declaracion de variables
var ac1=""
var numero1=1;
var numero2=2;
var numero3=3;
var numero4=4;
var numero5=5;
var numero6=6;
var numero7=7;
var numero8=8;
var numero9=9;
var numero0=0;
var resta="-";
var mas="+";
var division="/";
var multiplica="*";


function n1() {
   input.value += numero1; //Se añade la variable aunque puede añadirse directamente al input
}
function par(){
    input.value+="**" //En lugar de darle el valor de la variable se asigna como cadena
}
function par2(){
   input.value+="%"
}
function divi(){
    input.value+=division
  
}
function ac(){
    input.value=ac1
}
function n7(){
    input.value+=numero7

}
function n8(){
    input.value+=numero8;
}
function n9(){
    input.value+=numero9;
}
function multi(){
    input.value+=multiplica
}
function n4(){
    input.value+=numero4;
}
function n5(){
    input.value+=numero5;
}
function n6(){
    input.value+=numero6;
}
function menos(){
    input.value+=resta;
}
function n1(){
    input.value+=numero1;
}
function n2(){
    input.value+=numero2;

}
function n3(){
    input.value+=numero3;
}
function suma(){
    input.value+=mas;
}
function punto(){
    input.value+=".";
}
function n0(){
    input.value+=0;
}

function mm(){
    let valorActual = input.value;

    if (valorActual.includes('+')) {
        input.value = valorActual.replace('+', '-');
    } else if (valorActual.includes('-')) {
        input.value = valorActual.replace('-', '+');
    } else {
        input.value += '-';
    }
}


function logica(){
  
var resultado = eval(input.value);
if (isNaN(resultado)) {
    input.value = "Insert value"; //En caso de no insertar ningun valor mostrara este mensaje
} else {
    input.value = resultado;
}
}