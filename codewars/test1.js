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


