const film1 = ['pjuklas', 'siaubo', 3]
const film2 = ['diuna', 'fantastika', 9]
const film3 = ['ring', 'siaubo', 7]
const film4 = ['ziedu valdovas', 'fenteze', 8]
const film5 = ['redirected', 'komedija', 7]

const MegstamasZanras = 'siaubo'
const ManoBalas = 8

function norimasFilmas (filmA, filmB, filmC, balas, zanras)
{
    let ArYraFilmas = false;

    

    if (filmA[2] >= balas && filmA[1] == zanras)
    {
        
        console.log('Jums tiktu filmas: '+filmA[0]);
        ArYraFilmas = true;
    }
    if (filmB[2] >= balas && filmB[1] == zanras)
    {
        console.log('Jums tiktu filmas: '+filmB[0]);
        ArYraFilmas = true;
    }
    if (filmC[2] >= balas && filmC[1] == zanras)
    {
        console.log('Jums tiktu filmas: '+filmC[0]);
        ArYraFilmas = true;
    }
    if(ArYraFilmas = false)
    {
        console.log('Jums Tinkamu filmu nera');
        
    }
}

norimasFilmas(film1, film2, film3, ManoBalas, MegstamasZanras)


function intervalCount(start, end, divider) {
    let count = 0;

    // 1) naivi versija, kai einame per kiekviena skaiciu
    // for (let i = start; i <= end; i++) {
    //     if (i % divider === 0) {
    //         count++;
    //     }
    // }

    // 2) labiau optimizuotas naivus variantas
    const trueStart = start;
    for (let i = trueStart; i <= end; i += divider) {
        count++;
    }

    // 3) galutinis tikslas yra formule, kurios uzuomina yra zemiau pateika lygtis/logika
    // count = (end-start) / divider;

    return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;
}

console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));

console.log(intervalCount(1, 11, 3));
console.log(intervalCount(1, 11, 5));
console.log(intervalCount(1, 11, 7));

console.log(intervalCount('asd', 11, 7));
console.log(intervalCount(1, 'asd', 7));
console.log(intervalCount(1, 11, 'asd'));
console.log(intervalCount(true, 11, 7));
console.log(intervalCount(1, true, 7));
console.log(intervalCount(1, 11, true));
console.log(intervalCount(undefined, 11, 7));
console.log(intervalCount(1, undefined, 7));
console.log(intervalCount(1, 11, undefined));
console.log(intervalCount(null, 11, 7));
console.log(intervalCount(1, null, 7));
console.log(intervalCount(1, 11, null));
console.log(intervalCount([], 11, 7));
console.log(intervalCount(1, [], 7));
console.log(intervalCount(1, 11, []));
console.log(intervalCount({}, 11, 7));
console.log(intervalCount(1, {}, 7));
console.log(intervalCount(1, 11, {}));
console.log(intervalCount(intervalCount, 11, 7));
console.log(intervalCount(1, intervalCount, 7));
console.log(intervalCount(1, 11, intervalCount));

console.log(intervalCount(0.1, 11, 7));
console.log(intervalCount(0, 11.1, 7));
console.log(intervalCount(0, 11, 7.1));

console.log(intervalCount(NaN, 11, 7));
console.log(intervalCount(0, NaN, 7));
console.log(intervalCount(0, 11, NaN));

console.log(intervalCount(Infinity, 11, 7));
console.log(intervalCount(100, 11, 7));
console.log(intervalCount(0, Infinity, 7));
console.log(intervalCount(0, 11, Infinity));

console.log(intervalCount(-Infinity, 11, 7));
console.log(intervalCount(0, -Infinity, 7));
console.log(intervalCount(0, 11, -Infinity));


function intervalCount(start, end, divider) 
{
    if (typeof start === 'string' || typeof start === 'boolean')
    {
        return 'Intervalo pradzia turi buti skaiciius.';
    }
}

function intervalCount(start, end, divider)
{
    if (typeof start !== 'number')
    {
        return 'Intervalo pradzioje turi buti skaicius.';
    }
    {
    if (typeof end !== 'number')
    {
        return 'Intervalo pabaigoje turi buti skaicius.';
    }
    if (typeof divider !== 'number')
    {
        return 'Daliklis turi buti skaiuc.';
    }
    }

}




function finalGrade (exam, projects) {
    if (exam > 90 || projects === 10)
      {
        return grade = '100'
      }
    if (exam > 75 && projects >= 5)
      {
        return grade = '90'
      }
    if (exam > 50 && projects >= 2)
      {
        return grade = '75'
      }
    if (exam < 0 && projects < 0)
      {
        return grade = '0'
      }
    console.log(grade)
  }
  