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
    { pavadinimas: 'Kaunas', atstumas: 89.6 },
    { pavadinimas: 'Klaipėda', atstumas: 307.3 },
    { pavadinimas: 'Šiauliai', atstumas: 213.5 },
    { pavadinimas: 'Panevėžys', atstumas: 135.7 },
    { pavadinimas: 'Alytus', atstumas: 110.4 },
    { pavadinimas: 'Marijampolė', atstumas: 144.9 },
    { pavadinimas: 'Utena', atstumas: 96.3 },
    { pavadinimas: 'Telšiai', atstumas: 265.8 },
    { pavadinimas: 'Tauragė', atstumas: 209.5 },
    { pavadinimas: 'Mažeikiai', atstumas: 285.7 },
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