import { combineReducers } from 'redux';
import { events, loading } from './server';
import router from './router';


const rootReducer = combineReducers({
	events,
	loading,
	router
});

export default rootReducer;
