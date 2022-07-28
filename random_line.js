'use strict';

let fs = require("fs")
const fName = process.argv[2]
const idx = process.argv[3]

try {
    const readFLines = fs
        .readFileSync(fName)
        .toString('UTF8')
        .split('\n')

    console.log(readFLines[idx])
} catch (e) {
    console.error(e.message)
}



