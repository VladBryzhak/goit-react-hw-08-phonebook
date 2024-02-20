import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(loginUser(formData))
      .unwrap()
      .then(() => {
        toast.success('Login successfully!');
      })
      .catch(error => {
        toast.error(`Incorrect login or password: ${error}`);
      });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <span>Email</span>
        <input type="email" name="email" placeholder="user@example.com" />
      </label>
      <label className={css.label}>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};