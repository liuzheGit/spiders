let fs = require('fs');
let path = require('path');

fs.readdir("./images",function(err, files){
   if (err) {
       return console.error(err);
   }
   var arr = files.filter((item)=>{return item.length === 3});
   console.log(arr);
   for (var i = arr.length - 1; i >= 0; i--) {
   	myCopy(arr[i]);
   }
});

var myCopy = function(dir){
	console.log("打开"+ dir +"目录");
	fs.readdir("./images/" + dir,function(err, files){
	   if (err) {return console.error(err);}
	   console.log('开始批量复制');
	   files = files.filter(name => name.length > 10);
	    for (var i = files.length - 1; i >= 0; i--) {
	    	copyImg(dir, files[i]);
	    }
	});
}




var copyImg = function(dir, fileName){
	let newName = fileName.substring(6);
	let sourceFile = path.join(__dirname+'/images/' + dir + '/', fileName);
	let destPath = path.join(__dirname,'/images/' + dir + '/', newName);
	let readStream = fs.createReadStream(sourceFile);
	let writeStream = fs.createWriteStream(destPath);
	readStream.pipe(writeStream);
	console.log(fileName + '复制为'+ newName +'完成!')
}





