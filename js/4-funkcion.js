function empty() {
    // logika
}

const a = empty();
const b = empty();
console.log(a);
console.log(b);

console.log(empty());

function penki() {
    return 5;
};

const c = penki()
console.log(c);

function hi() {
    return 'Labas!';
}
const d = hi();
console.log(d);

// Jonas -> Labas, Jonas!
// Maryte -> Labas, Maryte!
// Petas -> Labas, Petas!
// Ona -> Labas, Ona!

function hiPerson (name) {
    // return 'Labas, ' + name + '!';
    return `Labas, ${name}!`;
}

console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('Ona'));

// 2+2 = 4
// 7+5 = 12

function sum(num1, num2) {
    return num1 + num2;
}

const e = sum(2, 2);
console.log(e);

const s = sum(7, 5);
console.log(s);

const q = sum(-7, 5);
console.log(q);

console.clear();

// 100 -> 121 Eur
// 200 -> 242 Eur
// 73 -> 88.33 Eur

function priceWithVAT(price) {
    const updatedPrice = price * 1.21;
    console.log(updatedPrice)

    return updatedPrice + ' Eur';
}

const p1 = priceWithVAT(100);
console.log(p1);

const p2 = priceWithVAT(200);
console.log(p2);

const p3 = priceWithVAT(73);
console.log(p3);

console.clear();

// Jonas -> Zodis "Jonas" ira 'sudaritas is penkiu raidziu.

// Maryte -> Zodis "Maryte" ira 'sudaritas is sesiu raidziu.

// Petras -> Zodis "Petras" ira 'sudaritas is sesiu raidziu.

// Ona -> Zodis "Ona" ira 'sudaritas is triju raidziu.

function nameLength(name) {
    const size = name.length;
    return `Zodis "${name}" ira sudaritas is ${size} raidziu.`;
}

const nl1 = nameLength('Jonas');
const nl2 = nameLength('Maryte');
const nl3 = nameLength('Petras');
const nl4 = nameLength('Ona');
console.log(nl1);
console.log(nl2);
console.log(nl3);
console.log(nl4);

console.clear();

// 5 -> Gautas skaicius: 5
// -13 -> Gautas skaicius: -13
// 777 -> gautas skaicius: 777

function gotNumber(n) {
    //return 'Gautas skaicius: ' + n + '.';
    return `Gautas skaicius: ${n}`;
}

const gn1 = gotNumber(5);
const gn2 = gotNumber(-13);
const gn3 = gotNumber(777);

console.log(gn1);
console.log(gn2);
console.log(gn3);

// 2, 2 -> 2 + 2 = 4
// 7, 5 -> 7 + 5 = 12
// -7, 15 -> -7 + 15 = 8

function sum(a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}`;
}
console.log(sum(2, 2));
console.log(sum(7, 5)); 
console.log(sum(-7, 15));

//Сделать со всеми знаками математики: +, -, *, /, %, **

// 2, 2 -> 2 - 2 = 4
// 7, 5 -> 7 - 5 = 12
// -7, 15 -> -7 - 15 = 8

// 2, 2 -> 2 * 2 = 4
// 7, 5 -> 7 * 5 = 12
// -7, 15 -> -7 * 15 = 8

// 2, 2 -> 2 / 2 = 4
// 7, 5 -> 7 / 5 = 12
// -7, 15 -> -7 / 15 = 8
