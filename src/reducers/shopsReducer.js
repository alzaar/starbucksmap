import { SELECTED_SHOP } from '../constants/index';
const initialState = {
  shops:['shop1'],
  selectedShop: 'test shop'
}
export default function shopsReducer(state = initialState, action) {
  switch(action.type) {
    case SELECTED_SHOP:
      return Object.assign({}, state, {
        selectedShop: action.payload
      })
    default:
      return state;
  }
}
