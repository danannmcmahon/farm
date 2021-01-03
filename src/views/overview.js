import React, { Component } from 'react';
import SearchBar from '../components/searchbar';
import List from '../components/list';

export default class Overview extends Component {

    constructor(props){
        super(props);
        this.state = {
            json:[]
        }
    }


    render() {

        return(
            <div>
                <SearchBar/>
                <List json={this.state.json}/>
            </div>
        )

    }
}