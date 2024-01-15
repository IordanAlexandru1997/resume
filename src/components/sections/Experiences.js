import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Master of Web and Data Science",
    years: "2021-Present",
    content:
      "This Master's program allowed me to explore the world of academia and research from a different perspective. I was co-opted into the CEIR (Center for Enterprise Information Research) Group and brought significant contributions to the research projects I led.",
  },
  {
    id: 2,
    title: "Engineering Bachelor in Information Technology (IT)",
    years: "2016-2020",
    content:
      "Studied concepts like Machine Learning, Data Structures, Algorithms, Design Patterns and applied them throughout my Bachelor Project.",
  },
  {
    id: 3,
    title: "Individual Work and Projects",
    years: "Never ending process",
    content:
      "The life of an engineer is a job itself. Always aiming to improve the efficiency and efectiveness of everything we touch. I keep myself busy with projects I want to develop",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Software System Engineer",
    years: "06.2019-10.2019",
    content:
      "Currently leading teams in developing software translation tools using Java, REST APIs and modeling frameworks to improve the security of models.",
  },
  {
    id: 1,
    title: "Full-stack Developer",
    years: "06.2019-11.2019",
    content:
      "Engineered a high-speed log parsing application able to process 100,000 traces per hour by integrating Java, Python, messaging queues and database checks to identify complex patterns.",
  },
  {
    id: 2,
    title: "Full-stack Developer",
    years: "06.2018-11.2018",
    content:
      "Developed Java tool to automatically extract problem reports, reducing resolution time by 60%, and created a Python/MySQL database solution to speed up verification workflows.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
