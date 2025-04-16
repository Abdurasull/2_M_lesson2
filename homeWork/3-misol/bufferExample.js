const fs = require('fs');

// 1. Tasodifiy raqamli array
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
let buffer = Buffer.from(numbers);

// 2. Bufferni faylga yozish
fs.writeFileSync('numbers.bin', buffer);
console.log("Buffer yozildi: numbers.bin");

// 3. Bufferni fayldan o‘qib, matn sifatida chiqarish
let readBuffer = fs.readFileSync('numbers.bin');
console.log("Fayldan o‘qilgan buffer:", readBuffer);
console.log("Bufferdagi sonlar:", Array.from(readBuffer));
