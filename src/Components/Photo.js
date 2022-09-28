import {Link} from 'react-router-dom';

function Photo (props) {
    const post= props.post
    return <figure className='figure'> 
            <Link to={`/single/${post.id}`}>
                <img className='photo' src={post.imageLink} alt={post.description}/>
            </Link>
            <figcaption> <p> {post.description} </p></figcaption>
            <div className='button-container'>
            <button className='remove-button' onClick={()=>{
                props.removePost(post.id)
            }}>
                 Remove 
            </button>
            </div>
            
        </figure>
    }

export default Photo