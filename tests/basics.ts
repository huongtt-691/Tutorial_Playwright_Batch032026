//Khai báo biến
const username: string = "huongtt";
let age: number = 29;
const isActive: boolean = true;
const roles: string[] = ["Admin","Tester"];
const user:{name: string; email: string; isAdmin: boolean} = {name:"tran thi huong", email: "tran.thi.huong@sun-asterisk.com", isAdmin: true};

//In thông tin theo format của user
console.log(
`User: ${user.name} (email: ${user.email}), roles: ${roles.join(",")}, active: ${isActive}`
);

//Function check tuổi
function checkAge(age: number): string {
if (age >= 18) {
    return "Adult";
}else
{
    return "Under 18";
}
}
console.log(checkAge(age));

