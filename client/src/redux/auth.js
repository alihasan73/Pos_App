const init = {
  email: "",
  password: "",
};

function userReducer(state = init, action) {
  if (action.type == "login") {
    return {
      ...state,
      id: action.payload.id,
      email: action.payload.email,
      name: action.payload.name,
      role: action.payload.role,
      avatar_url: action.payload.avatar_url,
      phone: action.payload.phone,
    };
  } else if (action.type == "logout") {
    return init;
  }

  return state;
}

export default userReducer;
