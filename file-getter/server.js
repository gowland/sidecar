const fs = require('fs');
const path = require('path');

// Configuration from environment variables with defaults
const OUTPUT_DIR = process.env.OUTPUT_DIR || path.join(__dirname, 'output');
const FILE_NAME = process.env.FILE_NAME || 'data.txt';
const FILE_PATH = path.join(OUTPUT_DIR, FILE_NAME);
const UPDATE_INTERVAL = parseInt(process.env.UPDATE_INTERVAL) || 15000; // milliseconds

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Possible strings - configurable via environment variable
const DEFAULT_STRINGS = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo'];
const strings = process.env.AVAILABLE_STRINGS 
  ? process.env.AVAILABLE_STRINGS.split(',').map(s => s.trim())
  : DEFAULT_STRINGS;

// Function to write random string to file
function writeRandomString() {
  const randomString = strings[Math.floor(Math.random() * strings.length)];
  fs.writeFileSync(FILE_PATH, randomString, 'utf8');
  console.log(`Updated file with: ${randomString}`);
}

// Initial write
writeRandomString();

// Log configuration on startup
console.log('File Getter Service Configuration:');
console.log(`- Output Directory: ${OUTPUT_DIR}`);
console.log(`- File Name: ${FILE_NAME}`);
console.log(`- Update Interval: ${UPDATE_INTERVAL}ms`);
console.log(`- Full File Path: ${FILE_PATH}`);

// Update at specified interval
setInterval(writeRandomString, UPDATE_INTERVAL);
