import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Master of Web and Data Science",
    years: "2021-Present",
    content:
      "Sharpening my knowledge about Machine Learning, Data Processing, Algorithms and Web.",
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
    title: "Software Developer",
    years: "06.2019-10.2019",
    content:
      "Web application that serves the process between tester and developer using a bridge between Python and Java, data preprocessing, SQL queries and servers.",
  },
  {
    id: 2,
    title: "Software Engineer",
    years: "06.2018-10.2018",
    content:
      "Tool developed in Java that detects, extracts data and queries for common traces of a PR.",
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
