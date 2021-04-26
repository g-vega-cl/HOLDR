import mongoose from 'mongoose';

const stripeSchema = mongoose.Schema({
    email: String,
    type: String,
    amount: Number,
    openCouponPrice: Number,
    boughtAt:{
        type: Date,
        default: new Date(),
    },
    completed: Boolean,
    closed: Boolean,
    profit: Number,
});

const StripeTransaction = mongoose.model('StripeTransactions', stripeSchema);

export default StripeTransaction;