import { FETCH_EDITORS } from "../action/actionType";
const initialState = { datas: [] };

export default function editorReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EDITORS:
      return {
        ...state,
        datas: action.payload,
      };

    default:
      return state;
  }
}
