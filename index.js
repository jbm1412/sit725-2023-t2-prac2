var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response){
    
    response.render('index.html');
});

app.get('/multiplytwonumbers',function(request, response){
    let number1 = request.query.number1;
    let number2 = request.query.number2;
    let multiply = parseInt(number1) * parseInt(number2);
    let show = {statusCode: 200, message:'success', data:multiply};

    response.json(show);
});


app.listen(port, function(){
    console.log("Web server running at: http://localhost:3000");
    console.log("Type Ctrl+C to shut down the web server");
});