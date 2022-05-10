const hello = async() =>{
    try {
        return 'Hello !!'
    } catch(error){
        console.log(error)
    }
}

module.exports ={
    hello
}