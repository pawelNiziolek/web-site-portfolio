import React from "react";

const ContactShadow = props => {
  const { mouseMove, styleBox, style3d, styleText } = props;

  return (
    <div className="shadow-box" onMouseMove={mouseMove}>
      <div
        className="s-box"
        style={{ boxShadow: styleBox, transform: style3d }}
      />
      <p
        className="s-text"
        style={{
          textShadow: styleText,
          transform: style3d
        }}
      >
        Skontaktuj się
      </p>
      <div className="s-wall" style={{ transform: style3d }}>
        <p>email: </p>
        <span>pawel.r.niziolek@gmail.com</span>
        <p>gitHub: </p>
        <span>
          <a
            href="https://github.com/pawelNiziolek"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/pawelNiziolek
          </a>
        </span>
        <p>linkedIn: </p>
        <span>
          <a
            href="https://www.linkedin.com/in/pawel-niziolek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/pawel-niziolek
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactShadow;
