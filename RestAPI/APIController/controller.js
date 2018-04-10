// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
//
// var product = mongoose.model('product');
// var feedbck = mongoose.model('feedback');
// var repo = mongoose.model('report');
// var sendJSONresponse = function(res, status, content) {
//   console.log("We are gere in apiController sendJSONResponse");
//   res.status(status);
//   res.json(content);
// };
//
// module.exports.front = function(req, res, next)
// {
//   var page = req.body.pageno;
//   // console.log("Page no on rest api is "+page);
//   var perpage = 10;
//   product.find({}).skip((perpage * page) - perpage).limit(perpage).exec(function(err, result){
//     product.count().exec(function(err, count){
//       if(err)
//       {
//         // console.log("There is some error to fetch front page data");
//         sendJSONresponse(res, 400, err);
//       }
//       else {
//         // console.log(resu);
//         var ob = {resu: result, current: page, pages: Math.ceil(count / perpage)};
//         // res.json(resu);
//         // console.log(ob);
//         // console.log("reached finally");
//         res.json(ob);
//         // console.log("Now we go from apiController to webController");
//       }
//     });
//   });
// }
//
// module.exports.key_info = function(req, res, next)
// {
//   var key = req.body.key;
//   // console.log("Here key is "+key);
//   product.find().where({key:key}).exec(function(error, result){
//     if(error)
//     {
//       sendJSONresponse(res, 406, error);
//     }
//     else {
//       res.json(result);
//     }
//   });
// }
//
// module.exports.filter = function(req, res, next)
// {
//   console.log("we are here in filter api");
//   var parr = req.body.pr;
//   var brand = req.body.brand;
//   // var type = req.body.type;
//   var scn = req.body.scn;
//   var screenresolution = req.body.screenresolution;
//   var cpu = req.body.cpu;
//   var cpuSpeed = req.body.cpuSpeed;
//   var cpuGeneration = req.body.cpuGeneration;
//   var rpm = req.body.rpm;
//   var hd = req.body.hd;
//   var ram = req.body.ram;
//   var graphics = req.body.graphics;
//   var features = req.body.features;
//   var os = req.body.os;
//   var battery = req.body.battery;
//   var weight = req.body.weight;
//
//   var parrl = parr.length;
//   var brandl = brand.length;
//   // var typel = type.length;
//   var scnl = scn.length;
//   var screenresolutionl = screenresolution.length;
//   var cpul = cpu.length;
//   var cpuSpeedl = cpuSpeed.length;
//   var cpuGenerationl = cpuGeneration.length;
//   var rpml = rpm.length;
//   var hdl = hd.length;
//   var raml = ram.length;
//   var graphicsl = graphics.length;
//   var featuresl = features.length;
//   var osl = os.length;
//   var batteryl = battery.length;
//   var weightl = weight.length;
//
//   console.log("price length is "+parrl);
//   console.log("brand length is "+brandl);
//   console.log("price "+parr);
//   console.log("brand "+brand);
//   // console.log("type "+type);
//   console.log("screen "+scn);
//   console.log("screenresolution "+screenresolution);
//   console.log("cpu "+cpu);
//   console.log("cpu speed "+cpuSpeed);
//   console.log("cpu generation "+cpuGeneration);
//   console.log("rpm "+rpm);
//   console.log("hd "+hd);
//   console.log("ram "+ram);
//   console.log("graphics "+graphics);
//   console.log("features "+features);
//   console.log("os "+os);
//   console.log("battery "+battery);
//   console.log("weight "+weight);
//   // var length = arr.length;
//   // var tp = typeof arr[0];
//   if((parrl == 0 && brandl == 0 && scnl == 0 && screenresolutionl == 0 && cpul == 0 && cpuSpeedl == 0 && cpuGenerationl == 0
//   && rpml == 0 && hdl == 0 && raml == 0 && graphicsl == 0 && featuresl == 0 && osl == 0 && batteryl == 0 && weightl == 0) ||
//   (parrl == 8 && brandl == 18 && scnl == 7 && screenresolutionl == 4 && cpul == 6 && cpuSpeedl == 4 && cpuGenerationl == 6
//   && rpml == 6 && hdl == 4 && raml == 5 && graphicsl == 4 && featuresl == 5 && osl == 10 && batteryl == 4 && weightl == 4 ))
//   {
//     console.log("API SUCCESS");
//     res.json({STATUS:"SUCCESS"});
//   }
//   else {
//     console.log("API SUCCESSOR");
//     res.json({STATUS:"SUCCESSOR"});
//   }
// }
//
// module.exports.feedbk = function(req, res, next)
// {
//   console.log("Here is in api feedback controller");
//   var name = req.body.name;
//   var email = req.body.email;
//   var contact = req.body.mob;
//   var feed = req.body.request;
//   console.log(name+" "+email+" "+contact+" "+feed);
//   feedbck.create({
//     name: name.trim(),
//     email: email.trim(),
//     contact: contact.trim(),
//     feedback: feed.trim()
//   },function(error, result){
//     if(error)
//     {
//       sendJSONresponse(res, 400, error);
//     }
//     else {
//       var tt = {status:"success"};
//       sendJSONresponse(res, 200, tt);
//     }
//   });
// }
//
// module.exports.reprt = function(req, res, next)
// {
//   console.log("here is in api report controller");
//   var name = req.body.name;
//   var email = req.body.email;
//   var contact = req.body.mob;
//   var subject = req.body.subject;
//   var description= req.body.request;
//   console.log(name+" "+email+" "+contact+" "+subject+" "+description);
// repo.create({
//   name: name.trim(),
//   email: email.trim(),
//   contact: contact.trim(),
//   subject: subject.trim(),
//   description: description.trim()
// },function(error, result){
//   if(error)
//   {
//     sendJSONresponse(res, 400, error);
//   }
//   else
//     {
//       var tt = {status:"success"};
//       sendJSONresponse(res, 200, tt);
//     }
// });
// }

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var product = mongoose.model('product');
var feedbck = mongoose.model('feedback');
var repo = mongoose.model('report');
var sendJSONresponse = function(res, status, content) {
  console.log("We are gere in apiController sendJSONResponse");
  res.status(status);
  res.json(content);
};

