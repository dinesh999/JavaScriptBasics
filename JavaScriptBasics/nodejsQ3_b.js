var request=require("request")
var fs=require("fs")

// request.get will trigger a response event.On response event

request.get("http://www.google.com").on('response',function(response){
    console.log(response.statusCode);
}).on('error',function(err){
    console.log(err);
}).pipe(fs.createWriteStream('g.html'))
