//zadanie2
//Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
function qualifier(x) {
    switch (typeof (x)) {
        case "number":
            console.log(x + ' - число');
            break;
        case "string":
            console.log(x + ' - строка');
            break;
        case "boolean":
            console.log(x + ' - логический тип');
            break;
        default:
            alert('Тип x не определен.');
    }
}
let x;
x=1;
qualifier(x);
x="dfaf";
qualifier(x);
x=false;
qualifier(x);