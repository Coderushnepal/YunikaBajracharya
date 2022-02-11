import http from 'http';
import fs from 'fs';

http.createServer((request, response) => {
    try {
        const file = fs.readFileSync('sample_text.txt');
        response.end(file.toString());
    }
    catch (err) {
        console.log("An error occured: ", err.message);
    }
}).listen(1234);

console.log(`Server at http://127.0.0.1:1234/`);