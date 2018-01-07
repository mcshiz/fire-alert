import React from 'react'
import history from '../history';

class NotFound extends React.Component {

    render() {
        return (
            <div className='text-center'>
            <h1>Page Not Found</h1>
            <span>
                <button onClick={() => history.goBack()}>Go Back</button>
            </span>
            </div>
        )
    }
}

export default NotFound