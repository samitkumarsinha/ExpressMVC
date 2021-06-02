# ExpressMVC
# model.js
module.exports = {  
    retval(){  
        data={"name" : "ram"};  
        return data;  
    },  
    setval(v){  
        data={"name" : v};  
        return data;  
    }  
}  
# controller.js  
var mymodel = require("./model");  
module.exports = {  
    fetchdata(req, res){  
        var v = mymodel.retval();  
        res.send(v);  
    },  
    postdata(req, res){  
        var v = mymodel.setval("hello");  
        res.send(v);  
    }  
}  
# wiki.js  
var mycontrol = require("./controller");  
const express = require('express');  
var router = express.Router();  
router.get('/', mycontrol.fetchdata);  
router.get('/about', mycontrol.postdata);  
module.exports = router;  
# app.js  
var express = require('express');  
var app = express();  
var wiki = require('./wiki.js');  
app.use('/wiki', wiki);  // or app.use('/', wiki);  
app.use('/wiki/about', wiki);  // or app.use(wiki);  
app.listen(3000);  



