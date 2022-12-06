let user = document.querySelector("#txtUser");//PEGA VALOR DO USUARIO
let label_user = document.querySelector("#label_user");
    
let nome_user = document.querySelector("#txtNameUser");//PEGA O VALOR DO NOME
let label_name = document.querySelector("#userName");

let psw = document.querySelector("#txtpsw");//PEGA O VALOR DA SEBGA 
let label_psw = document.querySelector("#label_senha");

let check_psw = document.querySelector("#txtconfir");//VERIFICA SE A SENHA ESTA COMO NO CAMPO "SENHA"
let label_check = document.querySelector("#label_confirm");
    
    
var new_acont = document.querySelector("#new")
// new_acont.addEventListener("click", check_info)

user.addEventListener('keyup', ()=>{
if(user.value.length < 5){
    label_user.setAttribute('style' , 'color:red')
    label_user.innerHTML= "*UTILIZE NO MINIMO 5 CARACTER*"
}else{
    label_user.setAttribute('style' , 'color:green')
    label_user.innerHTML = "USUÁRIO ✔"
}
})
nome_user.addEventListener("keyup" , ()=>{
    if(nome_user.value.length < 3){
        label_name.setAttribute('style' , 'color:red')
        label_name.innerHTML= "NOME *"
    }else{
        label_name.setAttribute('style' , 'color:green')
        label_name.innerHTML = "NOME ✔"
    }
})
psw.addEventListener('keyup' , ()=>{
    if(psw.value.length < 8){
        label_psw.setAttribute('style' , 'color:red')
        label_psw.innerHTML= "CAMPOS DEVE CONTER LETRAS E NUMEROS"
    }else{
        label_psw.setAttribute('style' , 'color:green')
        label_psw.innerHTML="SENHA ✔"
    }
})
