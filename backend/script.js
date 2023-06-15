
const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const port =  3000;

app.use(cors());
app.use(express.json());

//const API_KEY = "pXeJexN16m6TzRVuXgcl4w6fmpna6m2a";

app.get('/convert', async (req, res) => {
    try {
      console.log(req.query); // log the request query

        const { from, to, amount } = req.query;
        const apiKey = "pXeJexN16m6TzRVuXgcl4w6fmpna6m2a";

        const response = await axios.get(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, {
            headers: {
                apikey: apiKey
            }
        });
        const result = response.data.result;
        console.log(result);  // add this line to print out the result


        res.json({ result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Conversion error' });
    }
});


app.get('/', (req, res) => {
  console.log('Helloooo')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})