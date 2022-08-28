import express from 'express'
import router from './routers/index.js'
import db from './config/db.js'

const app = express()

//Conectar la base de datos
db.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error => console.log(error))

//Definir puerto
const port = process.env.PORT || 4000

//Habilitar PUG
app.set('view engine', 'pug')

//obtener el año actual
app.use((req, res, next) =>{
    const year = new Date()

    res.locals.actuarYear = year.getFullYear()
    res.locals.nombreSitio = 'Agencia de Viajes'

    return next()
})

//Definir la carpeta publica
app.use(express.static('public'))

//agregar body  parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

//Agregar Router
app.use('/', router)

app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
})