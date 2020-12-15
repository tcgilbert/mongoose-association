require('dotenv');
const express = require('express')
const app = express();
const db = require('./models/blog')


app.use(express.urlencoded({ extended: flase }));

app.get('/', (req, res) => {
  res.send("you have hit the home route");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server live on ${PORT} 👀)`;
})