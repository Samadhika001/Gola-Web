import { UPDATE_PACKAGE, RESET_PACKAGES } from "../constants/ActionTypes";
const initialState = {
  package: [],
};
const TravellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PACKAGE:
      return {
        ...state,
        package: [...state.package, action.data],
      };
    default:
      return state;
  }
};
export default TravellerReducer;
