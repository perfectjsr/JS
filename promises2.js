const placeorder =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("order is taken")
            resolve();
        },2000)
    })
}
const startProduction  =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Start Production")
            resolve();
        },2000)
    })
}
const  printID =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Print ID")
            resolve();
        },2000)
    })
}
const  productName =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Product Name Printed")
            resolve();
        },2000)
    })
}
const  productDescription =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Discription printed")
            resolve();
        },2000)
    })
}
const  productComplete =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Order Completed")
            resolve();
        },2000)
    })
}



console.log("order is now going to take");
placeorder()
    .then(() => {
        console.log('pass to production');
        return startProduction()
    })
    .then(() => {
        console.log('pass to print ID');
        return printID()
    })
    .then(() => {
        console.log('pass to product Name');
        return productName()
    })
    .then(() => {
        console.log('paas to Description ')
        return productDescription()
    })
    .then(() => {
        console.log('paasing is completing ')
        return productComplete()
    })
    .catch((error)=>{

    })