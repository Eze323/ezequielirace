/*funciones para el login*/

const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
const boton = document.getElementById("btnIniciarSesion");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
        e.preventDefault();
        let error = verificarCampos();

        if(error[0]){
            resultado.innerHTML = error[1];
            resultado.classList.add("red");
        }else{
            resultado.innerHTML = error[1];
            resultado.classList.add("green");
        }
})

const validarCampos = ()=>{
    let error=[];
    if(usuario.value!='Admin' || clave.value!='123456'  ){
        error[0]=true;
        error[1]="El Usuario o Clave son incorrectos";
        
    }else{
        error[0]=false;
        error[1]="Iniciando sesión";
    }
    return error;
}

function clearInterval(){
    alert("hola mundo");
}