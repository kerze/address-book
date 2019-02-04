import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Redirect } from 'react-router';
import ContactForm from '../ContactForm';
import { updateContactWatcher } from '../../store/actions/session';

class Edit extends React.Component<any, any> {
  submitForm(contact: any) {
    this.props.updateContactWatcher(contact);
  }
  render() {
    const { filterList } = this.props;
    if (!filterList.length) {
      return <Redirect to="/list" />;
    }
    const contactEdit = filterList.find(
      (contact: { id: number }) => contact.id == this.props.match.params.id
    );
    return (
      <div className="container">
        <h1>Edit contact</h1>
        <ContactForm
          submitForm={(contact: any) => {
            this.submitForm(contact);
          }}
          contactEdit={contactEdit}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ session }: any) => ({
  filterList: session.filterList,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateContactWatcher }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
