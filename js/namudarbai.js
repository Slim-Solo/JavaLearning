
        // Task 1:
const num1 = 4
console.log(num1)
const num2 = 7
console.log(num2)
const num3 = 1
console.log(num3)



const tex1 = 'Java'
console.log(tex1)
const tex2 = 'Script'
console.log(tex2)
const tex3 = 'Code'
console.log(tex3)


const num4 = ['4, 5, 4, 6, 7']
console.log(num4);
const num5 = ['2, 11, 15, 2, 17']
console.log(num5);
const num6 = ['3, 12, 20, 21, 10']
console.log(num6);



const tex4 = ['muse', 'kojines', 'sraige', 'koja', 'stiga']
console.log(tex4)
const tex5 = ['dazasvydis', 'svytuokle', 'rugstyne', 'faksas', 'sachmatai']
console.log(tex5)
const tex6 = ['liepa', 'stalas', 'ausis', 'galaktika', 'kaciukas']
console.log(tex6)




                    // Task 2:

const numA = num1 + num2 + num3
console.log(numA)



const sum1 = (4 + 5 + 4 + 6 + 7)
console.log(sum1);
const sum2 = (2 + 11 + 15 + 2 + 17)
console.log(sum2);
const sum3 = (3 + 12 + 20 + 21 + 10)
console.log(sum3);

const numB = (sum1 + sum2 + sum3)
console.log(numB);



const texAsentance = `Tris zodziai: ${tex1}, ${tex2}, ${tex3}.`
console.log(texAsentance)



const sum4 = (4 - 5 + 4 - 6 + 7)
console.log(sum4);
const sum5 = (2 - 11 + 15 - 2 + 17)
console.log(sum5);
const sum6 = (3 - 12 + 20 - 21 + 10)
console.log(sum6);

const vienojLinijoj = `${sum4}, ${sum5}, ${sum6}`
console.log(vienojLinijoj)

const texBsentance = `${tex6}, ${tex5}, ${tex4}`
console.log(texBsentance)


            // Task 3:


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



sentence1 = tex4[0].length + tex4[1].length + tex4[2].length + tex4[3].length + tex4[4].length;
console.log(sentence1);

sentence2 = tex5[0].length + tex5[1].length + tex5[2].length + tex5[3].length + tex5[4].length;
console.log(sentence2);

sentence3 = tex6[0].length + tex6[1].length + tex6[2].length + tex6[3].length + tex6[4].length;
console.log(sentence3);



if (sentence1 > sentence2) {
    console.log('Banditi kita karta')
} else if (sentence1 < sentence2) 
    console.log('Pomidoras');

if (sentence1 === sentence2) {
    console.log('Banditi dar karta')
} else if (sentence1 !== sentence2) 
    console.log('Pomidoras');

if (sentence1 >= sentence2) {
    console.log('Banditi dar karta')
} else (sentence1 <= sentence2)
    console.log('Pomidoras');


function tusciaFunkcija() {
    return `False`
}
 console.log(tusciaFunkcija())

 function daugyba(a1, a2) {
    const result = a1 * a2;
    return `${a1} * ${a2} = ${result}`
 }

console.log(daugyba(2, 5))
result = 10
console.log(daugyba(result, 5))
console.log(daugyba(2, result))


console.log('-------------------------------');


function skaitmenuKiekisSkaiciuje(list) {
    if (typeof list !== 'number' || isNaN(list)) {
        return "Pateikta netinkamo tipo reikšmė.";
    }
    return list.toString().length;
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('--------------------');


function didziausiasSkaiciusSarase(list) {
    if (!Array.isArray(list)) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }
    if (list.length === 0) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue;
        }
        if (list[i] > biggest) {
            biggest = list[i];
        }
    }
    return biggest;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));

console.log('-----------------------------');


function isrinktiRaides(list1) {
    if (typeof list1[0] === 'number') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
}



console.log(isrinktiRaides["abcdefg", 2]);
console.log(isrinktiRaides['abcdefghijkl', 3]);
console.log(isrinktiRaides['abc', 0]);
console.log(isrinktiRaides['abc', 4]);
console.log(isrinktiRaides[1561, 2]);