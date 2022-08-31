var attempt = 3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "regalia" && password == "regalia123"){
alert ("ورود شما موفقانه انجام شد !");
window.location = "sefaresh.html"; 
return false;
}

else{
attempt --;
alert(" پسورد یانام کاربر اشتباه است شما برای ورد  "+attempt+" چانس دیگردارید.;");
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}