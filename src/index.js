//creacion server 
const express=require('express') //comonjs

const {engine}=require('express-handlebars')

const app= express()

//creacion de rtras

//---------------USE RESPONCE---------

// app.get('/',()=>{
//     res.send("bienvenidos")  
// })


// app.get('\dashboard',(req,res)=>{ 
//     res.send("dashboard principal")  
// })

// app.use((req,res)=>{
//     res.send("400 - not found")
//})


//--------------USE REQUEST------------

// //madar info en formato json
//app.use(express.json())

// //metodos: get>>obtener, post>> registrar,put>>actualizar,delete>>delete

// app.post('/register',(req,res)=>{

//     const { pedido,solicitado }=req.body //desestructuracion
//     res.send( `el pedido de ${pedido} es realizado por ${solicitado}`)

//     /*se hizo primero antes que el pedido
//     res.send()
//     console.log(req.body)*/
// })


//----------params----------------
// app.get('/pedido/:abc',(req,res)=>{
//     //console.log(req.params) (mi parametoes abc)
//     res.send(`el pedido es h${req.params.abc}`)

// })

//--------------query params--------------

// app.get('/search',(req,res)=>{
//      /*se hizo primero antes que el pedido
// //     res.send()
// //     console.log(req.query)*/
//     if(req.query.tipo==="sencilla"){
//         res.send("hamburguesa sencilla")
//     }else{
//         res.send("no existe rseultados")
//     }
// })
/*
app.get('/hamburguesa/simple',(req,res)=>{
    res.send("hamburguesa-simple")
})
console.log(__dirname)
//mostrar imagen
app.get('/hamburguesa/doble',(req,res)=>{
    res.sendFile('./descarga1.jpg',{
        root:__dirname
    })
})
 //carga archivos
app.get('/hamburguesa/doc',(req,res)=>{
    res.sendFile('./documento.docx',{
        root:__dirname
    })
})

//json
app.get('/hamburguesa/tipoAr',(req,res)=>{
    res.status(202).json({
      "tipo Ham": "triple",
      "extras": "NO"  
    })
 
})
*/

//utliza un motor de plantillas
// app.engine('handlebars', engine());

// //extencion
// app.set('view engine', 'handlebars');

// //ubicacion del directorii

// app.set('views', './src/views');


// app.get('/hamburguesa/vegana',(req,res)=>{
//     res.render('home')
    
// })

// app.get('/hamburguesa/about',(req,res)=>{
//     res.render('about')
    
// })

//- - - - - - - - - - - - -CLASE 9 - - - - - - - - - - - - 

app.use(express.json())
/*
//ruta publica
app.get('/entrada',(req,res)=>{
    res.render("entrada al local")
})
 //crea MIDDLEWARE
app.use((req,res,next)=>{
    const{email,password}=req.body
    if (email==="iveth@gmail.com" && password ==="123"){
        next()
    }else{
        res.send("usuario no permitido")
    }
 })
//ruta privada
app.get('/pedido',(req,res)=>{
    res.send(`bienbenido ${req.body.email} -listo para tomar su orden`)
    })

*/

app.get('/',(req,res)=>{
    res.send("landing page")
})

app.get('/',(req,res)=>{
    res.send("landing page")
})


//habilito puerto 
app.listen(3000)
console.log("web server ejecutanose en el puerto 3000")