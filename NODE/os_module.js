// Import the os module
const os = require('os');

// Get the system architecture
console.log("System Architecture:", os.arch());

// Get information about each CPU/core installed
console.log("CPU Info:", os.cpus());

// Get the number of CPUs
console.log("Number of CPU Cores:", os.cpus().length);

// // Get the system's endianness ('BE' or 'LE')
// console.log("Endianness:", os.endianness());

// Get free system memory in bytes
console.log("Free Memory:", os.freemem(), "bytes");

// Get total system memory in bytes
console.log("Total Memory:", os.totalmem(), "bytes");

// Get the hostname of the system
console.log("Hostname:", os.hostname());

// // Get the system's network interfaces
// console.log("Network Interfaces:", os.networkInterfaces());

// Get the operating system platform (e.g., 'linux', 'darwin', 'win32')
console.log("Platform:", os.platform());

// Get the operating system release version
console.log("OS Release:", os.release());

// Get the system's default temporary directory
console.log("Temp Directory:", os.tmpdir());

// Get the operating system type (e.g., 'Linux', 'Windows_NT')
console.log("OS Type:", os.type());

// Get the system's uptime in seconds
console.log("System Uptime:", os.uptime(), "seconds");

// Get user information
console.log("User Info:", os.userInfo());

// Get the system's home directory
console.log("Home Directory:", os.homedir());

// Get the system load average (on Unix systems)
console.log("Load Average (Unix only):", os.loadavg());

// Get the operating system version
console.log("OS Version:", os.version());

// // Get the priority of the specified process (defaults to the current process)
// console.log("Process Priority:", os.getPriority());

// // Get the operating system constants related to signals, errors, etc.
// console.log("OS Constants:", os.constants);
const { exec } = require('child_process');

// Execute the 'tasklist' command to list running processes
exec('tasklist', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing command: ${err}`);
    return;
  }

  // Output the list of running processes
  console.log("Running Processes:\n", stdout);
});

