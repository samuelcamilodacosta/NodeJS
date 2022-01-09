"use strict";
let list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function changeName(list, text, index) {
    list[index].name = text;
}
function changeBio(list, text, index) {
    list[index].bio = text;
}
function returnName(list, id) {
    const index = list.findIndex((item) => { return item.id === id; });
    if (index != -1)
        return list[index].name;
}
function returnBio(list, id) {
    const index = list.findIndex((item) => { return item.id === id; });
    if (index != -1)
        return list[index].bio;
}
function deleteById(list, id) {
    const index = list.findIndex((item) => { return item.id === id; });
    if (index != -1) {
        list.splice(index, 1);
        alert(`Deleted line ID: ${id}.`);
    }
}
function changeBioOrName(list, action, text, id) {
    const index = list.findIndex((item) => { return item.id === id; });
    if (index != -1) {
        if (action == 'name') {
            changeName(list, text, index);
            return alert("Name changed.");
        }
        if (action == 'biography') {
            changeBio(list, text, index);
            return alert("Biography changed.");
        }
    }
}
let idSearchName = prompt("Enter ID to search name: ");
alert("Name: " + returnName(list, parseInt(idSearchName)));
let idSearchBio = prompt("Enter ID to search bio: ");
alert("Biography: " + returnBio(list, parseInt(idSearchBio)));
let idToDeleteRow = prompt("Enter ID to delete row: ");
deleteById(list, parseInt(idToDeleteRow));
let idToAction = prompt("Enter ID to change item: ");
let actionToDo = prompt("Which item do you want to change, \"name\" or \"biography\"? ");
let textToWrite = prompt(`What you want to write on ${actionToDo} from ID ${idToAction}?`);
changeBioOrName(list, actionToDo, textToWrite, parseInt(idToAction));
