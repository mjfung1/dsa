// Similar to leetcode 33.
// 33. Search in Rotated Sorted Array

var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === target) return i;
    }
    return -1;
};

// INTERVIEWER WAS PUSHING FOR O(LOGN). BINARY SEARCH
function binarySearch( arr, low,
                  high, key){
    if (high < low)
        return -1;
 
    let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
    if (key == arr[mid])
        return mid;
 
    if (key > arr[mid])
        return binarySearch(arr, (mid + 1), high, key);
 
    // else
    return binarySearch(arr, low, (mid - 1), key);
}
 
/* Function to get pivot. For array 3, 4, 5, 6, 1, 2
   it returns 3 (index of 6) */
function findPivot( arr, low, high){
    // base cases
    if (high < low)
        return -1;
    if (high == low)
        return low;
 
    let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
    if (mid < high && arr[mid] > arr[mid + 1])
        return mid;
 
    if (mid > low && arr[mid] < arr[mid - 1])
        return (mid - 1);
 
    if (arr[low] >= arr[mid])
        return findPivot(arr, low, mid - 1);
 
    return findPivot(arr, mid + 1, high);
}
 
/* Searches an element key in a pivoted
   sorted array arr[] of size n */
function pivotedBinarySearch( arr, n, key){
    let pivot = findPivot(arr, 0, n - 1);
 
    // If we didn't find a pivot,
    // then array is not rotated at all
    if (pivot == -1)
        return binarySearch(arr, 0, n - 1, key);
 
    // If we found a pivot, then first compare with pivot
    // and then search in two subarrays around pivot
    if (arr[pivot] == key)
        return pivot;
 
    if (arr[0] <= key)
        return binarySearch(arr, 0, pivot - 1, key);
 
    return binarySearch(arr, pivot + 1, n - 1, key);
}