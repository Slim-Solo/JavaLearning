/*
BOOLEAN - logine reiksme
    - true
    - false

Loginiai operatoriai:
- && - and (ir)
- || - or (arba)
*/

const isEven = true
const isOdd = false

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('|| --------')
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('ar mergina eis i pasimatima?');
const arGrazi = true
const arTurtinga = true

console.log(arGrazi && arTurtinga);

console.log('ar vaikinas eis i pasimatima?');
const arGrazus = true
const arTurtingas = true

console.log(arGrazus || arTurtingas);

console.clear();


console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(4, true && false || true);
console.log(3, false && false || false);
console.log(5, false && true || false);
console.log(6, false && true || false);
console.log(7, false && false || false);
console.log(8, false && false || false);

console.clear();

console.log(1, true || true && true);
console.log(2, true || true && false);
console.log(4, true || false && true);
console.log(3, false || false && false);
console.log(5, false || true && false);
console.log(6, false || true && false);
console.log(7, false || false && false);
console.log(8, false || false && false);

// ND: surasyti visus imanomas kombinacijas su && ir ||, kai yra naudojamos boolean reiksmes.
// ND: kiek gavosi kombinacijos?

console.clear();

console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && false && true && true);
console.log(false && true && true && true);
console.log(true && true && false && false);
console.log(true && false && false && true);
console.log(false && false && true && true);
console.log(true && false && true && false);
console.log(false && true && false && true);
console.log(false && true && true && false);
console.log(true && false && false && false);
console.log(false && false && false && true);
console.log(false && true && false && false);
console.log(false && false && true && false);
console.log(false && false && false && false);

console.clear();

console.log(true || true || true || true);
console.log(true || true || true || false);
console.log(true || true || false || true);
console.log(true || false || true || true);
console.log(false || true || true || true);
console.log(true || true || false || false);
console.log(true || false || false || true);
console.log(false || false || true || true);
console.log(true || false || true || false);
console.log(false || true || false || true);
console.log(false || true || true || false);
console.log(true || false || false || false);
console.log(false || false || false || true);
console.log(false || true || false || false);
console.log(false || false || true || false);
console.log(false || false || false || false);

console.clear();

console.log(true && true || true || true);
console.log(true || true && true || false);
console.log(true && true || false && true);
console.log(true && false && true && true);
console.log(false || true || true || true);
console.log(true || true || false || false);
console.log(true || false || false || true);
console.log(false || false || true || true);
console.log(true || false || true || false);
console.log(false || true || false || true);
console.log(false || true || true || false);
console.log(true || false || false || false);
console.log(false || false || false || true);
console.log(false || true || false || false);
console.log(false || false || true || false);
console.log(false || false || false || false);

//result 16777216