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

function testit(act,s) {
    for (let i=0; i<act.length; i++){
      if (act[i] == "run"){
        s = s.replace(/_/,"/")
      } else if (act[i] == "jump"){
        s = s.replace(/_/,"x")
      } else if (act[i] == "run" && act[i+1] == "jump"){
        s = s.replace(/_/,"/")
      } else if (act[i] == "jump" && act[i+1] == "run"){
        s = s.replace(/_/,"x")
      } else if (act[i] == "run" && act[i+1] == "run"){
        s = s.replace(/_/,"/")
    }
  return s
    }
}


console.log(["run","jump","run","jump","run"], "_|_|_", "_|_|_", "")
console.log(["run","jump","run","run","run"], "_|_|_", "_|_/_", "")
console.log(["run","run","run","run","run"], "_|_|_", "_/_/_", "")
console.log(["jump","jump","jump","jump","jump"], "_|_|_", "x|x|x", "")
console.log(["jump","run","jump","run","jump"], "_|_|_", "x/x/x", "")

