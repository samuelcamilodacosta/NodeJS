"use strict";
function bigger(x, y) {
    (x < y) ? x = y : x;
    return x;
}
function smaller(x, y) {
    (x > y) ? x = y : x;
    return x;
}
function toPrintAnswer(validator, array) {
    if (validator != -1) {
        alert("The bigger value on the list: " + array[0] + ".\nThe smaller value on the list: " + array[1] + ".\nThe average value of the  list: " + array[2] + ".");
    }
    else {
        alert("This list is not numerical");
    }
}
function findBiggerSmallerAndAverageValue(list, validator) {
    var biggerValue = 0, smallerValue = 0, averageValue = 0, value = 0;
    list.forEach(function (arrayItem, index) {
        if (parseFloat(arrayItem) || arrayItem == "0") {
            (arrayItem == "0") ? value = 0 : value = parseFloat(arrayItem);
            if (index == 0) {
                smallerValue = value;
                biggerValue = value;
            }
            (biggerValue < value) ? biggerValue = value : biggerValue;
            (smallerValue > value) ? smallerValue = value : smallerValue;
            averageValue += value;
        }
        else {
            validator = -1;
        }
    });
    averageValue /= list.length;
    var array = [biggerValue, smallerValue, averageValue];
    toPrintAnswer(validator, array);
}
var text = prompt("Enter list: ");
var list = text.split(", ");
var validator = 0;
findBiggerSmallerAndAverageValue(list, validator);
