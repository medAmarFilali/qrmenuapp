import { ADD_RESTAURANT_INFO } from "../actions/dataAction";

const initState = {
  name: "",
  address: "",
  phone: "",
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
    default:
      return state;
  }
};

export default dataReducer;
