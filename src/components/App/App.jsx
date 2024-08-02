import Header from '../organisms/Header/Header';
import Home from '../pages/Home/Home';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-background">
        <Home />
      </div>
      <p className="App-credits">
        Picture by{' '}
        <a
          className="App-credits-link"
          href="https://unsplash.com/fr/@fiveamstories?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Alex Shutin
        </a>{' '}
        on{' '}
        <a
          className="App-credits-link"
          href="https://unsplash.com/fr/photos/photographie-panoramique-de-montagnes-kKvQJ6rK6S4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default App;
