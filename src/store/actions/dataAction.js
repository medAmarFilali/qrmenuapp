export const ADD_RESTAURANT_INFO = "ADD_RESTAURANT_INFO";
export const CREATE_NEW_MENU = "CREATE_NEW_MENU";

export const restaurantData = (restaurantInfo) => {
  return { type: ADD_RESTAURANT_INFO, payload: restaurantInfo };
};

export const createNewMenu = () => {
  return {
    type: CREATE_NEW_MENU,
  };
};
