import {useState, useCallBack} from "react"; 
const useFilters = 

const [title, setTitle] = useState("");
const [name, setName] = useState("");
const handleChangeTitle = useCallBack((event) => {
    setTitle(event.target.value);
    }, []);
export default useFilters; 