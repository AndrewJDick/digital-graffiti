import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../../logo.svg';

const Header = styled.header`
	background-color: #222;
	padding: 20px;
	color: white;
	text-align: center;
`;

const Logo = styled.img`
	animation: App-logo-spin infinite 20s linear;
	height: 80px;

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Title = styled.h1`
	font-size: 1.5em;
`;

class GridHeader extends Component {
	render() {
		return (
			<Header>
				<Logo src={logo} alt="logo" />
				<Title>Welcome to Digital Graffiti</Title>
				<p> One commit. One component. One love </p>
			</Header>
		);
	}
}

export default GridHeader;
