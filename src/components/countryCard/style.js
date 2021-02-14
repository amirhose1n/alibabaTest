import styled from 'styled-components';

const Style = styled.div`
.country-card{
    background-color:${({theme}) => theme.colors.element};
    width:100%;
    height:350px;
    padding-left:unset;
    .img-box{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div > img {
        display: block;
        height: 100%;
        margin:auto;
        min-width:100%;
    }
    div {
        overflow: hidden;
        h3{
            font-size:16px;
            font-weight:600;
        }
        p{
            font-size:14px;
            font-weight:300;
            span{
                font-weight:300;
                opacity:.8;
            }
        }
    }
}
`;

export default Style;