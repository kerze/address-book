import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { getAddressListWatcher, changeFilterWatcher } from '../store/actions/session';

class Filter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      filterValue: '',
    };
  }
  componentDidMount() {
    this.props.getAddressListWatcher();
  }
  filterChange = (e: any) => {
    const { list } = this.props;
    this.setState({ filterValue: e.target.value });
    const filteredList = list.filter((contact: any) => {
      return (
        contact.first_name.toLowerCase().indexOf(e.target.value.toLowerCase()) + 1 ||
        contact.last_name.toLowerCase().indexOf(e.target.value.toLowerCase()) + 1 ||
        contact.city.toLowerCase().indexOf(e.target.value.toLowerCase()) + 1
      );
    });
    this.props.changeFilterWatcher(filteredList);
  };
  render() {
    const { filterValue } = this.state;
    return (
      <div className="container">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Filter"
            value={filterValue}
            onChange={this.filterChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ session }: any) => ({
  list: session.list,
});
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getAddressListWatcher, changeFilterWatcher }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
