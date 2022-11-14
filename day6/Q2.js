/* Q2. Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

function array_Clone(arr){
    //return arr.slice()
    ans = []
    for(let item of arr){
        ans.push(item)
    }
    return ans
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));