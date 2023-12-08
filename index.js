const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 8001;
const url = 'http://2.233.121.120:1085/energy.php';
app.use(cors());
app.get('/energy', async(req, res)=>{
    try {
        const response = await axios.get(url);
        res.send(response.data);
      } catch (error) {
        console.error('Error making API call:', error);
        res.status(500).send('Internal Server Error');
      }
})

app.listen(port, ()=>{  
    console.log(`server is running on port ${port}`)
})