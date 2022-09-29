import postss from '../data/posts'
import { combineReducers } from 'redux'

function comments(state={}, action){
    switch (action.type){
        case 'ADD_COMMENT': 
            if (!state[action.postId] ){
                return {...state, [action.postId]: [action.comment]}
            }
            else{
                return {...state,
                    [action.postId]: [...state[action.postId], action.comment]}
            }
        case 'LOAD_COMMENTS': return action.comments
            
        default: return state
    }
}

function posts(state=postss , action){
    switch (action.type){
        case 'REMOVE_POST': return state.filter(function(o){
            console.log('reducer remove post')
            console.log(action.index)
            console.log(o.id)
            return o.id !== action.index
        });
        case 'ADD_POST': return [...state, action.post]
        case 'LOAD_POST': return action.posts
        default: return state
    }
}

const rootReducer = combineReducers({comments, posts})

export default rootReducer