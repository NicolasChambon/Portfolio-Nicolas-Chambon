import './ResumeBtn.scss';

const ResumeBtn = ({ title, icon, label }) => {
  return (
    <button
      className="ResumeBtn"
      title={label}
      onClick={() => {
        const section = document.getElementById(title);
        section.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <img className="ResumeBtn-icon" src={icon} alt={`${title}-icon`} />
    </button>
  );
};

export default ResumeBtn;
