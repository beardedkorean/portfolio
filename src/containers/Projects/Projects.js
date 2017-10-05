import React, { Component} from 'react';
import Zoomy from 'react-zoomy';
import {
	ImageButton, Index, ImageContainer, Title
} from './Projects.style'

import { Container, Relative, Flex } from 'theme/grid';
import { A } from 'theme/types';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
	render() {
		return (
			<Container>
			<Title>BLAH BLAH PROJECTS, YOU KNOW</Title>
			<Relative marginTop="100px" marginBottom="50px">
				<Index>
					<h1>01</h1>
				</Index>
				<h1>npm install --save <A href="#">react-zoomy</A></h1>
			</Relative>
			<Flex justify={'center'} marginBottom="5em">
				<Zoomy
				imageUrl={require('assets/chin.jpg')}
				renderThumbnail={({ showImage }) => 
					<ImageButton onClick={showImage}>
						<img src={require('assets/chin_thumbnail.jpg')} alt="smk"/>
					</ImageButton>
				}
				
				scale={[1.1, 1.1]}
				imageProps={{
					style: {
						width: '100vw',
						height: 'auto'
					}
				}}
				/>
			</Flex>
			<Relative marginBottom="50px">
				<Index>
					<h1>02</h1>
				</Index>
				<h1>npm install --save <A href="#">react-image-parallax2</A></h1>
			</Relative>
			<ImageContainer>
				<ParallaxImage reduceHeight={0.2} src={require('assets/main.jpg')}/>
			</ImageContainer>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Container>	
			);
	}
}

export default Projects;