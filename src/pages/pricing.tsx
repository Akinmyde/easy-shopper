import { HeadFC } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";
import GetStarted from "../components/get-started";
import PricingCard from "../components/pricing-card";
import Checkmark from "../components/check-mark";

import questionIcon from "../images/question.png";
import Accordion from "../components/accordion";
import { faqsAccordionItems } from "../data";

const features = [
  {
    title: "Basic",
    items: [
      "Process Analysis",
      "Task Management",
      "Time Tracking",
      "Performance Metrics",
      "Customizable Reports",
      "Email Integration",
    ],
  },
  {
    title: "Pro",
    items: [
      "Process Analysis",
      "Task Management",
      "Time Tracking",
      "Performance Metrics",
      "Customizable Reports",
      "Email Integration",
      "Real-time Collaboration",
      "Automated Workflows",
    ],
  },
  {
    title: "Business",
    items: [
      "Process Analysis",
      "Task Management",
      "Time Tracking",
      "Performance Metrics",
      "Customizable Reports",
      "Email Integration",
      "Real-time Collaboration",
      "Automated Workflows",
      "Analytics Dashboard",
      "SLA Management",
    ],
  },
];

const Pricing = () => {
  return (
    <Layout>
      <div className="container pb-24">
        <header className="mt-40 grid place-items-center">
          <h1 className="text-black-900 text-3xl md:text-5xl font-semibold text-center">
            Pricing
          </h1>
          <p className="text-black-900 text-xl text-center max-w-[450px] mt-5">
            Our pricing is not expensive, but it's not cheap either. It's
            exactly what it should be.
          </p>

          <div className="grid md:grid-cols-3 my-12">
            <PricingCard
              title="Basic"
              amount={9}
              subtitle="For individuals and small teams"
            />
            <PricingCard
              title="Pro"
              amount={19}
              subtitle="For startups and growing businesses"
              isPrimary
            />
            <PricingCard
              title="Business"
              amount={99}
              subtitle="For organizations with advanced needs"
            />
          </div>
        </header>

        <section>
          <h2 className="text-black-900 text-[32px] font-semibold mb-8">
            Compare Features
          </h2>

          <div className="grid gap-6 md:gap-0 md:grid-cols-3">
            {features.map((feature) => (
              <div>
                <h3 className="text-black-900 text-[32px] font-semibold">
                  {feature.title}
                </h3>
                <ul className="grid gap-4 border-t border-t-gray-300 pt-5 mt-5">
                  {feature.items.map((item) => (
                    <li className="flex items-center gap-4 text-black-900 text-xl">
                      <Checkmark />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid place-items-center mt-12">
          <img src={questionIcon} height={247} width={272} />

          <h2 className="text-black-900 text-5xl font-semibold text-center max-w-[500px]">
            Frequently asked questions
          </h2>
          <div className="md:w-1/2 mt-6">
            <Accordion items={faqsAccordionItems} />
          </div>
        </section>
        <GetStarted />
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Pricing Page</title>;

export default Pricing;
