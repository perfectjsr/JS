// 3 promises :- pending resolve reject

const placeorder = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        console.log("Order is placed")
        resolve();
    },2000)
})
const startProduction = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        console.log("Production is started")
        resolve();
    },3000)
})
const PrintID = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        console.log("ID is printed")
        resolve();
    },4000)
})
const ProductionName = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        console.log("Production name is printed")
        resolve();
    },5000)
})
const ProductionDesc = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        console.log("Production Description is printed")
        resolve();
    },6000)
})

console.log("Order is now going to take")
placeorder
    .then(()=>{
        console.log("Pass to the production")
        return startProduction;
    })
    .then(()=>{
        console.log("Pass to the print ID")
        return PrintID;
    })
    .then(()=>{
        console.log("Pass to the production name")
        return ProductionName;
    })
    .then(()=>{
        console.log("Pass to the production description")
        return ProductionDesc;
    })
    .then(()=>{
        console.log("Production Ended")
    })
    .catch((error)=>{
        console.log("Error: ",error)
    })
    