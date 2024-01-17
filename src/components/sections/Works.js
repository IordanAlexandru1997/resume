import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "big",
  },
  {
    id: 3,
    text: "small",
  },
  {
    id: 4,
    text: "medium",
  },
];

const allData = [

  {
    id: 1,
    title: "Master Thesis: Configurable Graph Database Benchmark",
    category: "big",
    image: "images/works/4.svg",
    link: ["http://141.26.157.78:8080/"],
  },  {
    id: 2,
    title: "Image Face Recognition Web Application",
    category: "medium",
    image: "images/works/1.svg",
    link: ["https://faceapp.alexandruiordan.de/"],
  },
  {
    id: 3,
    title: "Research Project: Configurable Database Classifier System",
    category: "big",
    image: "images/works/5.svg",
    link: ["https://dbclassifiersystem.onrender.com/"],
  },  
  {
    id: 4,
    title: "Bachelors Thesis: Chatbot with full support for pacients with chronic diseases",
    category: "big",
    image: "images/works/2.svg",
    link: [],
  },
  {
    id: 5,
    title: "Learning Project developed with Redux",
    category: "small",
    image: "images/works/3.svg",
    link: [
      "https://iordanalexandru1997.github.io/Robots/"
    ],
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 3));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
  
    setDataVisibleCount(tempCount);
  
    if (tempCount >= getAllItems.length) {
      setNoMorePost(true);
      tempCount = getAllItems.length; 
    }
  
    let filteredItems = getAllItems;
    if (activeFilter !== filters[0].text.toLowerCase()) {
      filteredItems = filteredItems.filter(
        (data) => data.category === activeFilter
      );
    }
  
    setVisibleItems(filteredItems.slice(0, tempCount));
  };
  

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Projects" />
        <p>Please note that the loading speed of several projects might be slow due to the hosting plans.</p>
        <p>Thank you for your patience.</p>
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost}
            >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
