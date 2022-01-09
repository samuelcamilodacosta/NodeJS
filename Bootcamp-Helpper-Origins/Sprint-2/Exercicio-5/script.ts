import Words from "./class.js";

//Solution (a) only introduces the user to an example of how the amount vowels method works

let example: HTMLInputElement = document.querySelector('#wordExample') as HTMLInputElement; 
let classOfExample: Words = new Words(example.value);
let answerExample: HTMLElement = document.getElementById('answerExample') as HTMLElement;
answerExample.innerHTML = `Quantidade de vogais: ${classOfExample.amountVowels()}`;

// solution (b) 
const button: HTMLButtonElement = document.querySelector('#send') as HTMLButtonElement;
button.addEventListener('click', actionOnClick);

/**
 * actionOnClick
 * This function is responsible for validating the input and, if possible, 
 * printing the response
 * @param event 
 */
function actionOnClick(event: MouseEvent): void {
  
  event.preventDefault();
  let word: HTMLInputElement = document.querySelector('#word') as HTMLInputElement; 
  if(word.value==''){
    return alert("Por favor, informe a palavra a ser analisada.");
  }
  let classOfWord: Words = new Words(word.value)
  let answer: HTMLElement = document.getElementById('answer') as HTMLElement;
  answer.innerHTML = `Quantidade de vogais: ${classOfWord.amountVowels()}`;
}