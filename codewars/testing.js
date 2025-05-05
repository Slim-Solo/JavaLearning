/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/
/*
function findShort(s) { 
    const words = s.split(' ');
    let minLength = Infinity;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length < minLength) {
            minLength = word.length;
        }
    }

    return minLength;
}
*/


/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

*/

function booleanToString(b) {
    return b.toString();
  }
  
  console.log(booleanToString(true)); // "true"
  console.log(booleanToString(false)); // "false"
  
  console.log('---------------------------------------------------------------------------');
  
  function booleanToString(b) {
    return b ? 'true' : 'false';
  }
  
  console.log(booleanToString(true)); // "true"
  console.log(booleanToString(false)); // "false"
  
  console.log('---------------------------------------------------------------------------');
  
  function booleanToString(b) {
    return String(b);
  }

/*



*/
///////////////// Факториал числа с помощью рекурсии /////////////////

function factorialRecursive(n) {
  if (n < 0) return "Факториал отрицательного числа не определён";
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

function numberOfLettersInString(str) {
  if (typeof str !== "string") return "Параметр не является строкой";
  return str.length;
}


/*


*/



function areYouPlayingBanjo(name) {
    // Implement me
    if (name[0].toLowerCase() === 'r') {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}

assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");