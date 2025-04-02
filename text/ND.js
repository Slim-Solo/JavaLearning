/*
let miestuAtstumas = ['Kaunas', 102, 'Klaipeda', 311, 'Siauliai', 214, 'Panevezis', 135, 'Alytus', 105, 'Marijampoje', 139, 'Druskininkai', 125, 'Palanga', 330, 'Telsiai', 251, 'Utena', 97];

function ilgis = (kilometrai('[1]')) {
    if (ilgis === 1) {
        console.log(kilometrai[1]);
        
    }
}
return toliausiasMiestas;
}
*/

const miestai = [
    ['Kaunas', 89.6]
    ['Klaipėda', 307.3],
    ['Šiauliai', 213.5],
    ['Panevėžys', 135.7],
    ['Alytus', 110.4],
    ['Marijampolė', 144.9],
    ['Utena', 96.3]
    ['Telšiai', 265.8],
    ['Tauragė', 209.5],
    ['Mažeikiai', 285.7],
];


function toliausiasMiestas(greitisKmPerVal, laikasVal) {
    const maxAtstumas = greitisKmPerVal * laikasVal;
    let tolimiausias = null;

    miestai.forEach(miestas => {
        if (miestas.atstumas <= maxAtstumas) {
            if (!tolimiausias || miestas.atstumas > tolimiausias.atstumas) {
                tolimiausias = miestas;
            }
        }
    });
    return tolimiausias 
        ? `Tolimiausias miestas: ${tolimiausias.pavadinimas}, Atstumas: ${tolimiausias.atstumas} km`
        : 'Nepasiekiamas joks miestas.';
}
console.log(toliausiasMiestas(80, 3));


function arPasiekiamas(miestoPavadinimas, laikasVal, maxGreitis = 120) {
    const miestas = miestai.find(m => m.pavadinimas === miestoPavadinimas);
    if (miestas) {
        const reikalingasGreitis = miestas.atstumas / laikasVal;
        if (reikalingasGreitis <= maxGreitis) {
            return {
                pasiekiamas: true,
                reikalingasGreitis: reikalingasGreitis.toFixed(2), // suapvaliname iki dviejų skaičių po kablelio
            };
        } else {
            return {
                pasiekiamas: false,
                reikalingasGreitis: reikalingasGreitis.toFixed(2),
            };
        }
    }
    return null;
}

function toliausiasMiestasSuDegalais(k, degaluKaina, sanaudosKm) {
    const turimiDegalai = 30; // 30 litrų benzino bakelyje
    const maxAtstumasNemokamai = turimiDegalai / sanaudosKm; // Atstumas, kurį galima nuvažiuoti su turimais degalais
    const papildomiKilometrai = (k / degaluKaina) / sanaudosKm; // Atstumas, kurį galima nuvažiuoti už papildomus pinigus
    const maxAtstumas = maxAtstumasNemokamai + papildomiKilometrai;

    let tolimiausias = null;

    miestai.forEach(miestas => {
        if (miestas.atstumas <= maxAtstumas) {
            if (!tolimiausias || miestas.atstumas > tolimiausias.atstumas) {
                tolimiausias = miestas;
            }
        }
    });

    return tolimiausias 
        ? `Tolimiausias miestas: ${tolimiausias.pavadinimas}, Atstumas: ${tolimiausias.atstumas} km`
        : 'Nepasiekiamas joks miestas.';
}

console.log(toliausiasMiestasSuDegalais(50, 1.6, 0.08));

function kelionesLaikai() {
    const laikai = kelioSalygos.map(kelioSalyga => {
        const miestas = miestai.find(m => m.pavadinimas === kelioSalyga.miestas);
        if (miestas) {
            let koeficientas = 1; // "geras" kelias
            if (kelioSalyga.salyga === 'prastas') {
                koeficientas = 1.5;
            } else if (kelioSalyga.salyga === 'taisomas') {
                koeficientas = 2;
            }
            const laikas = (miestas.atstumas * koeficientas).toFixed(2); // Apskaičiuojame laiką ir suapvaliname iki 2 skaičių po kablelio
            return {
                miestas: kelioSalyga.miestas,
                laikas: `${laikas} km`
            };
        }
        return null; // Jei nėra miesto
    });

    return laikai.filter(l => l !== null); // Filtruojame, kad nebūtų tuščių reikšmių
}

// Pavyzdys:
console.log(kelionesLaikai());