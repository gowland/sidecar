const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'output');
const FILE_PATH = path.join(OUTPUT_DIR, 'data.txt');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Possible strings
const strings = [
  'Alpha',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo'
];

// Function to write random string to file
function writeRandomString() {
  const randomString = strings[Math.floor(Math.random() * strings.length)];
  fs.writeFileSync(FILE_PATH, randomString, 'utf8');
  console.log(`Updated file with: ${randomString}`);
}

// Initial write
writeRandomString();

// Update every 15 seconds
setInterval(writeRandomString, 15000);
