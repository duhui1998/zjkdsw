 var flag = 0;
 function start(){
 var text = document.getElementById("myDiv");
 if (!flag)
 {
 text.style.color = "red";
 text.style.background = "#0000ff";
 flag = 1;
 }else{
 text.style.color = "";
 text.style.background = "";
 flag = 0;
 }
 setTimeout("start()",500);
 }// JavaScript Document