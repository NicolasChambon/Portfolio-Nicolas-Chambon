import { legacy_createStore as createStore } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/indexReducer';

const enhancer = composeWithDevTools();

const store = createStore(reducer, enhancer);

export default store;
