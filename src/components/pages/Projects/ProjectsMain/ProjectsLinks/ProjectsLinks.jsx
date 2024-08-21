import PropTypes from 'prop-types';

import { FiExternalLink } from 'react-icons/fi';

import './ProjectsLinks.scss';

const ProjectsLinks = ({ links }) => {
  return (
    <div className="ProjectsLinks">
      <h4 className="ProjectsLinks-title">Links :</h4>

      <ul className="ProjectsLinks-list">
        {links.map((link) => (
          <li key={link.name} className="ProjectsLinks-list-item">
            <a
              className="ProjectsLinks-list-item-link"
              href={link.url}
              target="_blank"
            >
              <img
                src={link.icon}
                alt={`${link.name} icon`}
                className="ProjectsLinks-list-item-link-icon"
              />
              <p className="ProjectsLinks-list-item-link-name">{link.name}</p>
              <FiExternalLink className="ProjectsLinks-list-item-link-linkIcon" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProjectsLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProjectsLinks;
