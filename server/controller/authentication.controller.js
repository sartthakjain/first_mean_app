var mongoose=require('mongoose');
var User=require('../data_tables/users.js');


//saves data into db by signing up
module.exports.signup=function(req,resp){
  var user=new User(req.body);
  user.save();
  resp.json(req.body);
}


//checks the login credentials
module.exports.login=function(req,resp){
  User.find(req.body,function(err,results){
    if(err){
      console.log("Error Out");
    }
    if(results && results.length===1){
      var userData=results[0];
      resp.json({email:req.body.email,_id:userData._id});
    }


  });
}
