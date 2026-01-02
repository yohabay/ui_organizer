const fs = require('fs');
const path = require('path');

const dataDir = './data';

fs.readdirSync(dataDir).forEach(file => {
  if (file.endsWith('-templates.ts')) {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove all tier and isPremium lines
    content = content.replace(/^\s+tier: ".*?",\s*$/gm, '');
    content = content.replace(/^\s+isPremium: true,\s*$/gm, '');

    // Add tier after tags
    content = content.replace(/(\s+tags: \[[\s\S]*?\],)\s*$/gm, (match, tags) => {
      const lines = content.split('\n');
      const lineIndex = lines.findIndex(line => line.includes(match.trim()));
      if (lineIndex === -1) return match;

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