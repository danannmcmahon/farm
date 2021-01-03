import React, { Component } from 'react';
import UpdateForm from '../components/updateForm';

export default class Update extends Component {

    render() {

        return(
            <div>
            <p>You can edit the name and production output of animals here.</p>
            <UpdateForm/>
            </div>
        )

    }
}