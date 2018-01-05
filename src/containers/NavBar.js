import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/auth';
import NavAuth from "../components/NavAuth";

class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href="/">Fire Alert</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/notifications">Notifications</Link></li>
                            </ul>
                            <NavAuth loggedIn={this.props.loggedIn} user={this.props.user} logout={this.props.action.logout}/>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state, props) {

    return {
        loggedIn: state.auth.loggedIn,
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)


