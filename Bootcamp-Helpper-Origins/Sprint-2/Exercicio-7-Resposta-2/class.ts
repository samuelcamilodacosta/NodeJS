
/**
 * List
 * The class can receive any list, it has methods for validating and manipulating the list;
 */
export default class List {
    private _list: string[];
    private _averageValue: number;
    private _validator: number;
    constructor(list: string[]) {
        this._list = list;
        this._averageValue = 0;
        this._validator = 0;
    }

    /**
     * numericalList
     * This method validates if the list is numeric.
     * 
     * @returns 0 if list is numeric or -1  if not.
     */
    numericalList(): number{
        this._list.forEach((arrayItem) => (parseFloat(arrayItem) || arrayItem == "0") ? parseFloat(arrayItem) : this._validator = -1);
        return this._validator;
    }
    
    /**
     * findBiggerSmallerAndAverageValue
     * This method finds the biggest, smallest, and average value, adds on array and return the array.
     * 
     * @returns array - an array with the bigger, smaller and average on list.
     * 
     * @example 
     * Here's an example with list = [0, 1, 2, 3];
     * 
     * //Prints [3, 0, 1.5];
     * console.log(list.findBiggerSmallerAndAverageValue());
     */
    findBiggerSmallerAndAverageValue(): number[]{
        let biggerValue: number = parseFloat(this._list[0]), 
            smallerValue: number = parseFloat(this._list[0]),
            value: number;
            this._list.forEach((arrayItem, index) => {
                (arrayItem == "0") ? value = 0 : value = parseFloat(arrayItem);
                if(index == 0){
                  smallerValue = value;
                  biggerValue = value;
                }
                (biggerValue < value) ? biggerValue = value : biggerValue;
                (smallerValue > value) ? smallerValue = value : smallerValue;
                this._averageValue += value;
            });
        this._averageValue /= this._list.length;
        let array = [biggerValue, smallerValue, this._averageValue];
        return array;
    }
}

