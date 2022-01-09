/**
 * List
 * class responsible for receiving an array of arrays and manipulating them by methods.
 */
export default class List {
    constructor(list) {
        this._list = list;
    }
    /**
     * returnName
     * This method returns the name searched by id.
     *
     * @param id - the value to look for in the list.
     *
     * @returns - the name searched or string saying id not found.
     */
    returnName(id) {
        const index = this._list.findIndex((item) => item.id === id);
        if (index != -1)
            return this._list[index].name;
        else
            return "ID not found!";
    }
    /**
     * returnBio
     * This method returns the bio searched by id.
     *
     * @param id - the value to look for in the list.
     *
     * @returns the bio searched or string saying id not found.
     */
    returnBio(id) {
        const index = this._list.findIndex((item) => item.id === id);
        if (index != -1)
            return this._list[index].bio;
        else
            return "ID not found!";
    }
    /**
     * deleteById
     * This method delete an array from the object by id.
     *
     * @param id - the value to look for in the list.
     */
    deleteById(id) {
        const index = this._list.findIndex((item) => { return item.id === id; });
        if (index != -1) {
            this._list.splice(index, 1);
            alert(`Deleted line ID: ${id}.`);
        }
        else
            alert("ID not found!");
    }
    /**
     * changeBioOrName
     * This method call the method to change the name or biography received by the user.
     *
     * @param id - the value to look for in the list to change.
     * @param action - if the action is validated, it calls the method responsible for the change.
     * @param text - the string that will replace the old value found.
     */
    changeBioOrName(id, action, text) {
        const index = this._list.findIndex((item) => item.id === id);
        if (index != -1) {
            switch (action) {
                case 'name':
                    this.changeName(index, text);
                    return alert("Name changed.");
                case 'biography':
                    this.changeBio(index, text);
                    return alert("Biography changed.");
                default:
                    return alert("Property that you want to change not found!");
            }
        }
        else
            return alert("ID to change not found!");
    }
    /**
     * changeName
     * This method change the value of property name for text.
     *
     * @param index - represents the index of the list that should have its property changed
     * @param text - string to be added to the name property.
     */
    changeName(index, text) {
        this._list[index].name = text;
    }
    /**
     * changeBio
     * This method change the value of property bio for text.
     *
     * @param index - represents the index of the list that should have its property changed
     * @param text - string to be added to the bio property.
     */
    changeBio(index, text) {
        this._list[index].bio = text;
    }
}
