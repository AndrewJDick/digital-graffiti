import React, { Component } from 'react';
import Header from './components/_core/Header/Header';
import View from './components/_core/View/View';
import Andrewjdick from './components/Andrewjdick/Andrewjdick';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />

				<View>
					<Andrewjdick />
					<Andrewjdick />
					<Andrewjdick />
					<Andrewjdick />
					<Andrewjdick />
					<Andrewjdick />
				</View>
			</div>
		);
	}
}

export default App;
