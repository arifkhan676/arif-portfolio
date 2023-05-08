import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from "react-icons/ai"
import Image from "next/image"
import img from "./arifBG.png"
import img1 from "./design.png"
import img2 from "./code.png"
import img3 from "./consulting.png"
import { relative } from "path"
import Card from "./Card"
import pic1 from "./Keeper.jpg"
import pic2 from "./todo.jpg"
import pic3 from "./drum.jpg"
import pic4 from "./Chat.jpg"
import pic5 from "./ting.jpg"
import pic6 from "./wb.jpg"
import { useState } from "react"


export default function Home() {
  const [darkMode,setdarkMode] = useState(false);
 
  return (
    <div className={darkMode ? "dark" : "" } >
   <Head>
     <title>  Ariful Hasan Portfolio </title>
     <meta />
     <link rel="icon" href="" />
   </Head>
   <main className="bg-white px-10 dark:bg-gray-900 " >
     <section className="min-h-screen" >
      <nav className="py-10 mb-10 flex justify-between "  >  
       <h1 className="text-xl font-burtons dark:bg-white" >Md Ariful's Hasan</h1>
       <ul className="flex items-center" >
         <li> <BsFillMoonStarsFill className="cursor-pointer text-2xl" onClick={()=>setdarkMode(!darkMode)} /> </li>
         <li> <a className="bg-gradient-to-r bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 " href="#">Resume</a> </li>
       </ul>
      </nav>
      <div className="py-10 text-center" >
        <h2 className="text-5xl text-teal-600 py-2 font-bold " >Md Ariful Hasan</h2>
        <h3 className="text-2xl  font-semibold py-2  " >Front End Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-l max-w-lg mx-auto " >Hi I am Md Ariful Hasan,Front-End Devloper and Designer. <br></br> Interested to work in design side.Ping me Down and lets get connect</p>
      </div>
      <div className="flex justify-center text-5xl gap-16 " >
       <AiFillTwitterCircle />
       <AiFillYoutube />
       <AiFillLinkedin /> 
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mx-auto overflow-hidden " >
      <Image  src={img} layout="fill" style={{paddingRight:30,paddingLeft:5}} alt=""  />  
      </div>
     </section>

    <section>
      <div className="text-center py-12" > 
        <h3 className="text-3xl py-1 " >
          Services I Offer
        </h3>
        <p  className="text-md py-2 leading-8 text-gray-800"> I offer severl thing like <span className="from text-teal-600" > developing </span> ,SEO and lots of other site building  <br />
        
        I offer severl thing like developing ,SEO and lots of other site building </p>
      </div>
     <div className="lg:flex gap-10 ">

    <Card 
         src={img1}
          title="Beautiful Design"
          subTitle="Creating an outstanding design for the client
          as I need clients satisfaction"
          h4Title="Design tool use"
          pT1="Photoshop"
          pT2="Illustrator"
          pT3="Figma"
    />
     <Card src={img2}
          title="Beautiful Design"
          subTitle="Creating an outstanding design for the client
          as I need clients satisfaction"
          h4Title="Design tool use"
          pT1="Photoshop"
          pT2="Illustrator"
          pT3="Figma"
    />
     <Card src={img3}
          title="Beautiful Design"
          subTitle="Creating an outstanding design for the client
          as I need clients satisfaction"
          h4Title="Design tool use"
          pT1="Photoshop"
          pT2="Illustrator"
          pT3="Figma"
    />
         </div>
         <h3 className="text-3xl py-1 text-center" >
         My Projects View
        </h3>
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-center" >
       <Image src={pic1} className="rounded-lg object-cover" alt="" width={400} height={400}/> 
       <Image src={pic2} className="rounded-lg object-cover" alt="" width={400} height={400}/> 
       <Image src={pic3} className="rounded-lg object-cover" alt="" width={400} height={400}/> 
       <Image src={pic4} className="rounded-lg object-cover" alt="" width={400} height={400}/> 
       <Image src={pic5} className="rounded-lg object-cover" alt="" width={400} height={400}/> 
       <Image src={pic6} className="rounded-lg object-cover" alt="" width={400} height={400}/> 

'
    </div>

    </section>

 </main>
    </div>

  )
}
