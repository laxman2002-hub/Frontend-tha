/* Q 1. Write a JavaScript function to check whether an `input` is an array or not
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
True */

function is_array(arr){
    return toString.call(arr) == '[object String]'
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));