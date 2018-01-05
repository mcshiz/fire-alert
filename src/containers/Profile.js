import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user'


class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.action.loadUserInfo()

    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h2 className='text-center'>Hello {this.props.user.first_name}</h2>
                </div>
            </div>
        )
    };
}

function mapStateToProps(state, prop) {
    return {
        user: state.user.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(UserActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
