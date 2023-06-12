import styled from "styled-components";

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30px 50px;
  background-image: url(https://thumbs.dreamstime.com/z/orange-fruit-fresh-cutting-slicing-image-background-52381569.jpg);
  background-size: cover;
  row-gap: 20px;
  color: #000000;
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: 20px;
  }
`;

export const Title = styled.h2`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 4;
  align-content: center;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  font-size: 20px;
  padding-left: 10px;
  color: #040404;
`;

export const ProductImput = styled.input`
  margin-left: 10px;
  font-size: 18px;
  padding: 5px;
  max-width: 200px;
`;

export const DateInput = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 18px;
  padding: 5px;
  max-width: 150px;

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const Button = styled.button`
  grid-column-start: 2;
  margin: 0 0 10px 50px;
  font-size: 18px;
  background-color: teal;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  padding: 5px;
  max-width: 200px;
  align-self: auto;

  @media (max-width: 767px) {
    width: 100vw;
    margin: 10px 0;
    background-color: #000000;
  }
`;
