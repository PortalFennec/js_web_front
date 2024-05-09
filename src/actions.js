export const CART_ADD = 'CART_ADD'
export const CART_ADD_ALL = 'CART_ADD_ALL'
export const CART_DELETE = 'CART_DELETE'
export const CART_UPDATE_STATE = 'CART_UPDATE_STATE'

export function cartAdd(_id, processor, motherboard, videocard, RAM, drive, power, cooler, casing, email){
	return {type: CART_ADD, _id, processor, motherboard, videocard, RAM, drive, power, cooler, casing, email};
}

export function cartAddAll(cart_list){
	return {type: CART_ADD_ALL, cart_list};
}

export function cartDelete(_id){
	return {type: CART_DELETE, _id};
}

export function cartUpdateState(_id){
	return {type: CART_UPDATE_STATE, _id};
}