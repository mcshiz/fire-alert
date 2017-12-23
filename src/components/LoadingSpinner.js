import { PulseLoader } from 'halogenium';
import React from 'react'

class LoadingSpinner extends React.Component {

    render(){
        return (
            <li className='list-group-item col-xs-12 loading-spinner-list-item text-center'>
                <PulseLoader color="#f3501f" size="20px" margin="4px"/>
            </li>
        )

    }
}

export default LoadingSpinner


