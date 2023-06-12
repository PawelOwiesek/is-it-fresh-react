import { Title, StyledHeader, StyledClock } from "./styled";

const Header = ({ title, clock }) => {
  return (
    <StyledHeader>
      <Title>{title}</Title>
      <StyledClock>{clock}</StyledClock>
    </StyledHeader>
  );
};

export default Header;
