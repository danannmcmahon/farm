import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import { connect, useDispatch } from 'react-redux';
import { fetchSingle } from '../actions';


function List(props) {

    const dispatch = useDispatch();
    
    let params = props.srchResults;
    console.log("params");
    console.log(params);
   

    const handleUpdateReq = (i) =>{    
          dispatch(fetchSingle(i));
    }
    

    return(
        <Paper className="pairContainer">
                <Table stickyHeader>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Output</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {params.results.map((row) => (
                <TableRow key={row._id}>
                    <TableCell component="th" scope="row"><Link to={"/update/"+row._id} onClick={() => handleUpdateReq(row._id)}>{row.name}</Link></TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right"><span className="digit-font">{row.output[0].quantity}</span> {row.category === "cow"? <span>L daily</span>: row.category === "chicken"? <span>Kg weekly</span>:<span>Kg yearly</span>}</TableCell>
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
        srchResults: state.results
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchSingle:fetchSingle
      }, dispatch)
  
  }

export default connect(mapStateToProps, mapDispatchToProps)(List);



             