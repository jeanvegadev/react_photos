import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PhotoWall(props) {
    let list_posts = props.posts.slice();
    return(
        <div>
            <Link className='addIcon' to='/AddPhoto' onClick={props.onNavigate}></Link>

            <div className='photoGrid'>
                {list_posts
                .sort(function(x,y){ 
                    return y.id - x.id
                } )
                .map((post, index) => <Photo key={index} post={post} {...props}/>)}
            </div>
        </div>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    //onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall