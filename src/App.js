import { useState } from 'react';
import './App.css';
import Header from './Header'
import Navbar from './Navbar';
import Results from './Results';
import request from './Request'

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchHorroMovies)

  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption}/>
      <Results selectedOption = {selectedOption}/>
    </div>
  );
}

export default App;
