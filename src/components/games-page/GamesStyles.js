import s from 'styled-components';

export const GameCard = s.section`
position: relative;
border: 1px solid black;
width: 350px;
height: 400px;
border-radius: 3px;
box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
background: url(${props => props.back});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
