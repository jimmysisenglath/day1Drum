// //Load HTTP module
// const http = require("http");
// // const hostname = '127.0.0.1';
// const express = require('express')
// const app = express();
// const path = require('path');
// const router = express.Router();

// router.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/index-FINISHED.html'));
//     //__dirname : It will resolve to your project folder.
//   });

// //  router.get(funtion(req, res) {
// //      res.sendFile(path.join(__dirname+"/clap.wav"))
// //  });

// //add the router of css file
// app.use('/style.css', express.static("style.css"));
// app.use(express.static(__dirname+'/sounds'));

// app.use('/', router);
// app.listen(process.env.port || 3000);

// console.log('Running at Port 3000');


const http = require("http");
// // const hostname = '127.0.0.1';
const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();

var clap = 'sounds/clap.wav';

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index-FINISHED.html'));
    //__dirname : It will resolve to your project folder.
  });

//add the router of css file
app.use('/style.css', express.static("style.css"));

router.get('/sounds/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/sounds/' + req.params.id));
})

// router.get('/sounds/clap.wav', '/sounds/hihat.wav', '/sounds/boom.wav', '/sounds/kick.wav', '/sounds/openhat.wav', 
//         '/sounds/ride.wav', '/sounds/snare.wav','/sounds/tink.wav','/sounds/tom.wav', (req, res) => {
//   res.sendFile(path.join(__dirname + '/sounds/clap.wav'));
//   res.sendFile(path.join(__dirname + '/sounds/hihat.wav'));
//   res.sendFile(path.join(__dirname + '/sounds/boom.wav'));
//   res.sendFile(path.join(__dirname + '/sounds/kick.wav'));
//   res.sendFile(path.join(__dirname + '/sounds/openhat.wav'));
//   res.sendFile(path.join(__dirname + '/sounds/ride.wav'));
//   res.sendFile(path.join(__dirname + '/sounds/snare.wav'));
//   res.sendFile(path.join(__dirname + '/sounds/tink.wav'));
//   res.sendFile(path.join(__dirname + '/sounds/tom.wav'));
// })

app.use('/', router);
app.listen(process.env.port || 3000);

console.log("server is up bitch");