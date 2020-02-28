var btn1 = document.getElementById("knopje1");
var btn2 = document.getElementById("knopje2");
var btn3 = document.getElementById("knopje3");

var color1;
var color2;

btn1.onclick = function(){

    var input = document.getElementById("typen");
    color1 = input.value;   
}

btn2.onclick = function(){

    var input = document.getElementById("typen");
    color2 = input.value;   
}

btn3.onclick = function(){

    document.querySelector('body').style.background=color1;
    document.querySelector('h1').style.color=color2;

}




//document.querySelector('body').style.background=value;






