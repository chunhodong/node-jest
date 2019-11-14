const test_stub = (input) =>{

    return new Promise(resolve=>{
        if(input === 1){
            resolve(input);
        }
    });
}

module.exports.test_stub = test_stub;