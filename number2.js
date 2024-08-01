const sentence = "Saya sangat senang mengerjakan soal algoritma";

const words = sentence.split(' ');

let longestWord = '';

for (const word of words) {
    if (word.length > longestWord.length) longestWord = word;
}

console.log(`${longestWord}: ${longestWord.length} characters`);
