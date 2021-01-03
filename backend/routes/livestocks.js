import express from 'express';
import Livestock from '../models/livestock.model.js';



const router = express.Router();



router.route('/').get((req,res) => {

    let query = {
        age:{$gte:req.query.age[0],$lte:req.query.age[1]}
    }

    if(req.query.category !== 'all'){
        query.category = req.query.category;
    }

    Livestock.find(query)
        .then(livestocks => res.json(livestocks))
        .catch(err => res.json('Error: ' + err));
});



router.route('/add').post((req,res) => {
    
    const name = req.body.name;
    const category = req.body.category;
    const age = req.body.age;
    const quantity = req.body.quantity;
    let meatquantity = 0;
    let type = "";
    let frequency = "";
    let life = 0;

    switch (category){
        case 'cow':
            life = 15;
            frequency = "daily";
            type = "milk";
            meatquantity = (((quantity-31)*6)+172);
            break;
        case 'chicken':
            life = 5;
            frequency = "weekly";
            type = "egg";
            meatquantity = (((quantity-0.12)*4.06)+1.36);
            break;
        case 'sheep':
            life = 12;
            frequency = "yearly";
            type = "wool";
            meatquantity = (((quantity-4)*2.76)+20.5);
            break;
    }

    const output = [{"product":type,"frequency":frequency,"quantity":quantity},{"product":"meat","frequency":"once","quantity":meatquantity}];

    const newLivestock = new Livestock({
        name,
        category,
        age,
        'life-expectancy':life,
        output
    });

    newLivestock.save()
        .then(() => res.json("Livestock added"))
        .catch(err => res.json(err));

});



router.route("/update/:id").get((req,res) => {
    Livestock.findById(req.params.id)
        .then(animal => res.json(animal))
        .catch(err => res.json('Error: '+err));
});



router.route('/update/:id').post((req,res) => {
    Livestock.findById(req.params.id)
        .then(livestock => {
            livestock.name = req.body.name;
            livestock.output = req.body.output;

            livestock.save()
                .then(() => res.json("Livestock updated"))
                .catch(err => res.json("Error: " +err));
        })
        .catch(err => res.json("Error: " +err));
});



export default router;