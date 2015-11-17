import {
  ROUTER_STATE_CHANGE
} from '../actions/router';

export default function router (state = null, action) {
  switch (action.type) {
    case ROUTER_STATE_CHANGE:
      return action;
    default:
      return state;
  }
};