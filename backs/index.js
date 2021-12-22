const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3100;
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const axios = require('axios');
app.use( bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json() );
app.use( cors() );

const auth = '943f30310f51c578d85fbf41ec9d0511';

router.get('/dolar-blue', async (req, res) => {
    try {
        let token = req.header( 'authorization' );
        if(!token){
            res.status(401).send({ problem: { message: 'Unauthorized' } });
        }
        token = token.replace('Bearer ', '');
        console.log(token)
        if(token === auth){
            const response = await axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue');
            console.log(response.data);
            res.status(200).send({ data: response.data });
        } else {
            res.status(401).send({ problem: { message: 'Unauthorized' } });
        }
    } catch( error ) {
        throw new Error(error);
    }
})


app.use( '/api', router );

app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`);
})