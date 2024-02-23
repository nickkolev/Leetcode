var map = function(arr, fn) {
    const transformedArr = [];

    for(let i = 0; i < arr.length; i++) {
        transformedArr.push(fn(arr[i], i));
    }

    return transformedArr;
};