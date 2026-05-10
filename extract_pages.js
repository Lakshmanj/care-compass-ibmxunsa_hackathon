const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('repomix-output.xml', 'utf8');
const fileRegex = /<file path="([^"]+)">\n([\s\S]*?)\n<\/file>/g;
let match;

while ((match = fileRegex.exec(content)) !== null) {
  const relPath = match[1];
  const fileContent = match[2];
  
  if (relPath.startsWith('pages/') && relPath !== 'pages/HomePage.jsx' && relPath !== 'pages/HomePage.css') {
    const targetPath = path.join('client/src', relPath);
    // ensure dir exists
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (!fs.existsSync(targetPath)) {
      console.log('Writing', targetPath);
      fs.writeFileSync(targetPath, fileContent);
    }
  }
}
console.log('Done extraction.');
