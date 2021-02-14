import styled from 'styled-components';

const Style = styled.div`

    button{
        background-color : ${({theme}) => theme.colors.element};
        color: ${({theme}) => theme.colors.text};
        border: unset;
        outline: unset;
    }
 
`;

export default Style;