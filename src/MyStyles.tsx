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
     .loading {
    width: 2rem;
    height: 2rem;
    border: .5rem solid  ${({ theme }) => theme.circle.bColor};
    border-left-color: transparent;
    border-radius: 50%;
    animation: loading  1s infinite;
  }

  @keyframes loading {
     to{
      transform: rotate(360deg);
     }
    
  }
    
`;

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  margin: 0.5rem auto;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  max-width: 60rem;
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

export const DivFlex = styled.div`
  flex: 1 1 4rem;
  padding: 0.2rem;
  border: 2px solid ${({ theme }) => theme.circle.bColor};
  box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.circle.bColor};
  font-size: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  span {
    font-weight: bold;
  }
  span + span {
    margin-left: 0.5rem;
  }

  .react-icons {
    background-color: #3f3a3a;
    border: 1px solid #333;
    font-size: 3.5rem;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.5rem;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    z-index: 10000;
  }
  img {
    width: 8rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SeeMore = styled.button`
  position: fixed;
  width: 10rem;
  text-align: center;
  bottom: 2rem;
  font-weight: bold;
  border: none;
  left: 26rem;
  right: 10rem;
  z-index: 1000;
  cursor: pointer;
  background-color: blue;
  padding: 1rem;
  color: white;
  outline: none;
  border-radius: 0.5rem;
  transition: 0.3s;

  &:hover {
    background-color: #0303b8;
  }
`;
