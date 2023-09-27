import { HeadFC } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";

import image from "../images/intro-img.png";
import Input from "../components/input";
import Button from "../components/button";

const ContactPage = () => {
  return (
    <Layout>
      <div className="grid place-items-center md:grid-cols-2 py-24">
        <div className="w-full">
          <img src={image} className="h-full object-cover w-full" />
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-semibold text-black-900">
            Contact Us
          </h1>
          <p className="text-black-900 text-xl my-8">
            Explore the future with us. Feel free to get in touch
          </p>

          <form className="grid gap-6">
            <Input
              label="Name"
              placeholder="Full Name"
              value=""
              onChange={() => {}}
            />
            <Input
              label="Email"
              placeholder="Email Address"
              value=""
              onChange={() => {}}
            />
            <Input
              label="Message"
              placeholder="How can we get better?"
              value=""
              onChange={() => {}}
            />

            <Button fullWidth>Send message</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Contact Page</title>;

export default ContactPage;
