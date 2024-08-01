import NcLogo from '../../../assets/logo-portfolio-nc-light.svg';

import './Home.scss';

const Home = () => {
  return (
    <main className="Home">
      <div className="Home-logo">
        <img src={NcLogo} alt="Logo Portfolio NC" />
        <h1 className="Home-logo-title">Fullstack Web Developer</h1>
      </div>
    </main>
  );
};

export default Home;
