import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FiExternalLink } from 'react-icons/fi';

import publicationsIcon from '../../../../../assets/icons/publications-icon.svg';

import './ResumePublications.scss';

const ResumePublications = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ResumePublications" id="publications">
      <div className="ResumePublications-title">
        <img
          className="ResumePublications-title-icon"
          src={publicationsIcon}
          alt="Publications icon"
        />
        <h3 className="ResumePublications-title-text">Publications</h3>
      </div>
      <div className="ResumePublications-item">
        <p className="ResumePublications-item-type">
          {language === 'en'
            ? 'Publications in scientific journals as first author :'
            : 'Publications dans des revues scientifiques en tant que premier auteur :'}
        </p>
        <ul className="ResumePublications-item-list">
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Shoe drop has opposite influence on running pattern when running overground or on a treadmill.'
                : 'Le drop de la semelle a une influence opposée sur le patron de course à pied entre la course sur sol et sur tapis.'}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Chambon N, Delattre N, Guéguen N, Berton E, Rao G.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://pubmed.ncbi.nlm.nih.gov/25501676/"
              target="_blank"
            >
              <FiExternalLink />
              <p>Eur J Appl Physiol. 2015 May;115(5):911-8.</p>
            </Link>
          </li>
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Is midsole thickness a key parameter for the running pattern?'
                : 'L’épaisseur de la semelle intermédiaire est-elle un paramètre clé pour le patron de course ?'}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Chambon N, Delattre N, Guéguen N, Berton E, Rao G.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://pubmed.ncbi.nlm.nih.gov/24636223/"
              target="_blank"
            >
              <FiExternalLink />
              <p>Gait Posture. 2014;40(1):58-63.</p>
            </Link>
          </li>
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Aging of running shoes and its effect on mechanical and biomechanical variables: implications for runners.'
                : 'Vieillissement des chaussures de course et son effet sur les variables mécaniques et biomécaniques : implications pour les coureurs.'}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Chambon N, Sevrez V, Ly QH, Guéguen N, Berton E, Rao G.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://pubmed.ncbi.nlm.nih.gov/24576090/"
              target="_blank"
            >
              <FiExternalLink />
              <p>J Sports Sci. 2014;32(11):1013-22.</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ResumePublications-item">
        <p className="ResumePublications-item-type">
          {language === 'en'
            ? 'Publications in scientific journals as co-author :'
            : 'Publications dans des revues scientifiques en tant que co-auteur :'}
        </p>
        <ul className="ResumePublications-item-list">
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Adaptation of running pattern to the drop of standard cushioned shoes: A randomised controlled trial with a 6-month follow-up.'
                : 'Adaptation du patron de course au drop des chaussures de course standard : un essai contrôlé randomisé avec un suivi de 6 mois.'}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Malisoux L, Gette P, Chambon N, Urhausen A, Theisen D.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://pubmed.ncbi.nlm.nih.gov/28365220/"
              target="_blank"
            >
              <FiExternalLink />
              <p>J Sci Med Sport. 2017 Aug;20(8):734-739</p>
            </Link>
          </li>
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Injury risk in runners using standard or motion control shoes: a randomised controlled trial with participant and assessor blinding.'
                : 'Risque de blessure chez les coureurs utilisant des chaussures standard ou de contrôle du mouvement : un essai contrôlé randomisé avec un aveuglement des participants et des évaluateurs.'}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Malisoux L, Chambon N, Delattre N, Gueguen N, Urhausen A, Theisen
              D.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://pubmed.ncbi.nlm.nih.gov/26746907/"
              target="_blank"
            >
              <FiExternalLink />
              <p>Br J Sports Med. 2016 Apr;50(8):481-7.</p>
            </Link>
          </li>
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Influence of the Heel-to-Toe Drop of Standard Cushioned Running Shoes on Injury Risk in Leisure-Time Runners: A Randomized Controlled Trial With 6-Month Follow-up.'
                : 'Influence du drop talon-orteil des chaussures de course standard rembourrées sur le risque de blessure chez les coureurs de loisir : un essai contrôlé randomisé avec un suivi de 6 mois.'}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Malisoux L, Chambon N, Urhausen A, Theisen D.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://pubmed.ncbi.nlm.nih.gov/27501833/"
              target="_blank"
            >
              <FiExternalLink />
              <p>Am J Sports Med. 2016 Nov;44(11):2933-2940.</p>
            </Link>
          </li>
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Does wearing shoes affect your biomechanical efficiency?'
                : 'Le port de chaussures affecte-t-il votre efficacité biomécanique ?'}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Rao G, Chambon N, Guéguen N, Berton E, Delattre N.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://pubmed.ncbi.nlm.nih.gov/25575884/"
              target="_blank"
            >
              <FiExternalLink />
              <p>J Biomech. 2015 Feb 5;48(3):413-7.</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ResumePublications-item">
        <p className="ResumePublications-item-type">
          {language === 'en'
            ? 'Conferences at international congresses :'
            : 'Conférences lors de congrès internationaux :'}
        </p>
        <ul className="ResumePublications-item-list">
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Effect of midsole thickness on running patterns.'
                : 'Effet de l’épaisseur de la semelle intermédiaire sur les patrons de course.'}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Chambon N, Delattre N, Berton E, Rao G.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://iris.unipa.it/bitstream/10447/77150/1/Book%20of%20Abstracts%20ECSS%20Bruges%202012.pdf"
              target="_blank"
            >
              <FiExternalLink />
              <p>
                {language === 'en'
                  ? '17th Annual Congress of European College of Sport Science (Bruges, Belgium).'
                  : '17e Congrès annuel du Collège Européen des Sciences du Sport (ECSS) (Bruges, Belgique).'}
              </p>
            </Link>
          </li>
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Foot angle at touchdown is not linearly related to the loading rate during running.'
                : "L'angle du pied au contact n'est pas linéairement lié au taux de chargement lors de la course."}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Chambon N, Rao G, Guéguen N, Berton E, Delattre N.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://www.tandfonline.com/doi/abs/10.1080/19424280.2015.1038314"
              target="_blank"
            >
              <FiExternalLink />
              <p>
                {language === 'en'
                  ? 'Twelfth Footwear Biomechanics Symposium (Liverpool, England).'
                  : 'Douzième Symposium de Biomécanique de la Chaussure (Liverpool, Angleterre).'}
              </p>
            </Link>
          </li>
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'The effect of shoe drop on running pattern.'
                : "L'effet du drop de la chaussure sur le patron de course."}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Chambon N, Delattre N, Berton E, Guéguen N, Rao G.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://www.tandfonline.com/doi/full/10.1080/19424280.2013.799585"
              target="_blank"
            >
              <FiExternalLink />
              <p>
                {language === 'en'
                  ? 'Eleventh Footwear Biomechanics Symposium (Natal, Brazil).'
                  : 'Onzième Symposium de Biomécanique de la Chaussure (Natal, Brésil).'}
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ResumePublications-item">
        <p className="ResumePublications-item-type">
          {language === 'en' ? 'Patent :' : 'Brevet :'}
        </p>
        <ul className="ResumePublications-item-list">
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              {language === 'en'
                ? 'Article of footwear including a slipper and at least one module.'
                : 'Article chaussant comprenant un chausson et au moins un module.'}
            </p>
            <p className="ResumePublications-item-list-article-authors">
              Chambon N, Delattre N, Longo A.
            </p>
            <Link
              className="ResumePublications-item-list-article-journal"
              to="https://worldwide.espacenet.com/publicationDetails/originalDocument?CC=FR&DB=fr.espacenet.com&FT=D&KC=A1&NR=2980338A1&date=20130329&locale=fr_EP"
              target="_blank"
            >
              <FiExternalLink />
              <p>FR2980338 (A1) ― 2013-03-29.</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumePublications;
