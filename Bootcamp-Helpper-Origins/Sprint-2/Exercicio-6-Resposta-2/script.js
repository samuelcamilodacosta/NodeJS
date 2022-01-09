import List from "./class.js";
//Creating an instance of the class List;
let list = new List([
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
]);
// 6 (a)
//getting the id by prompt, transforming the id string into int and calling the method returnName.
let idSearchName = prompt("Enter ID to search name: ");
alert("Name: " + list.returnName(parseInt(idSearchName)));
// 6 (b)
//getting the id by prompt, transforming the id string into int and calling the method returnBio.
let idSearchBio = prompt("Enter ID to search bio: ");
alert("Biography: " + list.returnBio(parseInt(idSearchBio)));
// 6 (c)
//getting the id by prompt, transforming the id string into int and calling the method deleteById.
let idToDeleteRow = prompt("Enter ID to delete row: ");
list.deleteById(parseInt(idToDeleteRow));
// 6 (d)
// getting the id, the property that want change and the text to replace by prompt
// transforming the id string into int and calling the method changeBioOrName.
let idToAction = prompt("Enter ID to change item: ");
let actionToDo = prompt("Which property do you want to change, \"name\" or \"biography\"? ");
let textToWrite = prompt(`What you want to write on ${actionToDo}?`);
list.changeBioOrName(parseInt(idToAction), actionToDo, textToWrite);
