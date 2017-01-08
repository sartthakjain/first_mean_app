var mongoose=require('mongoose');
var User=require('../data_tables/users.js');


//saves data into db by signing up
module.exports.signup=function(req,resp){
  var user=new User(req.body);
  user.save();
  resp.json(req.body);
}

module.exports.checkUsername=function(req,resp){
  User.find({email:req.body.email},function(err,results){
    if(err){
      console.log("error in checkUsername");
    }else{
      if(results && results.length===1){
        resp.json({isValid:true});
        console.log("email validated");
      }else{
            resp.json({isValid:false});
            console.log("email invalidated");
          }
    }
  })
}



//checks the login credentials
module.exports.login=function(req,resp){
  User.find({email:req.body.email,password:req.body.password},function(err,results){

    if(err){
      console.log("Error Out");
    }
    if(results && results.length===1){
      var userData=results[0];
      resp.json({email:req.body.email,
                _id:userData._id,
                username:userData.username,
                image:userData.image});
                console.log(resp.body);
    }else{
      console.log("incorrect password");
    }


  });
}
