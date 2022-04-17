import fs from 'fs';
import http from 'http';

const server = http.createServer((request, response) => {
try {
    const file = fs.readFileSync('sample.txt');

    const newfile = file.toString().split(' ').join('-'); // buffer -> string type

    // send the response body
    response.end(newfile);
} 
catch (err) {
    console.log('Error reading file', err.message);
}

});

const PORT = 8848;

server.listen(PORT);

console.log(`server running at: http://127.0.0.1:${PORT}/`); 