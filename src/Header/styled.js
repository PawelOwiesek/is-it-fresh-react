import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 350px;
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    text-align: center;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  grid-column-start: 2;
  color: #ffffff;
`;

export const StyledClock = styled.p`
  display: grid;
  justify-self: self-end;
  max-width: 350px;
  padding: 10px;
  margin: 15px;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  grid-column-start: 3;
  align-self: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    align-self: center;
    font-size: 15px;
  }
`;
