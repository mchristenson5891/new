import styled, { keyframes } from 'styled-components';
import { fadeInRight, fadeInLeft, fadeOutLeft } from 'react-animations';

const fadeRight = keyframes`${fadeInRight}`;

const fadeLeft = keyframes`${fadeInLeft}`;

const fadeOut = keyframes`${fadeOutLeft}`

export const Background = styled.div`
    /* background-image: url('https://i.imgur.com/LkGuWbL.jpg'); */
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
	display: flex;
	background-color: rgba(255, 255, 255, .75);
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			    0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
`

export const FormContainer = styled.div`
	margin: auto;
	width: 50%;
	animation: 1s ${fadeRight};
	/* width: 75%; */
	/* text-align: center; */

	/* position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1; */
	`



export const SignupContainer = styled.div`
	margin: auto;
	width: 50%;
	animation: 2s ${fadeLeft};
	/* position: absolute;
	top: 0;
	height: 100%;
	left: 0;
	width: 50%;
	z-index: 2;
	transition: all 0.6s ease-in-out; */
	`

export const OverlayContainer = styled.div`

`

export const Input = styled.input`
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 75%;
`