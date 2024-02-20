import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContactsItems } from '../../redux/contacts/selectors';
import css from './FormAddContacts.module.css';
import { toast } from 'react-toastify';

export const FormAddContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangePhone = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const hasDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!hasDuplicateName) {
      const contactData = {
        name,
        number,
      };
      const action = addContact(contactData);
      dispatch(action);
      toast.success(`Contact ${name} successfully added`);
      resetForm();
    } else {
      toast.warning('A contact with this name already exists!');
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css['contact-form']} onSubmit={handleSubmit}>
      <label className={css['contact-form-label']}>
        <span className={css['label-text']}>Name</span>
        <input
          className={css['contact-form-input']}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name"
          required
        />
      </label>
      <label className={css['contact-form-label']}>
        <span className={css['label-text']}>Phone number</span>
        <input
          className={css['contact-form-input']}
          type="tel"
          name="phone"
          value={number}
          onChange={handleChangePhone}
          placeholder="000-00-00"
          required
        />
      </label>
      <button className={css['contact-form-btn']} type="submit">
        Add contact
      </button>
    </form>
  );
};