const mongoose =  require("mongoose");

const connection = async() =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/bd-portafolio");
        console.log("Conectado a la BD: bd-portafolio");
    }catch(error){
        console.log(error);

        throw new Error("No se ha podido establecer la conexion a la bbdd");
    }
}

module.exports = connection;