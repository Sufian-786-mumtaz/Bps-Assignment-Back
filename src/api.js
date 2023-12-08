const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const serverless = require("serverless-http");
// const port = 8001;
const url = "http://2.233.121.120:1085/energy.php";
const router = Router();
app.use(cors());
router.get("/energy", async (req, res) => {
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error("Error making API call:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app);
