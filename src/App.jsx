import Navbar from "./components/Navbar";
import woman from "./assets/woman.png";
import man from "./assets/man.png";
import { useState, useContext, useCallback, lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfilePage from "./pages/AddProfilePage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import ProfileLayoutPage from "./pages/ProfileLayoutPage";

import "./App.css";
import ModeContext from "./context/ModeContext";

const FetchedProfilePage = lazy(() => import("./pages/FetchedProfilePage"));

function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 0,
      name: "Keira",
      title: "UX designer",
      email: "keiralavelle@gmail.com",
      bio: "hello : )",
      image: woman,
    },
    {
      id: 1,
      name: "Logan",
      title: "Frontend Web Developer",
      email: "loganportscheller@gmail.com",
      bio: "hi",
      image: man,
    },
  ]);

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

  const updateProfiles = useCallback((profile) => {
    setProfiles((pre) => [...pre, profile]);
  }, []);

  const { theme } = useContext(ModeContext);

  return (
    <HashRouter>
      <div className={theme}>
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  profiles={profiles}
                  handleChangeTitle={handleChangeTitle}
                  handleSearch={handleSearch}
                  handleClear={handleClear}
                  title={title}
                  name={name}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/add-profile" element={<AddProfilePage updateProfiles={updateProfiles} />} />
            <Route path="/fetched-profiles" element={<FetchedProfilePage />} />
            <Route path="/fetched-profiles/profile" element={<ProfileLayoutPage />}>
              <Route path=":id" element={<ProfileDetailPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default App;