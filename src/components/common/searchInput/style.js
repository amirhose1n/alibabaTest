import styled from 'styled-components';

const Style = styled.div`

    input{
        background-color : ${({theme}) => theme.colors.element};
        color: ${({theme}) => theme.colors.text};
        border: unset;
        outline: unset;
        min-height: 56px;
    }
    input::placeholder {
        color: ${({theme}) => theme.colors.text};
        opacity: 1; /* Firefox */
    }
    .search-box{
        min-height: 56px;
        background-color : ${({theme}) => theme.colors.element};
        color: ${({theme}) => theme.colors.text};
        display:flex;
        width:100px;
        padding-left:20px;
        align-items:center;
        justify-content:center;
        svg{
            min-width: 26px;
            min-height: 26px;
        }
    }
 
`;

export default Style;