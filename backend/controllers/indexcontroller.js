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

exports.getKendaraan = async function (req,res) {
    const data = [
        {
          "_id": "5fe9f5c340d7b89fa6c0c733", 
          "name": "Mobil"
        }, 
        {
          "_id": "5fe9f5c39f992d53a3aca25b", 
          "name": "Motor"
        }, 
        {
          "_id": "5fe9f5c300a5740c97c798ce", 
          "name": "Pesawat"
        }
      ]

    res.json(data)
}