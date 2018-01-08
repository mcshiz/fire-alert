import React from 'react'

class AddRecipient extends React.Component {
    render() {
        return (
            <form className="form-inline" action="/recipients" method='post' onSubmit={this.props.addRecipient.bind(this)}>
                <li className='recipient-item col-xs-12'>
                    <div className="form-group">
                        <input type="text" className="form-control" id="first_name" name="first_name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="last_name" name="last_name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="phone_number" name="phone_number"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email"  name="email" />
                    </div>
                    <div className="form-group">
                        <select name="status" id="status" className="form-control">
                            <option value={true}>Enabled</option>
                            <option value={false}>Disabled</option>
                        </select>
                    </div>
                    <div className="form-group pull-right">
                        <button type='submit' className='btn btn-success'>Add <i className='fa fa-check'></i></button>
                    </div>
                </li>
            </form>
        )
    }
}
export default AddRecipient