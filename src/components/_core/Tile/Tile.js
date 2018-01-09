import React, { Component } from 'react';

export const createTile = WrappedComponent => {
	return class CreateTile extends Component {
		state = {
			tileActive: false,
			lastKeyPressed: null,
			mouseX: 0,
			mouseY: 0,
		};

		render() {
			return <WrappedComponent {...this.state} />;
		}
	};
};
