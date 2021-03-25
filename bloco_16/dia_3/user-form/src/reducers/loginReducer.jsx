const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'VALUE_UPDATE': return { state: action.state };
    default: return state;
  }
}

export default loginReducer;
