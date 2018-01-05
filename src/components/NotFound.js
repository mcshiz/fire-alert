import React from 'react'
import history from '../history';

class NotFound extends React.Component {

    render() {
        return (
            <div className='text-center'>
            <h1>Page Not Found</h1>
            <span>
                <a href="#" onClick={() => history.goBack()}>Go Back</a>
            </span>
            </div>
        )
    }
}

export default NotFound