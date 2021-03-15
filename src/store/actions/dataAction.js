export const ADD_RESTAURANT_INFO = "ADD_RESTAURANT_INFO";

export const restaurantData = (restaurantInfo) => {
  return { type: ADD_RESTAURANT_INFO, payload: restaurantInfo };
};
