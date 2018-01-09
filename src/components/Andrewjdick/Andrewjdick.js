import React, { Component } from 'react';
import { createTile } from '../_core/Tile/Tile';

class Andrewjdick extends Component {
	render() {
		return (
			<span>
				To get started, edit <code>src/App.js</code> and save to reload.
			</span>
		);
	}
}

const TileAndrewjdick = createTile(Andrewjdick);
export default TileAndrewjdick;
