import React from 'react';

class ContactForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: (props.contactEdit && props.contactEdit.id) || '',
      first_name: (props.contactEdit && props.contactEdit.first_name) || '',
      last_name: (props.contactEdit && props.contactEdit.last_name) || '',
      city: (props.contactEdit && props.contactEdit.city) || '',
      first_nameErrorClass: '',
      last_nameErrorClass: '',
      cityErrorClass: '',
    };
  }
  inputHandleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
      [`${e.target.name}ErrorClass`]: '',
    });
  };
  onSubmit = (e: any) => {
    e.preventDefault();
    this.invalidFirstName();
    this.invalidLastName();
    this.invalidCity();
    if (this.invalidFirstName() || this.invalidLastName() || this.invalidCity()) {
      return false;
    }
    this.props.submitForm(this.state);
  };
  invalidFirstName() {
    if (this.state.first_name === '') {
      this.setState({ first_nameErrorClass: 'error-first-name' });
      return true;
    }
  }
  invalidLastName() {
    if (this.state.last_name === '') {
      this.setState({ last_nameErrorClass: 'error-last-name' });
      return true;
    }
  }
  invalidCity() {
    if (this.state.city === '') {
      this.setState({ cityErrorClass: 'error-city' });
      return true;
    }
  }

  render() {
    const {
      id,
      first_name,
      last_name,
      city,
      first_nameErrorClass,
      last_nameErrorClass,
      cityErrorClass,
    } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="card text-center p-5">
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${first_nameErrorClass}`}
            placeholder="First name"
            value={first_name}
            name="first_name"
            onChange={this.inputHandleChange}
          />
          {first_nameErrorClass !== '' && <span className="error">First name is required</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${last_nameErrorClass}`}
            placeholder="Last name"
            value={last_name}
            name="last_name"
            onChange={this.inputHandleChange}
          />
          {last_nameErrorClass !== '' && <span className="error">Last name is required</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${cityErrorClass}`}
            placeholder="City"
            value={city}
            name="city"
            onChange={this.inputHandleChange}
          />
          {cityErrorClass !== '' && <span className="error">City is required</span>}
        </div>
        <button type="submit" className="btn btn-primary block mx-auto">
          {id ? 'Save' : 'Create'}
        </button>
      </form>
    );
  }
}
export default ContactForm;
