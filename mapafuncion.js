let Equipo ={
    LOCATION_ID: "1160" , 
    SCENARIO:"FABRICA", 
    AREA:"ARMADO", 
    LOCAL:"A70-FLEXI 1", 
    LOCAL_DETAIL:"CF1", 
    NICKNAME:"A70-F1", 
    IS_MONITORED:"TRUE"
    };


    new Vue({
        el:'#app',
        data:{
           equipos:[],
        },
        methods:{
           getEquipos: function(){
               self=this;
               axios.get('https://eze323.github.io/ezequielirace/Output.json').then (response=>{
                   self.equipos = response.data;
                   console.log(self.equipos);
               })
           }
        },
        mounted:function(){
           this.getEquipos();
        }
   
   
    });

//console.log(Equipo);
/*
function crearListado(cant){

        const nodoPagina = document.querySelector('#mapa')

        for(i=0; i<cant;i++ ){
            
            const nuevoElemento = document.createElement('div');
            var id="item-"+(i+1);
            //console.log(id);
            //var a= document.createAttribute("id","'"+id+"'");
                        
            const valorElemento = document.createTextNode("A70-"+(i+1));
            
            
            nuevoElemento.setAttribute("id",id);
            nuevoElemento.appendChild(valorElemento);
            nodoPagina.appendChild(nuevoElemento);    
            
        }
    return 
}
*/

/*
const $mapaElementos= document.querySelector("#mapa");
$mapaElementos.onclick= function(e){
    let item = e.target.id;
    alert("hiciste click en el equipamento : "+item);
   

    document.getElementById("escenario").innerHTML= Equipo.SCENARIO;
    document.getElementById("area").innerHTML= Equipo.AREA;
    document.getElementById("local").innerHTML= Equipo.LOCAL;
    document.getElementById("nickname").innerHTML= Equipo.NICKNAME;


}


crearListado(160);

*/



