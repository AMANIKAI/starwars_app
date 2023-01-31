const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000,function() {
    console.log("listening on 3000")
})

// All your handlers here
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
    console.log('Hellooo!')
})

app.post('/quotes', (req, res) => {
    console.log('Hellooo!')
})