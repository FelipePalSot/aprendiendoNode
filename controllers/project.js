const Project = require("../models/project")

const save = (req, res) =>{

    //Recibo datos
    let body = req.body;

    //Validar datos
    if(!body.name || !body.description || !body.state){
        return res.status(400).send({
            status: "error",
            message: "Faltan datos por enviar"
        });
    }

    //Crear objeto
    let projectoToSave = new Project(body);

    //Guardo el objeto de la bd
    projectoToSave.save().then(project =>{

        if(!project){
            return res.status(404).send({
            status: "error",
            message: "El proyecto no se ha guardado correctamente",
            error
        })
        }

        return res.status(200).send({
            status: "success",
            project
        })

    }).catch(error =>{
        return res.status(500).send({
            status: "error",
            message: "Error al guardar el proyecto",
            error
        })
    })

    //Devolver respuesta

    return res.status(200).send({
        message: "Probando controlador",
        body
    });
}

module.exports = {
    save
}