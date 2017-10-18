var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/', (req, res) => {
  var num1 = req.body.number1;
  var num2 = req.body.number2;
  var result = num1 + num2;

  console.log(result);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ "result":result}));
})

var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('live on port 8080');
});
