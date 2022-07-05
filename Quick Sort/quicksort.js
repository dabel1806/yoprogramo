/* El algoritmo elige un pivot en el punto medio del array y dos puntos de referenci, el izquierdo
al principio de la matriz y el derecho al final.
compara el contenido del puntero izquierdo con el pivot, mientras sea menor mueve el pivot a la 
derecha. Despues compara el puntero derecho con el pivot. Mientras sea mayor mueve el pivot a la
izquierda. En ese punto  intercambia el contenido del punto izquierdo con el contenido del punto
derecho.
Ejecuta la función recursivamente hasta que la matriz esté ordenada
tiene un O maximo de O = n^2 si la matriz esta previamente ordenada, si el valor del 
pivot deja todos los elementos del mismo lado o si todos los elementos son iguales.
y un O promedio de O = n log n si el pivot divide a la mitad

Este script tiene insertados logs para ver como funciona

*/ 



const swap = require('./swap');

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (leftBound < rightBound) {
    console.log('. Calling partition', array, `with leftBound ${leftBound} and rightBound ${rightBound}`);
    const pivotIndex = partition(array, leftBound, rightBound);
    console.log(`. Returning pivotIndex = ${pivotIndex}`);
    console.log(`\nCalling quicksort for left partition with leftBound ${leftBound} and (pivotIndex-1) ${pivotIndex - 1}`);
    quicksort(array, leftBound, pivotIndex - 1);
    console.log(`\nCalling quicksort for right partition with pivotIndex ${pivotIndex} and rightBound ${rightBound}`);
    quicksort(array, pivotIndex, rightBound);
  }
  return array;
}


const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
  console.log(`.. Partitioning with pivot ${pivot} leftIndex ${leftIndex} rightIndex ${rightIndex}`);
  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
      console.log(`.. ${array[leftIndex-1]} < ${pivot} : Incremented leftIndex => ${leftIndex}`);
    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
      console.log(`.. ${array[rightIndex+1]} > ${pivot} : Decremented rightIndex => ${rightIndex}`);
    }
    if (leftIndex <= rightIndex) {
      const string = `${leftIndex} <= ${rightIndex}`;
      swap(array, leftIndex, rightIndex);
      console.log(`.. ${string} : Swapped leftIndex ${leftIndex} with rightIndex ${rightIndex}`, array);
      leftIndex++;
      rightIndex--;
      console.log(`......... : Incremented leftIndex => ${leftIndex} Decremented rightIndex => ${rightIndex}`);
    }
  }
  return leftIndex;
}

module.exports = {
  quicksort,
  partition
};
