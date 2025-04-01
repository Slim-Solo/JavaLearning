/*
TYPEOF - duomenu tipo nustatymo operatorius
*/

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.141592654);
console.log(typeof 'asd');
console.log(typeof '');
console.log(typeof true);
console.log(typeof false);
console.log(typeof sum);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof [true, false]);
console.log(typeof null);
console.log(typeof {});


const a = null;
if (a === null) {
    console.log('NULL');    
}

const b = [];
if (Array.isArray(b)) {
    console.log('ARRAY');   
}

const c = 5
if (Array.isArray(5)) {
    console.log('ARRAY');
}

  


  function countBy(x, n) {
    const result = [];
  for (let i=1; i<=n; i++) {
    result.push(x*i)
  }
    return result;
  }
  
  console.log(countBy(1, 10));
  console.log(countBy(2, 5));