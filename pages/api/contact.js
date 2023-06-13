import * as fs from 'fs'

export default async function handler(req,res){
    if(req.method === 'POST'){
        let data = await fs.promises.readdir('contactData')
        fs.promises.writeFile(`contactData/${data.length + 1}.json`,JSON.stringify(JSON.parse(req.body)))
        res.status(200).json({success:true,message:"Data Saved"})
    }else{
        res.status(500).json({success:false,message:"Not Found"})
    }
}