

function myName(){
 console.log('my Name is ahmed');
}

function myPassion(){
    console.log('i am passion with programming');
}

// anonumous function // export the function during typing the fun
exports.myAge=()=>{
    console.log(' my age is 22');
}
 

/*
export myName function.
module.exports = myName;
*/


module.exports.firstFunction = myName;
module.exports.secondFunction = myPassion;

