'use strict';

let fs = require("fs")
let es = require("event-stream")
const fName = process.argv[2]
const idx = process.argv[3]
let lines = []
try {
    const readFLines = fs
        .createReadStream(fName)
        .pipe(es.split(/\s+/))
        .pipe(es.mapSync((line) => {
            lines.push(line)
        }))
        .on('error', function(err){
            console.log('Error while reading file.', err);
        })
        .on('end', function(){
            console.log(lines[idx])
        })
} catch (e) {
    console.error(e.message)
}



