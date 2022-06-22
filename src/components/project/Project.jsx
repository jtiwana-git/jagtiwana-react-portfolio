import React from "react";
import "./project.css";
import MCU from "../../asset/projects/mcu-deep-diver-demo.gif";
import planner from "../../asset/projects/Day-Planner.gif";
import Hackaton from "../../asset/projects/Hackathon.png";
import NoteTaker from "../../asset/projects/NoteTaker.gif";
import GoodReadMe from "../../asset/projects/GoodReadMe.gif";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: MCU,
    title: "MCU-Deep-Diver",
    Technologies: {
      T_id: 1,
      use: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "Marvel API",
        "FontAwesome",
      ],
    },
    github: "https://ryocon.github.io/MCU-deep-diver/",
    demo: "https://ryocon.github.io/MCU-deep-diver/",
  },
  {
    id: 2,
    image: planner,
    title: "Day Planner",
    Technologies: {
      T_id: 2,
      use: ["Test"],
    },

    github: "https://github.com/jtiwana-git/Week5-dayPlanner",
    demo: "https://jtiwana-git.github.io/Week5-dayPlanner/",
  },
  {
    id: 3,
    image: Hackaton,
    title: "Hackaton Suite",
    Technologies: {
      T_id: 3,
      use: [],
    },
    github: "https://github.com/Farhiya1/Hackathon-Suite",
    demo: "https://salty-woodland-88670.herokuapp.com/",
  },

  {
    id: 4,
    image: NoteTaker,
    title: "Note Taker",
    Technologies: {
      T_id: 4,
      use: [],
    },
    github: "https://github.com/jtiwana-git/NoteTaker",
    demo: "https://shielded-waters-00939.herokuapp.com/",
  },
  {
    id: 5,
    image: GoodReadMe,
    title: "Good Read Me Generator",
    Technologies: [],
    github: "https://github.com/jtiwana-git/ReadMeGenerator",
    demo: "https://drive.google.com/file/d/1ZVsz7-0_tlXT1NZDwWTJpg0kjPRyIs-9/view?usp=sharing",
  },
];

const Project = (key) => {
  return (
    <section id="project">
      <h2>Projects</h2>

      <h4 className="swipe">Swipe to view Projects</h4>

      <Swiper
        className="container project__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, Technologies, use, github, demo }) => {
          return (
            <SwiperSlide key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="project__title">
                {/* <h5 className="title__bold">Title: </h5> */}
                <h5>{title}</h5>
              </div>
              <div className="project__description"></div>
              <div className="project__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Project;
