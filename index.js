const fs = require('fs')

fs.readFile('data.txt', 'utf8', function (err, number) {
    if (err) {
        return console.error('File data.txt doesn\'t exist, pleas create it an run the program again.')
    }

    console.log(fibonacci(number))
});

function fibonacci(number) {
    let a = 0;
    let b = 1;
    let c;

    if (number === 0) {
        return a;
    }

    for (let i = 2; i <= number; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}