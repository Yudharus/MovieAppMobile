const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  data: {
    nowPlaying: [],
    popular: [],
    topRated: []
  },
  isLoading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        ...state,
        data: action.newValue,
      };
    case 'CHANGE_ISLOADING':
      return {
        ...state,
        isLoading: action.newValue,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
