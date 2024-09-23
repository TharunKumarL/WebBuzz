import React from 'react';
import Header from './Components/Header';
import TournamentsSection from './Components/TournmentsSection';
import MatchesSection from './Components/MatchesSection';
import '../src/css/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <TournamentsSection/>
      <MatchesSection/>
    </div>
  );
}

export default App;
