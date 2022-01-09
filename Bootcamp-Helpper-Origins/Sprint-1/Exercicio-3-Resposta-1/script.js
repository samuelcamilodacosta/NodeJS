"use strict";
const text = prompt("Enter list: ");
let list = text.split(", ");
let biggerValue = 0, smallerValue = 0, averageValue = 0, validator = 0, value, index;
for (index = 0; index < list.length; index++) {
    if (parseFloat(list[index]) || list[index] == "0") {
        (list[index] == "0") ? value = 0 : value = parseFloat(list[index]);
        if (index == 0) {
            smallerValue = value;
            biggerValue = value;
        }
        (biggerValue < value) ? biggerValue = value : biggerValue;
        (smallerValue > value) ? smallerValue = value : smallerValue;
        averageValue += value;
    }
    else {
        alert("This list is not numerical");
        validator = -1;
        break;
    }
}
if (validator != -1) {
    averageValue /= list.length;
    let array = [biggerValue, smallerValue, averageValue];
    alert(`The bigger value on the list: ${array[0]}.\nThe smaller value on the list: ${array[1]}.\nThe average value of the  list: ${array[2]}.`);
}
