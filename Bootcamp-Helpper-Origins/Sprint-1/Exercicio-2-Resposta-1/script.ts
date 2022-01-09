interface IList {
  id: number;
  name: string;
  bio: string
}

let list: IList[] = [
  { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
  { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
  { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
  { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

let valor: string;

//Returns name from ID
let id: number = parseInt(prompt("Enter ID to find the name: "));
for (let index: number = 0; index < list.length; index++) {
  if (list[index].id == id) alert(list[index].name);
}

//Returns biography from ID
id = parseInt(prompt("Enter ID to find the biography: "));
for (let index: number = 0; index < list.length; index++) {
  if (list[index].id == id) alert(list[index].bio);
}

//Delete row for ID
id = parseInt(prompt("Enter ID to delete the row: "));
for (let index: number = 0; index < list.length; index++) {
  if (list[index].id == id) list.splice(index, 1);
}

//Change biography or name from id
id = parseInt(prompt("Enter the ID you want to change: "));
let action: string = prompt("What you want to change, \"name\" or \"biography\"? ");
let text: string = prompt(`What you want to write on ${action} from ID ${id}?`);
for (let index: number = 0; index < list.length; index++) {
  if (list[index].id == id) {
    if (action == 'name') list[index].name = text;
    if (action == 'biography') list[index].bio = text;
  }
}