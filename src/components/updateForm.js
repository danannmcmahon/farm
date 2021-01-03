import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSingle, updateName, updateOutput, updateCommit, updateReset } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function Update(props){

  const an = props.update;
  const dispatch = useDispatch();
  const history = useHistory();
  const [anID, setID] = React.useState(0);
  const [ls, setLs] = React.useState('');
  const [Mage, setMAge] = React.useState(0);
  const [outputT, setOutputT] = React.useState('Kg of egg weekly');
  const [minmaxOutput, setmOutput] = React.useState([0.12, 0.455]);
  const [outputSup, setSup] = React.useState(['egg', 'weekly']);


  const rangeSelector = (c) => {
    if(c === "chicken"){
      setOutputT('Kg of egg weekly');
      setmOutput([0.12, 0.455]);
      setMAge(5);
      setSup(['egg', 'weekly']);
    }else if(c === "cow"){
      setOutputT('Litres of milk daily');
      setmOutput([31, 40]);
      setMAge(15);
      setSup(['milk', 'daily']);
    }else if(c === "sheep"){
      setOutputT('Kg of wool yearly');
      setmOutput([4, 7.25]);
      setMAge(12);
      setSup(['wool', 'yearly']);
    }
  }

  
  if(anID !== an.id){
    setID(an.id);
    setLs(an.category);
    rangeSelector(an.category);
  }
  

    const handleQuantityChange = (event) => {

      const quan = event.target.value;
      let mquan = 0;

      if(ls === "chicken"){
        mquan = (((event.target.value-0.12)*4.06)+1.36).toPrecision(3);
      }else if(ls === "cow"){
        mquan = (((event.target.value-31)*6)+172).toPrecision(4);
      }else if(ls === "sheep"){
        mquan = (((event.target.value-4)*2.76)+20.5).toPrecision(4);
      }

      const output = [{"product":outputSup[0],"frequency":outputSup[1],"quantity":quan},{"product":"meat","frequency":"once","quantity":mquan}];
      dispatch(updateOutput(output));
    };

    const handleNameChange = (event) => {
      dispatch(updateName(event.target.value));
    };

    const handleSubmit = () => {
      if(an.output[0].quantity <= minmaxOutput[1] && an.output[1].quantity >= minmaxOutput[0]){
        const animal = {
            name:an.name,
            output:an.output
        }
        dispatch(updateCommit(an.id,animal));
        history.push('/');
      }else{
        alert("Please correct Animal Output to realistic numbers.");
      }
    }

    const handleDiscard = () => {
      dispatch(updateReset());
      history.push('/');
    }


return (
    
<FormControl>
<div className="grid-container">
    <div className="grid-item3">
        
        <TextField id="standard-basic" label="Name" onChange={handleNameChange} value={an.name}/>
        <br/><br/>
        <TextField id="standard-basic" label={outputT} fullWidth InputProps={{ inputProps: { min: minmaxOutput[0], max: minmaxOutput[1]}}} onChange={handleQuantityChange} type="Number" value={an.output[0].quantity}/>
        <br/><br/>
        <TextField id="standard-basic" label="Age" disabled type="Number" value={an.age}/>
        <br/><br/>
        <Button onClick={handleDiscard} variant="contained">Discard Changes</Button>
    </div>
    <div className="grid-item3">

        <TextField id="standard-basic" disabled label="Animal" value={an.category}/>
        <br/><br/>
        <TextField id="standard-basic" disabled label="Kg of meat" type="Number" value={an.output[1].quantity}/>
        <br/><br/>
        <TextField id="standard-basic" disabled label="Life Expectancy" type="Number" value={Mage}/>
        <br/><br/>
        <Button onClick={handleSubmit} variant="contained" color="primary">Update Livestock</Button>
    </div>
</div>
</FormControl>

     
)

}

function mapStateToProps(state) {
  return{
    update: state.update
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      fetchSingle:fetchSingle,
      updateName:updateName,
      updateOutput:updateOutput,
      updateCommit:updateCommit,
      updateReset:updateReset
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Update);
