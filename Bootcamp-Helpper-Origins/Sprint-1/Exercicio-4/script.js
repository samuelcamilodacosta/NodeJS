"use strict";
let list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function deleteById(list, id) {
    const index = list.findIndex((item) => { return item.id === id; });
    if (index != -1)
        list.splice(index, 1);
    else
        alert("ID not found");
}
function changeBio(list, text, id) {
    const index = list.findIndex((item) => { return item.id === id; });
    if (index != -1)
        list[index].bio = text;
}
function changeName(list, text, id) {
    const index = list.findIndex((item) => { return item.id === id; });
    if (index != -1)
        list[index].name = text;
}
/*  Function to print values on object
    forEach to separate a array of object in objects,
    After for ... in to separate objects in each fields,
    lastly, join data in html */
function showTable(list) {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    list.forEach((object) => {
        let tr = document.createElement('tr');
        for (let property in object) {
            let td = document.createElement('td');
            td.innerHTML = object[property];
            tr.appendChild(td);
        }
        ;
        tbody.appendChild(tr);
    });
}
//manipulating form view by button
function showEdit() {
    cleanFormEdit();
    let styleEdit = document.getElementById('place-to-show-edit');
    let styleDelete = document.getElementById('place-to-show-delete');
    if (styleEdit.style.display == 'table') {
        styleEdit.style.display = 'none';
        styleDelete.style.display = 'none';
    }
    else {
        styleEdit.style.display = 'table';
        styleDelete.style.display = 'none';
    }
}
//manipulating form view by button
function showDelete() {
    cleanFormDelete();
    let styleEdit = document.getElementById('place-to-show-edit');
    let styleDelete = document.getElementById('place-to-show-delete');
    if (styleDelete.style.display == 'table') {
        styleDelete.style.display = 'none';
        styleEdit.style.display = 'none';
    }
    else {
        styleDelete.style.display = 'table';
        styleEdit.style.display = 'none';
    }
}
function cleanFormEdit() {
    if (document.getElementById('id').value != '') {
        document.getElementById('name').value = '';
        document.getElementById('bio').value = '';
        document.getElementById('id').value = '';
    }
}
function cleanFormDelete() {
    if (document.getElementById('idDelete').value != '') {
        document.getElementById('idDelete').value = '';
    }
}
showTable(list);
const buttonChange = document.querySelector('#change');
//Event to change values
buttonChange.addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let id = parseInt(document.getElementById('id').value);
    let bio = document.getElementById('bio').value;
    const index = list.findIndex((item) => { return item.id === id; });
    if (index == -1)
        alert("ID not found!");
    if (name)
        changeName(list, name, id);
    if (bio)
        changeBio(list, bio, id);
    cleanFormEdit();
    showTable(list);
});
const buttonDelete = document.querySelector('#delete');
//Event to delete values
buttonDelete.addEventListener('click', function (e) {
    e.preventDefault();
    let id = parseInt(document.getElementById('idDelete').value);
    deleteById(list, id);
    cleanFormDelete();
    showTable(list);
});
