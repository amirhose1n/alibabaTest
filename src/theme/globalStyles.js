import styled,{ createGlobalStyle  } from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
`;

export const GlobalStyles = createGlobalStyle`
  margin:0 auto;

  p{
    line-height:28px;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
  }

  .reverse{
    transform: scaleX(-1);
  }

  .radius-5{
    border-radius:5px;
    overflow:hidden;
  }

  .radius-10{
    border-radius:10px;
    overflow:hidden;
  }

  .cursor-pointer{
    cursor: pointer;
  }

  .box-shadow-default{
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }


  .font-weight-normal{
    font-weight:300;
  }
  .font-weight-bold{
    font-weight:600;
  }
  .font-weight-extrabold{
    font-weight:800;
  }

  .font-size-small{
    font-size:14px;
  }
  .font-size-medium{
    font-size:16px;
  }

  .opacity-8{
    opacity:.8;
  }


`;
