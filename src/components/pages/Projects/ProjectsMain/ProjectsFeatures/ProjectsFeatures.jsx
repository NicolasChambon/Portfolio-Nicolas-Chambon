import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import './ProjectsFeatures.scss';

const ProjectsFeatures = ({ features }) => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ProjectsFeatures">
      <h4 className="ProjectsFeatures-title">
        {language === 'en'
          ? 'Main features :'
          : 'Principales fonctionnalités :'}
      </h4>

      <ul className="ProjectsFeatures-list">
        {features.map((feature) => (
          <li key={feature} className="ProjectsFeatures-list-item">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProjectsFeatures.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectsFeatures;
