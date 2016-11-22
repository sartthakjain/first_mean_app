var express=require("express");
var path=require("path");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var multipart=require("connect-multiparty");
var multipartMiddleware= multipart();

var app=express();
var authenticationController=require("./server/controller/authentication.controller.js");
var profileController=require("./server/controller/profile.controller.js");

mongoose.connect('mongodb://localhost:27017/first_mean_app');
app.use(bodyParser.json());
app.use(multipartMiddleware);

//authentication
app.post('/api/user/signup',authenticationController.signup);
app.post('/api/user/login',authenticationController.login);

//profile
app.post('/api/profile/editPhoto',multipartMiddleware,profileController.updatePhoto);
app.post('/api/profile/updateUsername',profileController.updateUsername);
app.post('/api/profile/updateBio',profileController.updateBio);


app.use("/app",express.static(__dirname+"/app"));
app.use("/node_modules",express.static(__dirname+"/node_modules"));
app.get('/',function(req,resp){
  resp.sendFile('index.html',{root: path.join(__dirname,'/')});
});


app.listen(8080,function engine(request,response)
{
  console.log("Listening to port 8080");
});
