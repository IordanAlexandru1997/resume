import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Is the life quality of a country reflected on Twitter?",
    image: "images/blog/2.svg",
    link: "https://medium.com/@iordan.alexandru97/is-the-life-quality-of-a-country-reflected-on-twitter-4f2dd23f18c0",
    date: "29 June, 2022",
    author: "Alexandru Iordan",
    category: "Reviews",
  },
  {
    id: 2,
    title: "Is Google search results ranking mitigated or influenced  in any way by the user's query?",
    image: "images/blog/1.svg",
    link: "https://medium.com/@iordan.alexandru97/is-google-search-results-ranking-mitigated-or-influenced-in-any-way-by-the-users-query-a4a491a4df8e",
    date: "25 June, 2022",
    author: "Alexandru Iordan",
    category: "Tutorial",
  },
];

function Blogs() {
  let [text, setText] = useState('Show all blogs')


  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-6" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <button className="btn btn-default" onClick={() => {
            setText("No more blogs for now")
            setTimeout(() => {
              setText("Show all blogs")
            }, 2000)
          }}>
            {text}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
