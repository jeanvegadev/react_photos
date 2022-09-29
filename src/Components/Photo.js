import {Link} from 'react-router-dom';
import {withRouter} from './withRouter';

function Photo (props) {
    const post= props.post
    return <figure className='figure'> 
            <Link to={`/single/${post.id}`}>
                <img className='photo' src={post.imageLink} alt={post.description}/>
            </Link>
            <figcaption> <p> {post.description} </p></figcaption>
            <div className='button-container'>
            <button className='remove-button' onClick={()=>{
                console.log(post)
                props.startRemovingPost(post.id, post.id)
                props.navigate('/')
            }}>
                 Remove 
            </button>
            <Link className='button' to={`/single/${post.id}`}>
                <div className='comment-count'>
                    <div className='speech-bubble'> </div>
                    {props.comments[post.id] ? props.comments[post.id].length: 0}
                </div>
            </Link>
            </div>
            
        </figure>
    }

export default withRouter(Photo)