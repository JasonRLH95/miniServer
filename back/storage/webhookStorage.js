const fs = require('fs');
const path = require('path');

const filePath = path.resolve("../json/webhooks.json");

function loadHooks() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Could not load hooks, returning empty array.");
    return [];
  }
}

function saveHooks(hooks) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(hooks, null, 2), 'utf-8');
  } catch (err) {
    console.error("Failed to save hooks:", err);
  }
}

module.exports = {
  loadHooks,
  saveHooks
};
