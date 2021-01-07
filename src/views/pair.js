import React, { Component } from 'react';
import SearchBar from '../components/searchbar';
import ListPair from '../components/ListPair';
import PairPreview from '../components/pairPreview';
import Media from 'react-media';
import PairChip from '../components/pairChip';
import PairModal from '../components/pairModal';

export default class Pair extends Component {

    render() {

        return(
            <div>
                <SearchBar/>
                <Media query="(min-width:650px)">
                    {matches =>
                        matches?(
                            <div className="flex-container-pair">
                                <div className="flex-pair1">
                                    <ListPair/>
                                </div><div className="flex-pair2">
                                    <PairPreview/>
                                </div>
                            </div>
                        ):(
                            <div>
                                <div className="flex-container-pair-m">
                                    <ListPair/>
                                
                                    <PairModal/>
                                
                            </div>
                            <div className="fixed-chip">
                                <PairChip />
                            </div>
                            </div>
                        )}
                    
                </Media>
            </div>
        )

    }
}