import styled from "styled-components";

const Nav = styled.div``;
const NavContainer = styled.div``;
const Logo = styled.span``;
const NavItems = styled.div``;
const NavRegister = styled.button``;
const NavLogin = styled.button``;

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
