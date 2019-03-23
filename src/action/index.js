import { SELECTED_SHOP } from '../constants/index';

export function selectShop(shop) {
  return {
    type: SELECTED_SHOP,
    payload: shop
  }
}
