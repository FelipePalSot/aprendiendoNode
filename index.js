// console.log("Estamos aprendiendo Node con Felipe Palomino");

//Importar dependecias
const connection = require("./database/conection");
const express = require("express");
const cors = require("cors");

//Conexion a la base de datos
connection();

//Crear el servidor
const app = express();
const port = 3977;

//Configurar el cors
app.use(cors());

//Convertir los datos del body a objetos
app.use(express.json());

//Cargar rutas
const projectRoutes = require("./routes/project");

app.use("/api/project", projectRoutes);

//Crear endpoints de pruebas

app.get("/", (req, res) =>{
    console.log("La ruta raiz se ha llamando!!");

    return res.status(200).json([
        {
            curso:"Master en CSS3 Avanzado",
            url: "https://victorroblesweb.es/master-css-avanzado",
            profe: "Victor Robles WEB"
        },
         {
            curso:"Master en CSS EXTREMO",
            url: "https://victorroblesweb.es/master-css-extremo",
            profe: "Victor Robles WEB"
        }
    ])
})

app.get("/pruebitas", (req, res) =>{
    console.log("Se ha ejecutado mi endpoint de prueba!!");

    return res.status(200).send(`
        <section>
            <h1>Estoy aprendiendo Node</h1>
            <h2>con mi profe Victor</h2>
            <p>Esto es una prueba de ruta</p>
        </section>
        `)
})

//Poner el servidor a escuchar
app.listen(port, () =>{
    console.log(`Servidor está corriendo correctamente en el puerto ${port}`);
});