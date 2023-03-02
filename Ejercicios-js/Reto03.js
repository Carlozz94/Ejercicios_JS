function bussinessHours (hour){
    const day = new Date();
    hour = day.getHours();
    return hour >= 9 && hour <= 18 ? "Horario laboral" : "Puedes descansar ya termino la jornada";
}
console.log("Ejercicio 1: " + bussinessHours());

const bussinessDays = (day) =>{

    switch(new Date().getDay()){
        case 0:
        day = 'Domingo'
        break;
        case 1:
        day = 'Lunes'
        break;
        case 2:
        day = 'Hoy es Martes'
        break;
        case 3:
        day = 'Miercoles'
        break;
        case 4:
        day = 'Jueves'
        break;
        case 5:
        day = 'Viernes'
        break;
        case 6:
        day = 'Sabado'
        break;

    }
    return day == 0 || day == 6 ? "Fin de semana" : "Dia laboral";
}

console.log("Ejercicio 2: " + bussinessDays());

// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recurcion


    const countTrue = [true, false, false, true, false];

    let count = 0;
    let i;
    for(i = 0; i < countTrue.length; i++){
      if(countTrue[i] === true){
        count++;
      }
    }
    console.log("Ejercicio 3: " + count );
   



//Ejercicio 05
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion
const mcd = (num1,num2) =>{
    return (num1 > num2) ? `El numero mayor es: ${num1}` : `El numero mayor es: ${num2}`;
}

console.log("Ejercicio 4: " +mcd(40,20));

// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion 
function fibonacci(n) {
    if (n <= 1) {
      return [0, 1].slice(0, n + 1); // retorna los primeros n+1 números de la serie
    } else {
      const serie = fibonacci(n - 1); // llama la función recursivamente para n-1
      serie.push(serie[serie.length - 1] + serie[serie.length - 2]); // agrega el siguiente número de la serie al final del array
      return serie; // retorna la serie completa
    }
  }
  
  console.log("Ejercicio 5: " + fibonacci(5)); 


// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos
// formula n = (Math.sqrt(8 * x + 1) - 1) / 2
function piramidalTriangular(n) {
    const x = n * (n + 1) / 2; // calcula el número de elementos en la figura piramidal triangular
    const numeroN = (Math.sqrt(8 * x + 1) - 1) / 2; // aplica la fórmula para calcular el número n
    return numeroN;
  }
  
  console.log("Ejercicio 6: " +piramidalTriangular(21));

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

function proporcionArea(nombrePais, areaPais) {
    const areaTierra = 148940000; // área de la tierra en km^2
    const proporcion = (areaPais / areaTierra) * 100; // calcula la proporción del área del país con respecto al área de la tierra en porcentaje
    return `El área de ${nombrePais} es el ${proporcion.toFixed(2)}% del área de la tierra.`; // retorna la proporción formateada en un string
  }
  
  console.log("Ejercicio 7: " + proporcionArea("Estados Unidos", 9372610));

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit
function invertir(input) {
    return input ^ 1;
  }
  
  console.log("Ejercicio 8: ")
  console.log(invertir(0)); // Output: 1
  console.log(invertir(1));
// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"
const msj = (person) =>{

    let mensaje = "No hay nadie en linea";

    switch(person){
        case 1:
        mensaje = 'User1 esta en linea';
        break;
        case 2:
        mensaje = 'User1 y User2 estan en linea';
        break;
        case person:
        mensaje = `User1 y n-${person} estan en linea`;
        break;
    }
    return mensaje;
}

console.log("Ejercicio 9: " + msj(3));