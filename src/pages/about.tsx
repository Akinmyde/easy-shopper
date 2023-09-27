import { HeadFC } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";
import GetStarted from "../components/get-started";

import peopleImg from "../images/people.png";
import smartSaveImg from "../images/smartsave.png";
import avatarImg from "../images/avatar.jpeg";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container">
        <header className="pt-32 min-h-screen text-center">
          <div className="mb-8">
            <h1 className="text-black-900 text-3xl md:text-5xl font-semibold mb-6">
              About us
            </h1>

            <p className="text-xl text-black-900 max-w-[70%] mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              eaque recusandae perspiciatis perferendis at commodi expedita
              doloribus? Architecto asperiores earum optio.
            </p>
          </div>
          <img src={peopleImg} height="410" />
        </header>

        <section className="mt-8 mb-8 pb-12 border-b border-b-gray-300 text-center">
          <h2 className="text-black-900 text-3xl md:text-5xl font-semibold mb-6">
            Our mission
          </h2>

          <p className="text-xl text-black-900 max-w-[70%] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            possimus non nisi dolore perferendis neque officia, voluptates cum
            voluptas suscipit sit, harum odit ratione beatae hic vero vel culpa
            fugiat voluptatem molestias aut. Quisquam aut id qui nemo, facilis
            deserunt quo. Veritatis fuga praesentium cum eveniet doloribus
            corporis! Magnam, quod?
          </p>
        </section>

        <section className="flex flex-col md:flex-row items-center my-32">
          <h2 className="text-black-900 text-3xl md:text-5xl font-semibold text-center md:text-left md:max-w-[30%]">
            Let's start working more efficiently today!
          </h2>
          <div className="h-[450px] w-full">
            <img src={smartSaveImg} className="h-full object-contain w-full" />
          </div>
        </section>

        <section className="mb-8  text-center">
          <h2 className="text-black-900 text-3xl md:text-5xl font-semibold mb-6">
            Team
          </h2>

          <p className="text-xl text-black-900 max-w-[70%] mx-auto mb-8">
            Meet the people behind our magical product.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-8 place-items-center ">
            {[...Array(8)].map((_, index) => (
              <div>
                <div className="h-[80px] w-[80px] md:h-[160px] md:w-[160px]">
                  <img
                    src={avatarImg}
                    key={index}
                    className="rounded-full h-full w-full"
                    // width="160"
                    // height="160"
                  />
                </div>
                <p className="text-black-900 font-semibold md:text-xl text-center mt-4">
                  Hannah Pete
                </p>
                <p className="text-black-900 text-xl text-center">CEO</p>
              </div>
            ))}
          </div>
        </section>
        <GetStarted />
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>About Us</title>;

export default AboutPage;
