import { combineReducers } from 'redux';

import {CART_ADD, CART_ADD_ALL, CART_DELETE, CART_UPDATE_STATE} from './actions';

function carto(state = [], action) {
	switch (action.type) {
		case CART_ADD:
			return [
			...state, 
				{
					_id: action._id, 
					processor: action.processor, 
					motherboard: action.motherboard, 
					videocard: action.videocard,
					RAM: action.RAM,
					drive: action.drive,
					power: action.power,
					cooler: action.cooler,
					casing: action.casing,
					email: action.email,
					done: false
				}
			]
		case CART_ADD_ALL:
			return [
				...action.cart_list
			]
		case CART_DELETE:
			return state.filter(function(cart) {
					return cart._id !== action._id;
			})
		case CART_UPDATE_STATE:
			return state.map(function(cart) {
				if (cart._id === action._id) {
					return {...cart, done: !cart.done}
				}
				return cart
			})
		default:
			return state
	}
}

export default combineReducers({
	computer_cart: carto
})
