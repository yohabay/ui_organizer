const fs = require('fs');
const path = require('path');

const dataDir = './data';

fs.readdirSync(dataDir).forEach(file => {
  if (file.endsWith('-templates.ts')) {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove duplicate tier lines
    content = content.replace(/(\s+tier: "free",)\s*\1/gm, '$1');
    content = content.replace(/(\s+tier: "premium",)\s*\1/gm, '$1');

    // If no tier, add it
    content = content.replace(/(\s+tags: \[.*?\],)\s*$/gm, (match, tags) => {
      const lines = content.split('\n');
      const lineIndex = lines.findIndex(line => line.includes(match.trim()));
      if (lineIndex === -1) return match;

      // Check if tier already exists in the next lines
      let hasTier = false;
      for (let i = lineIndex + 1; i < lines.length && i < lineIndex + 5; i++) {
        if (lines[i].includes('tier:')) {
          hasTier = true;
          break;
        }
        if (lines[i].includes('}')) break;
      }
      if (hasTier) return match;

      // Find the id line above
      let idLine = '';
      for (let i = lineIndex; i >= 0; i--) {
        if (lines[i].includes('id:')) {
          idLine = lines[i];
          break;
        }
      }

      const tier = idLine.includes('"free-') ? '"free"' : idLine.includes('"premium-') ? '"premium"' : '"free"';

      return tags + '\n    tier: ' + tier + ',';
    });

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('All template files fixed');