interface IList {
  id: number;
  name: string;
  bio: string;
}

let list: IList[] = [
  { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
  { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
  { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
  { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

function deleteById(list: IList[], id: number): void {
  const index: number = list.findIndex((item) => { return item.id === id});
  if (index != -1) list.splice(index, 1);
  else alert("ID not found")
}

function changeBio(list: IList[], text: string, id: number): void {
  const index: number = list.findIndex((item) => { return item.id === id});
  if (index != -1) list[index].bio = text;
}

function changeName(list: IList[], text: string, id: number): void {
  const index: number = list.findIndex((item) => { return item.id === id});
  if (index != -1) list[index].name = text;
}

/*  Function to print values on object
    forEach to separate a array of object in objects,
    After for ... in to separate objects in each fields,
    lastly, join data in html */

function showTable(list: IList[]){
  let tbody: HTMLTableSectionElement = document.querySelector('tbody') as HTMLTableSectionElement;
  tbody.innerHTML = '';
  list.forEach((object: any) => {
    let tr: HTMLTableRowElement = document.createElement('tr') as HTMLTableRowElement;
    for (let property in object) {
      let td: HTMLTableCellElement = document.createElement('td') as HTMLTableCellElement;
      td.innerHTML = object[property];
      tr.appendChild(td);
    };
    tbody.appendChild(tr);
  });
}

//manipulating form view by button
function showEdit() {
  cleanFormEdit();
  let styleEdit: HTMLElement = document.getElementById('place-to-show-edit') as HTMLElement;
  let styleDelete: HTMLElement = document.getElementById('place-to-show-delete') as HTMLElement;
  if (styleEdit.style.display == 'table') {
    styleEdit.style.display = 'none';
    styleDelete.style.display = 'none';
  } else {
    styleEdit.style.display = 'table';
    styleDelete.style.display = 'none';
  }
}

//manipulating form view by button
function showDelete() {
  cleanFormDelete();
  let styleEdit: HTMLElement = document.getElementById('place-to-show-edit') as HTMLElement;
  let styleDelete: HTMLElement = document.getElementById('place-to-show-delete') as HTMLElement;
  if (styleDelete.style.display == 'table') {
    styleDelete.style.display = 'none';
    styleEdit.style.display = 'none';
  } else {
    styleDelete.style.display = 'table';
    styleEdit.style.display = 'none';
  }
}

function cleanFormEdit(){
  if((document.getElementById('id') as HTMLInputElement).value!=''){
    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('bio') as HTMLInputElement).value = '';
    (document.getElementById('id') as HTMLInputElement).value = '';
  }
}

function cleanFormDelete(){
  if((document.getElementById('idDelete') as HTMLInputElement).value!=''){
    (document.getElementById('idDelete') as HTMLInputElement).value = '';
  }
}

showTable(list);

const buttonChange: HTMLButtonElement = document.querySelector('#change') as HTMLButtonElement;
//Event to change values
buttonChange.addEventListener('click', function (e: MouseEvent) {
  e.preventDefault();
  let name: string = (document.getElementById('name') as HTMLInputElement).value;
  let id: number = parseInt((document.getElementById('id') as HTMLInputElement).value);
  let bio: string = (document.getElementById('bio') as HTMLInputElement).value;
  const index: number = list.findIndex((item) => { return item.id === id});
  if (index==-1) alert("ID not found!");
  if (name) changeName(list, name, id);
  if (bio) changeBio(list, bio, id);
  cleanFormEdit();
  showTable(list);
});

const buttonDelete: HTMLButtonElement = document.querySelector('#delete') as HTMLButtonElement;
//Event to delete values
buttonDelete.addEventListener('click', function (e: MouseEvent) {
  e.preventDefault();
  let id: number = parseInt((document.getElementById('idDelete') as HTMLInputElement).value);
  deleteById(list, id);
  cleanFormDelete();
  showTable(list);
});