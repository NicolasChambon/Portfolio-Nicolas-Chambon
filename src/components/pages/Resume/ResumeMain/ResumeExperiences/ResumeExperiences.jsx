import experiencesIcon from '../../../../../assets/experiences-icon.svg';

import './ResumeExperiences.scss';

const ResumeExperiences = () => {
  return (
    <div className="ResumeExperiences" id="experiences">
      <div className="ResumeExperiences-title">
        <img
          className="ResumeExperiences-title-icon"
          src={experiencesIcon}
          alt="Experiences icon"
        />
        <h3 className="ResumeExperiences-title-text">Experiences</h3>
      </div>
      <div className="ResumeExperiences-item">
        <p className="ResumeExperiences-item-job">
          Leader in mountain hiking footwear design
        </p>
        <div className="ResumeExperiences-item-whereWhen">
          <p className="ResumeExperiences-item-whereWhen-where">
            Decathlon - Quechua (Sallanches, France)
          </p>
          <p className="ResumeExperiences-item-whereWhen-when">
            Sept. 22 - Sept. 23
          </p>
        </div>
        <ul className="ResumeExperiences-item-description">
          <li className="ResumeExperiences-item-description-li">
            - Management of a team of product engineers
          </li>
          <li className="ResumeExperiences-item-description-li">
            - Writing and leading the target design and innovation strategy
          </li>
        </ul>
      </div>
      <div className="ResumeExperiences-item">
        <p className="ResumeExperiences-item-job">Footwear engineer</p>
        <div className="ResumeExperiences-item-whereWhen">
          <p className="ResumeExperiences-item-whereWhen-where">
            Decathlon - Volley-Ball (Milan, Italie)
          </p>
          <p className="ResumeExperiences-item-whereWhen-when">
            Oct. 19 - Sept. 22
          </p>
        </div>
        <div className="ResumeExperiences-item-whereWhen">
          <p className="ResumeExperiences-item-whereWhen-where">
            Decathlon - Kalenji (Lille, France)
          </p>
          <p className="ResumeExperiences-item-whereWhen-when">
            Jan. 18 - Sept. 19
          </p>
        </div>
        <ul className="ResumeExperiences-item-description">
          <li className="ResumeExperiences-item-description-li">
            - Project manager: central link with production, design, offering
            and marketing
          </li>
          <li className="ResumeExperiences-item-description-li">
            - Responsible for the fourfold aspects of
            cost-quality-timelines-environmental impact
          </li>
          <li className="ResumeExperiences-item-description-li">
            - Design, development, and industrialization (in Asia) of sports
            shoes
          </li>
          <li className="ResumeExperiences-item-description-li">
            - Continuous improvement of commercialized products
          </li>
        </ul>
      </div>
      <div className="ResumeExperiences-item">
        <p className="ResumeExperiences-item-job">R&D engineer</p>
        <div className="ResumeExperiences-item-whereWhen">
          <p className="ResumeExperiences-item-whereWhen-where">
            Decathlon - Biomechanics laboratory (Lille, France)
          </p>
          <p className="ResumeExperiences-item-whereWhen-when">
            Sept. 10 - Sept. 17
          </p>
        </div>
        <ul className="ResumeExperiences-item-description">
          <li className="ResumeExperiences-item-description-li">
            - Studying the mechanical properties of footwear and their effects
            on health and performance. Evaluation of innovative technical
            concepts.
          </li>
          <li className="ResumeExperiences-item-description-li">
            - Analysis of human movement, instrumentation, signal processing,
            statistical processing, Matlab programming.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeExperiences;
