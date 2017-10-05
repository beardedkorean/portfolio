import React, { Component } from 'react';
import { Container } from 'theme/grid';
import { Title } from './AboutMe.style'
import { H2, P } from 'theme/types';

class AboutMe extends Component {
	render() {
		return (
			<Container>
				<Title>About Me</Title>
				<H2 align="right">Blah blah? Blah blah blah</H2>
				<P align="right">Check this blah blah blah ssssssskdkksdlk lsdklsdk sdlk</P>
			</Container>
		);
	}
}

export default AboutMe;