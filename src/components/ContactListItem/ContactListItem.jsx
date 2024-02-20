import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, handleDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <li className={css['contact-list-item']}>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={css['contact-del-btn']}
      >
        Delete
      </button>
    </li>
  );
};