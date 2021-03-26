const INITIAL_STATE = {
  client: {
    name: '',
    age: 0,
    email: '',
  },
};

const newClientReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEW_CLIENT': return { client: action.state.client };
    default: return state;
  }
}

export default newClientReducer;
