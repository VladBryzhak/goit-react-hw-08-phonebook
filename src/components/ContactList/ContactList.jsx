import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <ul className={css['contact-list']}>
      {filteredContacts?.map(contact => {
        return (
          <ContactListItem
            contact={contact}
            key={contact.id}
            handleDeleteContact={handleDeleteContact}
          />
        );
      })}
    </ul>
  );
};