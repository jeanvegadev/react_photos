import postss from '../data/posts'


const postReducer = function posts(state=postss , action){
    switch (action.type){
        case 'REMOVE_POST': return state.filter(function(o){
            return o.id !== action.index
        });
        case 'ADD_POST': return [...state, action.post]
        default: return state
    }
    return state
}

export default postReducer