import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Import Pagination module from swiper
import "swiper/css";
import "swiper/css/pagination";
import Ozeito from "../../img/Ozeito.png";
import FrontendMentor from "../../img/FrontendMentor.png";
import Profile1 from "../../img/profile1.jpg";
import Profile5 from "../../img/profile5.jpg";
import Profile6 from "../../img/profile6.jpg";
import { themeContext } from "../../context";
import { useContext } from "react";
const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: Ozeito,
      review:
        "He provided exceptional frontend development services for our project. Their attention to detail, creativity, and technical expertise were evident in every aspect of the project. The final product exceeded our expectations and we look forward to working with them again in the future.",
    },
    {
      img: FrontendMentor,
      review:
        "He provided exceptional frontend development services for our project. Their attention to detail, creativity, and technical expertise were evident in every aspect of the project. The final product exceeded our expectations and we look forward to working with them again in the future.",
    },
    {
      img: Profile1,
      review:
        "He provided a seamless experience with their dedication to top-notch frontend solutions evident from the start. Their attention to detail and creativity exceeded expectations, seamlessly integrating technical expertise. We highly recommend Muzzammil and eagerly anticipate future collaborations.",
    },
    {
      img: Profile5,
      review:
        "He excelled in desktop app development, showcasing unparalleled creativity and technical prowess. Their commitment to excellence was evident in every meticulously crafted detail, setting a new standard in the industry. We eagerly anticipate future collaborations with Muhammad Muzzammil.",
    },
    {
      img: Profile6,
      review:
        "Engaging him for frontend development was instrumental for our project's success. Their professionalism and unmatched skill ensured precision and finesse in every aspect from conceptualization to execution. The end result surpassed our expectations, leaving us thoroughly impressed. Without a doubt, we'll return to Muzzammil for future development needs.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Client Always Get </span>
        <span> Exceptional Work</span>
        <span> From Me... </span>

        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        modules={[Pagination]} // Include Pagination module in the Swiper configuration
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="Img" />
              <span style={{ color: darkMode ? "white" : "" }}>
                {client.review}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
