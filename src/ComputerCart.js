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
				{this.props.cart.done ? 
					<div className="todo-indicator bg-success"><img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenZmcWRpaHN4Z2xheTR5bjZ6MHVhOWdmemdjNmtjaWFrc3NnOWgwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sc50PrYyrjPyUeJgUe/giphy.gif" 
					alt="я джифка" width="320px" height="240px"></img></div> : 
					<div className="todo-indicator bg-focus"><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHR4N3JtejJsZnVzeXZkbXZ2NXh3dW5ibzd1NDg2MTNrYjVtaTYwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nOe34xH1O5kEz5HoA2/giphy.gif" 
				alt="я джифка" width="320px" height="240px"></img></div>}
				<div className="widget-content p-0">
					<div className="widget-content-wrapper">
						<div className="widget-content-left">
							<div className="widget-heading">Processor: {this.props.cart.processor}</div>
							<div className="widget-heading">Motherboard: {this.props.cart.motherboard}</div>
							<div className="widget-heading">Videocard: {this.props.cart.videocard}</div>
							<div className="widget-heading">RAM: {this.props.cart.RAM}</div>
							<div className="widget-heading">Drive: {this.props.cart.drive}</div>
							<div className="widget-heading">Power: {this.props.cart.power}</div>
							<div className="widget-heading">Cooler: {this.props.cart.cooler}</div>
							<div className="widget-heading">Casing: {this.props.cart.casing}</div>
							<div className="widget-heading">Contact: {this.props.cart.email}</div>
						</div>
						<div className="widget-content-right">
							<button className="border-0 btn-transition btn btn-outline-success" onClick={this.onStatusClick}>
								<i className="fa fa-check-circle"></i>
							</button>
							<button className="border-0 btn-transition btn btn-outline-danger" onClick={this.onDeleteClick}>
								<i className="fa fa-times"></i>
							</button>
						</div>
					</div>
				</div>
			</li>
		)
	}
}

export default connect()(ComputerCart);