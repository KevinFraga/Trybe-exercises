const INTIAL_STATE = {
  user: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    addressType: '',
    resume: '',
    role: '',
    roleDescription: '',
    formError: {},
    submitted: false,
  }
};

function formReducer(state = INTIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE' :
      return { state: action.state };

    default: return state;
  }
}

export default formReducer;
