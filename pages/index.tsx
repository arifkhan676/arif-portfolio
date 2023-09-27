import Head from "next/head"
import { BsFillMoonStarsFill, BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Image from "next/image"
import img from "./arifBG.png"
import img1 from "./design.png"
import img2 from "./code.png"
import img3 from "./consulting.png"
import { relative } from "path"
import Card from "./Card"
import pic1 from "./glass.png"
import pic2 from "./todo.jpg"
import pic3 from "./asri.png"
import pic4 from "./Chat.jpg"
import pic5 from "./ting.jpg"
import pic6 from "./wb2.png"
import { useState } from "react"
import { Divider } from "@mui/material"

export default function Home() {

  const [darkMode, setdarkMode] = useState(false);


  return (
    <div className={darkMode ? "dark" : ""} >
      <Head>
        <title>  Ariful Hasan Portfolio </title>
        <meta />
        <link rel="icon" href="" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 " >
        <section className="min-h-screen" >
          <nav className="py-10 mb-10 flex justify-between "  >
            <h1 className="text-xl font-burtons dark:text-white" >Md Ariful Hasan</h1>
            <ul className="flex items-center" >
              <li> <BsFillMoonStarsFill className="cursor-pointer text-2xl  dark:text-white" onClick={() => setdarkMode(!darkMode)} /> </li>
              <li> <a className="bg-gradient-to-r bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 " href="https://drive.google.com/file/d/15ZtGBLSkt8muvSy5jqk6pph4yIevj0fo/view?usp=sharing">Resume</a> </li>
            </ul>
          </nav>
          <div className="py-10 text-center" >
            <h2 className="text-5xl text-teal-600 py-2 font-bold  " >MD ARIFUL HASAN</h2>
            <h3 className="text-2xl  font-semibold py-2 dark:text-white " >Front End & WordPress Developer </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-l max-w-lg mx-auto dark:text-white " >Hi I am Md Ariful Hasan,have expertise in Front-End Web Development.
              <br /> Graduate in Computer Science and Engineering with a solid background in software development, programming languages, and problem-solving using JavaScript, C/ C++, and has software development experience. <br /> Ping me Down and lets get connect.</p>
          </div>
          <div className="flex justify-center text-5xl gap-16 dark:text-white" >
            <a href="https://www.facebook.com/mdariful.hasan.10690/"> <BsFacebook /> </a>
            <a href="https://github.com/arifkhan676">  <AiFillGithub /> </a>
            <a href="https://www.linkedin.com/in/hassanul-arif-0899181aa/">  <AiFillLinkedin />  </a>


          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mx-auto overflow-hidden " >
            <Image src={img} layout="fill" style={{ paddingRight: 30, paddingLeft: 5 }} alt="" />
          </div>
        </section>

        <section>
          <div className="text-center py-12 dark:text-white" >
            <h3 className="text-3xl py-1 dark:text-white " >
              Services I Offer
            </h3>
            <p className="text-md pt-5 leading-8 dark:text-white"> I like to build several types of software/web-applications such as, <span className="from text-teal-600" > E-Commerce site,Hospital management,Education System </span>
              and many more <br />
              Initially,I am focusing on Front-End web developing,where you will get unique services as I can assure</p>
          </div>
          <div className="lg:flex gap-10 ">
            <Card
              src={img1}
              title="WordPress Development"
              subTitle="Willing to build outstanding websites for the clients."
              h4Title="WordPress Websites"
              pT1="Elementor Pro"
              pT2="Responsive"
              pT3="Custom Coding"
            />
            <Card src={img2}
              title="Front End Development"
              subTitle="Front End with Javascripts has a lots of fun! Isn't it?"
              h4Title="HTML5, CSS3"
              pT1="JavaScripts"
              pT2="Reactjs"
              pT3="Tailwind CSS"
            />
            <Card src={img3}
              title="Shopify Development"
              subTitle="Shopify is an ecommerce platform to make your business fast"
              h4Title="Shopify Store Design"
              pT1="Products upload and order"
              pT2="Shipping System"
              pT3="Payment Gateway"
            />
          </div>
          <h3 className="text-3xl py-5 text-center dark:text-white" >
            A little showcase of my projects.
          </h3>
          <div className="flex flex-col gap-10 py-10 ml-12 lg:flex-row lg:flex-wrap text-center" >
            <Image src={pic1} className="rounded-lg object-cover" alt="" width={400} height={400} />
            <Image src={pic2} className="rounded-lg object-cover" alt="" width={400} height={400} />
            <Image src={pic3} className="rounded-lg object-cover" alt="" width={400} height={400} />
            <Image src={pic4} className="rounded-lg object-cover" alt="" width={400} height={400} />
            <Image src={pic5} className="rounded-lg object-cover" alt="" width={400} height={400} />
            <Image src={pic6} className="rounded-lg object-cover" alt="" width={400} height={400} />
          </div>

          <div className="py-10" >
            <Divider className="dark:bg-white" />
            <h5 className="text-center font-burtons pt-10 text-teal-600   dark:text-white" > Front-End / Software Engineer /  Web Developer  </h5>
            <h2 className="text-center py-5  dark:text-white" > Md Ariful Hasan </h2>
            <p className="py-2 text-center dark:text-white" > Below,I'm Providing my<span className="from text-teal-600" > Email,Linkedin </span> button.Therefore,You can contact with me anytime  </p>
          </div>
          <div className="text-center" >
            <a className="bg-gradient-to-r bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 " href="mailto:mdarifulhasan371@gmail.com">Email </a>
          </div>

          <div className="flex justify-center text-xl py-10 gap-16  dark:text-white" >
            <a href="https://www.facebook.com/mdariful.hasan.10690/"> <BsFacebook /> </a>
            <a href="https://github.com/arifkhan676">  <AiFillGithub /> </a>
            <a href="https://www.linkedin.com/in/hassanul-arif-0899181aa/">  <AiFillLinkedin />  </a>
          </div>

        </section>

      </main>
    </div>

  )
}
