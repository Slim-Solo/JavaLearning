// Paprastas zodis stresas sudaro 7 simbolius
const word = 'stresas';
const wordSymbolsCount = word.length;
console.log(wordSymbolsCount);
const wordSentence = `Paprastas zodis "${word}" sudaro ${wordSymbolsCount} simbolius.`;
console.log(wordSentence);


//Maziau negu zodije krepsinis;
const word1 = 'krepsinis';
const word1Sentence = `Maziau negu zodije '${word1}`;
console.log(word1Sentence);
//

//Bet kadangi zodis stresas sudaro 7 simbolius, tai zodis krepsinis turi 9 simbolius
const word2 = 'krepsinis';
const word3 = 'stresas';
const word2SymbolsCount = word2.length;
const word3SymbolsCount = word3.length;
const word2Sentence = `Bet kadangi zodis "${word3}" sudaro ${word3SymbolsCount} simbolius, tai zodis "${word2}" turi ${word2SymbolsCount} simbolius.`;
console.log(word2Sentence);
//