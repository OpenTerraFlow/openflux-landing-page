import Page from "@/components/core/Page";
import { Title } from "@/components/core/Title";
import WorkflowBuilder from "@/components/demo-dashboard";
import FeaturesSection from "@/components/Features";
import IndustryCards from "@/components/Industry";
import Pipelines from "@/components/Pipelines";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Workflow from "@/components/Workflow";
import { Check, Heart } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

export const metadata: Metadata = {
  title: "OpenFlux",
  description: "This is the app landing page",
};

export default function Home() {
  return (
    <Page>
      <div className="space-y-10">
        <section className="py-20 bg-slate-800 space-y-8">
          <div className="flex flex-col items-center text-center pt-10">
            <Title
              level={1}
              className="text-3xl md:text-4xl text-white lg:text-5xl font-bold tracking-tight text-gray-900 max-w-5xl leading-tight"
            >
              <span className="text-blue-500"> The Open Platform </span> for
              <span className="text-blue-500"> Sustainable </span> Data
              Operations
            </Title>
            <p className="md:px-4 text-white text-medium md:text-xl max-w-3xl mt-6 leading-relaxed">
              Build resilient data workflows that integrate any source, automate
              tasks, and provide actionable insights, all while supporting local
              ownership and global standards.
            </p>
          </div>
        </section>
        <section
          className="flex flex-col md:flex-row md:justify-around justify-center items-center pt-16 space-y-2 px-6 md:px-10"
          id="features"
        >
          <div className="space-y-4">
            <Title
              level={1}
              className="md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight"
            >
              Powerful Data Pipelines & Workflows
            </Title>
            <p className="text-gray-600 text-medium md:text-md max-w-md leading-relaxed">
              High-performance data pipelines that connect to any source,
              transform information in real time, and deliver insights wherever
              they are needed.
            </p>
            <div className="items-center whitespace-pre-wrap text-sm">
              <p className="flex flex-row font-bold space-x-2 items-center">
                <Check color="green" /> Version Control :
                <span className="font-normal text-gray-500">
                  {" "}
                  Track changes, rollback anytime
                </span>
              </p>
              <p className="flex font-semibold space-x-2 items-center">
                <Check color="green" /> Reusable :{" "}
                <span className="font-normal text-gray-500">
                  Build once, use everywhere
                </span>
              </p>
              <p className="flex font-semibold space-x-2 items-center">
                <Check color="green" /> Community Templates :
                <span className="font-normal text-gray-500">
                  {" "}
                  Start from proven pipelines
                </span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-auto pt-6 md:pt-0 md:pl-6 border-neutral-200">
            <Pipelines />
          </div>
        </section>
        <section className="flex flex-col-reverse md:flex-col justify-center items-center space-y-6 px-6 md:px-10">
          <WorkflowBuilder />
          <p className="text-gray-600 text-base md:text-md max-w-md leading-relaxed">
            End-to-end workflows that connect tools, trigger actions, and
            coordinate every step of your data operations.
          </p>
        </section>
        <section className="bg-white pt-20" id="use-cases">
          <div className="container px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Title
                level={2}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 max-w-5xl mx-auto leading-tight"
              >
                Powering Sustainable Industries
              </Title>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                OpenFlux is designed for organizations making a positive impact
                on our planet and society.
              </p>
            </div>
            <IndustryCards />
          </div>
        </section>
        <section className="bg-gray-50 pt-20">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Title
                level={2}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 max-w-5xl mx-auto leading-tight"
              >
                Everything You Need for Data Integration
              </Title>
              <p className="text-gray-600">
                OpenFlux provides a comprehensive suite of tools to connect,
                transform, and analyze your data for maximum impact.
              </p>
            </div>
            <FeaturesSection />
          </div>
        </section>
        <section className="bg-slate-800 space-y-8 px-6 pb-6">
          <div className="flex flex-col items-center text-center pt-10">
            <Title
              level={1}
              className="text-3xl md:text-4xl text-white lg:text-5xl font-bold tracking-tight text-gray-900 max-w-5xl leading-tight"
            >
              Ready to transform your data integration? today.
            </Title>
            <p className="md:px-4 text-white text-medium md:text-xl max-w-3xl mt-6 leading-relaxed">
              Join the OpenFlux beta and be among the first to experience the
              future of sustainable data operations.
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSe92RfjgkjX2MuvdiSEXpPYrwgCAEF5JXuXQgfCbqBAKKExLQ/viewform?usp=preview"
              target="_blank"
              id="waitlist"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-black hover:bg-gray-200 font-medium px-6 rounded-lg">
                Be an early user
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Page>
  );
}
