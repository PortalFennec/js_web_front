import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import ComputerCart from './ComputerCart';

class CartList extends React.Component {
	
	render() {	
		return (
			<div className="card-hover-shadow-2x mb-3 card">
				<div className="card-header-tab card-header">
					<div className="card-header-title font-size-lg text-capitalize font-weight-normal">
						<i className="fa fa-shopping-cart"></i>&nbsp;Orders
					</div>
				</div>
			<div className="scroll-area-sm">
				<perfect-scrollbar className="ps-show-limits">
					<div style={{position: "static"}} className="ps ps--active-y">
						<div className="ps-content">
							<ul className=" list-group list-group-flush">
							{
								this.props.computer_cart.map((cart) => {
									return (
										<ComputerCart cart={cart} key={cart._id} />
									)
								})			
							}
							</ul>
						</div>
					</div>
				</perfect-scrollbar>
			</div>
				<div className="d-block text-right card-footer">
					<NavLink to='/add' className="btn btn-primary">Add cart</NavLink>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		computer_cart: [...state.computer_cart]
	}
}

export default connect(mapStateToProps)(CartList);