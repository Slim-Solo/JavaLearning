// Solutions  "Multiply"


multiply = function (a, b) {
    return a * b;
  }

  multiply11 = (a, b) => a * b;



function multiply1(a, b){
  if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    return 0;
  }
  return a * b;
}



const multiply = (a, b) => a * b;


function multiply2(a, b){
    if (undefined == a || undefined == b || isNaN(a) || isNaN(b))
      throw new Error('Both arguments should be numbers')
    return a * b
  }