//Author: Alexander Almengor

//Problema No.1
/*
Declarar dos variables con la palabra reservada "var", 
imprimir el resultado de las operaciones de "Suma", "Resta", "Multiplicación" y "División" en la consola. 
Las variables pueden ser estáticas.
*/

var x = 2,
    y = 2;
console.log(`Suma: ${x + y}`);
console.log(`Resta: ${x - y}`);
console.log(`Multiplicación: ${x * y}`);
console.log(`División: ${x / y}`);

//Problema No.2
/*
Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.
*/

let str1 = "¡Hola ",
    str2 = "Mundo!"
console.log("Concatenación: " + str1 + str2);
//Problema No.3
/*
Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable.
*/
const data = "str"
console.log("Tipo de variable: " + typeof data)
//Problema No.4
/*
Declarar una variable tipo Objecto, 
colocar 4 llaves dentro de él que contengan un entero, un string, un booleano y un objeto vacío, en ese mismo orden.
*/

var person = {
    name: "Alexander",
    age: 21,
    Developer: true,
    languages: {}
};

console.log(person);