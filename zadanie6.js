//zadanie6
//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
function comparison(arr){
    let sensor=false;
    for (let i = 0; i < arr.length-1; i++){
        if(arr[i]===arr[i+1]){
            sensor=true;
        }else {
            sensor=false;
            break;
        }
    }
    return sensor;
}
let arr1=[1,2,false,true,NaN,"abv"];
let arr2=[false,false,false,false,false,false];
let arr3=[false,false,"false",false,false,false];
console.log(comparison(arr1));
console.log(comparison(arr2));
console.log(comparison(arr3));