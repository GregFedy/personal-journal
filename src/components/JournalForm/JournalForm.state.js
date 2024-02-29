export const INITIAL_STATE = {
  isValid: {
    title: true,
    date: true,
    text: true
  },
  values: {
    title: '',
    date: '',
    text: '',
    tag: ''
  },
  isFormReadyToSubmit: false
};

export const formReducer = (state, action) => {
  let titleValidity, dateValidity, textValidity;

  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, values: { ...state.values, ...action.payload } };
    case 'CLEAR_FORM':
      return {
        ...state,
        values: INITIAL_STATE.values,
        isFormReadyToSubmit: INITIAL_STATE.isFormReadyToSubmit
      };
    case 'RESET_VALIDITY':
      return { ...state, isValid: INITIAL_STATE.isValid };
    case 'SUBMIT_FORM':
      titleValidity = state.values.title?.trim().length;
      dateValidity = state.values.date;
      textValidity = state.values.text?.trim().length;

      return {
        ...state,
        isValid: {
          title: titleValidity,
          date: dateValidity,
          text: textValidity
        },
        isFormReadyToSubmit: titleValidity && dateValidity && textValidity
      };
  }
};
