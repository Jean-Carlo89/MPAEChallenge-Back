import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());
app.use(express.json());


app.get("/topSongs", async (req, res) => {
  
  axios.get("https://api.deezer.com/chart/track?index=10")
  .then((response)=>{
      console.log(response.data)
      res.send(response.data).status(200)
  })
  .catch((er)=>{
    res.sendStatus(400)
  })
    
});

app.listen(4000,() =>{
   console.log("app rodando") 
});
