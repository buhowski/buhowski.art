import { servicesGroupsConstants } from "../../pages/Services/Services.constants";
import { ServiceActionTypes } from "../actionTypes/servicesActionTypes";

const initialState = {
  currentServiceGroup: servicesGroupsConstants.engineering,
  currentService: null,
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ServiceActionTypes.SET_CURRENT_SERVICE_GROUP:
      return {
        ...state,
        currentServiceGroup: action.payload,
      };

    case ServiceActionTypes.SET_CURRENT_SERVICE:
      return {
        ...state,
        currentService: action.payload,
      };

    default:
      return state;
  }
};

export default servicesReducer;
