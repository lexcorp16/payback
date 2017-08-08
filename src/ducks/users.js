// Actions
const LOAD = "payback/users/LOAD";

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// Action Creators
export function loadUsers() {
  return { type: LOAD };
}

// Sagas
