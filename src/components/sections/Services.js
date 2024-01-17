import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Software Engineer",
    content:
      "Accomplished Software Engineer with a focus on process optimization at Neovendi GmBH. Specializes in designing and developing high-performance software solutions, leading teams, and managing project deliverables in a multinational environment. Expertise in Java, Python, AWS, Docker, and REST APIs.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Full-stack",
    content:
      "Dynamic Full-Stack Developer experienced at Continental AG. Skilled in creating efficient software solutions and automating workflows using Agile methods. Demonstrated ability in Python, Java, Docker, Django, and CI/CD technologies for enhanced performance and scalability.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Cloud Engineer",
    content:
      "Certified AWS Cloud Practitioner adept at leveraging cloud technologies for optimized solution deployment and management. Proficient in AWS EC2, S3, RDS, Lambda, and CloudFormation, with a strong focus on serverless architecture, DevOps approaches, and agile methodology.",
    color: "#d6afed",
    contentColor: "dark",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
