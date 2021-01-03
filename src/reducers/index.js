import resultsReducer from './results';
import pairReducer from './pairO';
import updateReducer from './updateO';
import searchReducer from './searchParams';
import {combineReducers} from 'redux';

console.log("This one : "+searchReducer);

const allReducers = combineReducers({
    results: resultsReducer,
    pair: pairReducer,
    update: updateReducer,
    search: searchReducer
});

export default allReducers;