const fs = require('fs');
const path = require('path');

const tokenFile = path.join(__dirname, 'token.json');

// Save the token and record the expiration time
function save(tokenData) {
  const now = Date.now();
  const expires_in = tokenData.expires_in || 1800; 
  tokenData.expires_at = now + expires_in * 1000;

  fs.writeFileSync(tokenFile, JSON.stringify(tokenData, null, 2));
}

function load() {
  if (fs.existsSync(tokenFile)) {
    return JSON.parse(fs.readFileSync(tokenFile));
  }
  return {};
}

module.exports = { save, load };
