function arrayMadness(a, b) {
  const sumOfSquares = a.reduce((sum, num) => sum + num ** 2, 0);
  const sumOfCubes = b.reduce((sum, num) => sum + num ** 3, 0);
  return sumOfSquares > sumOfCubes;
}

console.log(arrayMadness([4,5,6],[1,2,3]));

function arrayMadness(a, b) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i =0, {length} = a; i < length; ++i)
  {
      sum1 += a[i]**2;
  }
  for (let i =0, {length} = b; i < length; ++i)
  {
      sum2 += b[i]**3;
  }
  return sum1 > sum2;
}


var countSheep = function (num){
  const num1 = 1
  const text = (num1 + " sheep...")
  for (let i=1; i<num1; i++)
  {
    console.log(text)
    }
return text
}

/*
const (1,   2, "-",              -1);
const (1,   2, "+",               3);
const (3,   5, "*",              15);
const (6,   2, "/",               3);
const (6,   2, "$", "unknown value");
const (6, "h", "*", "unknown value");

function calculator(a, b, sign) {
  const result = `${a} ${sign} ${b}`
  for (i=0; i<calculator.length; i++)
  {
  if (typeof a !== 'number' || typeof b !== 'number') {
        return "unknown value";
    }

    if (sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/') {
        return "unknown value";
    }
    console.log(result)
  };
} 
*/

String.prototype.digit = function() {
  let n = String.digit
  if (n === 'number') {
    return true;
    }
    if (n === 'string')
  return false;
}

/*
String.prototype.digit = function() {
  let n = String.digit
  if (n === 'number' && n === 'string') {
    return true;
  }
  return false;
}



      
if (n !== 'number')
  {
       return false
    }
  }
*/
console.log('------------------------------------------------------');

/*1. užd. Padarykite funkciją, kuriai perdavus vieną iš (akmuo, popierius, šulinys) reikšmių,
kompiuteris su jumi sužaistų vaskiči raundą ir išvestų rezultatą į console. Kompiuterio
pasirinkimai turi būti atsitiktiniai.*/

function game(playerChoice) {
  const choices = ['akmuo', 'popierius', 'sulinys'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  if (playerChoice === computerChoice) {
    return `Lygiosios! Abu pasirinkote ${playerChoice}.`;
  } else if (
    (playerChoice === 'akmuo' && computerChoice === 'sulinys') ||
    (playerChoice === 'popierius' && computerChoice === 'akmuo') ||
    (playerChoice === 'sulinys' && computerChoice === 'popierius')
  ) {
    return `Laimėjote! Jūs pasirinkote ${playerChoice}, kompiuteris pasirinko ${computerChoice}.`;
  } else {
    return `Pralaimėjote! Jūs pasirinkote ${playerChoice}, kompiuteris pasirinko ${computerChoice}.`;
  }
}
console.log(game('akmuo'));
console.log(game('popierius'));
console.log(game('sulinys'));

/*2 užd Parašykite funkcija, kuri parodytų kiek žmonių reikia norint pakelti tam tikro svorio
krovinį, kai vienas žmogus gali pakelti x kg. Pvz: 10kg svorį turi kelti 5 žmonės, jei vienas jų gali
pakelti 2.4 kg*/

function calculatePeople(weight, capacity) {
  const people = Math.ceil(weight / capacity);
  return people;
}
console.log(calculatePeople(10, 2.4)); // 5
console.log(calculatePeople(100, 20)); // 5

/*Parašykite funkciją, kuri išvestų skaičiaus faktorialą*/

function factorial(n) {
  if (n < 0) return undefined; // Faktorialas nėra apibrėžtas neigiamiems skaičiams
  if (n === 0 || n === 1) return 1; // 0! = 1 ir 1! = 1
  return n * factorial(n - 1); // Rekursyvus skaičiavimas
}

console.log(factorial(5));
console.log(factorial(0));

/*Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba sakinyje*/
function countLetter(word, letter) {
  let count = 0 
  for (let i=0; i<word.length; i++)
  {
    if (word[i].length === letter.length)
    {
      count++
    }
  }
  return count
}

console.log(countLetter('labas', 'a'));
console.log(countLetter('labas', 'l'));

/*Padarykite funkciją, kuri grąžintų visus skaičiaus 3 kartotinius nuo 1 iki 50*/
function multiplesOfThree() {
  const multiples = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}

console.log(multiplesOfThree());
console.log(multiplesOfThree().length);

/*Parašykite funkciją, kuri patikrintų ar duotas žodis yra palindromas*/
function isPolidrome() {
  const word = 'dovod'
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

console.log(isPolidrome('dovod'));
console.log(isPolidrome('labas'));

/*Parašyk funkciją, kuri suskaičiuoja kiek balsių yra žodyje*/
function countVowels(word) {
  const vowels = 'aeiouyąčęėįšųūž';
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('labas'));
console.log(countVowels('asderqsxcdfghjkl'));

/*Sukurk funkciją, kuri visus tarpus tekste pakeičia pabraukimais (underscore)*/
function replaceSpacesWithUnderscores(text) {
  return text.replace(/ /g, '_');
}

console.log(replaceSpacesWithUnderscores('labas rytas'));
console.log(replaceSpacesWithUnderscores('labas rytas visiems'));

/*Sukurk funkciją, kuri padvigubina visus skaičius masyve*/
function numbers(num) {
  const double = num.map(n => n * 2)
  return double 
}

console.log(numbers([1, 2, 3, 4]));
console.log(numbers([10, 20, 30, 40]));

/*Sukurk funkciją, kuri suranda ilgiausią žodį sakinyje*/
