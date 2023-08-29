async function fetchdata(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error("Network response failed")
        }
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.error("Error fetching data: ",error)
    }
}
fetchdata