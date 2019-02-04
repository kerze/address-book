import React from 'react';
import { Link } from 'react-router-dom';

const ListTable = (props: any) => {
  const { list, removeContact } = props;
  return (
    <div className="container">
      <h1>Address book</h1>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">City</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((contact: any) => (
            <tr key={contact.id}>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.city}</td>
              <td>
                <Link to={`/edit/${contact.id}`} className="mx-2 btn btn-info">
                  <i className="fas fa-pencil-alt" />
                </Link>
                <button className="mx-2 btn btn-danger" onClick={() => removeContact(contact)}>
                  <i className="fas fa-trash-alt" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListTable;
