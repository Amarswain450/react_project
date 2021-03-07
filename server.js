const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51IS0L5B5q35LjrRg9zrMUEVfGV5jeudAq5houw8Ol3VSVEA86bJN5jLqqWJKEJczxYzKzc57vqu7s6tIQIw7cKl500yuxVxnYC');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Welcome To React Farm Website');
});

app.post('/checkout', async(req,res) => {
    let errors;
    let status;
    try{
        const {product, token} = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
    }catch(error){
        console.log(error);
    }
});

app.listen(8080, () => {
    console.log('server running on port number 8080');
});