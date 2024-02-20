import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import { toast } from 'react-toastify';
import { selectIsLoading } from '../../redux/auth/selectors';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(registerUser(formData))
      .unwrap()
      .then(() => {
        toast(`${formData.name} successfully registered!`);
        form.reset();
      })
      .catch(error => {
        toast(`The user ${formData.name} could not be registered: ${error}`);
      });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <span>Username</span>
        <input type="text" name="name" placeholder="John Smith" required />
      </label>
      <label className={css.label}>
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="user@example.com"
          required
        />
      </label>
      <label className={css.label}>
        <span>Password</span>
        <input type="password" name="password" required />
      </label>
      <button type="submit" disabled={isLoading}>
        Register
      </button>
    </form>
  );
};