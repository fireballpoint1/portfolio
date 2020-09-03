import React, { Component } from 'react';

class App extends Component{
	state = { displayBio: false};

	// constructor() {
	// 	super();
	// 	this.state={ displayBio: false };
	// 	this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

	// }

	toggleDisplayBio = () =>{
		this.setState({displayBio: !this.state.displayBio});
	}

	render(){	

		return (
				<div>
					<h1>Hello</h1>
					<p> My name is Mayank Modi. I am a software dev </p>
					<p>shaba daba doo. i am scooby doo</p>
					{
						this.state.displayBio ? (
							<div>
								<p>I live in India.</p>
								<p>  I love to paint grafitti</p>
								<button onClick={this.toggleDisplayBio}>Show less</button>
							</div>
						) : (
							<div>
								<button onClick={this.toggleDisplayBio}> Show more </button>
							</div>
						)
					}
				</div>
			)
	}
}

export default App;

