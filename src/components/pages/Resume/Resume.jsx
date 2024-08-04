import profilePicture from '../../../assets/profile-picture.jpeg';

import './Resume.scss';

const Resume = () => {
  return (
    <main className="Resume">
      <div className="Resume-left">
        <div className="Resume-left-picture">
          <img
            className="Resume-left-picture-img"
            src={profilePicture}
            alt="Nicolas Chambon"
          />
        </div>
        <div className="Resume-left-skills"></div>
      </div>
      <div className="Resume-right">
        <p>
          Right part Right part Right part Right part Right part Right part
          Right part
        </p>
        <p>
          Right part Right part Right part Right part Right part Right part
          Right part
        </p>
        <p>
          Right part Right part Right part Right part Right part Right part
          Right part
        </p>
        <p>
          Right part Right part Right part Right part Right part Right part
          Right part
        </p>
        <p>
          Right part Right part Right part Right part Right part Right part
          Right part
        </p>
        <p>
          Right part Right part Right part Right part Right part Right part
          Right part
        </p>
      </div>
    </main>
  );
};

export default Resume;
