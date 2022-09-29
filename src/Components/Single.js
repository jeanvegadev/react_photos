import {Component} from 'react';
import {useParams} from 'react-router-dom';
import Photo from './Photo';
import Comments from './Comments';

function Single (props) {

        let params = useParams();
        const idf = parseInt(params.id);
        console.log(idf);
        const post = props.posts.find((posta)=>posta.id===idf);
        console.log(post);
        const comments = props.comments[idf] || []
        const index = props.posts.findIndex((post=>post.Id === idf))
        if (props.loading === true){
            return <div className='loader'> ...loading </div>
        }
        else{
        return(
            <div className='single-photo'>
                <Photo post={post} {...props} key={index}/>
                <Comments startAddingComment={props.startAddingComment} comments={comments} postId={idf}/>
            </div>
             )
        }
}

export default Single