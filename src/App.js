import React, { useState } from 'react';
import './App.scss';
import AddChart from './components/addChart/AddChartComponent';
import ChartsList from './components/chartsList/ChartsListComponent';

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
        <div className="add-chart-section">
          <AddChart setCharts={setCharts} />
        </div>
        <div className="chart-section">
          <ChartsList charts={charts} setCharts={setCharts} />
        </div>
      </section>
    </main>
  );
}

export default App;
