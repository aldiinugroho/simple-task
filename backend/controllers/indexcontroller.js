exports.postProc = async function (req, res) {
  if (req.body.name == "" || req.body.age == "" || req.body.kendaraan == "") {
      console.log('input data is empty')
      res.redirect('back')
  } else {
    console.log('==== in url:/testdata ====')
    console.log(req.body)
    console.log('==========================')
    req.session.clientData = req.body
    res.redirect('/result')
  }
}

// exports.getProc = async function (req, res) {
//   // if (req.session.clientData == null) {
//   //   const a = req.session.clientData
//   //   console.log(a + ' : in url:/testdataget ("no data in session / session is clear")')
//   //   res.redirect('/')
//   // } else {
//   //   const a = req.session.clientData
//   //   req.session.destroy()
//   //   // delete req.session.clientData;
//   //   // req.session.clientData = null
//   //   console.log('==== in url:/testdataget ====')
//   //   console.log(a)
//   //   console.log('=============================')
//   //   res.json(a)
//   // }
//   // res.redirect("/result")
// }

exports.getResult = async function (req,res) {
  const data = req.session.clientData
  res.json(data)
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

exports.getNewSession = async function (req,res) {
  req.session.destroy()
  res.redirect('/')
}