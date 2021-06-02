var model = require('./model');
myfuncs = {
    fetchdata(req, res) {
        var json = model.getdata();
        const txt = 'Oh lord ' + json.name;
        res.send(txt)
    },
    postdata(req, res) {
        var json = model.getdata();
        json.name = 'shyam';
        const txt = json;
        res.send(txt)
    }
}
module.exports = myfuncs;

// exports.fetchdata = function(req,res){
//     res.send('ok')
// }