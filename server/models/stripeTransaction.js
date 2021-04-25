import mongoose from 'mongoose';

const stripeSchema = mongoose.Schema({
    email: String,
    type: String,
    amount: Number,
    couponPrice: Number,
    boughtAt:{
        type: Date,
        default: new Date(),
    },
});

const StripeTransaction = mongoose.model('StripeTransactions', stripeSchema);

export default StripeTransaction;