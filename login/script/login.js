let user=document.querySelector("#txtUser")
let label_user= document.querySelector("#label_user")
let senha= document.querySelector("#txtpsw")
let label_senha= document.querySelector("#label_senha")
let login =document.querySelector("#logar")
let cadastro= document.querySelector("#cadastro")


cadastro.addEventListener("click" , new_login)
function new_login(){
window.location.href="new_login.html"
}