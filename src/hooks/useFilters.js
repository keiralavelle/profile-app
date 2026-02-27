import { useState, useCallback } from "react";

const useFilters = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const handleChangeTitle = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const handleSearch = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setTitle("");
    setName("");
  }, []);

  return {
    title,
    name,
    handleChangeTitle,
    handleSearch,
    handleClear,
  };
};

export default useFilters;