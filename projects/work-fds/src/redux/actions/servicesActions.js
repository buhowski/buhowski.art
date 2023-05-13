import { ServiceActionTypes } from "../actionTypes/servicesActionTypes";

export const setCurrentServiceGroup = (payload) => ({
  type: ServiceActionTypes.SET_CURRENT_SERVICE_GROUP,
  payload,
});

export const setCurrentService = (payload) => ({
  type: ServiceActionTypes.SET_CURRENT_SERVICE,
  payload,
});
