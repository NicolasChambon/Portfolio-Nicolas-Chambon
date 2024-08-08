import { Link } from 'react-router-dom';

import { FiExternalLink } from 'react-icons/fi';

import publicationsIcon from '../../../../../assets/icons/publications-icon.svg';

import './ResumePublications.scss';

const ResumePublications = () => {
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
          Publications in scientific journals as first author :
        </p>
        <ul className="ResumePublications-item-list">
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              Shoe drop has opposite influence on running pattern when running
              overground or on a treadmill.
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
              Is midsole thickness a key parameter for the running pattern?
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
              Aging of running shoes and its effect on mechanical and
              biomechanical variables: implications for runners.
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
          Publications in scientific journals as co-author :
        </p>
        <ul className="ResumePublications-item-list">
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              Adaptation of running pattern to the drop of standard cushioned
              shoes: A randomised controlled trial with a 6-month follow-up.
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
              Injury risk in runners using standard or motion control shoes: a
              randomised controlled trial with participant and assessor
              blinding.
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
              Influence of the Heel-to-Toe Drop of Standard Cushioned Running
              Shoes on Injury Risk in Leisure-Time Runners: A Randomized
              Controlled Trial With 6-Month Follow-up.
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
              Does wearing shoes affect your biomechanical efficiency?
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
          Conferences at international congresses :
        </p>
        <ul className="ResumePublications-item-list">
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              Effect of midsole thickness on running patterns.
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
                17th Annual Congress of European College of Sport Science
                (Bruges, Belgium).
              </p>
            </Link>
          </li>
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              Foot angle at touchdown is not linearly related to the loading
              rate during running.
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
                Twelfth Footwear Biomechanics Symposium (Liverpool, England).
              </p>
            </Link>
          </li>
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              The effect of shoe drop on running pattern.
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
              <p>Eleventh Footwear Biomechanics Symposium (Natal, Brazil).</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ResumePublications-item">
        <p className="ResumePublications-item-type">Patent :</p>
        <ul className="ResumePublications-item-list">
          <li className="ResumePublications-item-list-article">
            <p className="ResumePublications-item-list-article-title">
              Article of footwear including a slipper and at least one module.
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
