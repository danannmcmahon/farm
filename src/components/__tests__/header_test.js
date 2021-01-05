import React from 'react';
import {shallow} from 'enzyme';
import Header from '../header';

const setup = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}

it('Should render header', () => {
    const component = setup();
    const wrapper = component.find('.App-header');
    expect(wrapper.length).toBe(1);
});