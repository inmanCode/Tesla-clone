import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [filterApplication, setFilterApplication] = useState(false);
  return (
    <div className='App'>
      <Header setFilterApplication={setFilterApplication} />
      <Home filterApplication={filterApplication} />
    </div>
  );
}

export default App;
