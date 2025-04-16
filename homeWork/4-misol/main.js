const fs = require("fs");

// Yaratilishi kerak bo'lgan papkalar
const folders = [
  "project/html",
  "project/static"
];

// Yaratilishi kerak bo'lgan fayllar
const files = [
  "project/html/index.html",
  "project/static/script.js",
  "project/static/script.ts",
  "project/static/style.css",
  "project/go.mod",
  "project/go.sum",
  "project/golang-todo-app",
  "project/main.go",
  "project/README.md",
  "project/tsconfig.json"
];

folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`Yaratildi: ${folder}`);
  }
});


files.forEach(file => {
  fs.writeFileSync(file, ""); 
  console.log(`Yaratildi: ${file}`);
});
