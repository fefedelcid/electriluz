const express = require("express");
const app = express();
const port = 8080;


// Motor de plantillas
app.set('views', __dirname + '/views'); // especifico el directorio de las plantillas
app.set('view engine', 'ejs'); // registro el motor de plantillas

app.use(express.static(__dirname + '/public')); // configuro archivos estaticos


// ================================
// Páginas
// ================================

app.get('/', (req, res)=>{
	res.render('index')
});

app.use((req, res, next)=>{
	res.status(404).render('404')
})



app.listen(port, () => {
	console.log(__dirname)
  console.log(`App listening at http://localhost:${port}`)
});
