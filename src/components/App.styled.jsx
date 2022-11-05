import styled from "styled-components";
import {NavLink} from "react-router-dom"

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;


export const Header = styled.div`
  background: #b0c4de;
  border-radius: 2px;
`;

export const Navigation = styled.nav`
display:grid;
`;


export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: grid;
  font-weight: 400px;
  font-size: small;
  padding: 12px 8px;

  &.active {
    color: #808008;
  }
`;


export const Items = styled.div`
text-align: center;

`;