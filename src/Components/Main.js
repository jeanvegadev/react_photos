import {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import {Link, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {removePost} from '../redux/actions'


class Main extends Component {
    constructor(){
        super()
    }
    state = { loading: true}
    componentDidMount(){
        this.props.startLoadingPost().then(()=>{
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }
    render(){
        console.log('Redux...')
        console.log(this.props)
        return(
            <div>
                <h1>
                <Link to="/"> PhotoWall </Link>
                </h1>
                <Routes>
                <Route exact path="/" element={(
                        <div>
                            <PhotoWall {...this.props}/>
                        </div> 
                    )
                }/>
                
                <Route path="/AddPhoto" element={
                    <AddPhoto {...this.props}/>
                }/>

                <Route path="/single/:id" element={
                    <Single loading={this.state.loading} {...this.props}/>
                }/>

                </Routes>
            </div>
        )
    }
}

export default Main