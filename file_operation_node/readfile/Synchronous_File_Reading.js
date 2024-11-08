const fs = require('fs');

try {
  const data = fs.readFileSync('input1.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading the file:', err);
}



