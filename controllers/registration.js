var connection = require('../config');
module.exports.register=function(req,res){

console.log("Request params : ",req.body);
    // var today = new Date();
    var users={
        "user_name":req.body.user_name,
        "parent_id":req.body.parent_id,
        "salary":req.body.salary,
    }
    connection.query('INSERT INTO employee SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:0,
            message:'there are some error with query'
        })
      }else{
        connection.query('SELECT * FROM employee', function (error, results, fields) {
              res.json({
                status:1,
                data:results,
                message:'user registered sucessfully'
            })
        });
      }
    });
}