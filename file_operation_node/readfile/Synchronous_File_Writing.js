const fs = require('fs');

try {
  fs.writeFileSync('output1.txt', 'This is some content!');
  console.log('File has been written successfully.');
} catch (err) {
  console.error('Error writing to the file:', err);
}
