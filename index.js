var http = new require('http');

var app = http.createServer(function(req, res) {
	res.write('Hello World!');
	res.end();
  });  

app.listen(3000);
console.log('API running on port 3000.');