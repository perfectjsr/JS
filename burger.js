// const getbread = (callback) => {
//     setTimeout(() => {
//         console.log("started making burger")
//         callback();
//     }, 2000)
// }
// const bread1 = (callback) => {
//     setTimeout(() => {
//         const bread_1 = "🍞"
//         console.log("bread is ready", bread_1)
//         callback(bread_1, callback)
//     }, 2000);
// }
// const tikki = (bread_1, callback) => {
//     setTimeout(() => {
//         const tikki = bread_1 + "🥓"
//         console.log("bread and tikki is ready", tikki)
//         callback(bread_1, tikki, callback)
//     }, 2000);

// }
// const bread2 = (bread_1, tikki, callback) => {
//     setTimeout(() => {
//         const bread_2 = bread_1 + tikki + "🍞"
//         console.log("bread and tikki and bread is ready", bread_2)
//         callback(bread_1, tikki, bread_2, callback)
//     }, 2000);

// }
// const sauce = (bread_1, tikki, bread_2, callback) => {
//     setTimeout(() => {
//         const sauce = bread_2 + "🍼"
//         console.log("bread and tikki and bread and sauce is ready", bread)
//         callback(bread_1, tikki, bread_2, sauce, callback)
//     }, 2000);

// }
// const bread3 = (bread_1, tikki, bread_2, sauce, callback) => {
//     setTimeout(() => {
//         const bread_3 = sauce + "🍞"
//         console.log("bread and tikki and bread and sauce and bread is ready", bread_3)
//         callback(bread_1, tikki, bread_2, sauce, callback)
//     }, 2000);

// }

console.log("Start to make burger")
getbread(() => {
    console.log("get bread")
    bread1((bread_1) => {
        console.log("get tikki")
        tikki((bread_1, tikki) => {
            console.log("get another bread")
            bread2(() => {
                console.log("get sauce")
                sauce((bread_1, tikki, bread_2)=>{
                    console.log("get bread again")
                    bread3((bread_1, tikki, bread_2, sauce) => {
                        console.log("burger complete 🍔")
                    })
                })
            })

        })
    })
})