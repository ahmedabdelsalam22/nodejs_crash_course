const http = require('http');

const myServer = http.createServer((request, response)=>{

    const url = request.url;

    if(url==='/home'){
        response.write('<h1> hello from server home <h1>');
    }
    else if(url==='/cart'){
        response.write('<h1> hello from server cart <h1>');
    }


});

myServer.listen(1010,()=>{
    console.log('server is running on port 8080')
});