import './ResumeBtn.scss';

const ResumeBtn = ({ title, icon, label }) => {
  return (
    <a className="ResumeBtn" href={`#${title}`} title={label}>
      <img className="ResumeBtn-icon" src={icon} alt={`${title}-icon`} />
    </a>
  );
};

export default ResumeBtn;
