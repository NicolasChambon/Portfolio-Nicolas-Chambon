import './ProjectsStack.scss';

const ProjectsStack = ({ frontTechs, backTechs, otherTechs }) => {
  return (
    <div className="ProjectsStack">
      <h4 className="ProjectsStack-title">Stack :</h4>

      <div className="ProjectsStack-categories">
        <div className="ProjectsStack-categories-category">
          <p className="ProjectsStack-categories-category-title">Front-end</p>
          <ul className="ProjectsStack-categories-category-list">
            {frontTechs.map((tech) => (
              <li
                key={tech.name}
                className="ProjectsStack-categories-category-list-item"
              >
                <img
                  className="ProjectsStack-categories-category-list-item-icon"
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                />
                <p className="ProjectsStack-categories-category-list-item-name">
                  {tech.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {backTechs && (
          <div className="ProjectsStack-categories-category">
            <p className="ProjectsStack-categories-category-title">Back-end</p>
            <ul className="ProjectsStack-categories-category-list">
              {backTechs.map((tech) => (
                <li
                  key={tech.name}
                  className="ProjectsStack-categories-category-list-item"
                >
                  <img
                    className="ProjectsStack-categories-category-list-item-icon"
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                  />
                  <p className="ProjectsStack-categories-category-list-item-name">
                    {tech.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {otherTechs && (
          <div className="ProjectsStack-categories-category">
            <p className="ProjectsStack-categories-category-title">Other</p>
            <ul className="ProjectsStack-categories-category-list">
              {otherTechs.map((tech) => (
                <li
                  key={tech.name}
                  className="ProjectsStack-categories-category-list-item"
                >
                  <img
                    className="ProjectsStack-categories-category-list-item-icon"
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                  />
                  <p className="ProjectsStack-categories-category-list-item-name">
                    {tech.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsStack;
