import React, {Component} from 'react';
import Modal from 'react-modal';

import '../css/App.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

class App extends Component {
	constructor() {
		super();

		this.state = {
			stories: [],
			modalIsOpen: false,
			clickedStory: null,
		};

		this.renderModal = this.renderModal.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentDidMount() {
		fetch('/stories').
				then(res => res.json()).
				then(stories => this.setState({stories}));
	}

	renderModal(story) {
		return (
				<div>
					<h2>{story.item_name}</h2>
					<div>{story.description}</div>
					<div>{story.name}</div>
				</div>
		);
	}

	openModal(story) {
		this.setState({clickedStory: story, modalIsOpen: true});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	render() {
		return (
				<div className="App">
					<h1>Story donations</h1>
					<div className="story-container">
						{this.state.stories.map(story =>
								<div className="story" key={story.id}
								     onClick={() => this.openModal(story)}>
									<img className="image"
									     src={require(`../img/${story.photoURL}`)} alt=""/>
								</div>,
						)}
						<Modal
								isOpen={this.state.modalIsOpen}
								onRequestClose={this.closeModal}
								style={customStyles}
								contentLabel="Expanded story"
						>
							{this.state.clickedStory !== null ? this.renderModal(
									this.state.clickedStory) : null}
						</Modal>
					</div>
				</div>
		);
	}
}

export default App;