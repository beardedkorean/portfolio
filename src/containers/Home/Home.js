import React, { Component, PropTypes} from 'react';
import { Container } from 'theme/grid';
import { 
	Image,
	HeroImage,
	RevealP 
} from './Home.style';
import WhenInView from 'components/WhenInView/WhenInView';

export default class Home extends Component {
	static propTypes = {};

	render() {
		return (
			<Container>
				<HeroImage>
					<h1>Go Fuck Yourself</h1>
					<h2>with a cactus</h2>
				</HeroImage>
				{/*<Image src={require('../../assets/main.jpg')} alt="main-pic"/>*/}
				<WhenInView>
				{({ isInView })=> 
				<RevealP hide={!isInView}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</RevealP>
				}
				</WhenInView>
				<WhenInView>
				{({ isInView })=> 
				<RevealP hide={!isInView}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</RevealP>
				}
				</WhenInView>
				<WhenInView>
				{({ isInView })=> 
				<RevealP hide={!isInView}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</RevealP>
				}
				</WhenInView>
				<WhenInView>
				{({ isInView })=> 
				<RevealP hide={!isInView}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</RevealP>
				}
				</WhenInView>
				<WhenInView>
				{({ isInView })=> 
				<RevealP hide={!isInView}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</RevealP>
				}
				</WhenInView>					
			</Container>
		
		);
	}

}
