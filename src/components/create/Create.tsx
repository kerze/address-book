import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ContactForm from '../ContactForm';
import { createContactWatcher } from '../../store/actions/session';

class Create extends React.Component<any, any> {
  submitForm(contact: any) {
    this.props.createContactWatcher(contact);
  }
  render() {
    return (
      <div className="container">
        <h1>Create contact</h1>
        <ContactForm
          submitForm={(contact: any) => {
            this.submitForm(contact);
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ session }: any) => ({
  session: session,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ createContactWatcher }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
