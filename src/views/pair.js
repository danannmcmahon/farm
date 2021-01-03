import React, { Component } from 'react';
import SearchBar from '../components/searchbar';
import ListPair from '../components/ListPair';
import PairPreview from '../components/pairPreview';

export default class Pair extends Component {

    render() {

        return(
            <div>
                <SearchBar/>
                <div className="flex-container-pair">
                    <div className="flex-pair1">
                    <ListPair/>
                    </div><div className="flex-pair2">
                    <PairPreview/>
                    </div>
                </div>
            </div>
        )

    }
}