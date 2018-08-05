import constants from './../actions/constants'

let defaultState = {
  testing: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.TESTING:
      return { ...state, testing: !state.testing }
    default:
      return state
  }
}