const fs = require('fs');
const path = require('path');

function countTemplatesInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const templateMatches = content.match(/id:\s*["'][^"']+["']/g);
    return templateMatches ? templateMatches.length : 0;
  } catch (error) {
    return 0;
  }
}

function countSlotsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const slotMatches = content.match(/\{\s*x:\s*\d+/g);
    return slotMatches ? slotMatches.length : 0;
  } catch (error) {
    return 0;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalTemplates = 0;
  let totalSlots = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const [subTemplates, subSlots] = processDirectory(filePath);
      totalTemplates += subTemplates;
      totalSlots += subSlots;
    } else if (file.endsWith('.ts')) {
      const templates = countTemplatesInFile(filePath);
      const slots = countSlotsInFile(filePath);
      totalTemplates += templates;
      totalSlots += slots;

      if (templates > 0) {
        console.log(`${file}: ${templates} templates, ${slots} slots`);
      }
    }
  });

  return [totalTemplates, totalSlots];
}

console.log('Template count by file:');
const [totalTemplates, totalSlots] = processDirectory('./data');
console.log(`\nTotal: ${totalTemplates} templates, ${totalSlots} slots`);