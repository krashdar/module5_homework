//zadanie5
//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
let arr=[1,"add",2,23,false,"last"]
console.log(`Всего элементов в массиве -  ${arr.length}`);
arr.map(function(item,index,array){
    console.log(item);
});