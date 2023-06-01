const fs = require('fs')

export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.q}.json`,'utf-8',(err,data)=>{
    if(err) res.status(500).json({error:"No such blogs found"})
    res.status(200).json(JSON.parse(data))
  })
}
