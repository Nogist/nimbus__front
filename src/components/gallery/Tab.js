import React from 'react'
import Link from "next/link";

const Tab = ({path, text, onClick, section}) =>{
    return(
      <div>
          <Link href={`${path}`}>
            <a className={`${section === path ? "rounded border-b-4 border-primary2 cursor-pointer" : "border-b-0"} text-primary6 no-underline font-semibold text-base sm:text-xl hover:text-primary2`} onClick={onClick}>{text}</a>
          </Link>
      </div>
    )
  }

export default Tab