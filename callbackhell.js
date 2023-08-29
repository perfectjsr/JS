const placeorder = (callback)=>{
    setTimeout(()=>{
        console.log("Order is taken")
        callback();
    },2000)
}
const printProduction = (callback)=>{
    setTimeout(()=>{
        console.log("Production started")
        callback();
    },2000)
}
const printLinux = (callback)=>{
    setTimeout(()=>{
        console.log("Linux started")
        callback();
    },2000)
}
const printGithub = (callback)=>{
    setTimeout(()=>{
        console.log("Github started")
        callback();
    },2000)
}

const printHTML = (callback)=>{
    setTimeout(()=>{
        console.log("HTML started")
        callback();
    },2000)
}
const printCSS = (callback)=>{
    setTimeout(()=>{
        console.log("CSS started")
        callback();
    },2000)
}
const printJS = (callback)=>{
    setTimeout(()=>{
        console.log("JS started")
        callback();
    },2000)
}
const printReact = (callback)=>{
    setTimeout(()=>{
        console.log("React started")
        callback();
    },2000)
}

console.log("Order is now going to take");
placeorder(()=>{
    console.log("Pass to production");
    printProduction(()=>{
        console.log("Passing to Linux");
        printLinux(()=>{
            console.log("Pass to github");
            printGithub(()=>{
                console.log("Pass to HTML");
                printHTML(()=>{
                    console.log("Pass to CSS");
                    printCSS(()=>{
                        console.log("Pass to JS");
                        printJS(()=>{
                            console.log("Pass to react");
                            printReact(()=>{
                                console.log("Production ended");
                            })
                        })
                    })
                })
            })
        })
    })
})