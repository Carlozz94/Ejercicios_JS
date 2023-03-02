const arr1 = [1,2,3,4,5];

const arr3 = ['a','b','c','d'];


const bucle1 = (arr1) => {

    for(var i=0; i <=10; i++)

    console.log(i);
}

//console.log(bucle1());

const arr = [1,2,3,4,5];


const arr2 = [1, -563, 999, 0 , -1, -999];



// Encontrar el numero mas grande
//console.log("El numero mas grande es: " + Math.max(...arr));

// Encontrar el numero mas pequeño
//console.log("El numero mas pequeño es: " + Math.min(...arr));
// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];
//console.log("El numero mas grande es: " + Math.max(...arr) + " Y el numero mas pequeño es: " + Math.min(...arr));

// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "23.5 ohms"
// Ohms >= 1

//const sumResistance1 = [1, 5, 6, 3];
//const sumResistance2 = [14,3.5,6];

//const suma = sumResistance1.reduce((a,v) => a + v);

//console.log(suma);

//const suma1 = sumResistance2.reduce((a,v) => a + v);

//console.log(suma1);



// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];


// indexOf nos indica en que indice o posicion del array esta el dato que buscamos
//const names = ['Zabdiel', 'Griselo', 'Felipe', 'Fer', 'Magali', 'Leslie'];

//console.log(names.indexOf('Griselo'));

// Pop elimina el ultimo elemento
//console.log(names.pop());
//console.log(names);

// Push agregar un elemento al final del array
// Return es la nueva longitud
//console.log(names.push('Sergio'));
//console.log(names);

// Shift elimina el primer elemento y recorre el resto una posicion hacia atras
//names.shift();
//console.log(names);

/// Unshift
// names.unshift('Hugo');
// console.log(names);

// delete

// delete names[0];
// console.log(names);

// Splice elimina elementos y si es necesario podemos ingresar nuevos en el arreglo
// console.log(names);
// names.splice(1, 0, 'Hugo', 'Carlos');
// console.log(names);

// Slice corta el array de (index inicial, index final) y crea uno nuevo con ese rango
// console.log(names);
// const arr2 = names.slice(2, 4);
// console.log(arr2);


//sort()
//reverse()

// forEach
// por Cada elemento de un array/objeto/matriz realizar el bloque de codigo
// Comunmente utiliza funciones anonimas para su ejecucion


//names.forEach((elemento, index, arr) => {
  //  console.log(elemento);
    //console.log(index);
   // console.log(arr);
//});

/*
names.forEach(function (elemento, index, arr) {
    console.log(elemento);
    console.log(index);
    console.log(arr);
});
*/

// names.forEach( e => console.log(e));

// arr.forEach(valor, index, arr);

//const newNames = names.map(element => {
//    return element.toUpperCase();
//});

//console.log(newNames);

//const carrito = [2000,50,500,1500,999.99];

//const carritoFiltrado = carrito.filter(elemento => {
//    return elemento <= 1500;
//})

//console.log(carritoFiltrado);

// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

const secretName = ["Felipe", "Fer", "Zabdiel"];

//almacenar letras
const foundleters = [];

for(let i=0; i< secretName.length; i++){

    const foundleter = secretName[i].charAt(0);

    foundleters.push(foundleter);

}
console.log(foundleters);





// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'

// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

function obtenerMultiplos(numero, longitud) {
    const multiplos = [];
    let i = 0;
    while (multiplos.length < longitud) {
      const candidato = numero * i;
      multiplos.push(candidato);
      i++;
    }
    return multiplos;
  }

  const resultado = obtenerMultiplos(3, 5);
console.log(resultado); // [0, 3, 6, 9, 12]


// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

function tieneMasNumerosPositivos(array1, array2) {
    const cantidadPositivosArray1 = array1.filter((numero) => numero > 0).length;
    const cantidadPositivosArray2 = array2.filter((numero) => numero > 0).length;
  
    return cantidadPositivosArray1 > cantidadPositivosArray2;
  }

const array1 = [1, -2, 3, 4, -5, 10];
const array2 = [-1, 2, -3, -4, 5, 11];

console.log(tieneMasNumerosPositivos(array1, array2)); // true

function obtenerSumaInversos(array) {
    // Si el array tiene un número impar de elementos, eliminamos el elemento central.
    if (array.length % 2 !== 0) {
      array.splice(Math.floor(array.length / 2), 1);
    }
    
    // Dividimos el array en dos partes iguales.
    const mitad = array.length / 2;
    const parte1 = array.slice(0, mitad);
    const parte2 = array.slice(mitad);
    
    // Sumamos cada número de la primera parte con su inverso de la segunda parte.
    const resultado = [];
    for (let i = 0; i < parte1.length; i++) {
      resultado.push(parte1[i] + 1 / parte2[parte1.length - 1 - i]);
    }
    
    return resultado;
  }

const entrada = [1, 2, 3, 4, 5, 6];
const resultado1 = obtenerSumaInversos(entrada);
console.log(resultado1); 