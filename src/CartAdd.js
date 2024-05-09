import React from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartAdd } from './actions';

class CartAddInner extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			processor: '',
			motherboard: '',
			videocard: '',
			RAM: '',
			drive: '',
			power: '',
			cooler: '',
			casing: '',
			email: ''
		}
		
		this.onProcessorChange = this.onProcessorChange.bind(this);
		this.onMotherboardChange = this.onMotherboardChange.bind(this);
		this.onVideocardChange = this.onVideocardChange.bind(this);
		this.onRAMChange = this.onRAMChange.bind(this);
		this.onDriveChange = this.onDriveChange.bind(this);
		this.onPowerChange = this.onPowerChange.bind(this);
		this.onCoolerChange = this.onCoolerChange.bind(this);
		this.onCasingChange = this.onCasingChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
		
	}

	onProcessorChange(e) {
		e.preventDefault();
		
		this.setState({
			processor: e.target.value
		});
	}
	
	onMotherboardChange(e) {
		e.preventDefault();
		
		this.setState({
			motherboard: e.target.value
		});
	}
	
	onVideocardChange(e) {
		e.preventDefault();
		
		this.setState({
			videocard: e.target.value
		});
	}
	
	onRAMChange(e) {
		e.preventDefault();
		
		this.setState({
			RAM: e.target.value
		});
	}
	
	onDriveChange(e) {
		e.preventDefault();
		
		this.setState({
			drive: e.target.value
		});
	}
	
	onPowerChange(e) {
		e.preventDefault();
		
		this.setState({
			power: e.target.value
		});
	}
	
	onCoolerChange(e) {
		e.preventDefault();
		
		this.setState({
			cooler: e.target.value
		});
	}
	
	onCasingChange(e) {
		e.preventDefault();
		
		this.setState({
			casing: e.target.value
		});
	}
	
	onEmailChange(e) {
		e.preventDefault();
		
		this.setState({
			email: e.target.value
		});
	}

	onAddFormSubmit(e) {
		e.preventDefault()
		
		fetch('computer_cart', {method: 'POST', body: JSON.stringify({
			processor: this.state.processor,
			motherboard: this.state.motherboard,
			videocard: this.state.videocard,
			RAM: this.state.RAM,
			drive: this.state.drive,
			power: this.state.power,
			cooler: this.state.cooler,
			casing: this.state.casing,
			email: this.state.email
		}),
		headers: {
			'Content-Type': 'application/json'
		}
		}).then((res) => {
			return res.json();
		}).then((data) => {
			this.props.dispatch(cartAdd(data._id, data.processor, data.motherboard, data.videocard, data.RAM, data.drive, data.power, data.cooler, data.casing, data.email))
			this.props.history('/')
		})
	}

	render() {
		return (
			<div className="card-hover-shadow-2x mb-3 card">
				<div className="card-header-tab card-header">
					<div className="card-header-title font-size-lg text-capitalize font-weight-normal">
						<i className="fa fa-tasks"></i>&nbsp;Add Cart
					</div>
				</div>
				<div className="form-group">
					<form onSubmit={this.onAddFormSubmit}>
					<div className="widget-content">
						<div className="widget-content-wrapper">
							<input type="text" value={this.state.processor} onChange={this.onProcessorChange} placeholder='Processor' className="form-control"/>
							<input type="text" value={this.state.motherboard} onChange={this.onMotherboardChange} placeholder='Motherboard' className="form-control"/>
							<input type="text" value={this.state.videocard} onChange={this.onVideocardChange} placeholder='Videocard' className="form-control"/>
							<input type="text" value={this.state.RAM} onChange={this.onRAMChange} placeholder='RAM' className="form-control"/>
							<input type="text" value={this.state.drive} onChange={this.onDriveChange} placeholder='Drive' className="form-control"/>
							<input type="text" value={this.state.power} onChange={this.onPowerChange} placeholder='Power' className="form-control"/>
							<input type="text" value={this.state.cooler} onChange={this.onCoolerChange} placeholder='Cooler' className="form-control"/>
							<input type="text" value={this.state.casing} onChange={this.onCasingChange} placeholder='Casing' className="form-control"/>
							<input type="text" value={this.state.email} onChange={this.onEmailChange} placeholder='Email' className="form-control"/>
							<input type="submit" value="Add" className="btn btn-primary"/>
						</div>
					</div>
					</form>
				</div>
				<div className="d-block text-right card-footer">
					<NavLink to='/' className="btn btn-primary">Back to list</NavLink>
				</div>
			</div>
		)
	}
}

const CartAdd = (props) => {
	return (
		<CartAddInner {...props} history={useNavigate()} />
	)
}

export default connect()(CartAdd);