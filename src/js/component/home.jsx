import React from "react";
import { Component } from "react";
import ReactDOM from 'react-dom';



//create your first component
export default class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			item_input: '',
			items: []
		}
		this.update = this.update.bind(this);
		this.add = this.add.bind(this);
	}

	update(event) {
		this.setState({
			item_input: event.target.value
		});
	}

	add() {
		this.setState(prev => {
			return {
				item_input: '',
				items: prev.items.concat(prev.item_input)
			};
		});
	}

	render() {
		return (
			<div id='todo'>
				<h4>Todo List</h4>

				<input placeholder="add task"
					type="text"
					value={this.state.item_input}
					onChange={this.update} />
				<button type="button"
					onClick={this.add}>add item</button>

				<ul>
					{
						this.state.items.map((item, i) => (
							<li>{item}</li>
						))
					}
				</ul>
			</div>
		);
	}



};


