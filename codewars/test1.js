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

