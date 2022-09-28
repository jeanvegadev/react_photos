import { getDatabase, ref, update } from "firebase/database";

export function startAddingPost(post){
    const dbf = getDatabase();
    return (dispatch) => {
        return update(ref(dbf,'posts'),{[post.id]: post}).then(()=>{
            dispatch(addPost(post))
        })
    }
}

export function removePost(index){
    return{
        type: 'REMOVE_POST',
        index: index
    }
}

export function addPost(post){
    return{
        type: 'ADD_POST',
        post: post
    }
}

export function addComment(comment, postId){
    return{
        type: 'ADD_COMMENT',
        comment: comment,
        postId: postId
    }
}