function marksAvergae(list) {
    // patikrinti ar gavome masyva
    // sumojame visus skaicius:
    let sum = 0;
    let count = 0;
    //       einame per visa masiva ir imame kiekviena skaiciu
    //       jei sutinkame ne skaiciu, tai ji ignoruojame
    //       jei sutinkame skaiciu, kuris nera sveikasis nuo 1 iki 10 (imtinai), tai ignoruojame
    //       jei sutinkame skaiciu, padidiname suma
    //       jei sutinkame skaiciu, padididname kieki


    return sum / count;

}

console.log(marksAvergae([]));
console.log(marksAvergae([10]));
console.log(marksAvergae([2]));
console.log(marksAvergae([2, 'n']));
console.log(marksAvergae(['n']));
console.log(marksAvergae([10, 2, 5, 3, 2]));
console.log(marksAvergae([8, 4, 7]));
console.log(marksAvergae([8, 'n', 4, 7]));

console.log(marksAvergae('Labas'));
console.log(marksAvergae(true));