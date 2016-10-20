var express=require("express");
var path=require("path");
var app=express();

app.use("/login",express.static(__dirname+"/login"));
app.use("/bower_components",express.static(__dirname+"/bower_components"));
app.get('/',function(req,resp){
  resp.sendFile('login.html',{root: path.join(__dirname,'/login/')});
});


app.listen(8080,function engine(request,response)
{
  console.log("Listening to port 8080");
});
