import { LOADING_START, LOADING_SUCCESS, LOADING_FAILED, RECEIVE_EVENTS } from '../actions/serverActions';

export function events (state = [], action) {
  switch (action.type) {
  case RECEIVE_EVENTS:
    return action.events;
  default:
    return state;
  }
}

export function loading (state = false, action) {
  switch (action.type) {
    case LOADING_START:
      return  true;
    case RECEIVE_EVENTS:
    case LOADING_FAILED:
      return false;
    default:
      return state;
    }
}