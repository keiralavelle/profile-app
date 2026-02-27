import { useReducer, useRef, useEffect } from "react";
import formReducer from "../reducers/formReducer";
import styles from "../styles/addProfileForm.module.css";
import { useNavigate } from "react-router-dom";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) =>
  String(s ?? "")
    .trim()
    .replace(/\s+/g, " ");

const initialState = {
  values: {
    name: "",
    title: "",
    email: "",
    bio: "",
    image: null,
  },
  error: "",
  isSubmitting: false,
  success: "",
};

const AddProfileForm = ({ onAddProfile }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { values, error, isSubmitting, success } = state;

  const { name, title, email, bio, image } = values;
  const navigate = useNavigate();

  const fieldRef = useRef(null);
  console.log(fieldRef);
  useEffect(() => {
    fieldRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      const file = event.target.files[0];
      dispatch({ type: "SET_IMG", payload: file });
    } else {
      dispatch({ type: "SET_VALUES", payload: { name, value } });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "START_SUBMITTING" });
    try {
      if (
        !stripTags(trimCollapse(name)) ||
        !stripTags(trimCollapse(title)) ||
        !trimCollapse(bio) ||
        !stripTags(trimCollapse(email))
      ) {
        dispatch("EMPTY_FIELD");
        return;
      }
      console.log(`image ${image}`);
      const cleanedData = {
        id: Date.now(),
        name: stripTags(trimCollapse(name)),
        title: stripTags(trimCollapse(title)),
        email: stripTags(trimCollapse(email)),
        bio: trimCollapse(bio),
        image: URL.createObjectURL(image),
      };
      //submit the data
      onAddProfile(cleanedData);
      dispatch({ type: "ON_SUBMIT" });
      setTimeout(() => {
        dispatch({ type: "SUBMIT_SUCCESS" });
        navigate("/");
      }, 1000);
    } catch (error) {
      dispatch({ type: "SYSTEM_ERROR", payload: error.message });
    } finally {
      dispatch({ type: "AFTER_SUBMIT" });
    }
  };

  const disabled =
    !stripTags(trimCollapse(name)) ||
    !stripTags(trimCollapse(title)) ||
    !trimCollapse(bio) ||
    !stripTags(trimCollapse(email)) ||
    isSubmitting ||
    error !== "";

  return (
    <form onSubmit={handleSubmit} className={styles["add-profile"]}>
      <label htmlFor="name">Name</label>
      <input
        ref={fieldRef}
        id="name"
        name="name"
        type="text"
        required
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        required
        value={title}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="bio">Add description</label>
      <textarea
        id="bio"
        name="bio"
        required
        value={bio}
        maxLength={200}
        onChange={handleChange}
      />
      <label htmlFor="image">Upload an image</label>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      <button disabled={disabled}>Submit</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default AddProfileForm;