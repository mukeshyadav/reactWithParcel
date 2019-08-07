import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import IconSea from "../../resources/images/ico-sea.svg";
import IconAir from "../../resources/images/ico-air.svg";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0
        padding: 0;  
        box-sizing: border-box  
    }
    body {
        font: normal 16px/normal Arial
        background-color: #fff
        color: #000
    }
`;

export const Wrapper = styled.div`
    margin: 0 auto
    padding: 20px 0
    max-width: 900px
`;

export const PageTitle = styled.h1`
    border-bottom: 1px solid #ccc;
    display: inline-block;
    font-size: 20px
    font-weight: normal
    padding: 0 10px 0 5px;
    margin-bottom: 25px
`;

export const StyledIconSea = styled.img.attrs(props => ({
  src: IconSea,
  alt: "By Sea"
}))`
  height: 25px;
  width: 25px;
`;

export const StyledIconAir = styled.img.attrs(props => ({
  src: IconAir,
  alt: "By Air"
}))`
  height: 25px;
  width: 25px;
`;

export const FlexInline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;
