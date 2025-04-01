/*
STRING - tekstas, simboliu grandinele

Tekstines reiksmes iniciavimas:
- ' (vienguba kabute)
- " (dviguba kabute)
*/

/*
Specialieji simboliai:
- \ (priverčia sekantį simbolį būti spausdintinu)
- \r (return, kursorius grįžta į eilutės pradžią)
- \n (new line, kursorius perkeliamas į naują eilutę žemyn);
*/


const a = 'Labas';
console.log(a);

let b = 'rytas';
console.log(b);

b = 'diena';
console.log(b);

// Vienguba (') kabute.
const k1 = "Vienguba (') kabute.";
console.log(k1);

// Dviguba (") kabute.
const k2 = 'Dviguba (") kabute.';
console.log(k2);

const name = "Jonas";
const surname = "Jonaitis";

const fullname = name + ' ' + surname;
console.log(fullname);

// Vienguba (') ir dviguba (") kabutes.
const k12 = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(k12);

// Vienguba (') kabute.
const k3 = 'Vienguba (\') kabute.';
console.log(k3);

// Dviguba (") kabute.
const k4 = "Dviguba (\") kabute.";
console.log(k4);

// Vienguba (') ir dviguba (") kabutes.
const k5 = 'Vienguba (\') ir dviguba (") kabutes.';
const k6 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(k5);
console.log(k6);

const k7 = 'Vienguba (\') ir dviguba (\") kabutes.';
const k8 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(k7);
console.log(k8);

const backSlash1 = '\\';
const backSlash2 = "\\\\";

console.log(backSlash1);
console.log(backSlash2);

console.clear();

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

const html = '<headed>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t<a></a>\r\n\
\t<a></a>\r\n\
\t<a></a>\r\n\
\t</nav>\r\n\
</header>';
console.log(html);

const html2 = '<headed>\n\
\t<img>\n\
\t<nav>\n\
\t<a></a>\n\
\t<a></a>\n\
\t<a></a>\n\
\t</nav>\n\
</header>';
console.log(html2);

const html3 = '<headed>\r\
\t<img>\r\
\t<nav>\r\
\t<a></a>\r\
\t<a></a>\r\
\t<a></a>\r\
\t</nav>\r\
</header>';
console.log(html3);

const html4 = '<headed>\r\
    <img>\r\
    <nav>\r\
    <a></a>\r\
    <a></a>\r\
    <a></a>\r\
    </nav>\r\
    </header>';
console.log(html4);

console.clear()



// Vienguba (') kabute.
const b1 = "Vienguba (') kabute.";
console.log(b1);

// Dviguba (") kabute.
const b2 = 'Dviguba (") kabute.';
console.log(b2);

// Vienguba (') ir dviguba (") kabutes.
const b3 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(b3);

// Backtick (`) kabute.
const b4 = `Backtick (\`) kabute.`;
const b5 = 'Backtick (`) kabute.';
const b6 = "Backtick (`) kabute.";

const studentName1 = 'Jonas';
const studentName2 = 'Maryte';
const amount = 8;
// Maryte ir Jonas yra vieni is 4 legendiniu studentu.

const student = `${studentName1} ${studentName2} yra vieni is + ${amount} + legendiniu studentu.`;

console.clear();

const word = ('Saule');
const wordSymbolsCount =(word.length);

console.log(word);
console.log(wordSymbolsCount);

console.clear();

const textSize = 'aaaaaaaaa'.length;
console.log(textSize);

const age = 99

const ageDigitCount = (age + '').length;
console.log(ageDigitCount);

const ageDigitCount2 = age.toString().length;
console.log(ageDigitCount2);

console.clear();

const text = 'lala';
const firstSymbol = text[0];
console.log(firstSymbol);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);

console.log(text[0] + text[1]);

// Zodyje Sachmatai pirmoji raide yra "S".
const game = 'Sachmatai';
const gameSentence = `Zodyje "${game}" pirmoji raide yra "${game[0]}".`;

console.log(gameSentence);

console.clear();

const wasd =  'architektura';
const wasdSymbolsCount = wasd.length;
console.log(wasdSymbolsCount); 

console.log(wasd[11]);
console.log(wasd[10]);
console.log(wasd[9]);
console.log(wasd[8]);
console.log(wasd[7]);
console.log(wasd[6]);
console.log(wasd[5]);
console.log(wasd[4]);
console.log(wasd[3]);
console.log(wasd[2]);
console.log(wasd[1]);
console.log(wasd[0]);

console.log(wasd[11] + wasd[10] + wasd[9] + wasd[8] + wasd[7] + wasd[6] + wasd[5] + wasd[4] + wasd[3] + wasd[2] + wasd[1] + wasd[0]);
