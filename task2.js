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