import { NEW_GAME, MAKE_GUESS } from '../actions/game'

const reducer = (state = [], action = {}) => {
  switch(action.type) {
  case NEW_GAME:
    return action.payload.guesses
  case MAKE_GUESS:
    return [
      ...state,
      action.payload.guess
    ]
  default:
    return state
  }
}
export default reducer
