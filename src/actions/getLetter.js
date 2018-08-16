export const GET_LETTER= 'GET_LETTER'


export function getLetter(letter) {
  return {
    type: GET_LETTER,
    payload: letter
  }
}
