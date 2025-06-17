const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, "../json/webhook.json");

function loadHooks() {
  try {
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, '[]', 'utf-8');
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log("attempt to load: ", filePath);
    console.log("data: " + data);
    return JSON.parse(data);
  } catch (err) {
    console.error("Could not load hooks, returning empty array.", err);
    return [];
  }
}

function saveHooks(hooks) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(hooks, null, 2), 'utf-8');
    console.log("attempt to save to file: " + filePath + "the data: \n" + hooks);
  } catch (err) {
    console.error("Failed to save hooks:", err);
  }
}

module.exports = {
  loadHooks,
  saveHooks
};
