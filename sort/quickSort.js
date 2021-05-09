function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.pop();
    let left = array.filter(num => num < pivot);
    let right = array.filter(num => num >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);
    
    return [...leftSorted, pivot, ...rightSorted];
}