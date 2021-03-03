import { StyledLink } from "../../styles/global";
import { StyledHeader, StyledNav, StyledLogo } from "./styles";
import "./glitch.scss";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLink to="/"> HOME </StyledLink>
        <StyledLink to="/resume"> RESUME </StyledLink>
        <StyledLogo>
          <h1 class="glitch" data-text="abdiel martins">
            abdiel martins
          </h1>
          <span class="sub">SOFTWARE DEVELOPER - プログラマ</span>
        </StyledLogo>
        <StyledLink to="/about"> ABOUT </StyledLink>
        <StyledLink to="/contact"> CONTACT </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
