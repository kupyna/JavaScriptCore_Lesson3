// Написати скрипт в, в якому:
// 1. Використовуючи конструкцію if..else, в якому змінна отримує значення, а потім виводить в консоль:
// 1, якщо значення більше нуля,
// -1, якщо значення менше нуля,
// 0, якщо значення дорівнює нулю.

var number = prompt("Set any number");
if(number < 0){
    alert("-1");
}else if(number > 0){
    alert("1");
}else if(number == 0){
    alert("0")
}
