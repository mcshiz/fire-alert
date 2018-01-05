import React from 'react'

class AddRecipient extends React.Component {
    render() {
        return (
            <form id="add-recipient-form" className="form-horizontal" method="post" action="/recipients">
                <fieldset>
                    <legend>Add Recipient</legend>
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
                        <label className="col-md-4 control-label" htmlFor="email">Email</label>
                        <div className="col-md-4">
                            <input id="email" name="email" type="text" placeholder="Email" className="form-control input-md" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="phone">Phone Number</label>
                        <div className="col-md-4">
                            <input id="phone" name="phone" type="text" placeholder="(555)123-9876" className="form-control input-md" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="status">Status</label>
                        <div className="col-md-4">
                            <select name="status" id="status" className="form-control">
                                <option value="1">Enabled</option>
                                <option value="0">Disabled</option>
                            </select>
                            <span className="help-block">Enable Notifications?</span>
                        </div>
                    </div>
                    <button className="btn btn-primary center-block" type="submit" onClick={this.props.submitForm}>Submit</button>
                </fieldset>
            </form>
        )
    }
}
export default AddRecipient