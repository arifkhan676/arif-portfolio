import React from 'react'
import img2 from "./code.png"
import Image from "next/image"

function Card (props:any) {
  return (
    <div className="text-center shadow-2xl p-10 rounded-2xl my-10 dark:bg-white">
    <Image src={props.src} width={100} height={100} style={{margin:"auto"}}   alt="" />
    <h3 className="text-2xl font-medium py-5" >{props.title}</h3>
    <p className="py-2" >{props.subTitle}
    </p>
    <h4 className="text-teal-400 py-4" >{props.h4Title}</h4>
    <p className="py-1 text-gray-800">{props.pT1}</p>
    <p className="py-1 text-gray-800">{props.pT2}</p>
    <p className="py-1 text-gray-800">{props.pT3}</p>
  </div>
  )
}

export default Card
