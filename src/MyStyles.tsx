import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
          font-family: Arial, Helvetica, sans-serif;
          background-color: ${({ theme }) => theme.colors.background};
          font-size: 1.5rem;
   
    }
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  padding: 1rem;
  outline: none;
  border-radius: 0.5rem;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background: #0303b1;
  }
`;
export const Section = styled.section``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 1rem;
`;
