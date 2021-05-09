// Time Complexity
// Since this algorithm requires iterating over all n elements of the input array, 
// and then subsequently iterating over our each element of our counter array 
// (which has length k), we wind up with a run time of O(n + k).

// Space Complexity of Counting Sort is O(k).  Size of freq array

// when do we use counting sort??? when we know the max value so we create array.

function countingSort(arr, max) {
    const result = [];
    const freq = Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]]++; 
    }

    for (let i = 0; i < freq.length; i++) {
        while (freq[i] > 0) {
            result.push(i);
            freq[i]--;
        }
    }

    
    return result;

}