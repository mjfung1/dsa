// Time Complexity
// Avg Case: O(n log(n))
// Worst Case: O(n2)

// Space Complexity
// Our implementation of quickSort uses O(n)
// There is an in-place version of quickSort that uses O(log(n)) space.
function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.pop();
    let left = array.filter(num => num < pivot);
    let right = array.filter(num => num >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);
    
    return [...leftSorted, pivot, ...rightSorted];
}

// If you know some constraints about dataset you can make some modifications to 
// optimize pivot choice. Here's some food for thought. Our implementation of 
// quickSort will always take the first element as the pivot. This means we 
// will suffer from the worst case time complexity in the event that we are 
// given an already sorted array (ironic isn't it?). If you know your input 
// data to be mostly already sorted, randomize the choice of pivot - this is a 
// very easy change. Bam. Solved like a true engineer.