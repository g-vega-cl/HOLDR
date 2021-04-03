import mongoose from 'mongoose';

const tutorialSchema = mongoose.Schema({
    name: String,
    message: String,
    creator: String,
    finishedAt:{
        type: Date,
        default: new Date();
    }
});

const tutorialMessage = mongoose.model("TutorialMessage", tutorialSchema);

export default tutorialMessage;