const express = require('express')
const app = express()
//middleware
app.use(express.json());
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/sss',(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.siblings[0]);
    console.log(req.body.siblings[1]);
    console.log(req.body.siblings[2]);
    res.status(200).send({msg:"your sibling count is 3"});
});
let port=3000;
app.listen(port,function(){
    console.log(`server is running on port ${port}`)
})