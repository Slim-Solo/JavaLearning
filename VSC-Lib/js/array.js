/*
ARRAY - sarasas, Arejus, matrica, masyvas, list'as, rinkynys
*/

const empty = [];
console.log(empty);

const luckyNumbers = [7, 777, 13, 666, 8, 2];
console.log(luckyNumbers);

const students = ['Jonas', 'Maryte', 'Asta', 'Lukas'];
console.log(students);

const firstNumber = luckyNumbers [0];
console.log(firstNumber)

console.log(luckyNumbers[0])
console.log(luckyNumbers[1])
console.log(luckyNumbers[2])
console.log(luckyNumbers[3])
console.log(luckyNumbers[4])
console.log(luckyNumbers[5])
console.log(luckyNumbers[6])
console.log(luckyNumbers[7])

console.log(empty.length)
console.log(luckyNumbers.length)


const numbers = [10, 2, 8, 4, 6];
const totalSum1 = numbers[0] + numbers[1] + numbers[4] + numbers[3] + numbers [2];
console.log(totalSum1);

let totalSum2 = [0];
totalSum2 += numbers[0];
console.log(totalSum2);

const dictionary = ['pomidoras', 'agurkas', 'bulves', 'druska', 'svogunu laiskai', 'lasyniai'];
const sentence1 = 'Patiekalui reikia: ' + dictionary[0] + ', ' + dictionary[1] + ', ' + dictionary[2] + ', ' + dictionary[3] + ', ' + dictionary[4] + ', ' + dictionary [5] + '.';
console.log(sentence1);


let index2 = 0
let sentence2 = 'Patiekalui reikes: ';
sentence2 += dictionary[index2] + ', ';
sentence2 += dictionary[1] + ', ';
sentence2 += dictionary[2] + ', ';
sentence2 += dictionary[3] + ', ';
sentence2 += dictionary[4] + ', ';
sentence2 += dictionary[5] + '.';
console.log(sentence2);

let index3 = 0
let sentence3 = 'Patiekalui reikes: ';
sentence3 += dictionary[index3] + ', ';
index3 += 1

sentence3 += dictionary[index3] + ', ';
index3 += 1

sentence3 += dictionary[index3] + ', ';
index3 += 1

sentence3 += dictionary[index3] + ', ';
index3 += 1

sentence3 += dictionary[index3] + ', ';
index3 += 1

sentence3 += dictionary[index3] + '.';
console.log(sentence3);

let k = 0;
k = k + 1;
k += 1;
k++;
++k;

let i = 1;
let sentence4 = 'Patiekalui reikes: ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + '.';
console.log(sentence4);