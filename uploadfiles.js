var http = require('http');
var formidable = require('formidable');

var fs = require('fs');
console.log("Server started : 8080 PORT");
http.createServer(function (req, res) {
    
  if (req.url == '/fileupload') {

    console.log("File upload function called");

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files){
      file =new File();
      
    console.log(file==files);
      var oldpath = files.file.path;
      var newpath = 'C:/Users/rsoudey/Desktop/NodeJs/' + files.file.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } /*else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }*/
}).listen(8080);