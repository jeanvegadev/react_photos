import React, {Component} from 'react';
import {withRouter} from './withRouter';

class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const imageDescripcion = event.target.elements.descripcion.value;
        const post = {
            id: Number(new Date()),
            description: imageDescripcion,
            imageLink: imageLink
        }
        if (imageDescripcion && imageLink){
            console.log("listo")
            this.props.startAddingPost(post)
            this.props.navigate('/')
        }
    }
    render(){
        return (
        <div>
            <div className='form'>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Link' name="link"/>
                <input type="text" placeholder='Descripcion' name="descripcion"/>
                <button>Post</button>
            </form>
            </div>
        </div>
            
        )
    }
}

export default withRouter(AddPhoto)