
const arr1 = [1,2,3,4]
const arr2 = arr1
arr2[2] = 30
const arr3 = arr2
arr1[0] = 'hello'
arr3[3] = 'im arr3'


console.log(arr1, 'arr1')
console.log(arr2, 'arr2')
console.log(arr3, 'arr3')
