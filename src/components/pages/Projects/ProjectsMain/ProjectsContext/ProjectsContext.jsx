import './ProjectsContext.scss';

const ProjectsContext = ({ text }) => {
  return (
    <div className="ProjectsContext">
      <h4 className="ProjectsContext-title">Context :</h4>

      <p className="ProjectsContext-text">{text}</p>
    </div>
  );
};

export default ProjectsContext;
