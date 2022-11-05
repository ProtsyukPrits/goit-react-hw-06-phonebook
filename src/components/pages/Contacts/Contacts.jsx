import ContactList from "components/ContactList"
import Filter from "components/Filter"
import { ContactsContainer } from "./Contacts.styled"

const Contacts = () => {
  return (
    <ContactsContainer>
      <Filter />
      <ContactList/>
    </ContactsContainer>
  )
}


export default Contacts