// Actions
const LOAD = "payback/beneficiaries/LOAD";

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// Action Creators
export function loadBeneficiaries() {
  return { type: LOAD };
}

// Sagas
