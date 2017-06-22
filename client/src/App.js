import React, {Component} from 'react';
import './App.css';

class App extends Component {
	state = {
		stories: [],
	};

	componentDidMount() {
		fetch('/stories').
				then(res => res.json()).
				then(stories => this.setState({stories}));
	}

	render() {
		return (
				<div className="App">
					<h1>Donation Stories</h1>
					{this.state.stories.map(story =>
							<div key={story.id}>
								{story.name}, {story.description}, {story.photoURL}
							</div>,
					)}
				</div>
		);
	}
}

export default App;