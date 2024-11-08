const fs = require('fs');

// Asynchronously writing to a file
fs.writeFile('output.txt', 'This is some content!', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  console.log('File has been written successfully.');
});
