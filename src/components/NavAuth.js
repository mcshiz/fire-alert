import React from 'react'
import { Link } from 'react-router-dom'
class NavAuth extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)

    }
    componentWillMount() {
        console.log(this.props)
    }
    handleLogout(e) {
        e.preventDefault();
        this.props.logout()
    }
    render() {
        const { loggedIn, logout} = this.props;

        return (
            <span>
                { loggedIn ?
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><a onClick={this.handleLogout.bind(this)}>Logout</a></li>
                    </ul>
                :
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                }
            </span>

        )
    }
};
export default NavAuth;