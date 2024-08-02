import Header from '../organisms/Header/Header';
import Home from '../pages/Home/Home';
import Credits from '../organisms/Credits/Credits';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-background">
        <Home />
      </div>
      <Credits />
    </div>
  );
};

export default App;
