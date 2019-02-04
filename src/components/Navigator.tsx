import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/list" className="nav-link" activeClassName="active">
            Address book
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create" className="nav-link" activeClassName="active">
            Create contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigator;
