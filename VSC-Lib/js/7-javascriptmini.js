let a = 30
console.log(a);
let b = 70
console.log(b);
let c = 11
console.log(c);

let d = a / c
console.log(a / c);
let e = b - c
console.log(b - c);
let f = a * c
console.log(a * c);



let pirmas = 7
console.log(pirmas);
let antras = 13
console.log(antras);
let trecias = -15
console.log(trecias);

console.log(pirmas + antras + trecias);
console.log(pirmas - antras - trecias);
console.log(pirmas * antras * trecias);

console.clear();  


const n1 = 10
const n2 = 15

if (n1 > n2) {
    console.log('Pomidoras');
} else {
console.log('Bandykite kita karta');
}
if (n1 < n2) {
    console.log('Pomidoras');
} else {
console.log('Bandykite kita karta');
}
if (n1 >= n2) {
    console.log('Pomidoras');
} else {
console.log('Bandykite kita karta');
}
if (n1 <= n2) {
    console.log('Pomidoras');
} else {
console.log('Bandykite kita karta');
}
if (n1 === n2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite kita karta');
}
if (n1 !== n2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite kita karta');
}


const wordLength = 'Labas rytas';
const wordLength2 = 'Labas vakaras';
console.log(wordLength.length);
console.log(wordLength2.length);

if (wordLength.length > wordLength2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (wordLength.length < wordLength2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (wordLength.length >= wordLength2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (wordLength.length <= wordLength2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (wordLength.length === wordLength2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (wordLength.length !== wordLength2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}


const tusciaFunkcija1 = false
const tusciaFunkcija2 = true
console.log(tusciaFunkcija1 && tusciaFunkcija2)


const s1 = 2
console.log(s1);
const s2 = 5
console.log(s2);
const s3 = s1 * s2
console.log(s3);
console.log(s1 * s2);
console.log(s3 * s1);
console.log(s1 * s3);


console.clear();

const mokinys1 = ['Tomas', 8, 9, 5, 7, 6];
const mokinys2 = ['Jonas', 6, 3, 9, 6, 4];
const mokinys3 = ['Linas', 3, 5, 2, 1, 7];
const mokinys4 = ["Asta", 6, 7, 4, 5, 5];
const mokinys5 = ["Romas", 4, 7, 5, 5, 5];
const mokinys6 = ["Ona", 4, 4, 4, 4, 4];

function mokinysVidurkis (mokinys)
{
    console.log('Mokinio Vardas ' + mokinys[0])
    let vidurkis = (mokinys[1]+mokinys[2]+mokinys[3]+mokinys[4]+mokinys[5])/5
if(vidurkis>=3.5) {
    console.log(mokinys[0] + " Islaike. Jo vidurkis:" + vidurkis);
} else {
        console.log(mokinys[0] + " Islaike. Jo vidurkis:" + vidurkis);
    }
        let vidurkisNaujas = ((vidurkis*5)+10)/6
        console.log(mokinys[0] + " neislaike. Jo dabartinis vidurkis:" + vidurkis);
        console.log(mokinys[0] + " neislaike. Jo dabartinis vidurkis:" + vidurkis);
        console.log(vidurkisNaujas);
        if(vidurkisNaujas>=3.5) {
            console.log(mokinys[0] + " Islaikitu kursa jai gautu viena desimtuka");
    }
}


mokinysVidurkis(mokinys1)
mokinysVidurkis(mokinys2)
mokinysVidurkis(mokinys3)
mokinysVidurkis(mokinys4)
mokinysVidurkis(mokinys5)
mokinysVidurkis(mokinys6)



