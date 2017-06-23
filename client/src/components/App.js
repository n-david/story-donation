import React, {Component} from 'react';
import '../css/App.css';

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
					<h1>Story donations</h1>
					<div className="story-container">
						{this.state.stories.map(story =>
								<div className="story" key={story.id}>
									<img className="image"
									     src={require(`../img/${story.photoURL}`)} alt=""/>
									<div className="description">{story.description}</div>
									<div className="name"> - {story.name}</div>
								</div>,
						)}
					</div>
				</div>
		);
	}
}

export default App;