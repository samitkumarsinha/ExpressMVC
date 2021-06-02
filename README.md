# ExpressMVC
# Model.js
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
# Controller.js  
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
# Wiki.js  
var mycontrol = require("./controller");  
const express = require('express');  
var router = express.Router();  
router.get('/', mycontrol.fetchdata);  
router.get('/about', mycontrol.postdata);  
module.exports = router;  

