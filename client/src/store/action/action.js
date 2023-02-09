import { FETCH_EDITORS } from "./actionType";
const baseUrl = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";

export const fetchEditorSuccess = (payload) => {
  return {
    type: FETCH_EDITORS,
    payload,
  };
};

export const fetchEditor = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("failed load data");
      }
      const data = await response.json();
      dispatch(fetchEditorSuccess(data));
    } catch (error) {
      throw error;
    }
  };
};
