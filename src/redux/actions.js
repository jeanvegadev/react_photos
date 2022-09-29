import { getDatabase, ref, update, onValue, remove } from "firebase/database";

export function startAddingPost(post){
    const dbf = getDatabase();
    return (dispatch) => {
        return update(ref(dbf,'posts'),{[post.id]: post}).then(()=>{
            dispatch(startLoadingPost(post))
        })
    }
}

export function startLoadingPost(){
    const dbf = getDatabase();
    const Ref = ref(dbf, 'posts');
    return (dispatch) => {
        return onValue(Ref, (snapshot)=>{
            let posts=[];
            snapshot.forEach((childSnapshot)=>{
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startRemovingPost(index, id){
    const dbf = getDatabase();
    const Ref = ref(dbf, `posts/${id}`);
    return (dispatch) => {
        return remove(Ref).then(()=>{
            dispatch(removePost(index))
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

export function loadPosts(posts){
    return{
        type: 'LOAD_POST',
        posts: posts
    }
}

export function addComment(comment, postId){
    return{
        type: 'ADD_COMMENT',
        comment: comment,
        postId: postId
    }
}