export function manageFriends(state, action){
  
    switch(action.type) {
        case 'ADD_FRIEND':
            return {friends: state.friends.concat(action.friend)}
        case 'REMOVE_FRIEND':
            const removeFriend = state.friends.find(friend => {
                return friend.id === action.id
            })
            return {friends: state.friends.filter(friend => {
                return friend != removeFriend 
            })}
        default:
            return state 
    }
}
