// Використовуючи конструкцію switch створіть зміннi login та password. 
// Після присвоєння їм одного значень повинні відбуватись дії згідно блок-схеми малюнку JS-task-2.PNG (малюнок додано). 
// Виводити в консоль

var login = prompt ("Whos's there?");
switch(login){
    case ("Admin"):{
        var password = prompt ("Password?");
        switch(password){
            case ("TheMaster"):{
                alert("Welcome!");
                
                break;
            }case (null):{
                alert("Canceled!");
                
                break;
        }default:{
                alert("Wrong password!");
                
                break;
        }
    }
    }case(null):{
        alert("Canceled!");
        
        break;
    }default:{
             alert("I dont't know you!");
        break;
        }
}
