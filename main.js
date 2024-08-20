let Menuitem=document.querySelector("nav");
function menutoggle()
{
    Menuitem.classList.toggle("d-dis")

}

let largeimg=document.querySelector(".productimg");

let smallimg=document.querySelectorAll(".smallimage");
console.log(smallimg);

for(let i=0;i<smallimg.length;i++)
{
smallimg[i].getAttribute("src");
console.log(smallimg[i].src);
smallimg[i].onclick=function()
{
largeimg.src=smallimg[i].src;


}


}

let login=document.querySelector(".login-form");
let regin=document.querySelector(".register-form");
let indicator=document.querySelector(".indicator");
console.log(indicator);

function Login(){
    regin.style.transform="translateX(300px)";
    login.style.transform="translateX(300px)";
    indicator.style.transform="translateX(0px)";


}

function regist(){

regin.style.transform="translateX(0px)";
login.style.transform="translateX(0px)";
indicator.style.transform="translateX(100px)";

}
const body=document.querySelector("body");
const changeback=document.querySelector(".logo button ");
changeback.onclick=function(){
body.classList.toggle('backs');



}