import styled from 'styled-components';
import { cream } from 'theme/variables';

export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 80vw;
	top: 10vh;
	height: 80vh;
	background-image: url(${require('assets/back.png')});
	background-color: ${cream};
	background-size: 60%;
	background-repeat: no-repeat;
	background-position: center;
	z-index: -99;

`;