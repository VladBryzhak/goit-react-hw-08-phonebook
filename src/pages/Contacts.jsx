import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';
import React from 'react';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1 className="page-title">Phonebook</h1>
      <FormAddContacts />
      <h2 className="contact-title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;