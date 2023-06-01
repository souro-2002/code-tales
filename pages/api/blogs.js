const fs = require('fs')

export default async function handler(req, res) {
  const data = await fs.promises.readdir("blogData");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(`blogData/${item}`,'utf-8');
    myfile = JSON.parse(myfile)
    allBlogs.push(myfile)
  }
  res.status(200).json(allBlogs)
}
