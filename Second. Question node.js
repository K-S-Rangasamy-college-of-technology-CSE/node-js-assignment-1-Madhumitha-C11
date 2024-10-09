// write file system module with sample coding in node.js
 
const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'example.txt');

fs.writeFile(filePath, 'Hello, World!', (err) => {
  if (err) {
    return console.error('Error writing file:', err);
  }
  console.log('File created and text written!');

  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.error('Error reading file:', err);
    }
    console.log('File contents:', data);

    
    fs.appendFile(filePath, '\nThis is an additional line.', (err) => {
      if (err) {
        return console.error('Error updating file:', err);
      }
      console.log('File updated!');

      
      fs.readFile(filePath, 'utf8', (err, updatedData) => {
        if (err) {
          return console.error('Error reading file:', err);
        }
        console.log('Updated file contents:', updatedData);

        fs.unlink(filePath, (err) => {
          if (err) {
            return console.error('Error deleting file:', err);
          }
          console.log('File deleted!');
        });
      });
    });
  });
});
