const path = require('path')

exports.getError = async function (req,res) {
    res.sendFile(path.resolve(__dirname, '../views/build', 'index.html'))
}