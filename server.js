var express=require("express");
var path=require("path");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var multipart=require("connect-multiparty");
var multipartMiddleware= multipart();

var app=express();
var authenticationController=require("./server/controller/authentication.controller.js");
var profileController=require("./server/controller/profile.controller.js");
var newsfeedsController=require("./server/controller/newsfeeds.controller.js");
var usersFollowController=require("./server/controller/usersFollow.Controller.js");

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/first_mean_app');
app.use(bodyParser.json());
app.use(multipartMiddleware);

//authentication
app.post('/api/user/signup',authenticationController.signup);
app.post('/api/user/login',authenticationController.login);
app.post('/api/user/login/checkUsername',authenticationController.checkUsername);

//profile
app.post('/api/profile/editPhoto',multipartMiddleware,profileController.updatePhoto);
app.post('/api/profile/updateUsername',profileController.updateUsername);
app.post('/api/profile/updateBio',profileController.updateBio);

//newsfeeds ,tweets --- We call it thoughts
app.post('/api/newsfeeds/post',newsfeedsController.postThought);
app.get('/api/newsfeeds/get',newsfeedsController.getThoughts);

//userFollow
app.get('/api/usersFollow/get',usersFollowController.getUsers);


app.use("/app",express.static(__dirname+"/app"));
app.use("/node_modules",express.static(__dirname+"/node_modules"));
app.use("/css",express.static(__dirname+"/css"));
app.use("/uploads",express.static(__dirname+"/uploads"));
app.get('/',function(req,resp){
  resp.sendFile('index.html',{root: path.join(__dirname,'/')});
});


app.listen(8080,function engine(request,response)
{
  console.log("Listening to port 8080");
});
