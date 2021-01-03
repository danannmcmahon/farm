import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';


function LinkTab(props) {
    return (
      <Tab
        component={Link}
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }


export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleClick(e) {
        this.setState({
            value: e
        });
    }

    render() {
        return (

            <AppBar position="sticky">
                <Tabs variant="fullWidth" value={this.state.value} aria-label="Navigation">
                    <LinkTab label="Overview" to="/" onClick={() => this.handleClick(0)} />
                    <LinkTab label="Add" to="/add" onClick={() => this.handleClick(1)} />
                    <LinkTab label="Pair" to="/pair" onClick={() => this.handleClick(2)}  />
                </Tabs>
            </AppBar>

            
        )
    }
}