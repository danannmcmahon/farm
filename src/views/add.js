import React, { Component } from 'react';
import AddForm from '../components/addForm';

export default class Add extends Component {

    render() {

        return(
            <div>
                <p className="place-text">You can introduce new animals here.</p>
                <AddForm/>
            </div>
        )

    }
}