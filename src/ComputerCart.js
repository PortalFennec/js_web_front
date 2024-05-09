import React from 'react';
import { connect } from 'react-redux';

import { cartDelete } from './actions';
import { cartUpdateState } from './actions';

class ComputerCart extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.onStatusClick = this.onStatusClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	
	onStatusClick(e) {
		e.preventDefault();
		
		fetch(`computer_cart/${this.props.cart._id}`, {method: 'PATCH',
			body: JSON.stringify({
				done: !this.props.cart.done
			}),
			headers: {
				'Content-Type': 'application/json'
			}
			}).then((res) => {
			if (res.status === 200) {
				console.log('Updated');
				this.props.dispatch(cartUpdateState(this.props.cart._id));
			}
			else {
				console.log('Not updated')
			}
		});
	}
	
	onDeleteClick(e) {
		e.preventDefault();
		
		fetch(`computer_cart/${this.props.cart._id}`, {method: 'DELETE'}).then((res) => {
			if (res.status === 200) {
				console.log('Deleted')
				this.props.dispatch(cartDelete(this.props.cart._id));
			}
			else {
				console.log('Not deleted')
			}
		});
	}
	
	render() {
		return (
			<li className="list-group-item">
				{this.props.cart.done ? <div className="todo-indicator bg-success"></div> : <div className="todo-indicator bg-focus"></div>}
				<div className="widget-content p-0">
					<div className="widget-content-wrapper">
						<div className="widget-content-left">
							<div className="widget-heading">{this.props.cart.processor}</div>
							<div className="widget-heading">{this.props.cart.motherboard}</div>
							<div className="widget-heading">{this.props.cart.videocard}</div>
							<div className="widget-heading">{this.props.cart.RAM}</div>
							<div className="widget-heading">{this.props.cart.drive}</div>
							<div className="widget-heading">{this.props.cart.power}</div>
							<div className="widget-heading">{this.props.cart.cooler}</div>
							<div className="widget-heading">{this.props.cart.casing}</div>
							<div className="widget-heading">{this.props.cart.email}</div>
						</div>
						<div className="widget-content-right">
							<button className="border-0 btn-transition btn btn-outline-success" onClick={this.onStatusClick}>
								<i className="fa fa-check"></i>
							</button>
							<button className="border-0 btn-transition btn btn-outline-danger" onClick={this.onDeleteClick}>
								<i className="fa fa-trash"></i>
							</button>
						</div>
					</div>
				</div>
			</li>
		)
	}
}

export default connect()(ComputerCart);