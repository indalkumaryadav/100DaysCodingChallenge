export const add = () => {
  return {
    type: "ADD",
  };
};
export const remove = () => {
  return {
    type: "REMOVE",
  };
};
export const reset = () => {
  return {
    type: "RESET",
  };
};

export const addUser = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};
