function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
      
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr;
}

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }

//     swap(arr, i, minIndex);
//   }
//   return arr;
// }


// function swap(arr, index1, index2) {
//   let temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
// }
console.log(selectionSort([1,5,3,2,4,8,3]))