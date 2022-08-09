const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fileReader(fileName);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fileUpdater(fileName,fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fileDeleter(fileName);
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
