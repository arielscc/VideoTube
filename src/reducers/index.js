const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      if (state.myList.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {};
    default:
      return state;
  }
};

export default reducer;
