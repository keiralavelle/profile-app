import Card from "./components/Card";
import About from "./components/About";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import woman from "./assets/woman.png";
import man from "./assets/man.png";
import { useState } from "react";
import "./App.css";

function App() {
  const profiles = [
    { id: 0, name: "Keira", title: "UX designer", image: woman },
    { id: 1, name: "Logan", title: "Frontend Web Developer", image: man },
  ];
  const titles = [...new Set(profiles.map((profile) => profile.title))];
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
    console.log(clicked);
  };
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

  const filteredProfiles = profiles.filter(
    (profile) =>
      (profile.title === title || !title) &&
      profile.name.toLowerCase().includes(name.toLowerCase()),
  );

  const [mode, setMode] = useState("view"); 
  return (
    <>
      <Navbar />
      <Wrapper id="about">
        <About />
        <button onClick={handleClick}>
          {clicked ? "Clicked" : "Click me"}
        </button>
      </Wrapper>
      <Wrapper id="profiles">
        <Filters
          titles={titles}
          title={title}
          name={name}
          handleChange={handleChangeTitle}
          handleSearch={handleSearch}
          handleClick={handleClear}
        />

        <div> 
          <button onClick = {() => setMode(mode === "view" ? "edit" : "view")}>
            Switch to {mode === "view" ? "Edit" : "View"}
          </button>

          {filteredProfiles.length > 0 ? (
  filteredProfiles.map((profile) => (
    <Card
      key={profile.id}
      name={profile.name}
      title={profile.title}
      image={profile.image}
      mode={mode}
    />
  ))
) : (
  <p>No profiles selected.</p>
)}

        </div>

        <div className="grid">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <Card
                key={profile.id}
                name={profile.name}
                title={profile.title}
                image={profile.image}
              />
            ))
          ) : (
            <p>No profiles selected.</p>
          )}
        </div>
      </Wrapper>
    </>
  );
}

export default App;