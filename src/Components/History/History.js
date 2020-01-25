import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class History extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history: []
		};
	}
	componentDidMount() {
		axios.get(`/api/get_history`).then((results) => {
			this.setState({ history: results.data });
		});
	}
	render() {
		const { history } = this.state;
		console.log(history);
		return (
			<div>
				{history ? (
					history.map((item) => {
						return (
							<div key={item.gameId}>
								{item.teams ? (
									item.teams.map((team) => {
										return <div>{team.teamId10}</div>;
									})
								) : (
									<div>no</div>
								)}
							</div>
						);
					})
				) : (
					<div>idk</div>
				)}
			</div>
		);
	}
}

export default History;
