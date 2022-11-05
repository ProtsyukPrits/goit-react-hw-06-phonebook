import { ContactContainer, Header, Navigation } from './App.styled';
import Contacts from './pages/Contacts';
import { Link } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import Phonebook from './pages/Phonebook';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';

export const App = () => {
  return (
    <ContactContainer>
      <Header>
        <Navigation>
          <Link to="/">
            <AiOutlinePhone size="30" />
            Phonebook
          </Link>

          <Link to="/contacts">
            <BsBook size="30" />
            Contacts
          </Link>
        </Navigation>
      </Header>

      <Routes>
        <Route path="/" element={<Phonebook />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Phonebook />} />
      </Routes>
    </ContactContainer>
  );
};
