import React, { PureComponent } from 'react'
import loading from './loading.gif'
export default class spinner extends PureComponent {
    render() {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading"/>
            </div>
        )
    }
}





// <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>99+</span>