import { writeFileSync, readFileSync } from "fs";

let data = JSON.parse(readFileSync("./users/index.json", "utf-8"));

const Id = process.argv[2];


if(Number(Id) && data.length >= Id && Id > 0){
    data = data.filter((user) => user.id != Id);
    writeFileSync("./users/index.json", JSON.stringify(data), "utf-8");
    console.log("Ma`lumot muvofaqiyatli o`chirildi");
} else {
    console.log("Bunday id mavjud emas!");
}
