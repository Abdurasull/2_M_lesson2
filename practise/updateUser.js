import { writeFileSync, readFileSync } from "fs";

let data = JSON.parse(readFileSync("./users/index.json", "utf-8"));

const Id = process.argv[2];
const newUser = process.argv[3];

console.log(Id, newUser);


if(Number(Id) && data.length >= 0 && Id > 0 && newUser){
    let IsId = data.find((user) => user.id == Id);
    if(!IsId) {
        console.log("Bunday id mavjud emas!");

    }else{
        data = data.map((user) => {
        if(user.id == Id){
            user.name = newUser;
        }
        return user;
    });
    writeFileSync("./users/index.json", JSON.stringify(data), "utf-8");
    console.log("Ma`lumot muvofaqiyatli o`zgartirildi");
    }
    
} else {
    console.log("ma`lumot kiritishda xatolik bor!");
}
