import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { logoutUser } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css['logout-btn']}
        type="button"
        onClick={() => dispatch(logoutUser())}
      >
        Logout
      </button>
    </div>
  );
};