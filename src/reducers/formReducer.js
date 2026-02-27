const formReducer = (state, action) => {
    switch (action.type) {
      case "SET_IMG":
        const isFileOk = action.payload && action.payload.size < 1024 * 1024;
        return {
          ...state,
          values: { ...state.values, image: isFileOk ? action.payload : null },
          error: isFileOk ? "" : "Image should be less than 1 MB",
        };
      case "SET_VALUES":
        return {
          ...state,
          values: {
            ...state.values,
            [action.payload.name]: action.payload.value,
          },
        };
      case "START_SUBMITTING":
        return {
          ...state,
          isSubmitting: true,
        };
      case "EMPTY_FIELD":
        return {
          ...state,
          error: "Please fill in name, title, email, and description",
        };
      case "ON_SUBMIT":
        return {
          ...state,
          values: { name: "", title: "", email: "", bio: "", image: null },
          error: "",
          success: "Form is submitted susccesfully",
        };
      case "SUBMIT_SUCCESS":
        return {
          ...state,
          success: "",
        };
      case "SYSTEM_ERROR":
        return {
          ...state,
          error: action.payload,
        };
      case "AFTER_SUBMIT":
        return {
          ...state,
          isSubmitting: false,
        };
      default: 
        return state;
    }
  };
  
  export default formReducer;