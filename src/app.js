import express from "express"
import morgan from 'morgan'
import {join, dirname } from 'path'
import {fileURLToPath} from 'url'
import {engine} from 'express-handlebars'
import companyRoutes from "./routes/company.routes.js"

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url)); 

/* --setting (configurar servidor y de el manejador de plantillas,asignando puerto)-----*/
app.set("port", process.env.PORT || 3000)
app.set('views', join(__dirname,'views'));
app.engine('.hbs',engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts') ,
    partialsDir:  join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set ('view engine','.hbs');


app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})

app.use(companyRoutes);

app.use(express.static(join(__dirname,'public')))
export default app
