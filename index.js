// receivesAFunction function should:
    // take a callback function as an argument
    // call the callback function
    // it doesn't matter what this function returns, so long as it calls the callback function
const receivesAFunction = (cb) => cb();


// returnsANamedFunction function should:
    // take no arguments
    // return a named function
const returnsANamedFunction = () => function namedFn(){};


// The returnsAnAnonymousFunction function should:
//     take no arguments
//     return an anonymous function
const returnsAnAnonymousFunction = () => () =>{}


