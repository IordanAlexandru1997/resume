import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import avatar2 from "../../images/avatar-2.png"

const aboutContent = {
  name: "Alexandru Iordan",
  avatarImage: avatar2,
  content:
    "Not your average software developer. Challenging projects, new technologies, team-work involvement and an unwavering positive vibe.",
  content2:
    "Fun to be around with, sociable and energic are some of my friends words to describe me.",
  content3:
    "The progress bar is more intuitive and refers to the technologies i am most comfortable with."
};

const progressData = [
  {
    id: 1,
    title: "React",
    percantage: 75,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Python",
    percantage: 85,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Express",
    percantage: 65,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "SQL or PL/SQL",
    percantage: 75,
    progressColor: "#6C6CE5",
  },

];

const counterData = [
  {
    id: 1,
    title: "Big Projects completed",
    count: 5,
    icon: "icon-fire",
  },
  {
    id: 4,
    title: "Days of programming",
    count: 3287,
    icon: "icon-badge",
  },
  {
    id: 3,
    title: "Friends in Germany",
    count: 3,
    icon: "icon-people",
  },
  {
    id: 2,
    title: "Cups of coffee",
    count: 5670,
    icon: "icon-cup",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <p>{aboutContent.content2}</p>
                  <p>{aboutContent.content3}</p>
                  <div className="mt-3">
                    <a href="https://drive.google.com/uc?export=download&id=1--locB8nJk_C1xSDIppiJ_OwkBJiwg1f" className="btn btn-default">
                      Download CV !
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
