import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
	state = { advice: "" };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;

				this.setState({ advice });
			})