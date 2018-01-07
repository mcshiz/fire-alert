import React from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="text-center">Welcome to Fire Alert</h1>
                </div>
                <div className="row">
                    <div className="col-xs-6 text-center">
                        <Link to={{pathname: '/signup'}}>
                            <button className="btn btn-success pull-right">Signup</button>
                        </Link>

                    </div>
                    <div className="col-xs-6 text-center">
                        <Link to={{pathname: '/login'}}>
                            <button className="btn btn-success pull-left">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default LandingPage;