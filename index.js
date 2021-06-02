var express = require('express');
var app = express();
var control = require('./controller');
app.use((req, res, next)=>{
    console.log(Date.now());
    next();
})

app.get('/get', control.fetchdata);
// app.post('/post', control.postdata);
app.listen(3000, () => {
    console.log('...3000')
})