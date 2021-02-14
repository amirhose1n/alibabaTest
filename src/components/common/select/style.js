import styled from 'styled-components';

const Style = styled.div`
    position : relative;
    select{
        background-color : ${({theme}) => theme.colors.element};
        color: ${({theme}) => theme.colors.text};
        border: unset;
        outline: unset;
        min-height: 48px;
        display:flex;
        align-items :center;
        min-height: 56px;
        appearance: none;
    }
   
    .select-icon{
        position: absolute;
        top: 20px;
        right: 16px;
        width:15px;
        height:15px;
    }
    select::placeholder {
        color: ${({theme}) => theme.colors.text};
        opacity: 1; /* Firefox */
    }
 
`;

export default Style;