const stripe = require('stripe')('sk_test_51L8fBuSD5XhTYBxrJ6qkeiO7aAlqTCVLxNntAcnr3DElQshovbqOZjjpel0HXhurNf7j3kG0DlHhlMnzEv2ddLRD00Dd0koLjY')
const getClientSecret=async(req,res)=>{
    const total=req.body.total
    console.log(total)
    const paymentIntent=await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
        payment_method_types: ['card'],
    })
    res.json({clientSecret: paymentIntent.client_secret})
}
module.exports.getClientSecret=getClientSecret