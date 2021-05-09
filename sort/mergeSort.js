// short version
function merge(array1, array2) {
    const merged = [];

    while (array1.length || array2.length) {
        let num1 = array1.length ? array1[0] : Infinity;
        let num2 = array2.length ? array2[0] : Infinity;

        if (num1 < num2) merged.push(array1.shift());
        else merged.push(array2.shift());
    }

    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = ~~(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right))
}

// longer version. less abstracted
function merge(array1, array2) {
    const merged = [];

    while (array1.length || array2.length) {
        let num1 = array1.length ? array1[0] : Infinity;
        let num2 = array2.length ? array2[0] : Infinity;

        let num;
        if (num1 < num2) {
            num = array1.shift();
        } else {
            num = array2.shift();
        }

        merged.push(num)
    }

    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = ~~(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    return merge(leftSorted, rightSorted);
}


// J-Coles version
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    
    let mid = Math.floor(nums.length / 2);
    let leftArray = nums.slice(0, mid);
    let rightArray = nums.slice(mid);
    
    let sortedLeft = sortArray(leftArray);
    let sortedRight = sortArray(rightArray);
    
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0
    
    while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
        if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
            merged.push(sortedLeft[leftIndex]);
            leftIndex++;
        } else {
            merged.push(sortedRight[rightIndex]);
            rightIndex++;
        }
    }
    
    if (leftIndex < sortedLeft.length) {
        merged = merged.concat(sortedLeft.slice(leftIndex))
    } else if (rightIndex < sortedRight.length) {
        merged = merged.concat(sortedRight.slice(rightIndex))
    }
    
    return merged;
};