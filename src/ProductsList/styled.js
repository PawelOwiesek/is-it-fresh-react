import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  column-gap: 10px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.blueStone};
  font-size: 20px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 95%;
    margin: 10px;
    padding: 5px;
  }
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 170px 250px 250px 200px 50px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.nobel};
  margin: 10px;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Item = styled.li`
  word-break: break-all;
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 5px;
  align-self: center;
  width: 150px;
  font-size: 18px;
  margin: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: block;
    width: 70vw;
  }
`;

export const EntryDate = styled.p`
  grid-column-start: 2;
  max-width: fit-content;
  margin: 20px;
`;

export const ExpDate = styled.p`
  grid-column-start: 3;
  max-width: fit-content;
  margin: 20px;
`;

export const Timer = styled.span`
  grid-column-start: 4;
  max-width: fit-content;
  text-align: center;
  margin: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    text-align: start;
    max-width: 80vw;
  }
`;

export const Button = styled.button`
  margin-top: 15px;
  height: 30px;
  width: 30px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-bottom: 30px;
    margin-top: 5px;
    width: 100px;
    align-self: center;
  }
`;
