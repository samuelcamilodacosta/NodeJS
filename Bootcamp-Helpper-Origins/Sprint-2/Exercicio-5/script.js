import Words from "./class.js";
//Solution (a) only introduces the user to an example of how the amount vowels method works
let example = document.querySelector('#wordExample');
let classOfExample = new Words(example.value);
let answerExample = document.getElementById('answerExample');
answerExample.innerHTML = `Quantidade de vogais: ${classOfExample.amountVowels()}`;
// solution (b) 
const button = document.querySelector('#send');
button.addEventListener('click', actionOnClick);
/**
 * actionOnClick
 * This function is responsible for validating the input and, if possible,
 * printing the response
 * @param event
 */
function actionOnClick(event) {
    event.preventDefault();
    let word = document.querySelector('#word');
    if (word.value == '') {
        return alert("Por favor, informe a palavra a ser analisada.");
    }
    let classOfWord = new Words(word.value);
    let answer = document.getElementById('answer');
    answer.innerHTML = `Quantidade de vogais: ${classOfWord.amountVowels()}`;
}
