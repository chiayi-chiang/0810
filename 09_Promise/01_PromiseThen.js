function longTimeWork(workFine = true, errorMessage = "test") 
{
    return new Promise( (resolve, reject) => //有兩件事要做.then/.catch
    {
        setTimeout( () => 
        {
            //workFine如果是T值做resolve(200=e)如果是Ｆ做reject
            (workFine) ? resolve(200) : reject(errorMessage);
        }, 1000);//1秒鐘回覆
    })
}

function usingLongTimeWork() {
    longTimeWork(false, "test")  // try true/false //p
    //true
    .then(function (e) //e=200
    {
        console.log(e);
    })
    //false
    .catch(function (e) //"test"
    {
        console.log(e);
    })
}

usingLongTimeWork();
