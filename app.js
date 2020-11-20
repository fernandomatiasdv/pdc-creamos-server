const http = require('http');

let server = 
http.createServer((req, res) => {
    res.writeHead( 200 , {
        'content-type' : 'application/json'
    });

 /*
    res.writeHead(404, {
        'content-type' : 'application/html'
    })
    */
    let salida = {
        nombre: "Fernando",
        edad : 35,
        url: req.url
    }

   // res.write("Página no encontrada");
    res.write(JSON.stringify(salida));
    res.end();
});

server.listen(8090);

console.log("El servidor esta corriendo en el puerto 8080");