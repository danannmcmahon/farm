import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect, useDispatch } from 'react-redux';
import { modTog } from '../actions';
import { bindActionCreators } from 'redux';

function PairChip(props) {

    const dispatch = useDispatch();
    let num = 0;
    let col = "default";

    const handleClick = () => {
        dispatch(modTog());
    }

    
    if(props.pair.id[0].length<1){
        num = 0;
    }else if(props.pair.id[1].length<1){
        num = 1;
    }else{
        num=2;
        col="secondary";
    }
    

    return(
        <div>
            <Chip label={num} color={col} clickable onClick={handleClick}/>
        </div>
    )
}

function mapStateToProps(state){
    return{
        pair: state.pair
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        modTog:modTog
      }, dispatch)
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PairChip);