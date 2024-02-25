var once = function(fn) {
    let hasBeenCalled = false;

    return function(...args){
        if(!hasBeenCalled) {
            let result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    }
};
