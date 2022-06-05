/*funciones para el login*/

const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
const boton = document.getElementById("btnIniciarSesion");
const resultado = document.querySelector(".resultado");

const errores={
        nombre: errorUsuario,
        clave: errorClave

};



function manejarErrores(errores){
    const key =Object.keys(errores);
    console.log(key);

}

const $form=document.querySelector("#frmSesion");

boton.addEventListener("click",(e)=>{
        e.preventDefault();
        
        manejarErrores(errores);

        //let error = verificarCampos();
        /*
        if(error[0]){
            resultado.innerHTML = error[1];
            resultado.classList.add("red");
            resultado.classList.remove("green");
        }else{
            resultado.innerHTML = error[1];
            resultado.classList.add("green");
            resultado.classList.remove("red");
        }
        */
})

const verificarCampos = ()=>{
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

