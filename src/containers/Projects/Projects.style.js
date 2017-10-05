import styled from 'styled-components';
import { red } from 'theme/variables'

export const ImageButton = styled.div`
	cursor: pointer;
	overflow: hidden;
	display: inline-block;

	& > img {
		transition: transform .5s;
	}

	&:hover{
		& > img {
			transform: scale(1.3);
		}
	}
`;

export const Index = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: -1;
	font-size: 3em;
	h1 {
		font-weight: bold;
		margin: 0;
		color: ${red};
		opacity: 0.4;
		transform: translateY(20%);
	}
`;

export const ImageContainer = styled.div`
	width: 800px;
	margin-left: auto;
	margin-right: auto;
`;

export const Title = styled.h1`
	color: ${red};
	font-weight: bold;
	margin-top: 0;
`;