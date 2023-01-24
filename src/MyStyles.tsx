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
   .flex{
    display: flex;
    gap: 1rem;
    img{
      width: 7rem;
    }
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
  padding: 0.5rem;

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
