import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import Button from "../components/button";
import Layout from "../components/layout";
import StackedCard from "../components/stacked-card";
import GetStarted from "../components/get-started";

import headerImg from "../images/man.jpeg";
import introImg from "../images/intro-img.png";
import smartSaveImg from "../images/smartsave.png";
import TestimonialCard from "../components/testimonial-card";

const steps = [
  {
    number: 1,
    text: "Reach out to one of our specialists, and have short introduction session.",
  },
  {
    number: 2,
    text: "Our specialist will prepare personalized package suitable for your needs.",
  },
  {
    number: 2,
    text: "Poof! You are ready to work smart with optimized operations.",
  },
];

const testimonials = [
  {
    review:
      "SInce implementing Easyshopr our business has seen significant growth.",
    rating: 4,
    author: "Jack Sibire",
    role: "Lead Manager, Growio",
  },
  {
    review: "I recommend Easyshopr to any business looking for improvements.",
    rating: 5,
    author: "Adele Mouse",
    role: "Product Manager, Mousio",
  },
  {
    review: "I can't imagine running our company without it.",
    rating: 4,
    author: "Ben Clock",
    role: "CTO, Clockwork",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="container">
        <header className="grid place-items-center grid-cols-[45%_1fr] pt-8 min-h-screen">
          <div className="">
            <p className="text-gray-200 text-[13px] font-bold uppercase mb-3">
              Free 30 days trial
            </p>
            <h1 className="text-7xl font-semibold mb-7">
              The best way to showcase your project.
            </h1>
            <p className="text-black-900 text-xl">
              Here you can put a short description about your project.
            </p>
            <div className="flex gap-5 mt-10">
              <Button>Try for free</Button>
              <Button variant="secondary">See how it works</Button>
            </div>
          </div>

          <div className="relative md:left-5 h-[595px] w-full lg:w-[727px]">
            {/* <img src={headerImg} width="727px" height="595px" /> */}
            <img src={headerImg} className="object-cover h-full w-full" />
          </div>
        </header>

        <section className="flex flex-col items-center my-32">
          <p className="text-center text-black-100 font-semibold max-w-sm">
            Trusted by individuals and teams at the world's best companies
          </p>
          <div className="flex gap-5 text-3xl text-gray-200 font-semibold justify-center mt-5">
            <p>Logo</p>
            <p>Logo</p>
            <p>Logo</p>
            <p>Logo</p>
            <p>Logo</p>
          </div>
        </section>

        <StackedCard>
          {/* <section className="relative my-32">
            <div className="relative z-10 bg-white rounded-2xl grid place-items-center grid-cols-[40%_1fr] px-12 w-full"> */}
          <div>
            <h2 className="text-5xl font-semibold text-black-900">
              Introducing good solution
            </h2>
            <p className="text-black-900 text-xl mt-1 mb-3">
              Join our community and experience the benefits today!
            </p>
            <Button>Try for free</Button>
          </div>
          <div className="h-[450px] relative w-full bottom-32">
            <img src={introImg} className="h-full object-cover w-full" />
          </div>
          {/* </div> */}

          {/* <div className="absolute -z-5 h-20 px-4 -bottom-3 w-full">
              <div className="bg-gray-200 opacity-[.13] w-full h-full rounded-2xl" />
            </div>
          </section> */}
        </StackedCard>

        <section className="grid grid-cols-2 place-items-center my-32">
          <div className="h-[450px] w-full">
            <img src={smartSaveImg} className="h-full object-cover w-full" />
          </div>

          <div className="flex flex-col gap-4 max-w-[80%]">
            <p className="uppercase text-gray-200 text-[13px] font-bold">
              Smartsave
            </p>
            <h2 className="text-black-900 text-[32px] font-semibold leading-10 max-w-[60%]">
              All your work is safe with us
            </h2>
            <p className="text-black-900">
              We take your data security seriously, which is why we use advanced
              encryption protocols to protect your files in the cloud. Your data
              is safe abd secure with us.
            </p>
            <Button variant="secondary">Try now</Button>
          </div>
        </section>

        <section className="grid grid-cols-2 place-items-center mb-32">
          <div className="flex flex-col gap-4 max-w-[80%]">
            <p className="uppercase text-gray-200 text-[13px] font-bold">
              Costsaver
            </p>
            <h2 className="text-black-900 text-[32px] font-semibold leading-10 max-w-[60%]">
              Cost saving in a smart way
            </h2>
            <p className="text-black-900">
              Powerful tool that helps you reduce costs and save money on your
              business operations. With advanced analytics and optimization
              algorithms, Costsaver analyzes your existing workflows and
              identifies areas for improvement.
            </p>
            <Button variant="secondary">Try now</Button>
          </div>

          <div className="h-[450px] w-full">
            <img src={smartSaveImg} className="h-full object-cover w-full" />
          </div>
        </section>

        <StackedCard gridCols="grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="relative w-full bottom-48">
              <img src={introImg} className=" w-full" />
            </div>

            {/* <div className="flex-grow gap-5"> */}
            <h2 className="text-5xl font-semibold text-black-900">
              How to join our community
            </h2>
            <p className="text-black-900 text-xl mt-1 mb-3">
              Just 3 simple steps to optimize your company operations.
            </p>
            <Button>Sign up now</Button>
            {/* </div> */}
          </div>

          <div>
            {steps.map((step) => (
              <div className="border-b border-gray-300 py-8">
                <h3 className="text-black-900 text-[32px] font-semibold leading-10">
                  Step {step.number}
                </h3>
                <p className="text-gray-100 mt-8 max-w-[60%]">{step.text}</p>
              </div>
            ))}
          </div>
        </StackedCard>

        <section className="my-32">
          <h2 className="text-5xl font-semibold text-center mb-4">Testimonials</h2>
          <p className="text-center text-xl text-black-900 ">
            People love what we do and we want to let you know
          </p>

          <div className="grid grid-cols-3 gap-8 mt-8">
            {testimonials.map((item) => (
              <TestimonialCard testimonial={item} />
            ))}
          </div>
        </section>

        <GetStarted />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
