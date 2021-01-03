import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {bindActionCreators} from 'redux';

import { connect, useDispatch } from 'react-redux';
import { pair1, pair2, pair3, pairCreate, unpair1, unpair2, pairReset } from '../actions';


function ListPair(props) {

    const dispatch = useDispatch();
    
    let params = props.srchResults;
    let pairs = props.pair;

    const handleSelect = (i) =>{    

        if(pairs.id[0] === "" && pairs.id[1] === ""){
            dispatch(pair1(i)); //Make Array [X,0]
        }else if(pairs.id[0] !== ""){

            if(pairs.category !== i.category){
                alert("Please ensure animals are within the same category.")
            }else{

                if(pairs.id[0] === i._id){
                    if(pairs.id[1] === ""){
                        dispatch(pairReset(i)); //Make Array [0,0] , clear category
                    }else{
                        dispatch(unpair1(i)); //Make Array [X,0] , move index 1 to 0
                    }
                }else if(pairs.id[1] === i._id){
                    dispatch(unpair2(i)); //Make Array [X,0], removing index 1
                }else{
                    dispatch(pair2(i)); // Make Array [X,X]
                    dispatch(pair3(i)); // Calculate Child
                }
            }
        }
    }
    

    return(
        <Paper className="table-stick">
            <Table stickyHeader>
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Output</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {params.results.map((row) => (
            <TableRow key={row._id}>
              <TableCell scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right"><span className="digit-font">{row.output[0].quantity}</span> {row.category === "cow"? <span>L daily</span>: row.category === "chicken"? <span>Kg weekly</span>:<span>Kg yearly</span>}</TableCell>
              <TableCell align="right"><Button variant="contained" color="primary" onClick={() => handleSelect(row)}>Pair</Button></TableCell>
            </TableRow>
          ))}
                </TableBody>
            </Table>
            </Paper>
        
    )
}

//Redux connection functions
function mapStateToProps(state){
    return{
        pair: state.pair,
        srchResults: state.results
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        pair1:pair1,
        pair2:pair2,
        pair3:pair3,
        pairCreate:pairCreate,
        unpair1:unpair1,
        unpair2:unpair2,
        pairReset:pairReset
      }, dispatch)
  
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListPair);