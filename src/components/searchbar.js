import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { searchCategory, searchAge, searchAgeCh, searchAgeCw, searchAgeSh, fetchResults } from '../actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

function SearchBar(props) {
  
  const bar = props.search;
  const dispatch = useDispatch();

    const [ls, setLs] = React.useState("all");
    const [age, setAge] = React.useState(bar.age);
    const [mage, setMage] = React.useState([0,15]);

    
  
    const rangeSelector = (c) => {
      if(c === "chicken"){
        setMage([0,5]);
        setAge(bar.agech);
      }else if(c === "cow"){
        setMage([0,15]);
        setAge(bar.agecw);
      }else if(c === "sheep"){
        setMage([0,12]);
        setAge(bar.agesh);
      }else{
        setMage([0,15]);
        setAge(bar.age);
      }
    }

    if(ls !== bar.category){
      setLs(bar.category);
      rangeSelector(bar.category);
    }
    
    const handleLSChange = (event) => {
      setLs(event.target.value);
      dispatch(props.searchCategory(event.target.value));
      rangeSelector(event.target.value);
    };

    
    

    const handleAgeChange = (event, newValue) => {
      setAge(newValue);

      if(bar.category === "chicken"){
        dispatch(props.searchAgeCh(newValue));
      }else if(bar.category === "cow"){
        dispatch(props.searchAgeCw(newValue));
      }else if(bar.category === "sheep"){
        dispatch(props.searchAgeSh(newValue));
      }else{
        dispatch(props.searchAge(newValue));
      }

    };

    
    const handleSearch = () => {

      const q = {
        params:{
        "category":bar.category,
        "age":age
        }
      }
      dispatch(fetchResults(q));
    }

return (
    
<FormControl className="searchbarFC">
<div className="flex-container">
    <div className="flex-item1">
        <Select
          labelId="demo-simple-select-label"
          id="livestock-select"
          value={bar.category}
          onChange={handleLSChange}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"cow"}>Cattle</MenuItem>
          <MenuItem value={"chicken"}>Chicken</MenuItem>
          <MenuItem value={"sheep"}>Sheep</MenuItem>
        </Select>
    </div>
    <div className="flex-item2">
        <Typography variant="subtitle2">Animal Age</Typography>
        <Slider
            value={age}
            onChange={handleAgeChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={mage[0]}
            max={mage[1]}
        />

       
      </div>
      <div className="flex-item1">
      <Button onClick={handleSearch} variant="contained">Search</Button>
      </div>
    </div>
</FormControl>

     
)

}

//Redux connection functions
function mapStateToProps(state) {
  return{
    search: state.search
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      searchCategory:searchCategory,
      searchAge:searchAge,
      searchAgeCh:searchAgeCh,
      searchAgeCw:searchAgeCw,
      searchAgeSh:searchAgeSh,
      fetchResults:fetchResults
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);