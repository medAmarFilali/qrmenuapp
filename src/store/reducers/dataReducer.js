import { ADD_RESTAURANT_INFO, CREATE_NEW_MENU } from "../actions/dataAction";

const initState = {
  name: "Boulila",
  address: "Rue de france",
  phone: "0551123456",
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_RESTAURANT_INFO:
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        phone: action.payload.phone,
      };
    case CREATE_NEW_MENU: {
      return {
        ...state,
        menu: {
          Name: "",
          platdujour: "",
          dishes: [],
        },
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
