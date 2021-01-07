import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


export default function AddForm() {
    
    const [ls, setLs] = React.useState('chicken');
    const [age, setAge] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);
    const [name, setName] = React.useState("");
    const [output, setOutput] = React.useState('Kg of egg weekly');
    const [minmaxAge, setmAge] = React.useState([0,5]);
    const [minmaxOutput, setmOutput] = React.useState([0.12, 0.455]);

    const history = useHistory();
  
    const handleLSChange = (event) => {
      setLs(event.target.value);
      if(event.target.value === 'chicken'){
        setOutput('Kg of egg weekly');
        setmAge([0, 5]);
        setmOutput([0.12, 0.455]);
      }else if(event.target.value === 'cow'){
        setOutput('Litres of milk daily');
        setmAge([0, 15]);
        setmOutput([31, 40]);
      }else if(event.target.value === 'sheep'){
        setOutput('Kg of wool yearly');
        setmAge([0, 12]);
        setmOutput([4, 7.25]);
      }
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
      };

      const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
      };

      const handleNameChange = (event) => {
        setName(event.target.value);
      };

      const handleSubmit = () => {

        const animal = {
            name:name,
            category:ls,
            age:age,
            quantity:quantity
        }
          console.log(animal);

          axios.post('http://localhost:3020/livestocks/add', animal)
            .then(res => console.log(res))
            .catch(e => console.log(e));
            
            history.push('/');
      }

return (
    
<FormControl>
<div className="flex-container-v">
    
        <Select
          labelId="demo-simple-select-label"
          label="Animal"
          id="livestock-select"
          value={ls}
          onChange={handleLSChange}
        >
          <MenuItem value={"chicken"}>Chicken</MenuItem>
          <MenuItem value={"cow"}>Cow</MenuItem>
          <MenuItem value={"sheep"}>Sheep</MenuItem>
        </Select>
        
        <TextField id="standard-basic" label="Name" onChange={handleNameChange} value={name}/>
        <TextField id="standard-basic" label="Age" fullWidth InputProps={{ inputProps: { min: minmaxAge[0], max: minmaxAge[1]}}} onChange={handleAgeChange} type="Number" value={age}/>
        <TextField id="standard-basic" label={output} fullWidth InputProps={{ inputProps: { min: minmaxOutput[0], max: minmaxOutput[1]}}} onChange={handleQuantityChange} type="Number" value={quantity}/>
        <Button onClick={handleSubmit} variant="contained" color="primary">Add Livestock</Button>
    
</div>
</FormControl>

     
)

}