interface IList {
    id: number;
    name: string;
    bio: string
}

/**
 * List
 * class responsible for receiving an array of arrays and manipulating them by methods
 */
export default class List {
    private _list: IList[]
    constructor(list: IList[]) {
        this._list = list;
    }

    /**
     * returnName
     * This method returns the name searched by id.
     * 
     * @param id - the value to look for in the list.
     */
    public returnName(id: number): void {
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id){
                return alert(this._list[index].name);
            }
        }
        return alert("ID not found!");
    }

    /**
     * returnBio
     * This method returns the bio searched by id.
     * 
     * @param id - the value to look for in the list.
     */
    public returnBio(id: number): void{
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id){
                return alert(this._list[index].bio);
            }
        }
        return alert("ID not found!");
    }

    /**
     * deleteLine
     * This method delete an array from the object by id.
     * 
     * @param id - the value to look for in the list.
     */
    public deleteLine(id: number): void{
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id){
                this._list.splice(index, 1);
                return alert(`Line of id: ${id} deleted!`);
            }
        }
        return alert("Id not found!");
    }

    /**
     * changeBioOrName
     * This method changes the name or biography received by the user.
     * 
     * @param id - the value to look for in the list to change.
     * @param action - receives a value to be compared that will define which object's property will be changed.
     * @param text - the string that will replace the old value found;
     */
    public changeBioOrName(id: number, action: string, text: string): void{
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
                switch (action){
                    case 'name':
                        this._list[index].name = text; 
                        return alert(`Property: ${action} of id: ${id} changed to ${text}`);;
              
                    case 'biography':
                        this._list[index].bio = text;
                        return alert(`Property: ${action} of id: ${id} changed to ${text}`);;
                    default:
                        return alert("Property that you want to change not found!");
                }
            }
        }
        return alert("ID not found!");
    }
}

