import { GET_CURRENCY } from '../actions/allaction.js';

export function currency(state = [], action) {
  switch (action.type) {
    case GET_CURRENCY:
      return action.payload.currency;
    default:
      return state;
  }
}
