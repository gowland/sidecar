const express = require('express');
const os = require('os');
const app = express();
const PORT = 3001;

app.get('/health', (req, res) => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    memory: {
      total: Math.round(totalMemory / 1024 / 1024), // MB
      free: Math.round(freeMemory / 1024 / 1024),   // MB
      used: Math.round(usedMemory / 1024 / 1024),   // MB
      percentUsed: Math.round((usedMemory / totalMemory) * 100)
    }
  });
});

app.listen(PORT, () => {
  console.log(`Health-check sidecar running on port ${PORT}`);
});
