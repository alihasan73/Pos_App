const init = {
	id: "",
};

function casherReducer(state = init, action) {
	if (action.type == "history") {
		return {
			...state,
			id: action.payload.id,
		};
	}
	return state;
}

export default casherReducer;
