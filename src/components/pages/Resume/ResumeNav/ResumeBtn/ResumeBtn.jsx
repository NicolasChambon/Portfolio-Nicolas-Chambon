import './ResumeBtn.scss';

const ResumeBtn = ({ title, icon }) => {
  return (
    <div className="ResumeBtn">
      <img className="ResumeBtn-icon" src={icon} alt={`${title}-icon`} />
    </div>
  );
};

export default ResumeBtn;
