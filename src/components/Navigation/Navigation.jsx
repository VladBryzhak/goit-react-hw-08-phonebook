import React from 'react';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ''}`
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};