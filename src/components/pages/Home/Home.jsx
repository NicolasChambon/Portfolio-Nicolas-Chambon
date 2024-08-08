import NcLogo from '../../../assets/logos/logo-portfolio-nc-light.svg';

import './Home.scss';

const Home = () => {
  return (
    <main className="Home">
      <div className="Home-logo">
        <img className="Home-logo-svg" src={NcLogo} alt="Logo Portfolio NC" />
        <div className="Home-logo-text">
          <h1 className="Home-logo-text-title">Fullstack Web Developer</h1>
          <h2 className="Home-logo-text-name">Nicolas Chambon</h2>
        </div>
      </div>
      <p className="Home-description">Hello and welcome to my portfolio !</p>
      <p className="Home-description">
        My name is Nicolas Chambon, I am 37 and I am a passionate Fullstack Web
        Developer with a unique background in sport biomechanics and product
        engineering. Today, I bring a diverse skill set and a dedication to
        creating innovative and efficient web solutions.
      </p>
      <p className="Home-description">
        I have a strong foundation in frontend technologies like React.js and
        backend frameworks such as Express with Node.js, and I am always eager
        to learn and adapt to new challenges.
      </p>
      <p className="Home-description">
        This portfolio is a showcase of my journey and achievements in web
        development. Here, you will find my detailed CV, highlighting my
        technical skills. You can also explore a collection of my projects, each
        accompanied by a brief description, demonstration videos, and links to
        live sites and/or GitHub repositories.
      </p>
      <p className="Home-description">
        Feel free to reach out to me if you have any questions or if you are
        interested in collaborating on exciting web development projects. Thank
        you for visiting, and I hope you enjoy browsing through my work !
      </p>
      <p className="Home-description last">Nicolas Chambon</p>
    </main>
  );
};

export default Home;
