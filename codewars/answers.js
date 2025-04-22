/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

console.log('---------------------------------------------------------------------------');

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

console.log('---------------------------------------------------------------------------');

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

  console.log('---------------------------------------------------------------------------');

  function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
  }

console.log('---------------------------------------------------------------------------');

/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.*/
/*Выполните функцию, которая принимает строковый параметр и меняет местами каждое слово в строке. Все пробелы в строке должны быть сохранены.*/

function reverseWords(str) {    
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }

console.log('---------------------------------------------------------------------------');

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

console.log('---------------------------------------------------------------------------');

function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        reversedWord = str[i] + reversedWord;
      } else {
        reversedStr += reversedWord + ' ';
        reversedWord = '';
      }
    }
    return reversedStr + reversedWord;
  }

console.log('---------------------------------------------------------------------------');

/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/

function highAndLow(numbers){
    const arr = numbers.split(' ').map(Number);
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
  }

console.log('---------------------------------------------------------------------------');

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

console.log('---------------------------------------------------------------------------');

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

console.log('---------------------------------------------------------------------------');

function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }

console.log('---------------------------------------------------------------------------');

/*Write a program that finds the summation of every number from 1 to num (both inclusive).
The number will always be a positive integer greater than 0.
Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.*/

function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

console.log('---------------------------------------------------------------------------');

const summation = n => n * (n + 1) / 2;


console.log('---------------------------------------------------------------------------');


function summation(num) {
    return num * (num + 1) / 2
  }

console.log('---------------------------------------------------------------------------');

var summation = function (num) {
    var sum = 0;
    for(var i=0; i<=num;i++){
      sum+=i
    }
    return sum;
  }

console.log('---------------------------------------------------------------------------');

/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.*/

function sumArray(array) {
    if (!array || array.length <= 2) return 0;
    const sorted = array.sort((a, b) => a - b);
    return sorted.slice(1, -1).reduce((sum, num) => sum + num, 0);
  }

console.log('---------------------------------------------------------------------------');

function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
  }

console.log('---------------------------------------------------------------------------');

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


console.log('---------------------------------------------------------------------------');

function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }

console.log('---------------------------------------------------------------------------');

function sumArray(array) {
  
    if (array == null || array.length <= 2) {
      return 0
    }
    
    var max = Math.max.apply(Math, array);
    var min = Math.min.apply(Math, array);
    var sum = 0
    
    for (i = 0; i < array.length; i++) {
      sum += array[i];
     }
  
    return sum - max - min
  }


console.log('---------------------------------------------------------------------------');


/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.*/

function number(lines) {
    return lines.map((line, index) => `${index + 1}: ${line}`);
  }


console.log('---------------------------------------------------------------------------');

var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }

console.log('---------------------------------------------------------------------------');

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)


console.log('---------------------------------------------------------------------------');

var number = function(arr) {
    var newArr = [];
      if (arr.length === 0) {
        return [];
      } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
          newArr.push((i + 1) + ': ' + arr[i]);
        }
      }
      return newArr;
    }

console.log('---------------------------------------------------------------------------');

function number(arr) {
    return arr.map((e, i) => `${++i}: ${e}`);
  }

console.log('---------------------------------------------------------------------------');

/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

function litres(time) {
  return time>>1
}

console.log('---------------------------------------------------------------------------');

function litres(time) {
  return Math.gloor(time * 0.5)
}