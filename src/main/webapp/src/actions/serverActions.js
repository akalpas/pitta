import fetch from 'isomorphic-fetch'

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const LOADING_START = 'LOADING_START';
export const LOADING_SUCCESS = 'LOADING_SUCCESS';
export const LOADING_FAILED = 'LOADING_FAILED';

export function loadingStart() {
	return {
	    type: LOADING_START,
	  };
}

export function receiveEvents(events) {
	return {
	    type: RECEIVE_EVENTS,
	    events: events
	  };
}

export function loadingFailed(error) {
	return {
	    type: LOADING_FAILED,
	    error: error
	  };
}