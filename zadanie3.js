//zadanie3
//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH"
let str="Hello";
let str1=str.split("");
str1.reverse();
str1.join("");
console.log(str1);