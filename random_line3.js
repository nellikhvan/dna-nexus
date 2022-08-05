'use strict';

let fs = require("fs")
const fName = process.argv[2]
const idx = process.argv[3]
const additionalFile = 'input_file_2.txt'
let fsPromises = fs.promises;

let buffer = new Buffer.alloc(1024);

let data = 0;

async function start() {

    async function getIndex() {
        const readIdxLines = getData('input_file_2.txt')
            .split('\n')

        if (!data.length) {
            data = getData(process.argv[2])
        }


        //console.log(parseInt(readIdxLines[2])+1, parseInt(readIdxLines[3])+1)
        // console.log(data)
        // console.log(data.substring(parseInt(readIdxLines[2]+'\n'), parseInt(readIdxLines[3]+'\n')))
        // console.log(typeof data)
        // (readIdxLines[idx], readIdxLines[idx+1])
        // return data[readIdxLines[idx]


        //console.log(readIdxLines)
    }

    function getData(fName) {
        return fs
            .readFileSync(fName)
            .toString('UTF8')
    }

    if (fs.existsSync(additionalFile)) {
       await getIndex()
    } else {
        const readFLines = getData(process.argv[2])

        data = readFLines

        let writeStream = fs.createWriteStream('input_file_2.txt')

        let byte = 0;

        let splitLines = readFLines.split('\n')
        for (let i = 0; i < splitLines.length; i++) {
            if (splitLines[i].length > 0) {
                writeStream.write(byte.toString() + '\n')
                byte += splitLines[i].length
            }
        }

        writeStream.end()
        await getIndex()
    }
}

async function doRead() {
    let filehandle = null;

    try {
        // Using the filehandle method
        filehandle = await fsPromises
            .open('input_fil.txt', 'r+');

        // Calling the filehandle.read() method
        await filehandle.read(buffer,
            0, 4, 0);
    } finally {
        if (filehandle) {

            // Close the file if it is opened.
            await filehandle.close();
        }
    }
}

// start();
doRead();
