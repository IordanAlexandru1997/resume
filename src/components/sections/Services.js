import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Software Developer",
    content:
      "Experience in Python and Databases, worked with React+Redux, NodeJS and familiar with Apache Spark, Machine Learning Concepts, Hadoop Map-Reduce",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "Experienced working with HTML5, CSS3, JS, but also worked and completed projects with React+Redux, Express, Django and Bootstrap",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Data Scientist",
    content:
      "Experienced with web crawlers, web extraction tools, data processing, noSQL, good understanding of Machine Learning Concepts, familiar with Big Data tool Apache Hadoop and Apache Spark",
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
