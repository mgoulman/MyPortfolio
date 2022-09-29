import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
  },
  {
    avatar: AVTR2,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
  },
  {
    avatar: AVTR3,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
  },
  {
    avatar: AVTR4,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <div className="container testimonials_container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
