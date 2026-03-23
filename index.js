const express = require("express")
const app = express();
const port = process.env.PORT || 8090
 
app.use(express.json());  //middleware
app.use(express.urlencoded({extended:true})) //middleware

app.get("/register", (req, res) => {
  res.send("Standard get response")
})

app.post("/register", (req, res) => {
  const data = req.body;
  console.log(data)
  res.send("Standard post response")
})

app.listen(port, () => {
  console.log("Your app is listening on the port", port)
})
