var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {

    if(req.url=="/welcome"){
        // console.log(res);
        res.statuCode=200;
        res.setHeader('content-type','text/plain');
        res.write("Welcome to Dominos!");
        res.end();
    
    }else if(req.url=="/contact"){
        const body={
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            };

        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.write(JSON.stringify(body));
            res.end();
    }else{
        res.statuCode=404;
        res.end();
    }
    
}
httpServer.listen(8081);

// module.exports = httpServer;