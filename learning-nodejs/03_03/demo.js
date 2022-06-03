var fs = require('fs');

var data = {
    "name": "Bob"
}

fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) {
        console.log(err);
    }
});