const INITIAL_STATE = {
  clientList: [],
};

const newClientReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEW_CLIENT': {
      const clientList = state.clientList.map((client) => client);
      clientList.push(action.state.client)
      return { clientList };
    }
    default: return state;
  }
}

export default newClientReducer;
