import {Component} from 'react';
import {useParams} from 'react-router-dom';

function Single (props) {

        let params = useParams();
        console.log(params);
        return(
            <div className='single-photo'>
                hola
            </div>
        )
}

export default Single