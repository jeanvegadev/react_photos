import postss from '../data/posts'


const postReducer = function posts(state=postss , action){
    if (action.type === 'REMOVE_POST'){
        console.log(action.index)
    }
    
    return state
}

export default postReducer