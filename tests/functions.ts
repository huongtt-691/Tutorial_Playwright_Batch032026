//function tính tổng
function sum(a:number, b:number): number {
    return a+b;
}
console.log("sum:", sum(1000, 2000));

//function tính tích
const multiply =(a:number, b:number):number => a*b;
console.log("multiply:", multiply(9,9));

//function greet
function greet(name: string, role: string="Guest"):void{
    console.log(`Hello ${name}, your role is ${role}`);
    }
greet("Huong","Tester");

//function delay print
async function delayPrint(msg: string, time: number): Promise<void>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(msg);
        },time);
    });
}
delayPrint("This message is delay after 2s", 2000);