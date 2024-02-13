const getName = () => {
    return "akil injamam"
}


const getAge = () => {
    return 32
}


// way-1
// exports.getName = getName;
// exports.getAge = getAge;

// way-2
// exports.name = {
//     getName,
//     getAge
// }

// way-3
module.exports = {
    getAge,
    getName
}




