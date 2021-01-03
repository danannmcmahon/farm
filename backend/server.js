import mongoose from 'mongoose';
import livestockRouter from './routes/livestocks.js';
//import './routes/livestocks';
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.REACT_APP_DB_CONNECTION;


mongoose.connect(
    uri,
    {   useNewUrlParser: true,
        useUnifiedTopology: true },
        console.log("Connected to DB!")
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection opened");
})

/*
app.get('/', (req,res) => {
    res.send('Hello World');
})
*/

app.use('/livestocks', livestockRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
