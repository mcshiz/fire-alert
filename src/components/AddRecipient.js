import React from 'react'
import PropTypes from 'prop-types'

class AddRecipient extends React.Component {
    render() {
        return (
            <form className="form-inline" action="/recipients" method='post' onSubmit={this.props.addRecipient.bind(this)}>
                <li className='recipient-item'>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <input type="text" className="form-control" id="first_name" name="first_name" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="phone_number" name="phone_number" placeholder="Phone Number"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email"  name="email" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <select name="status" id="status" className="form-control">
                                <option value={true}>Enabled</option>
                                <option value={false}>Disabled</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <button type='submit' className='btn btn-success'>Add <i className='fa fa-check'></i></button>
                        </div>
                    </div>
                </li>
            </form>
        )
    }
}
AddRecipient.propTypes = {
    addRecipient: PropTypes.func.isRequired
};
export default AddRecipient