import List from "./class.js";
const text = prompt("Enter list: ");
let list = new List(text.split(", "));
let answer;
//Checks if the list is numeric with method numericalList
if (list.numericalList() != -1) {
    //Applies a method on the variable list that returns a numeric array of three values to answer.
    answer = list.findBiggerSmallerAndAverageValue();
    alert(`The bigger value on the list: ${answer[0]}.\nThe smaller value on the list: ${answer[1]}.\nThe average value of the  list: ${answer[2]}.`);
}
else {
    alert("This list is not numerical!");
}
