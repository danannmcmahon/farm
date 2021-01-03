import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LivestockSchema = Schema(
    {
        name:{type: String, required:true},
        category:{type: String, required:true},
        age:{type: Number, required:true, minvalue:0, maxvalue:15},
        "life-expectancy":Number,
        output:[{
            product:String,
            frequency:String,
            quantity:Number
        }]
    }
);

const Livestock = mongoose.model('Livestock', LivestockSchema);

export default Livestock;