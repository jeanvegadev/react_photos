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
        return(
            <div className='single-photo'>
                <Photo post={post}/>
                <Comments/>
            </div>
        )
}

export default Single