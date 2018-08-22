// Variable
export const GET_CURRENCY = 'GET_CURRENCY';
// User Collection
export function getCurrency(get) {
  return {
    type: GET_CURRENCY,
    payload: {
      currency: get,
    },
  };
}
