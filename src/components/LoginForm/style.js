import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const bounceAnimation = keyframes`${fadeInDown}`;



export const Input = styled.input`
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 90%;
	animation: 1s ${bounceAnimation};
`

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid white;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
	margin-left: auto;
	color: white;
	background-color: ${props => props.color ? props.color : 'white'};
`

export const Login = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`