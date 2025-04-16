const fs = require('fs');


let data = fs.readFileSync('input.txt', 'utf-8');
console.log("Fayldan o‘qildi:", data);


fs.writeFileSync('output.txt', 'Salom, dunyo!');
console.log("Yangi faylga yozildi: output.txt");
