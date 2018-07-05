var fs = require('fs');

// asynchronous
fs.readFile('readMe.txt', 'utf8', (err, data) => {

if (err) {
return console.log("Please fix all errors before continuing");
}

fs.writeFile('otherFile.txt', data, (err) => {
if (err) {
	return console.log("Error when writing data into file");
}	
console.log("Writing data into otherFile.txt");
	// data = data inside readMe.txt = Hello World
}); 

});

// synchronous 
var readMe = fs.readFileSync('readMe.txt', 'utf8');

fs.writeFileSync('newFile.txt', 'Node JS');
console.log("Writing data into newFile.txt");