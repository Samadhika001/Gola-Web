import { UPDATE_PACKAGE } from "../constants/ActionTypes";
export const UpdatePackageAction = (payload) => {
  return {
    type: UPDATE_PACKAGE,
    data: payload,
  };
};
