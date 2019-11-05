import { combineReducers } from 'redux';
import mainLayoutReducer from 'containers/MainLayout/reducer';
// import collectionPageReducer from 'containers/CollectionPage/reducer';

const rootReducer = combineReducers({
  mainLayout: mainLayoutReducer
  // collectionPage: collectionPageReducer
});

export default rootReducer;

// function updateColor(state, action) {
//   return {
//     ...state,
//     [action.color]: action.value
//   };
// }

// const handlers = (state, action) => {
//   return {
//     ['ActionTypes.SLIDE']: updateColor(state, action)
//   };
// };

// const reducerrrr = (state = 'initialState', action = {}) => {
//   const handler = handlers(state, action)[action.type];

//   if (handler) return handler();
//   return state;
// };

// const reduce = (initialState, handlers) => {
//   return (state = initialState, action) => {
//     const handler = handlers[action.type];
//     return handler ? handler(state, action) : state;
//   };
// };
