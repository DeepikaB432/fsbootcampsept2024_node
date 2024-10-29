const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url == '/'){
        response.write('This is home page');
    } else if(request.url == '/contact'){
        response.write('This is contact page');
    } else if(request.url == '/about'){
        response.write('This is about page');
    } else {
        response.write('Page not found');
    }

    //task 
    //implement the about page
    response.end();
});

server.listen(3000, () => {
    console.log('listening on port 3000');
});