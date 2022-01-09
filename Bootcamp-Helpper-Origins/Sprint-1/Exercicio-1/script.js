"use strict";
function amountVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    word = word.toLowerCase();
    word = word.normalize('NFD');
    let result = word.split('').filter((letter) => vowels.includes(letter));
    return result.length;
}
let example = "bootcamp origin helpper";
console.log(amountVowels(example)); //solution (a)
const button = document.querySelector('#send');
button.addEventListener('click', function (e) {
    e.preventDefault();
    let word = document.querySelector('#word');
    let answer = document.getElementById('answer');
    answer.innerHTML = `Quantidade de vogais: ${amountVowels(word.value)}`;   //solution (b)
});
