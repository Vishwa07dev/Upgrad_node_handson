const http = require('http');
const fs = require('fs');
const { off } = require('process');
const { RSA_NO_PADDING } = require('constants');
const PORT = 3000
const fsp = require('fs').promises;


/**
 * Reading the content from the files in  Node.js
 */
const greetMessage = fs.readFileSync('./files/file1.txt');
console.log(greetMessage.toString());

const welcomeMessage = fs.readFileSync('./files/file2.txt');
console.log(welcomeMessage.toString());




/**
 * Handling different types of routes
 */

const server = http.createServer(async (req, res) => {
    if (req.url == '/hello') {
        res.end(greetMessage);
    } else if (req.url == '/welcome') {
        res.end(welcomeMessage);

        /**
         *   Reading the data asynchronously 
         *  */
    } else if (req.url == '/objective') {

        const objectiveMessage = await fsp.readFile('./files/file3.txt', "binary");
        console.log(objectiveMessage);
        res.end(objectiveMessage);
    } else {
        res.writeHead(404);
        res.end("You are trying to hit wrong url. Correct options are /hello |  /welcome | /objective");
    }
});

server.listen(3000, () => {
    console.log(`Server started on ${PORT}`);
});

/**
 * Discuss challenges with the above small application in the session
 */