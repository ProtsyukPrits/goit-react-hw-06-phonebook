import { PropTypes } from 'prop-types';
import ContactEl from 'components/ContactEl';
//
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromContact } from 'redux/contactsSlice';
import { getFilter, getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filtringContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filtringContacts.map(contact => (
        <ContactEl
          contact={contact}
          key={contact.id}
          onDelete={() => dispatch(deleteFromContact(contact.id))}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filtringContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactList;