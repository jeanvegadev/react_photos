import {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {removePost} from '../redux/actions'


class Main extends Component {
    constructor() {
        super()
        // this.state = {
        //     posts:[],
        //     screen:'photos'
        // }
        // console.log('constructor');
        // this.removePhoto = this.removePhoto.bind(this)
        // this.addPhoto = this.addPhoto.bind(this)
    }
    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevState.posts)
    //     console.log(this.state)
    // }
    render(){
        console.log('Redux...')
        console.log(this.props)
        return(
            <div>
                <Routes>
                <Route exact path="/" element={(
                        <div>
                            <Title title={"PhotoWall"}/>
                            <PhotoWall {...this.props}/>
                            {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/> */}
                        </div> 
                    )
                }/>
                
                {/* <Route path="/AddPhoto" element={<AddPhoto onAddPhoto={
                    (addedPhoto)=> {
                        this.addPhoto(addedPhoto);
                    }
                }/>}/> */}
                </Routes>
            </div>
        )
    }
}

export default Main