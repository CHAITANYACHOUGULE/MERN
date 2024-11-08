const { exec } = require('child_process');

// Execute 'tasklist' to list all processes on Windows
exec('tasklist /v', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing command: ${err}`);
    return;
  }

  console.log("Task Name\tPID\tSession Name\tUser Name\n" + stdout);
  const processes = stdout.split('\n').slice(3); // Skip the first three header lines

  // Separate user-level and system-level processes
  const userLevelProcesses = [];
  const systemLevelProcesses = [];

  processes.forEach((processLine) => {
    const processDetails = processLine.trim().split(/\s+/);
    const [taskName, pid, sessionName, userName] = processDetails;

    if (sessionName === 'Services' || sessionName === 'System') {
      systemLevelProcesses.push({ taskName, pid, sessionName, userName });
    } else if (sessionName) {
      userLevelProcesses.push({ taskName, pid, sessionName, userName });
    }
  });

  // Display user-level and kernel-level processes
  console.log("\nUser-Level Processes:");
  console.table(userLevelProcesses);

  console.log("\nSystem-Level (Kernel) Processes:");
  console.table(systemLevelProcesses);
});
