import React from 'react';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={css.title}>Not Found! Error 404!!!</h1>
      <p className={css.text}>The page does not exist or has been deleted</p>
    </div>
  );
};

export default NotFoundPage;