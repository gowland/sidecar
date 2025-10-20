const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration for reading file-getter output
const FILE_GETTER_DIR = process.env.FILE_GETTER_DIR || path.join(__dirname, '..', 'file-getter', 'output');
const FILE_GETTER_NAME = process.env.FILE_GETTER_NAME || 'data.txt';
const FILE_GETTER_PATH = path.join(FILE_GETTER_DIR, FILE_GETTER_NAME);

// Function to read file-getter content
function readFileGetterContent() {
  try {
    if (fs.existsSync(FILE_GETTER_PATH)) {
      return fs.readFileSync(FILE_GETTER_PATH, 'utf8').trim();
    } else {
      return 'No data available';
    }
  } catch (error) {
    console.error('Error reading file-getter content:', error.message);
    return 'Error reading data';
  }
}

app.get('/', (req, res) => {
  const fileContent = readFileGetterContent();
  res.send(`Hello from Main App! Current data: ${fileContent}`);
});

app.listen(PORT, () => {
  console.log(`Main app running on port ${PORT}`);
  console.log(`Reading file-getter data from: ${FILE_GETTER_PATH}`);
});