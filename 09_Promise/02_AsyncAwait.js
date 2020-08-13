function longTimeWork(workFine = true, errorMessage = "test") {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            (workFine) ? resolve(200) : reject(errorMessage);
        }, 1000);
    })
}

async function usingLongTimeWork() {
    var result = await longTimeWork(true, "test");
    console.log(result);
}

//async&await need togather
async function usingLongTimeWork() {
    try {
        var p = await longTimeWork(true, "test");//await P
        console.log("processtion........")
        var result = await p;
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
    
}

usingLongTimeWork();
