var Thoughts=require('../data_tables/thoughts.js');


module.exports.postThought=function(req,res){

  var thoughts=new Thoughts(req.body);
  thoughts.save();
  Thoughts.find({}).sort({date:-1}).exec(function(err,results){
    if(err){
      res.error(err);
    }else{
      res.json(results);
      console.log(res);
    }
  });
}


module.exports.getThoughts=function(req,res){
  Thoughts.find({}).sort({date:-1}).exec(function(err,results){
    if(err){
      res.error(err);
    }else{
      res.json(results);
    }
  });
}
