import resultsReducer from '../results'
import { ini } from '../results'

describe('results reducer', () => {
  it('should return the initial state', () => {
    expect(resultsReducer(undefined, {})).toMatchSnapshot()
  })

  it('should (update results) handle UPRES', () => {
    expect(
      resultsReducer(ini,
      {
        type: 'UPRES',
        payload:{"Test":"Test Value"}
      })
    ).toMatchSnapshot()
  })
})