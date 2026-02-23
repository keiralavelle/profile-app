import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Wrapper from "./components/Wrapper";
import squid from "./assets/squidgame.png";
import stranger from "./assets/strangerthings.png";
import { useState } from "react";
=======
import woman from "./assets/woman.png";
import man from "./assets/man.png";
import { useState, useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FetchedProfilePage from "./pages/FetchedProfilePage";
import AddProfilePage from "./pages/AddProfilePage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
>>>>>>> e062131 (Lab 11)
import "./App.css";
import ProfileLayoutPage from "./pages/ProfileLayoutPage";
import ModeContext from "./context/ModeContext";

function App() {
<<<<<<< HEAD
  const profiles = [
    { id: 0, name: "Squid Game", title: "Science Fiction", image: squid },
    { id: 1, name: "Stranger Things", title: "Science Fiction", image: stranger},
  ];
  const titles = [...new Set(profiles.map((profile) => profile.title))];
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
    console.log(clicked);
  };
=======
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
      email: "",
      bio: "",
      image: man,
    },
  ]);

>>>>>>> e062131 (Lab 11)
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleSearch = (event) => {
    setName(event.target.value);
  };
  const handleClear = () => {
    setTitle("");
    setName("");
  };

  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  const {theme} =useContext(ModeContext)
  const updateProfiles = (profile) =>{
    setProfiles(pre => ([...pre, profile]))
  }
  return (
    <HashRouter>
    <div className={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage profiles={profiles} handleChangeTitle={handleChangeTitle} handleSearch={handleSearch} handleClear={handleClear} title={title} name={name}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fetched-profiles" element={<FetchedProfilePage />} />
        <Route path="/fetched-profiles/profile" element={<ProfileLayoutPage />}>
          <Route path=":id" element={<ProfileDetailPage />} />
        </Route>        
        <Route path="/add-profile" element={<AddProfilePage updateProfiles={updateProfiles}/>} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;