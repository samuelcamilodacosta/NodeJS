/**
 * Person
 * This class represents a Person with an id, a name and a biography.
 */
class Person {
    /**
     * class constructor
     * @param id - Person id
     * @param name - Person name
     * @param bio - Person biography
     */
    constructor(id, name, bio) {
        this._id = id;
        this._name = name;
        this._bio = bio;
    }
    /**
    * getArray
    * This method returns the Person information
    *
    * @returns an array of strings with the Person name and bio
    */
    getArray() {
        return [this._name, this._bio];
    }
    /**
     * showList
     * This method takes a string array and creates a table in html with the array.
     *
     * @param array - An array of string.
     */
    showList(array) {
        let tbody = document.querySelector('tbody');
        let tr = document.createElement('tr');
        for (let property in array) {
            let td = document.createElement('td');
            td.innerHTML = array[property];
            tr.appendChild(td);
        }
        ;
        tbody.appendChild(tr);
    }
}
/**
 * AdaLovelace
 * This class represents the Person Ada Lovelace.
 */
export class AdaLovelace extends Person {
    /**
     * creatorAda
     * This method answer who is the creator of the programming language Ada
     *
     * @returns an array string with property name and the answer of who created the language.
     */
    creatorAda() {
        return [this._name, "A linguagem foi originalmente produzida por uma equipe liderada por Jean Ichbiah. O nome Ada vem de Ada Lovelace, a mulher conhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina na história da computação."];
    }
}
/**
 * AlanTuring
 * This class represents the person Alan Turing.
 */
export class AlanTuring extends Person {
}
/**
 * NikolaTesla
 * This class represents the person Nikola Tesla.
 */
export class NikolaTesla extends Person {
}
/**
 * NicolauCopernico
 * This class represents the person Nicolau Copérnico.
 */
export class NicolauCopernico extends Person {
}
