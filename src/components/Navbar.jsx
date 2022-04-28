import styled from "styled-components";

const Nav = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;
const NavContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-weight: 500;
`;
const NavItems = styled.div``;
const NavRegister = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;
const NavLogin = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo>UtsarBooking</Logo>
          <NavItems>
            <NavRegister>Register</NavRegister>
            <NavLogin>Login</NavLogin>
          </NavItems>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
