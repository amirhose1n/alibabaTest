import styled from 'styled-components';

const Style = styled.div`
    .header-container{
        background-color : ${({theme}) => theme.colors.element};
    }

    h3{
        font-weight:800;
        font-size:22px;
    }

    p{
        font-weight :600;
        font-size:16px;

    }
`;

export default Style;