module.exports.front = function(req, res, next)
{
  var page = req.body.pageno;
  // console.log("Page no on rest api is "+page);
  var perpage = 10;
  product.find({}).skip((perpage * page) - perpage).limit(perpage).exec(function(err, result){
    product.count().exec(function(err, count){
      if(err)
      {
        // console.log("There is some error to fetch front page data");
        sendJSONresponse(res, 400, err);
      }
      else {
        // console.log(resu);
        var ob = {resu: result, current: page, pages: Math.ceil(count / perpage)};
        // res.json(resu);
        // console.log(ob);
        // console.log("reached finally");
        res.json(ob);
        // console.log("Now we go from apiController to webController");
      }
    });
  });
}

module.exports.key_info = function(req, res, next)
{
  var key = req.body.key;
  // console.log("Here key is "+key);
  product.find().where({key:key}).exec(function(error, result){
    if(error)
    {
      sendJSONresponse(res, 406, error);
    }
    else {
      res.json(result);
    }
  });
}

module.exports.key_i = function(req, res, next)
{
  var key = req.body.key;
  // console.log("Here key is "+key);
  product.find().where({key:key}).exec(function(error, result){
    if(error)
    {
      sendJSONresponse(res, 406, error);
    }
    else {
      res.json(result);
    }
  });
}

