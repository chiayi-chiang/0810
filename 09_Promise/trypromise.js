function LongTW(workFine = true,errorMesage = "test"){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            (workFine) ? resolve(200) : reject(errorMesage);
        },1000);
    })

}

function usLongTW(){
    LongTW(true,"text")
    .then(function(e){
        console.log(e);
    })
    .catch(function(e){
        console.log(e);
    })
}
usLongTW();