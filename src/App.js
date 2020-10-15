import React, { useState } from 'react';
import './App.scss';
import AddChart from './components/addChart/addChart';

function App() {
  const [charts, setCharts] = useState([]);

  return (
    <main className="App">
      <header className="header">
        <h1>
          Easy tool to analyse process of calculating parameters for linear
          function
        </h1>
      </header>
      <section className="tool-section">
        <div className="half-width-section">
          <AddChart setCharts={setCharts} />
        </div>
        <div className="half-width-section">Henlo</div>
      </section>
    </main>
  );
}

export default App;
