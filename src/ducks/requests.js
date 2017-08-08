// Actions
const UPDATE_STATUS = "payback/requests/UPDATE_STATUS";
const ADD_MESSAGE = "payback/requests/ADD_MESSAGE";

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case UPDATE_STATUS:
      return state.map(
        request =>
          request.id === action.payload.id
            ? { ...request, status: action.payload.status }
            : request
      );
    case ADD_MESSAGE:
      return state.map(
        request =>
          request.id === action.payload.id
            ? {
                ...request,
                messages: [...request.messages, action.payload.message]
              }
            : request
      );
    default:
      return state;
  }
}

// Action Creators
export function updateRequestStatus(request, status) {
  return {
    type: UPDATE_STATUS,
    payload: {
      request,
      status
    }
  };
}

export function addRequestMessage(request, message) {
  return {
    type: ADD_MESSAGE,
    payload: {
      request,
      message
    }
  };
}

// Sagas
