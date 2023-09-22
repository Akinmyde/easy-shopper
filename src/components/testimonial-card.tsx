import React from "react";
import Rating from "./rating";

type ITestimonial = {
  review: string;
  rating: number;
  author: string;
  role: string;
};

type Props = { testimonial: ITestimonial };

const TestimonialCard = ({ testimonial }: Props) => {
  const { review, rating, author, role } = testimonial;

  return (
    <div className="bg-white grid place-items-center gap-4 p-8 rounded-2xl text-center">
      <p className="text-black-900 font-semibold text-xl">"{review}"</p>
      <Rating rating={rating} />
      <p className="text-black-900 font-semibold text-xl">{author}</p>
      <p className="text-gray-100 ">{role}</p>
    </div>
  );
};

export default TestimonialCard;
