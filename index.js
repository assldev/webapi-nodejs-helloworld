var http = new require('http');

var app = http.createServer(function(request, response) {
	console.dir(request.param)

	if (request.method == 'POST') {
		console.log('POST')
		var body = ''
		request.on('data', function(data) {
			body += data
			console.log('Partial body: ' + body)
		})
		request.on('end', function() {
			console.log('Body: ' + body)
			response.writeHead(200, {'Content-Type': 'text/html'})
			response.end(`Hello POST! \n ${body}`)
		})
	} else {
		console.log('GET')
		response.writeHead(200, {'Content-Type': 'text/html'})
		response.end(`Hello GET!`)
	}
});  

app.listen(3000);
console.log('API running on port 3000.');