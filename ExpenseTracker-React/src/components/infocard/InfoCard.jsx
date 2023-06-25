import React from "react";
import PropTypes from "prop-types";
import '../infocard/InfoCard.scss'

const InfoCard = ({ title, body, footer, accentColor }) => {
  const cardStyle = {
    borderLeft: `3px solid ${accentColor}`,
  };

  return (
    <div className="card shadow" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title fs-4">{title}</h5>
        <p className="card-text fs-4">{body}</p>
      </div>
      {footer && <div className="card-footer fs-5">{footer}</div>}
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  footer: PropTypes.string,
  accentColor: PropTypes.string.isRequired,
};

export default InfoCard;
