import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ChallengeHabitApp from "../../img/ChelengeHabit.png";
import StudyGiene from "../../img/StudyGiene.png";
import Ecommerce from "../../img/Ecomerce.png";
import JavaEER from "../../img/EER Diagram (1).png";
import blogrLandingPage from "../../img/Blogr.png";
import ClipArt from "../../img/ClipArt.png";
import Parallex from "../../img/Parallex.png";

import myTunesWeb from "../../img/myTunes.png";
import huddleLanding from "../../img/HuddleLanding.png";
import { Pagination } from "swiper/modules";
import "./Portfolio.css";
import "swiper/css";
import "swiper/css/pagination";
import { themeContext } from "../../context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const paginationStyles = `
    .swiper-pagination-bullet {
      background-color: ${darkMode ? "yellow" : "black"}; 
    }
  `;
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Protfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="portfolio-slider"
      >
        <SwiperSlide className="projectCard">
          <img src={ChallengeHabitApp} alt="Chellenge Habit App" />
        </SwiperSlide>
        <SwiperSlide className="projectCard">
          <img src={StudyGiene} alt="Study Giene App" />
        </SwiperSlide>
        <SwiperSlide className="projectCard">
          <img src={Ecommerce} alt="Ecomerce Js App" />
        </SwiperSlide>
        <SwiperSlide className="projectCard">
          <img src={Parallex} alt="Parallex Web" />
        </SwiperSlide>
        <SwiperSlide className="projectCard">
          <img src={myTunesWeb} alt="MY tunes  App" />
        </SwiperSlide>

        {/* <SwiperSlide>
          <img src={USWW} alt="USWW Client App" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src={restaurentWeb} alt="Restaurent App" />
        </SwiperSlide> */}
        <SwiperSlide className="projectCard">
          <img src={huddleLanding} alt="Restaurent App" />
        </SwiperSlide>
        <SwiperSlide className="projectCard">
          <img src={blogrLandingPage} alt="Blogr landing Page " />
        </SwiperSlide>
        <SwiperSlide className="projectCard">
          <img src={JavaEER} alt="Java EER App" />
        </SwiperSlide>
        <SwiperSlide className="projectCard">
          <img src={ClipArt} alt="Clip Art Web App" />
        </SwiperSlide>
      </Swiper>
      <div id="Morechellenges">
        <a
          style={{ color: darkMode ? "white" : "" }}
          href="https://github.com/mk-muzzammil?tab=repositories"
        >
          View More Projects here ....
        </a>
      </div>
      <style>{paginationStyles}</style>
    </div>
  );
};

export default Portfolio;
