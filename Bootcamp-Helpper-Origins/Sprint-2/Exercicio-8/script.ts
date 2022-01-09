import PersonFactory from "./personFactory.js";

const buttonGeniusList: HTMLButtonElement = document.querySelector('#buttonGeniusList') as HTMLButtonElement;
buttonGeniusList.addEventListener('click', answerGeniusList);

/**
 * answerGeniusList
 * Create an instance of PersonFactory and active methods to work with a list data and 
 * manipulate the show and hide of buttons
 * 
 * @param event - MouseEvent
 */
function answerGeniusList(event: MouseEvent): void{
  event.preventDefault();
  let list: PersonFactory = new PersonFactory;
  list.clearTable();
  list.getList([
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
  ]);
  showButtonWhoCreatesAda();
};

const buttonWhoCreatesAda: HTMLButtonElement = document.querySelector('#buttonWhoCreatesAda') as HTMLButtonElement;
buttonWhoCreatesAda.addEventListener('click', answerAda);

/**
 * answerAda
 * Create an instance of PersonFactory and active methods to answer who creates Ada Language and 
 * manipulate the show and hide of buttons.
 * 
 * @param event - MouseEvent
 */
function answerAda(event: MouseEvent): void{
  event.preventDefault();
  let creatorAda = new PersonFactory;
  creatorAda.clearTable();
  creatorAda.getList([
    { "id": 1, "name": "Ada Lovelace", "bio": "?", "creatorAda": "sim"},
  ]);
  buttonShowGeniusList();
};

/**
 * buttonShowGeniusList
 * Change display of buttonWhoCreatesAda to hide the button and buttonGeniusList to show the button.
 */
function buttonShowGeniusList(): void{
  let buttonAda: HTMLElement = document.getElementById('buttonWhoCreatesAda') as HTMLElement;
  let buttonGenius: HTMLElement = document.getElementById('buttonGeniusList') as HTMLElement;
  buttonAda.style.display = 'none';
  buttonGenius.style.display = 'flex';
}

/**
 * showButtonWhoCreatesAda 
 * Change display of buttonWhoCreatesAda to show the button and buttonGeniusList to hide the button.
 */
function showButtonWhoCreatesAda(): void{
  let buttonAda: HTMLElement = document.getElementById('buttonWhoCreatesAda') as HTMLElement;
  let buttonGenius: HTMLElement = document.getElementById('buttonGeniusList') as HTMLElement;
  buttonAda.style.display = 'flex';
  buttonGenius.style.display = 'none';
}