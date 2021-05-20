import { combineReducers } from 'redux';
import types from './contact-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      const findContact = state.find(
        ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
      );

      if (!findContact) {
        return [...state, payload];
      } else {
        alert(`${payload.name} is already in contacts`);
        return state;
      }

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const store = combineReducers({ items, filter });

export default store;
