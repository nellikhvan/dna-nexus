const fs = require('fs');

const fName = process.argv[2]
const idx = process.argv[3]
const CHUNK_SIZE = 10000000; // 10MB
const additionalFile = 'input_file_2.txt'

async function* generateChunks(filePath, size) {
    const sharedBuffer = Buffer.alloc(size);
    const stats = fs.statSync(filePath); // file details
    const fd = fs.openSync(filePath); // file descriptor
    let bytesRead = 0; // how many bytes were read
    let end = size;

    for(let i = 0; i < Math.ceil(stats.size / size); i++) {
        await readBytes(fd, sharedBuffer);
        bytesRead = (i + 1) * size;
        if(bytesRead > stats.size) {
            end = size - (bytesRead - stats.size);
        }
        yield sharedBuffer.slice(0, end);
    }
}

function readBytes(fd, sharedBuffer) {
    return new Promise((resolve, reject) => {
        fs.read(
            fd,
            sharedBuffer,
            0,
            sharedBuffer.length,
            null,
            (err) => {
                if(err) { return reject(err); }
                resolve();
            }
        );
    });
}

async function main() {
    if (fs.existsSync(additionalFile)) {
        fs.readFile(additionalFile,
            {encoding:'utf8'},
            (err, data) => {
                if(err)
                    return err
                else {
                    data = JSON.parse(data)
                    if (idx) {
                        const next = data[+idx+1]

                        const len = next - data[idx],
                            buff = Buffer.alloc(next - data[idx]),
                            pos = data[idx]+ +idx, offset = 0,
                            file = fName;

                        fs.open(file, 'r', (err, fd) => {
                            fs.read(fd, buff, 0, len, pos,
                                (err, bytes, buff) => {
                                    console.log(buff.toString());
                                });
                        });
                    }
                }

            });
    } else {
        let writeStream = fs.createWriteStream('input_file_2.txt')

        let arrStr = []
        let byte = 0;

        for await(const chunk of generateChunks(fName, CHUNK_SIZE)) {
            let splitLines = chunk.toString().split('\n')


            for (let i = 0; i < splitLines.length; i++) {
                if (splitLines[i].length > 0) {
                    arrStr.push(byte)
                    byte += splitLines[i].length
                }
            }

            writeStream.write(JSON.stringify(arrStr))
        }
        writeStream.end()
    }
}
main();


