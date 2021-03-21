const initialState = {
  cardData: [],
};

export default function cartItem(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: action.data,
      };
      break;
    default:
      return state;
  }
}
