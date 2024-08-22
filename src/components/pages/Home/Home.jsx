import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import NcLogo from '../../../assets/logos/logo-portfolio-nc-light.svg';

import './Home.scss';

const Home = () => {
  useEffect(() => {
    const page = document.querySelector('.App-background');
    page.scrollTo(0, 0, 'instant');
  }, []);

  const language = useSelector((state) => state.global.language);

  return (
    <main className="Home">
      <div className="Home-logo">
        <img className="Home-logo-svg" src={NcLogo} alt="Logo Portfolio NC" />
        <div className="Home-logo-text">
          <h1 className="Home-logo-text-title">
            {language === 'en'
              ? 'Fullstack Web Developer'
              : 'Développeur Web Fullstack'}
          </h1>
          <h2 className="Home-logo-text-name">Nicolas Chambon</h2>
        </div>
      </div>
      <p className="Home-description">
        {language === 'en'
          ? 'Welcome to my portfolio !'
          : 'Bienvenue sur mon portfolio !'}
      </p>
      <p className="Home-description">
        {language === 'en'
          ? 'My name is Nicolas Chambon, I am 37 and I am a passionate Fullstack Web Developer with a unique background in sport biomechanics and product engineering. Today, I bring a diverse skill set and a dedication to creating innovative and efficient web solutions.'
          : "Je m'appelle Nicolas Chambon, j'ai 37 ans et je suis un développeur web Fullstack passionné avec une expérience unique en biomécanique sportive et en ingénierie produit. Aujourd'hui, je mets en avant un ensemble de compétences diverses et un dévouement à la création de solutions web innovantes et efficaces."}
      </p>
      <p className="Home-description">
        {language === 'en'
          ? 'I have a strong foundation in front-end technologies like React.js and back-end frameworks such as Express with Node.js, and I am always eager to learn and adapt to new challenges.'
          : "Je possède une solide base en technologies front-end comme React.js et en frameworks back-end tels qu'Express avec Node.js, et je suis toujours désireux d'apprendre et de m'adapter à de nouveaux défis."}
      </p>
      <p className="Home-description">
        {language === 'en'
          ? 'This portfolio is a showcase of my journey and achievements in web development. Here, you will find my detailed CV, highlighting my technical skills. You can also explore a collection of my projects, each accompanied by a brief description, demonstration videos, and links to live sites and/or GitHub repositories.'
          : "Ce portfolio est une vitrine de mon parcours et de mes réalisations en développement web. Vous y trouverez mon CV détaillé, mettant en avant mes compétences techniques. Vous pouvez également explorer une collection de mes projets, chacun accompagné d'une brève description, de vidéos de démonstration et de liens vers des sites en ligne et/ou des dépôts GitHub."}
      </p>
      <p className="Home-description">
        {language === 'en'
          ? 'Feel free to reach out to me if you have any questions or if you are interested in collaborating on exciting web development projects. Thank you for visiting, and I hope you enjoy browsing through my work !'
          : "N'hésitez pas à me contacter si vous avez des questions ou si vous êtes intéressé par une collaboration sur des projets de développement web passionnants. Merci de votre visite, et j'espère que vous apprécierez la consultation de mon travail !"}
      </p>
      <p className="Home-description last">Nicolas Chambon</p>
    </main>
  );
};

export default Home;
