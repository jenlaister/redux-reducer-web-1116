export function managePresents(state, action){
  if(action.type === 'INCREASE') {
    return { numberOfPresents: +1 }
  } else {
    return state
  }
}
