import React from 'react'
import PropTypes from 'prop-types'
import '../styles/RecipientList.css'

class ListRecipients extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let Recipients = this.props.recipients.map((recipient, idx) => (
            <li className='recipient-item col-xs-12' key={idx}>
                <form className="form-inline" onSubmit={this.props.applyEdits.bind(this, recipient)} method='put' name={idx}>
                    <div className="form-group">
                            <input type="text" className="form-control" id="first_name" value={recipient.first_name} onChange={this.props.editRecipient.bind(this, recipient)}/>
                    </div>
                    <div className="form-group ">
                        <input type="text" className="form-control" id="last_name" value={recipient.last_name} onChange={this.props.editRecipient.bind(this, recipient)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="phone_number" value={recipient.phone_number}onChange={this.props.editRecipient.bind(this, recipient)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" value={recipient.email} onChange={this.props.editRecipient.bind(this, recipient)} />
                    </div>
                    <div className="form-group">
                        <select name="status" id="status" className="form-control " value={recipient.status} onChange={this.props.editRecipient.bind(this, recipient)}>
                            <option value={true}>Enabled</option>
                            <option value={false}>Disabled</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type='submit' disabled={true} className='btn btn-primary submit' ><i className='fa fa-check'></i></button>
                        <button type='button' className='btn btn-danger remove' onClick={this.props.deleteRecipient.bind(this, recipient)}><i className='fa fa-trash'></i></button>
                    </div>
                </form>
            </li>
        ));
        return (
            <span>
            {Recipients}
            </span>
        )
    }
}
ListRecipients.propTypes = {
    recipients: PropTypes.array.isRequired,
    deleteRecipient: PropTypes.func.isRequired,
    editRecipient: PropTypes.func.isRequired,
    applyEdits: PropTypes.func.isRequired
}
export default ListRecipients;