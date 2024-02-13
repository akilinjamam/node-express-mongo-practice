const fs = require('fs');

// write file:

// fs.writeFile("demo1.txt", "my name is akil injamam", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("successful")
//     }
// })

//  appen file:

// fs.appendFile("demo1.txt", "my name is akil injamam, i am 30 years old", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("successful")
//     }
// })


// read file:

// fs.readFile("demo1.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })


// rename file:

// fs.rename("demo1.txt", "demo-2.txt", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("successful")
//     }
// })


// delete file:

// fs.unlink("demo-2.txt", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("successful")
//     }
// })



// file-exist or not-check:

fs.exists("demo-2.txt", (result) => {
    if (result) {
        console.log("found")
    } else {
        console.log("not-found")
    }
})