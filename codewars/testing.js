/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

function findShort(s) { 
    const words = s.split(' ');
    let minLength = Infinity;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length < minLength) {
            minLength = word.length;
        }
    }

    return minLength;
}