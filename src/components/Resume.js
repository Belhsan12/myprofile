import React from 'react';

function ResumeSection() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Belhsan Naffeti</h4>
              <p><em>Web and Mobile Developer with more than 2 years of experience in MERN stack. Based in Tunisia.</em></p>
              <ul>
                <li>Tunisia, Tunis</li>
                <li>52942810</li>
                <li>belhsannaffeti@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
            <h4>Master in Veille Intelligence Competitive </h4>
               <h5>Present</h5>
               <p><em>Ecole Superieur de Economy Digital (ESEN)</em></p>

            </div>
            <div className="resume-item">
           
            <h4>Bachelor in Information System Development</h4>
            <h5>2020 - 2023</h5>
            <p><em>ISET Kelibia</em></p>
             </div>
             <div className="resume-item">
    <h4>computer science baccalaureate admitted</h4>
    <h5>2020</h5>
    <h5>high school Sidi Hssine</h5>
    </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Web Developer</h4>
              <h5>2023 - Present</h5>
              <p><em>Transtu, Gongures, Tunisia</em></p>
              <ul>
                <li>Full Stack Developer specializing in MERN technology</li>
              </ul>
            </div>
            <div className="resume-item">
                <h4>STAGE DE PERFECTIONNEMENT : STAGIAIRE OACA</h4>
                <h5>7 janvier 2022 jusqu'au 15 février 2022</h5>
                <p><em>Chargé de Tunisie</em></p>
                <p>OACA : la direction informatique.</p>
                <p>Projet application web pour faciliter l'enregistrement et l'affectation de stagiaires avec l'encadrement.</p>
                <p>Géré jusqu'à 5 langues (html, css, js, bootstrap, php...)</p>
                <p>Demande nommée (demande stage OACA)</p>
            </div>
            <div className="resume-item">
                <h4>STAGE Initition  : STAGIAIRE Transtu</h4>
                <h5>7 janvier 2021 jusqu'au 15 février 2021</h5>
                <p><em>Chargé de Tunisie</em></p>
                <p>Transtu : la direction Administration System D'informations.</p>
                <p>Migration des Données d'AS400 vers MySQL.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
