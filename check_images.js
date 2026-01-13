const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const srcDir = 'src';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

const srcFiles = getAllFiles(srcDir);
const brokenLinks = [];

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match /images/... strings
  const regex = /['"]\/images\/([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const imagePath = match[1];
    // Handle query parameters or hashes if any (though unlikely for local files)
    const cleanPath = imagePath.split('?')[0].split('#')[0];
    const fullPath = path.join(publicDir, 'images', cleanPath);
    
    // Check if file exists
    // Note: decodeURIComponent might be needed if spaces are encoded
    try {
        if (!fs.existsSync(fullPath) && !fs.existsSync(path.join(publicDir, 'images', decodeURIComponent(cleanPath)))) {
        brokenLinks.push({ file, image: match[0], missing: fullPath });
        }
    } catch (e) {
        // ignore errors
    }
  }
});

console.log(JSON.stringify(brokenLinks, null, 2));
