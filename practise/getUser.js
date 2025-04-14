import { writeFileSync, readFileSync } from "fs";

let data = JSON.parse(readFileSync("./users/index.json", "utf-8"));
console.log(data);

const Id = process.argv[2];


if(Number(Id) && data.length >= 0 && Id > 0){
    let getName = data.find((user) => user.id == Id);
    console.log(`Malumot muvofaqiyatli olindi: ${getName.name}`);
} else {
    console.log("Bunday id mavjud emas!");
}
