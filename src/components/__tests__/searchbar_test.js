import React from 'react';
import { shallow } from 'enzyme';
import {SearchBar} from '../searchbar';
import { findByTestAttr, testStore } from '../../../Utils';

const setup = (initialState={}) => {
    const tstore = testStore(initialState);
    const wrapper = shallow(<SearchBar store={tstore}/>).childAt(0).dive();
    return wrapper;
}

describe('Search component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            search:{
                age:[0,15],
                agech:[0,4],
                agecw:[8,12],
                agesh:[4,10],
                category:"sheep"
            }
        }
        wrapper = setup(initialState);
    });
    
    it('Should render without errors', () => {
        const el = findByTestAttr(wrapper, 'search-container');
        expect(el.length).toBe(1);
    })

});