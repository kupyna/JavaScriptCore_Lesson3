
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