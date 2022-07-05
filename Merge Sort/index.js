/* divide recursivamente al array en dos haste dejar los elementos separados, después los une
recursivamente poneiendo en primer lugar al menor
O = n log n independientemente de como estén ordenados, se considera eficiente. Necesita espacio
porque hace una copia del array
*/

const mergeSort = (startArray) => {
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }
  
  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    leftArray[0] < rightArray[0] ?  (sortedArray.push(leftArray[0]), leftArray.shift()) : (sortedArray.push(rightArray[0]),   rightArray.shift())
    }
  
  
  return sortedArray.concat(leftArray).concat(rightArray);
}


const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));

module.exports = {
  mergeSort
};