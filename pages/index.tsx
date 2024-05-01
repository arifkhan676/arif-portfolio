import Head from "next/head";
import { BsFillMoonStarsFill, BsFacebook } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import img from "./arifBG.png";
import img1 from "./design.png";
import img2 from "./code.png";
import img3 from "./consulting.png";
import { relative } from "path";
import Card from "./Card";
import pic1 from "./p1.png";
import pic2 from "./p2.png";
import pic3 from "./p3.png";
import pic4 from "./p4.png";
import pic5 from "./p8.png";
import pic6 from "./p6.png";
import { useState } from "react";
import { Divider } from "@mui/material";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> Ariful Hasan Portfolio </title>
        <meta />
        <link rel="icon" href="" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-10 flex justify-between ">
            <h1 className="text-xl font-burtons dark:text-white">
              Md Ariful Hasan
            </h1>
            <ul className="flex items-center">
              <li>
                {" "}
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl  dark:text-white"
                  onClick={() => setdarkMode(!darkMode)}
                />{" "}
              </li>
              <li>
                {" "}
                <a
                  className="bg-gradient-to-r bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 "
                  href="https://drive.google.com/file/d/1onrXf87frTLPsTI6V4J4NKwgHYtcw0yO/view?usp=sharing"
                >
                  Resume
                </a>{" "}
              </li>
            </ul>
          </nav>
          <div className="py-10 text-center">
            <h2 className="text-5xl text-teal-600 py-2 font-bold  ">
              MD ARIFUL HASAN
            </h2>
            <h3 className="text-2xl  font-semibold py-2 dark:text-white ">
              Front End & WordPress Developer{" "}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-l max-w-lg mx-auto dark:text-white ">
              Hi, I'm Md Ariful Hasan, a Front-End Web Developer with expertise
              in UI/UX design.
              <br /> I hold a degree in Computer Science and Engineering,
              bringing a solid background in software development and
              problem-solving. Proficient in JavaScript, C/C++, and experienced
              in creating engaging landing pages.
              <br /> Let's connect and discuss your project needs!
            </p>
          </div>
          <div className="flex justify-center text-5xl gap-16 dark:text-white">
            <a href="https://www.facebook.com/mdariful.hasan.10690/">
              {" "}
              <BsFacebook />{" "}
            </a>
            <a href="https://github.com/arifkhan676">
              {" "}
              <AiFillGithub />{" "}
            </a>
            <a href="https://www.linkedin.com/in/hassanul-arif-0899181aa/">
              {" "}
              <AiFillLinkedin />{" "}
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mx-auto overflow-hidden ">
            <Image
              src={img}
              layout="fill"
              style={{ paddingRight: 30, paddingLeft: 5 }}
              alt=""
            />
          </div>
        </section>

        <section>
          <div className="text-center py-12 dark:text-white">
            <h3 className="text-3xl py-1 dark:text-white ">Services I Offer</h3>
            <p className="text-md pt-5 leading-8 dark:text-white">
              {" "}
              I like to build several types of software/web-applications such
              as, <br />
              <span className="from text-teal-600">
                {" "}
                WordPress website design, ReactJS website development, UI & UX
                design with Figma, Go High Level CRM management{" "}
              </span>
              <br />
              and many more. As a rising star on{" "}
              <span className="from text-teal-600"> Upwork, </span> I bring a
              blend of creativity and technical expertise to every project.
              <br />
              Let's collaborate and bring your vision to life!
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <Card
              src={img1}
              title="UI & UX"
              subTitle="Willing to design outstanding websites for the clients."
              h4Title="Figma Design"
              pT1="Visual Hierarchy"
              pT2="Responsive"
              pT3="Intuitive Navigation"
            />
            <Card
              src={img2}
              title="WordPress Development"
              subTitle="Front End with Javascripts has a lots of fun! Isn't it?"
              h4Title="HTML5, CSS3"
              pT1="Elementor Pro, Divi"
              pT2="Javascript"
              pT3="Reactjs"
            />
            <Card
              src={img3}
              title="Go High Level (CRM)"
              subTitle="This CRM software helps your business to grow fast"
              h4Title="Automations"
              pT1="Workflows"
              pT2="Landing Page Design"
              pT3="Email marketing"
            />
          </div>
          <h3 className="text-3xl py-5 text-center dark:text-white">
            A little showcase of my projects.
          </h3>
          <div className="flex flex-col gap-10 py-10 ml-12 lg:flex-row lg:flex-wrap text-center">
            <Image
              src={pic1}
              className="rounded-lg object-cover"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src={pic2}
              className="rounded-lg object-cover"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src={pic3}
              className="rounded-lg object-cover"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src={pic4}
              className="rounded-lg object-cover"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src={pic5}
              className="rounded-lg object-cover"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src={pic6}
              className="rounded-lg object-cover"
              alt=""
              width={400}
              height={400}
            />
          </div>

          <div className="py-10">
            <Divider className="dark:bg-white" />
            <h5 className="text-center font-burtons pt-10 text-teal-600   dark:text-white">
              {" "}
              Front-End / Software Engineer / Web Developer{" "}
            </h5>
            <h2 className="text-center py-5  dark:text-white">
              {" "}
              Md Ariful Hasan{" "}
            </h2>
            <p className="py-2 text-center dark:text-white">
              {" "}
              Below,I'm Providing my
              <span className="from text-teal-600"> Email,Linkedin </span>{" "}
              button.Therefore,You can contact with me anytime{" "}
            </p>
          </div>
          <div className="text-center">
            <a
              className="bg-gradient-to-r bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 "
              href="mailto:mdarifulhasan371@gmail.com"
            >
              Email{" "}
            </a>
          </div>

          <div className="flex justify-center text-xl py-10 gap-16  dark:text-white">
            <a href="https://www.facebook.com/mdariful.hasan.10690/">
              {" "}
              <BsFacebook />{" "}
            </a>
            <a href="https://github.com/arifkhan676">
              {" "}
              <AiFillGithub />{" "}
            </a>
            <a href="https://www.linkedin.com/in/hassanul-arif-0899181aa/">
              {" "}
              <AiFillLinkedin />{" "}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
