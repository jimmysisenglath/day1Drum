//Load HTTP module
const http = require("http");
// const hostname = '127.0.0.1';
const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index-FINISHED.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router of css file
app.use('/style.css', express.static("style.css"));
app.use(express.static(__dirname + '/sounds'));

router.get('/sounds/clap.wav', (req, res) => {
  res.sendFile(path.join(__dirname + '/sounds/clap.wav'));
})

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');