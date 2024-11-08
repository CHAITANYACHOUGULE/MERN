const fs = require('fs');
const zlib = require('zlib');

// Paths for the input and output files
const inputFilePath = 'F:APL/file_operation_node/readfile.txt';
const outputFilePath = 'F:APL/file_operation_node/readfile.txt.gz';

// Create a readable stream for the input file
const readableStream = fs.createReadStream(inputFilePath);

// Create a writable stream for the output compressed file
const writableStream = fs.createWriteStream(outputFilePath);

// Create a Gzip object for compression
const gzip = zlib.createGzip();

// Pipe the readable stream into the Gzip object to compress,
// and then pipe the result into the writable stream to save the compressed data
readableStream
  .pipe(gzip)
  .pipe(writableStream)
  .on('finish', () => {
    console.log('File successfully compressed and saved.');
  })
  .on('error', (err) => {
    console.error('An error occurred:', err);
  });
