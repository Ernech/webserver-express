const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Ernesto',
        edad: 23,
        email: 'ernesto.vilela.montero@gmail.com',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    // res.write('Hello World!!!');
    res.end();
}).listen(8080);

console.log('Escuchando el pueto 8080');