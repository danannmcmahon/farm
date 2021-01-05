import configureMockStore from 'redux-mock-store';
import { fetchResultsSuccess } from '../index';

const mockStore = configureMockStore();
const store = mockStore({});

describe('fetch results Success', () => {
    it('creates UPRES when dispatched by fetch results', () => {
      store.dispatch(fetchResultsSuccess(
        {
            "name":"John",
            "category":"sheep",
            "age":6,
            "output":[
                {"product":"wool","frequency":"yearly","quantity":5.3},
                {"product":"meat","frequency":"once","quantity":23.72}],
            "life-expectancy":"12"
        }
      ));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  