//zadanie8
//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.
let myMap = new Map([
    ["Ivan", 400],
    ["Igor\'", 200],
    ["Egor", 0]
]);
for (let item of myMap){
    console.log(`Ключ - ${item[0]}, значение -  ${item[1]}km`);
}
//способ перебора с помощью forEach (нашел в интернете)
myMap.forEach(function(value,key) {
    console.log(`Ключ - ${key}, значение -  ${value}km`);
});