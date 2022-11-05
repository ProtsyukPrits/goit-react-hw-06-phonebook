import ContactList from "components/ContactList"
import Filter from "components/Filter"
import { ContactsContainer, Counter } from "./Contacts.styled"
import { getContacts } from "redux/selectors"
import { useSelector } from "react-redux"
const Contacts = () => {

  const contacts = useSelector(getContacts);

  return (
    <ContactsContainer>
      <Counter>You have {contacts.length} contacts</Counter>
      <Filter />
      <ContactList/>
    </ContactsContainer>
  )
}


export default Contacts