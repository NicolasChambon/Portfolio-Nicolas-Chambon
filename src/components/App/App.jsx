import { Route, Routes } from 'react-router-dom';

import Header from '../organisms/Header/Header';
import Home from '../pages/Home/Home';
import Resume from '../pages/Resume/Resume';
import Projects from '../pages/Projects/Projects';
import Credits from '../organisms/Credits/Credits';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Credits />
    </div>
  );
};

export default App;
