// .Використовуючи конструкцію if-else створіть зміннi login та password. 
// Після присвоєння їм одного значень повинні відбуватись дії згідно блок-схеми малюнку JS-task-2.PNG (малюнок додано). 
// Виводити в консоль

var login = prompt ("Who's there?");
if (login == "Admin"){
    var password = prompt ("Password?");
    if(password == "TheMaster"){
        alert("Welcome!");
    }else if(password == null){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
}else if(login == null){
    alert("Canceled");
}else {
    alert("I dont't know you!")
}
