import React from "react";

const AboutSection = () => (
  <section id="about" className="about sec-pad">
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-med">
        <span className="heading-sec__main">About Me</span>
        <span className="heading-sec__sub">
          A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
        </span>
      </h2>
      <div className="about__content">
        <div className="about__content-main">
          <h3 className="about__content-title">Get to know me!</h3>
          <div className="about__content-details">
            <p className="about__content-details-para">
              Hey! It's <strong>Sai Kumar</strong> and I'm a <strong> Software Developer </strong> located in New York. I specialize in building <strong>scalable</strong>, <strong>distributed</strong> and <strong>intelligent data-driven</strong> products. I’ve collaborated with startups and enterprise teams, delivering high-impact solutions across finance, recruiting, and enterprise software.
            </p>
            <p className="about__content-details-para">
              My work spans from high-performance risk platforms and real-time data pipelines to integrating modern machine learning technologies, including <strong>large language models (LLMs)</strong>, predictive analytics, and automation frameworks. Let’s connect if you’re working on something <strong>ambitious</strong>—I’d love to hear about it.
            </p>
          </div>
          <a href="./index.html#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
        </div>
        <div className="about__content-skills">
          <h3 className="about__content-title">My Skills</h3>
          <div className="skills">
            <div className="skills__skill">Java</div>
            <div className="skills__skill">Python</div>
            <div className="skills__skill">Apache Kafka</div>
            <div className="skills__skill">Apache Spark</div>
            <div className="skills__skill">Rabbit MQ</div>
            <div className="skills__skill">Redis Cache</div>
            <div className="skills__skill">TensorFlow</div>
            <div className="skills__skill">Keras</div>
            <div className="skills__skill">Spring Boot</div>
            <div className="skills__skill">React</div>
            <div className="skills__skill">TypeScript</div>
            <div className="skills__skill">AWS</div>
            <div className="skills__skill">Kubernetes</div>
            <div className="skills__skill">.NET</div>
            <div className="skills__skill">Git</div>
            <div className="skills__skill">Docker</div>
            <div className="skills__skill">MongoDB</div>
            <div className="skills__skill">SQL</div>
            <div className="skills__skill">Jenkins</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
