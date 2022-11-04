import { PropTypes} from 'prop-types'
import { Button, ListEl } from './ContactEl.styled';

export const ContactEl = ({ contact, onDelete }) => {
  return (
    <ListEl>
      {contact.name} : {contact.number}
      <Button
        type="button"
        onClick={onDelete(contact.id)}
      >
        Delete
      </Button>
    </ListEl>
  );
};


ContactEl.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDelete: PropTypes.func.isRequired,
};