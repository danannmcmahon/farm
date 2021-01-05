import { applyMiddleware, createStore } from 'redux';
import allReducers from '../src/reducers';
import ReduxThunk from 'redux-thunk';

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

const middlewares = [ReduxThunk];

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(allReducers, initialState);
};



