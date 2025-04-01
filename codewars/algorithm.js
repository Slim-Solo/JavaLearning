/*
Story:
You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

Problem:
You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

Examples:
You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

5 --> 1
And in case of 12 you need 6 toasts less (but not -6):

12 --> 6
*/

function sixToast(num) {
    return Math.abs(num-6)
  }

console.log('--------------');

function sixToast(num) {
    if (num < 6){
    return 6 - num
    } else 
    return num -6; 
  }
console.log('--------------');

const sixToast = n => Math.abs(6 - n);
console.log('--------------');

function sixToast(num) {
  
    return num >= 6 ? num - 6 : num;
  }
console.log('--------------');

function sixToast(num) {
    return Math.abs(6 - num);
  }
console.log('--------------');

const sixToast = num => Math.abs(num - 6)

console.log('----------------');

function countToasts(toasts) {
    const target = 6; // Desired number of toasts
    return Math.abs(target - toasts);
}

// Examples
console.log(countToasts(5));  // Output: 1
console.log(countToasts(12)); // Output: 6