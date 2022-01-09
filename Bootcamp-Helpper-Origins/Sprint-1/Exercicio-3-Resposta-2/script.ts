function bigger(x: number, y: number): number {
  (x < y) ? x = y : x; return x;
}

function smaller(x: number, y: number): number {
  (x > y) ? x = y : x; return x;
}

function toPrintAnswer(validator: number, array: number[]): void{
  if(validator != -1){
    alert (`The bigger value on the list: ${array[0]}.\nThe smaller value on the list: ${array[1]}.\nThe average value of the  list: ${array[2]}.`);
  }else{
    alert("This list is not numerical");
  }
}

function findBiggerSmallerAndAverageValue(list: string[], validator: number): void {
  let biggerValue: number = 0, smallerValue: number = 0, averageValue: number = 0, value: number = 0;
  list.forEach((arrayItem, index) => {
    if (parseFloat(arrayItem) || arrayItem == "0") {
      (arrayItem == "0") ? value = 0 : value = parseFloat(arrayItem);
      if(index == 0){
        smallerValue = value;
        biggerValue = value;
      }
      (biggerValue < value) ? biggerValue = value : biggerValue;
      (smallerValue > value) ? smallerValue = value : smallerValue;
      averageValue += value;
    }else{
      validator = -1;
    }
  });
  averageValue /= list.length;
  let array: number[] = [biggerValue, smallerValue, averageValue];
  toPrintAnswer(validator, array);
}

const text: string = prompt("Enter list: ") as string;
let list: string[] = text.split(", ");
let validator: number = 0;

findBiggerSmallerAndAverageValue(list, validator);