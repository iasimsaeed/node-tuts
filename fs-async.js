const {readFile, writeFile, read} = require('fs')

// Read First File Async
readFile('./content/first.txt', 'utf8', (err,result) => {
    if(err) {
        console.log(err)
        return;
    }

    // Storing first file result
    const first = result

    // Read second file Async
    readFile('./content/second.txt', 'utf8' , (err,result) => {
        if(err) {
            console.log(err);
            return;
        }

        const second = result

        // Write File Async
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}` ,(err,result) => {
            if(err) {
                console.log(err);
                return;
            }

            console.log(result);


        })
    })

})