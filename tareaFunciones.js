// Ejercicios

/*
========================== Ejercicios ==========================
Realizar una función que realice o saatisfaga los siguientes escenarios
Realizar en manera de función general y funcion flecha
*/

// 1. Calcular el cuadrado de un número.
function funcionCuadrado (numero){
    return "el valor cuadrado es: " + numero * numero;
}

const cuadradoFlecha = numero => "el valor cuadrado es:" + numero * numero;

// 2. Escribir un código que convierta de grados celsius a grados farenheit
function funcionGrados (numero){
    return "el valor en grados farenheit es: " + (((9/5) * numero )+ 32);
}

const gradosFlecha = numero => "el valor en grados farenheit es: " + (((9/5) * numero )+ 32);

// 3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.
function funcionVoltaje (Resistencia, Corriente){
    return "el voltaje es: " + Resistencia * Corriente + " Volts";
}

const voltajeFlecha = (Resistencia, Corriente) => {
    return "el voltaje es " + Resistencia * Corriente + " Volts";
}

//4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.
function funcionVolumen (numero){
    return "el volumen es: " + numero * numero * numero;
}

const volumenFlecha = numero => "el volumen es:" + numero * numero * numero;

// 5. Calcular el área de un triángulo
function funcionArea (Base, Altura){
    return "el area es: " + ((Base * Altura) / 2);
}

const areaFlecha = (Base, Altura) => {
    return "el area es: " + ((Base * Altura) / 2);
}

// 6. Calcular el volumen de una esfera
function funcionEsfera (radio){
    return "el area es: " + ((4/3) * Math.PI * Math.pow(radio, 3));
}

const esferaFlecha = radio => "el area es: " + ((4/3) * Math.PI * Math.pow(radio, 3));

//7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()
function funcionMayusculas (texto){
    return texto.toUpperCase();
}

const mayusculasFlecha = texto => texto.toUpperCase();


