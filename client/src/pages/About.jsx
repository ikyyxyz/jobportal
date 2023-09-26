import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-10 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-6 mb-2">
            Welcome to Job, the premier job search platform dedicated to helping
            you chase your career dreams. At Job, we believe that everyone
            deserves the opportunity to find a job that matches their talents,
            interests, and career aspirations.
          </p>
          <h1 className="text-xl text-blue-600 font-bold mb-1">Who We Are?</h1>
          <p className="text-justify leading-6">
            We are a passionate team committed to efficiently and meaningfully
            connecting job seekers and companies. With extensive experience in
            the field of human resources, we understand the importance of the
            job search process. That's why we created Job, so you can:
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row items-center sm:flex-wrap">
        <div className="md:w-full leading-6 px-5 text-justify">
          <h3 className="text-xl text-black-600 font-bold mb-1">
            Find Jobs You Love
          </h3>
          <p className="text-justify leading-6 text-gray-500 mb-3">
            At Job, you can explore thousands of job listings from various
            industries and locations. Search for jobs that align with your
            skills and interests, making every day at work a fulfilling
            experience.
          </p>
          <h3 className="text-xl text-black-600 font-bold mb-1">
            Enhance Your Career Prospects
          </h3>
          <p className="text-justify leading-6 text-gray-500">
            We don't just provide job listings; we offer resources to help you
            develop your skills, improve your CV, and prepare for job
            interviews. At Job, you're not just searching for a job; you're
            building a successful career.
          </p>
        </div>

        <div className=" md:w-full leading-6 px-5 text-justify">
          <h3 className="text-xl text-black-600 font-bold mb-1">
            Stay Informed About the Latest Job Openings
          </h3>
          <p className="text-justify leading-6 text-gray-500 mb-3">
            We continuously update our database with the latest job openings,
            ensuring you never miss out on valuable opportunities. Register with
            Job and receive instant notifications via email or your mobile
            device whenever new jobs that match your profile become available.
          </p>
          <h3 className="text-xl text-black-600 font-bold mb-1">
            Why Choose Job?
          </h3>
          <p className="text-justify leading-6 text-gray-500">
            We understand that there are many job search platforms out there,
            but Job is different. We are committed to delivering a superior
            job-seeking experience:
          </p>
        </div>
      </div>
      <div className="w-full leading-6 px-5 text-justify">
        <ul className="flex flex-col gap-2">
          <li className="list-disc">
            <span className="font-bold">Accurate and Trustworthy</span>: We
            feature jobs only from reputable and trusted companies.
          </li>
          <li className="list-disc">
            <span className="font-bold">User-Friendly</span>: Our website and
            app are designed for your convenience.
          </li>
          <li className="list-disc">
            <span className="font-bold">Customer Support</span>: Our team is
            ready to assist you with any questions or issues.
          </li>
          <li className="list-disc">
            <span className="font-bold">Free</span>: Our services are free for
            job seekers.
          </li>
        </ul>
        <p className="mt-2">
          So, start your job search journey today with Job. We are here to
          assist you in achieving your career goals. Be part of a successful
          job-seeking community with Job! Thank you for choosing Job as your
          partner in reaching career success. Don't hesitate to reach out if you
          need assistance or guidance. Together, we can achieve greater heights!
        </p>
      </div>
    </div>
  );
};

export default About;
