//zadanie7
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее
function quantityOddEven(arr){
    let evenCount=0;
    let oddCount=0;
    let nullElement;
    for (let i=0;i<arr.length;i++){
        if (i==0){
            nullElement=arr[i]
        } else if (i%2==1){
            oddCount+=1;
        } else {
            evenCount+=1;
        }
    }
    console.log(`Исходный массив - ${arr}`);
    console.log(`Нулевой элемент - ${nullElement}`);
    console.log(`Количество четных элементов - ${evenCount}`);
    console.log(`Количество нечетных элементов - ${oddCount}`);
}
let arr1=["нулевой",2,4,6,8,null,12,14,16,18];
let arr2=[true,1,1,1,3,null,3,"3",false,18,0];
quantityOddEven(arr1);
quantityOddEven(arr2);