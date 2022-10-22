const receivesAFunction =(callback ) => {
    return callback ();
}

const returnsANamedFunction = () =>{
    return function receivesAFunction() {
        console.log("hii");
    }
}

const returnsAnAnonymousFunction = () => {
    return function () {
        console.log("hiiii");
    }
}