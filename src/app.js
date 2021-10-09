import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","https://mpaec-hallenge.vercel.app/")
  res.header("Access-Control-Allow-Origin","Origin,X-Requested-With,Content-Type,Accept")
  next();
})


app.get("/topSongs", async (req, res) => {
  console.log(req.query.index)
  
  axios.get(`https://api.deezer.com/chart/track?index=${req.query.index}`)
  .then((response)=>{
     
      res.send(response.data).status(200)
  })
  .catch((er)=>{
    res.sendStatus(400)
  })
    
});


app.get("/allData", async (req, res) => {
  
  console.log(req.query)
  
    axios.get(`https://api.deezer.com/search/${req.query.type}?q=${req.query.search}&index=${req.query.index}`)
    .then((response)=>{
     
        res.send(response.data).status(200)
    })
    .catch((er)=>{
      res.sendStatus(400)
    })
  
    
});

app.listen(process.env.PORT,() =>{
   console.log(`app rodando em ${process.env.PORT}`) 
});
