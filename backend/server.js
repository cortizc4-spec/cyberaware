const express = require("express");
const cors = require("cors");
const { db } = require("./firebase");

const {

collection,
addDoc

} = require("firebase/firestore");

const app = express();

app.use(cors());
app.use(express.json());

/* Base temporal */

let usuarios=[];

let simulaciones=[];

let resultados=[];

let reportes=[];

let administradores=[];


/* Ruta principal */

app.get("/",(req,res)=>{

res.send(
"Servidor CyberAware activo"
);

});


/* USUARIOS */

app.post("/usuarios", async (req,res)=>{

try{

const nuevoUsuario={

nombres:req.body.nombres,

correo:req.body.correo,

fecha_registro:new Date(),

rol:"usuario"

};

await addDoc(

collection(
db,
"usuarios"
),

nuevoUsuario

);

res.json({

mensaje:"Usuario guardado correctamente"

});

}

catch(error){

console.log(error);

res.status(500).json({

mensaje:"Error al guardar"

});

}

});


/* SIMULACIONES */

app.get("/simulaciones",(req,res)=>{

res.json(
simulaciones
);

});

app.post("/simulaciones",(req,res)=>{

const nuevaSimulacion={

id_simulacion:Date.now(),

nombre:req.body.nombre,

descripcion:req.body.descripcion,

nivel_riesgo:req.body.nivel_riesgo,

fecha_creacion:new Date()

};

simulaciones.push(
nuevaSimulacion
);

res.json(
nuevaSimulacion
);

});


/* RESULTADOS */

app.post("/resultados", async (req,res)=>{

try{

console.log("Datos recibidos:");
console.log(req.body);

const nuevoResultado={

id_usuario:req.body.id_usuario,

id_simulacion:req.body.id_simulacion,

puntaje:req.body.puntaje,

vulnerabilidad:req.body.vulnerabilidad,

fecha_resultado:new Date()

};

await addDoc(

collection(
db,
"resultados"
),

nuevoResultado

);

console.log(
"Guardado correctamente"
);

res.json({

mensaje:"Resultado guardado"

});

}

catch(error){

console.log(error);

res.status(500).json({

mensaje:"Error al guardar resultado"

});

}

});

/* REPORTES */

app.post("/reportes", async(req,res)=>{

try{

const nuevoReporte={

id_resultado:req.body.id_resultado,

observaciones:req.body.observaciones,

recomendaciones:req.body.recomendaciones,

fecha_reporte:new Date()

};

await addDoc(

collection(
db,
"reportes"
),

nuevoReporte

);

res.json({

mensaje:"Reporte guardado"

});

}

catch(error){

console.log(error);

res.status(500).json({

mensaje:"Error al guardar reporte"

});

}

});


/* ADMINISTRADORES */

app.get("/administradores",(req,res)=>{

res.json(
administradores
);

});

app.post("/administradores",(req,res)=>{

const nuevoAdmin={

id_admin:Date.now(),

nombres:req.body.nombres,

correo:req.body.correo,

rol:"administrador"

};

administradores.push(
nuevoAdmin
);

res.json(
nuevoAdmin
);

});


app.listen(5000,()=>{

console.log(
"Servidor activo puerto 5000"
);

});