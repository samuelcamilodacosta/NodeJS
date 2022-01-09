const text: string = prompt("Enter list: ") as string;
let list: string[]= text.split(", ");

let biggerValue: number = 0,
  smallerValue: number = 0,
  averageValue: number = 0,
  validator: number = 0,
  value: number,
  index: number;

for (index = 0; index < list.length; index++) {
  if (parseFloat(list[index]) || list[index] == "0") {
    (list[index] == "0") ? value = 0 : value = parseFloat(list[index]);
    if(index == 0){
      smallerValue = value;
      biggerValue = value;
    }
    (biggerValue < value) ? biggerValue = value : biggerValue;
    (smallerValue > value) ? smallerValue = value : smallerValue;
    averageValue += value;
  }else{
    alert("This list is not numerical");
    validator = -1;
    break;
  }
}

if(validator != -1){
  averageValue /= list.length;
  let array: number[] = [biggerValue, smallerValue, averageValue];
  alert (`The bigger value on the list: ${array[0]}.\nThe smaller value on the list: ${array[1]}.\nThe average value of the  list: ${array[2]}.`);
}
