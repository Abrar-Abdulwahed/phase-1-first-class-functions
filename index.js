// receivesAFunction function should:
    // take a callback function as an argument
    // call the callback function
    // it doesn't matter what this function returns, so long as it calls the callback function
function receivesAFunction(spy){
    spy();
}


// returnsANamedFunction function should:
    // take no arguments
    // return a named function
function returnsANamedFunction(){
    return receivesAFunction;
}

// The returnsAnAnonymousFunction function should:
//     take no arguments
//     return an anonymous function
function returnsAnAnonymousFunction(){
    return ()=>{}
}