module.exports.filter = function(req, res, next)
{
  console.log("we are here in filter api");
  var parr = req.body.pr;
  var brand = req.body.brand;
  // var type = req.body.type;
  var scn = req.body.scn;
  var screenresolution = req.body.screenresolution;
  var cpu = req.body.cpu;
  var cpuSpeed = req.body.cpuSpeed;
  var cpuGeneration = req.body.cpuGeneration;
  var rpm = req.body.rpm;
  var hd = req.body.hd;
  var ram = req.body.ram;
  var graphics = req.body.graphics;
  var features = req.body.features;
  var os = req.body.os;
  var battery = req.body.battery;
  var weight = req.body.weight;

  var parrl = parr.length;
  var brandl = brand.length;
  // var typel = type.length;
  var scnl = scn.length;
  var screenresolutionl = screenresolution.length;
  var cpul = cpu.length;
  var cpuSpeedl = cpuSpeed.length;
  var cpuGenerationl = cpuGeneration.length;
  var rpml = rpm.length;
  var hdl = hd.length;
  var raml = ram.length;
  var graphicsl = graphics.length;
  var featuresl = features.length;
  var osl = os.length;
  var batteryl = battery.length;
  var weightl = weight.length;

  console.log("price length is "+parrl);
  console.log("brand length is "+brandl);
  console.log("price "+parr);
  console.log("brand "+brand);
  // console.log("type "+type);
  console.log("screen "+scn);
  console.log("screenresolution "+screenresolution);
  console.log("cpu "+cpu);
  console.log("cpu speed "+cpuSpeed);
  console.log("cpu generation "+cpuGeneration);
  console.log("rpm "+rpm);
  console.log("hd "+hd);
  console.log("ram "+ram);
  console.log("graphics "+graphics);
  console.log("features "+features);
  console.log("os "+os);
  console.log("battery "+battery);
  console.log("weight "+weight);
  // var length = arr.length;
  // var tp = typeof arr[0];
  if((parrl == 0 && brandl == 0 && scnl == 0 && screenresolutionl == 0 && cpul == 0 && cpuSpeedl == 0 && cpuGenerationl == 0
  && rpml == 0 && hdl == 0 && raml == 0 && graphicsl == 0 && featuresl == 0 && osl == 0 && batteryl == 0 && weightl == 0) ||
  (parrl == 8 && brandl == 18 && scnl == 7 && screenresolutionl == 4 && cpul == 6 && cpuSpeedl == 4 && cpuGenerationl == 6
  && rpml == 6 && hdl == 4 && raml == 5 && graphicsl == 4 && featuresl == 5 && osl == 10 && batteryl == 4 && weightl == 4 ))
  {
    console.log("API SUCCESS");
    res.json({STATUS:"SUCCESS"});
  }
  else {
    console.log("I am here with filtering 1");
    console.log(brand);
    product.find({$and:[{"specifications.full_specs.Processor.Brand": {$in: cpu}}, {brand:{$in: brand}}]}).exec(function(error, result){
      if(error){
        console.log("here is an error in filtering");
      }
      else {
        console.log(result);
        var l1 = result.length;
            console.log("Result after filtering is ");
            console.log(result);
            console.log(cpu);
                    console.log(l1);
            console.log("I am here with filtering 2");
            console.log("API SUCCESSOR");
            res.json({STATUS:"SUCCESSOR"});
      }
    });
    // console.log("result is ");
    // console.log(result);
  }
}

module.exports.search = function(req, res, next)
{
  // console.log("We are here in restAPI");
  var cap = req.body.dat;
  console.log("console "+cap);
  // var small = req.body.dat2;
  console.log(cap);
  product.find({name:{$regex:cap, $options:'si'}}).exec(function(error, result){
    if(error)
    {
      console.log("Here is some error in searching");
    }
    else {
      console.log("Success in searching");
      // console.log(result);
      var count = result.length;
      console.log(count);
      res.json(result);
      // res.json(STATUS:"SUCCESS");
    }
  });
}

module.exports.feedbk = function(req, res, next)
{
  console.log("Here is in api feedback controller");
  var name = req.body.name;
  var email = req.body.email;
  var contact = req.body.mob;
  var feed = req.body.request;
  console.log(name+" "+email+" "+contact+" "+feed);
  feedbck.create({
    name: name.trim(),
    email: email.trim(),
    contact: contact.trim(),
    feedback: feed.trim()
  },function(error, result){
    if(error)
    {
      sendJSONresponse(res, 400, error);
    }
    else {
      var tt = {status:"success"};
      sendJSONresponse(res, 200, tt);
    }
  });
}

module.exports.reprt = function(req, res, next)
{
  console.log("here is in api report controller");
  var name = req.body.name;
  var email = req.body.email;
  var contact = req.body.mob;
  var subject = req.body.subject;
  var description= req.body.request;
  console.log(name+" "+email+" "+contact+" "+subject+" "+description);
repo.create({
  name: name.trim(),
  email: email.trim(),
  contact: contact.trim(),
  subject: subject.trim(),
  description: description.trim()
},function(error, result){
  if(error)
  {
    sendJSONresponse(res, 400, error);
  }
  else
    {
      var tt = {status:"success"};
      sendJSONresponse(res, 200, tt);
    }
});
}
