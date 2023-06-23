import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="my-20">
      <section>
        <SectionTitle
          subHeading="What our clients say"
          heading="testimonials"
        />
      </section>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center space-y-10 px-16">
                <div className="w-36 mx-auto">
                  <Rating value={review.rating} readOnly />
                </div>
                <p>{review.details}</p>
                <h2 className="font-bold text-center">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
