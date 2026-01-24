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
          ? 'My name is Nicolas Chambon, I am 38, and I am a passionate Fullstack Web Developer with a unique background in sport biomechanics and product engineering. After 15 years at Decathlon as a biomechanics and sports product expert, I transitioned into web development to take on new challenges and create impactful digital solutions.'
          : "Je m'appelle Nicolas Chambon, j'ai 38 ans, et je suis un développeur web fullstack passionné avec un parcours unique en biomécanique du sport et en ingénierie des produits. Après 15 ans chez Decathlon en tant qu'expert en biomécanique et produits sportifs, j'ai fait la transition vers le développement web pour relever de nouveaux défis et créer des solutions numériques impactantes."}
      </p>
      <p className="Home-description">
        {language === 'en'
          ? 'Since February 2025, I have been working at Didask as a work-study developer, gaining hands-on experience in TypeScript, React.js, Next.js, Node.js/Express, and API design, while contributing to real-world projects and refining my skills in modern web development practices.'
          : "Depuis février 2025, je travaille chez Didask en tant que développeur en alternance, acquérant une expérience pratique en TypeScript, React.js, Next.js, Node.js/Express et conception d'API, tout en contribuant à des projets réels et en affinant mes compétences dans les pratiques modernes de développement web."}
      </p>
      <p className="Home-description">
        {language === 'en'
          ? 'This portfolio showcases my journey, skills, and achievements in web development. Here, you will find my detailed CV, a selection of projects with demos and links to live sites or GitHub repositories, illustrating my ability to build efficient and innovative web solutions.'
          : 'Ce portfolio présente mon parcours, mes compétences et mes réalisations en développement web. Vous y trouverez mon CV détaillé, une sélection de projets avec des démos et des liens vers des sites en ligne ou des dépôts GitHub, illustrant ma capacité à créer des solutions web efficaces et innovantes.'}
      </p>
      <p className="Home-description">
        {language === 'en'
          ? 'Feel free to reach out if you have any questions or would like to collaborate on exciting projects. Thank you for visiting, and enjoy exploring my work!'
          : "N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez collaborer sur des projets passionnants. Merci de votre visite et bonne exploration de mon travail !"}
      </p>
      <p className="Home-description last">Nicolas Chambon</p>
    </main>
  );
};

export default Home;
