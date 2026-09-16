const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const success = true
        if(success){
            resolve("Success")
        } else {
            reject("Failure")
        }
    }, 2000)
})


promise.then(result => {
    console.log("Success: ", result)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log("Complete")
})


