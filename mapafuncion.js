

function crearListado(cant){

        const nodoPagina = document.querySelector('#mapa')
        
            


        for(i=0; i<cant;i++ ){
            
            const nuevoElemento = document.createElement('div');
            var id="seleccion-"+(i+1);
            //console.log(id);
            //var a= document.createAttribute("id","'"+id+"'");
                        
            const valorElemento = document.createTextNode("A70-"+(i+1));
            
            
            nuevoElemento.setAttribute("id",id);
            nuevoElemento.appendChild(valorElemento);
            
            nodoPagina.appendChild(nuevoElemento);    
            
        }
    return 
}



const $mapaElementos= document.querySelector("#mapa");
$mapaElementos.onclick= function(){
    alert("hiciste click");
}


crearListado(160);