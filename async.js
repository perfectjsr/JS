/*
function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },time)
    })
}

async function fun(){
    await delay(3000);
    console.log("it is delayed")
}
console.log("Hello this is async code")
fun()
*/


function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },time)
    })
}

async function placeorder(){
    await delay(2000);
    console.log("Order Taken");
}
async function startProduction(){
    await delay(2000);
    console.log("Production Started");
}
async function printID(){
    await delay(2000);
    console.log("ID printed");
}
async function productName(){
    await delay(2000);
    console.log("Product Name printed");
}
async function ProductDesc(){
    await delay(2000);
    console.log("Product Description printed");
}

async function main(){
    console.log("Order is now going to take")
    await placeorder();
    console.log("Product is in production")
    await startProduction();
    console.log("ID printing started")
    await printID();
    console.log("Product name started printing")
    await productName();
    console.log("Pouduct Description started printing")
    await ProductDesc();
}
main()