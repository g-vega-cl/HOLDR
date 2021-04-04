import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


import tutorialRoutes from './routes/tutorial.js';

const app = express();

app.use(bodyParser.json({ limit: "5mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());

app.use('/tutorial', tutorialRoutes);

const CONNECTION_URL =
  "mongodb+srv://g_vega_cl:Generic_Holdr_123_@holdr.5r4op.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server running")))
  .catch((e) => console.log(e.message));

mongoose.set("useFindAndModify", false);
