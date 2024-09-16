import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import './ProjectsDates.scss';

const ProjectsDates = ({ from, to }) => {
  const language = useSelector((state) => state.global.language);

  const fromEn = new Date(from).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const fromFr = new Date(from).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let toEn;
  let toFr;
  if (to !== '...') {
    toEn = new Date(to).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    toFr = new Date(to).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } else {
    toEn = '...';
    toFr = '...';
  }

  return (
    <div className="ProjectsDates">
      <h4 className="ProjectsDates-title">
        {language === 'en' ? 'Dates :' : 'Dates :'}
      </h4>
      <div className="ProjectsDates-line">
        <div className="ProjectsDates-line-start">
          <p className="ProjectsDates-line-start-text">
            {language === 'en' ? 'from' : 'du'}
          </p>
          <p className="ProjectsDates-line-start-date">
            {language === 'en' ? fromEn : fromFr}
          </p>
        </div>

        <div className="ProjectsDates-line-end">
          <p className="ProjectsDates-line-end-text">
            {language === 'en' ? 'to' : 'au'}
          </p>
          <p className="ProjectsDates-line-end-date">
            {language === 'en' ? toEn : toFr}
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectsDates.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ProjectsDates;
