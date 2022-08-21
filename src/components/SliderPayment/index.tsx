import styled from 'styled-components';

type SliderPaymentProps = {
    margin: number;
}

export const SliderPayment = styled.div<SliderPaymentProps>`
    width:100%;
    height:auto;
    border-radius:20px;
    background-color:burlywood;
    overflow: hidden;

    .slides {
        display:flex;
        height:100%;
        width:300%;
        background-color:#F3F2F2;
        margin-left:-${props => 100 * props.margin}%;
        transition:all ease .5s;
    }

    @media only screen and ( min-width: 768px ) {
        max-width:800px;
        width:100%;
    }
    
`;


