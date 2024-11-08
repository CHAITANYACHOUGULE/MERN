// Import the path module
const path = require('path');

// Define a sample file path for demonstration
const filePath = 'F:/APL/NODE/index.html';

// Get the directory name from a path
console.log("Directory Name:", path.dirname(filePath));

// Get the base name (file name with extension) from a path
console.log("Base Name:", path.basename(filePath));

// Get the file extension from a path
console.log("File Extension:", path.extname(filePath));

// Parse a file path into an object (root, dir, base, ext, name)
console.log("Parsed Path Object:", path.parse(filePath));

// Format a path object into a string
const parsedPath = path.parse(filePath);
console.log("Formatted Path:", path.format(parsedPath));

// Join multiple path segments into a single path
console.log("Joined Path:", path.join('/APL', 'NODE', 'index.js'));

// Normalize a path (resolves '..' and '.' segments)
console.log("Normalized Path:", path.normalize('F:/APL/NODE/index.html'));

// Check if a path is absolute
console.log("Is Absolute Path?", path.isAbsolute(filePath));





// Get the platform-specific path delimiter (':' on POSIX, ';' on Windows)
console.log("Path Delimiter:", path.delimiter);



// Get the platform-specific path separator ('/' on POSIX, '\\' on Windows)
console.log("Path Separator:", path.sep);

// Create a path by combining directory name and file name using the separator
console.log("Combined Path with Separator:", ['users', 'admin', 'project', 'index.js'].join(path.sep));

// Return the file name without the extension
console.log("File Name without Extension:", path.basename(filePath, path.extname(filePath)));
