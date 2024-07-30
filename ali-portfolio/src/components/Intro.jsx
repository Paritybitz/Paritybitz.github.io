import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <section className="intro">
      <h1>Hey, I'm Marc</h1>
      <p>Digital designer & front-end developer.</p>
      <p>Currently a design systems engineer helping people design better at <span className="highlight">InVision</span>.</p>
      <p>Previously worked with Wonderbly, Vanity Fair, Great Little Place, Glamour, and Discovery Network.</p>
      <button className="contact-button">Get In Touch</button>
    </section>
  );
}

export default Intro;
