const reproductorMusica = {

    estado : "Apagado",

    play : (cancion) => {
        if(this.estado === "Apagado"){
            console.log(`Reproduciendo ${cancion}`)
            //Cambiar estado
            this.estado = "Play"
        }else{
            console.log("Cancion En Ejecucion")
        }
    },

    stop : function(){
        if(this.estado === "Apagado"){
            console.log(`Reproductor Pausado`)
        }else{
            console.log("Apagando Reproductor")
            this.estado = "Apagado"
        }

    },

    getEstado : function(){
        return this.estado
    },

    setEstado : function(estado){
        this.estado = estado
    }

}

reproductorMusica.play("Himno Nacional")
reproductorMusica.play()
reproductorMusica.stop()
reproductorMusica.stop()