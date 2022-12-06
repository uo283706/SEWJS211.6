class MiGeolocalizacion {
    constructor (){
       this.origen;
       this.destino;
    }

    mostrarRuta(){
        let origen = "";
        origen = $('#origen').val();
        let destino  = "";
        destino = $('#destino').val();
        if(origen=="" || destino== ""){
            alert("Campos vacíos, rellena el campo de origen y destino para obetener la ruta");
            return;
        }
        this.generarRuta(origen,destino);
    }

    generarRuta(org,dst){

        let ruta =  "origin=" + org + "&destination=" + dst;

        $('iframe').remove();

        $('button').after("<iframe loading=\"lazy\" allowfullscreen src=\"https://www.google.com/maps/embed/v1/directions?" + 
        ruta +"&key=AIzaSyBxVlKPexsIaVFNvQzJcFsWE_gYQY0Hl88&mode=transit\"></iframe>");
    }
}
var ruta = new MiGeolocalizacion();