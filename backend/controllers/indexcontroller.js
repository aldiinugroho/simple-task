exports.getIndex = async function (req, res) {
    console.log('mantap')
}

exports.postProc = async function (req, res) {
    if (req.body.namee == "" && req.body.agee == "") {
        console.log('input data is empty')
        res.redirect('back')
    } else {
        console.log('==== in url:/testdata ====')
        console.log(req.body)
        console.log('==========================')
        req.session.clientData = req.body
        res.redirect('/testdataget')
    }
}

exports.getProc = async function (req, res) {
    if (req.session.clientData == null) {
        var a = req.session.clientData
        console.log(a + ' : in url:/testdataget ("no data in session / session is clear")')
        res.redirect('/')
    } else {
        var a = req.session.clientData
        req.session.destroy()
        // delete req.session.clientData;
        // req.session.clientData = null
        console.log('==== in url:/testdataget ====')
        console.log(a)
        console.log('=============================')
        res.send(a)
    }
}