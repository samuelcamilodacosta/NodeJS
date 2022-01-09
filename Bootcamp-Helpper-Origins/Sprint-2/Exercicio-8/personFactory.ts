import IList from "./interface.js";
import {AdaLovelace} from "./class.js";
import {AlanTuring} from "./class.js";
import {NikolaTesla} from "./class.js";
import {NicolauCopernico} from "./class.js";

/**
 * PersonFactory
 * This class has Factory to create a certain person and methods to receive a list of data, and clear the body of a table.
 */
export default class PersonFactory{
    
    /**
     * getPerson
     * The method takes an interface and creates a person according to the data received in the list.
     * 
     * @param list - an interface with received data.
     */
    public getPerson(list: IList): void{
        switch(list.id){
            case 1:
                let ada: AdaLovelace =  new AdaLovelace(list.id, list.name, list.bio);
                (list.creatorAda == 'sim') ? ada.showList(ada.creatorAda()) : ada.showList(ada.getArray());
                break;
            case 2:
                let alan: AlanTuring = new AlanTuring(list.id, list.name, list.bio);
                alan.showList(alan.getArray());
                break;
            case 3:
                let nikola: NikolaTesla = new NikolaTesla(list.id, list.name, list.bio);
                nikola.showList(nikola.getArray());
                break;
            case 4:
                let nicolau: NicolauCopernico = new NicolauCopernico(list.id, list.name, list.bio);
                nicolau.showList(nicolau.getArray());
                break;
            default:
                throw new Error('Invalid ID');
        }
    }

    /**
     * getList
     * This method takes an array and divides it into Interface value rows and calls the getPerson to act.
     * 
     * @param array - Is an array with data from one or more interfaces.
     */
    public getList(array: IList[]): void{
        array.forEach(row => this.getPerson(row));
    }

    /**
     * clearTable
     * This method clears the table body.
     */
    public clearTable(): void{
        let tbody = document.querySelector('tbody') as HTMLTableSectionElement;
        tbody.innerHTML = '';
    }
}