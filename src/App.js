import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import request from "./components/Request";

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);

  return (
    <div className="app">
      <Header setSelectedOption={setSelectedOption} />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
