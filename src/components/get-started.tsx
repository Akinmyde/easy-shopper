import React from "react";

import Button from "./button";

import smartSaveImg from "../images/smartsave.png";

const GetStarted = () => {
  return (
    <section className="bg-white pt-8 px-6 md:p-0 rounded-xl grid md:grid-cols-2 place-items-center my-32">
      <div className="flex flex-col gap-4 md:max-w-[80%]">
        <h2 className="text-black-900 text-[32px] font-semibold leading-10 md:max-w-[60%]">
          Get started with Lando today
        </h2>
        <p className="text-black-900">Start optimizing your processes today.</p>
        <Button>Sign up now</Button>
      </div>
      <div className="h-[450px] w-full">
        <img src={smartSaveImg} className="h-full object-cover w-full" />
      </div>
    </section>
  );
};

export default GetStarted;
