import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ListTable from './ListTable';
import Filter from '../Filter';
import { removeContactWatcher } from '../../store/actions/session';

class List extends React.Component<any, any> {
  removeContact(contact: any) {
    this.props.removeContactWatcher(contact);
  }
  render() {
    const { filterList } = this.props;
    return (
      <div className="wrapper">
        <Filter />
        <ListTable
          list={filterList}
          removeContact={(contact: any) => {
            this.removeContact(contact);
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ session }: any) => ({
  filterList: session.filterList,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ removeContactWatcher }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
