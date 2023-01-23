import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

interface Cssprops {
  left: React.CSSProperties["left"];
  top: React.CSSProperties["top"];
}
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
            cursor: pointer;
   
    }
   img{
    width: 100%;
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
export const Section = styled.section`
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 1rem;

  .photo {
    max-width: 7rem;
  }
`;

export const Circle = styled.div<Cssprops>`
  position: absolute;
  left: ${({ left }) => left + "px"};
  top: ${({ top }) => top + "px"};
  width: 1.5rem;
  height: 1.5rem;
  border: 0.4rem solid ${({ theme }) => theme.circle.color};
  border-radius: 100%;
`;
