import { writeFileSync, readFileSync } from "fs";

let data = JSON.parse(readFileSync("./users/index.json", "utf-8"));
let id =  data.length == 0 ? 1 : data[data.length - 1].id + 1;

const NewUser = process.argv[2];


const addUserFun = () => {
    const user = {
        id: id,
        name: NewUser,
    };
    data.push(user);
    return data;
}
if(NewUser) {
    addUserFun();
    writeFileSync("./users/index.json", JSON.stringify(data), "utf-8");
}
