import React, { Component } from "react";

import Main from "./components/Main";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: {} };
	}
	callAPI() {
		fetch("http://localhost:9000/testAPI").then((res) => this.setState({ apiResponse: res }));
	}
	componentDidMount() {
		this.callAPI();
	}
	render() {
		return (
			<div>
				<Main />
				{console.log(this.state.apiResponse)}
			</div>
		);
	}
}

export default App;
