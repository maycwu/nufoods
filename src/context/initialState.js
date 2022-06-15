import { fetchUser, fetchCart } from '../utils/fetchLocalStorageData';

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
  cartItems: null, 
  foodItems: null,
  cartShow: false,
};
