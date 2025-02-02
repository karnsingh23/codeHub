import React from 'react';
import './apicard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Apicard = ({ icon, heading, description, name, link, buttonLabel }) => {
  return (
    <div className="apicard">
      <div className="apicard-header">
      <FontAwesomeIcon className="apicard-heart" icon={icon} />
        <div>
          <h2 className="apicard-title">{heading}</h2>
        </div>
      </div>
      <div className="apicard-content">
        <p>{description}</p>
      </div>
      <div className="apicard-footer">
        <div className="apicard-created-by">API by <span className="apicard-author">{name}</span></div>
       <a target='_blank' href={link} className="apicard-btn-outline">{buttonLabel}</a>
      </div>
    </div>
  );
};

export default Apicard;
