export function manageFriends(state, action){
  if(action.type === 'ADD_FRIEND') {
    return {...state, friends: [ ...state.friends, action.payload]}
  } else if(action.type === 'REMOVE_FRIEND') {
    let remove = state.friends.findIndex(friend => friend.id === action.payload)
    return {...state, friends: [...state.friends.slice(0, remove), ...state.friends.slice(remove + 1)]}
  } else {
    return state
  }
}
