 new Vue({
        el:'#app',
        data:{
           //rutaDeAcceso:'https://eze323.github.io/ezequielirace/Localizacion.json',
           rutaDeAcceso:'Localizacion.json',
           equipo:[ {
            "LOCATION_ID": "1325",
            "SCENARIO": "FABRICA",
            "AREA": "CONTROL FINAL",
            "LOCAL": "AKRODYNE 3",
            "LOCAL_DETAIL": "AKRO 3",
            "NICKNAME": "AKRO 3",
            "IS_MONITORED": "VERDADERO",
            "DOCUMENTATION_PATH": ""
        }],
           equipos:[],
        },
        methods:{
           getEquipos: function(){
               self=this;
               axios.get(this.rutaDeAcceso).then (response=>{
                   self.equipos = response.data;
                   console.log(self.equipos);
               })
           },
           propiedadesItem: function(item) {
                self=this;
               //const equipo=self.equipos.find(self.equipos=>self.equipos.LOCATION_ID===item)
               const equipo = this.equipos.find( fruta => fruta.LOCATION_ID === item );
                console.log(equipo); 

                document.getElementById("escenario").innerHTML= equipo.SCENARIO;
                document.getElementById("area").innerHTML= equipo.AREA;
                document.getElementById("local").innerHTML= equipo.LOCAL;
                document.getElementById("nickname").innerHTML= equipo.NICKNAME;
           },

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


/*const $mapaElementos= document.querySelector("app");
$mapaElementos.onclick= function(e){
    let item = e.target.id;
    alert("hiciste click en el equipamento : "+item);

    document.getElementById("escenario").innerHTML= Equipo.SCENARIO;
    document.getElementById("area").innerHTML= Equipo.AREA;
    document.getElementById("local").innerHTML= Equipo.LOCAL;
    document.getElementById("nickname").innerHTML= Equipo.NICKNAME;


}

//crearListado(160);
*/



