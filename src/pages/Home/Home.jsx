import React from 'react';
import css from './Home.module.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className={css.title}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Phone icon">
          ☎
        </span>
      </h1>
    </div>
  );
};

export default Home;