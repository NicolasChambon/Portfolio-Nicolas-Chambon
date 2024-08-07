import './ProjectsFeatures.scss';

const ProjectsFeatures = ({ features }) => {
  return (
    <div className="ProjectsFeatures">
      <h4 className="ProjectsFeatures-title">Main features :</h4>

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

export default ProjectsFeatures;
