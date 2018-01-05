import React from 'react'

class SignupForm extends React.Component {
    render() {
        return (
            <form id="signup-form" className="form-horizontal" method="post" action="/signup">
                <fieldset>
                    <legend>Signup</legend>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="first_name">First Name</label>
                        <div className="col-md-4">
                            <input id="first_name" name="first_name" type="text" placeholder="First Name" className="form-control input-md" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="last_name">Last Name</label>
                        <div className="col-md-4">
                            <input id="last_name" name="last_name" type="text" placeholder="Last Name" className="form-control input-md" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="username">Username</label>
                        <div className="col-md-4">
                            <input id="username" name="username" type="text" placeholder="Username" className="form-control input-md" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="email">Email</label>
                        <div className="col-md-4">
                            <input id="email" name="email" type="text" placeholder="Email" className="form-control input-md" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="password">Password</label>
                        <div className="col-md-4">
                            <input id="password" name="password" type="password" placeholder="Password" className="form-control input-md" required />
                            <span className="help-block">Must be at least 8 characters</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="password_confirm">Password Confirm</label>
                        <div className="col-md-4">
                            <input id="password_confirm" name="password_confirm" type="password" placeholder="Password Confirm" className="form-control input-md" required />
                            <span className="help-block">Enter your password again</span>
                        </div>
                    </div>
                    <button className="btn btn-primary center-block" type="submit" onClick={this.props.submitForm}>Submit</button>
                </fieldset>
            </form>
        )
    }
}

export default SignupForm