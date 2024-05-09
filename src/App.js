import React from 'react';
import { Provider, connect } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CartList from './CartList';
import CartAdd from './CartAdd';
import { cartAddAll } from './actions';

class App extends React.Component {
	
	componentDidMount() {
		fetch('computer_cart').then(function(res){
			return res.json();
		}).then((data) => {
			this.props.dispatch(cartAddAll(data));
		});
	}
	
	render() {	
		 return (
			<div className="row d-flex justify-content-center container">
				<div className="col-md-8">
					<Provider store={this.props.store}>
						<Router>
							<Routes>
								<Route path="/" element={<CartList />} />
								<Route path="/add" element={<CartAdd />} />
							</Routes>
						</Router>
					</Provider>
				</div>
			</div>
		);
	}
}

export default connect()(App);