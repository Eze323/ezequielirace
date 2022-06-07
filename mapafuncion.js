 new Vue({
        el:'#app',
        data:{
           //rutaDeAcceso:'https://eze323.github.io/ezequielirace/Localizacion.json',
           rutaDeAcceso:'Localizacion.json',
           equipo:[],
           equipos:[],
        },
        methods:{
           getEquipos: function(){
               self=this;
               
               axios.get(this.rutaDeAcceso).then (response=>{
                   self.equipos = response.data;
                self.equipo = self.equipos;
               console.log(equipos);
               //    console.log(self.equipos);
               })
           },
           propiedadesItem: function(item) {
                const resultado = this.equipos.find( fruta => fruta.LOCATION_ID === item );
                console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }
              //this.equipo=this.equipos.filter(item);
               //console.log(this.equipo);
                
            alert("hiciste click en el equipamento : "+item);
            /*document.getElementById("escenario").innerHTML= this.equipos[item].SCENARIO;
            document.getElementById("area").innerHTML= Equipo.AREA;
            document.getElementById("local").innerHTML= Equipo.LOCAL;
            document.getElementById("nickname").innerHTML= Equipo.NICKNAME;           */
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



