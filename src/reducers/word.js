import { randomWord } from '../lib/game'
import { NEW_GAME } from '../actions/game'

export default (state = randomWord(), action = {}) => {
  switch(action.type) {
  case NEW_GAME:
    return action.payload.word
  default:
    return state
  }
}
