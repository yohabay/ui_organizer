const fs = require('fs');
const path = require('path');

const dataDir = './data';

fs.readdirSync(dataDir).forEach(file => {
  if (file.endsWith('-templates.ts')) {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove duplicate tier lines
    content = content.replace(/(\s+tier: "(free|premium)",)\s*\1/gm, '$1');

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('All template files fixed');