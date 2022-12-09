import React from 'react'

//BTN CLASSES
const BTN = "inline-block py-2 px-4 rounded"

function Button({type, text, href, target, style}:any) {
  return (    
        type === "primary" ?
        <a 
            href= {href} 
            target= {target !== undefined ? target : "_self"}
            className={`bg-primary text-white border border-slate-900 hover:bg-opacity-75 hover:border-opacity-5 ${BTN} ${style}`}>
            {text}
        </a>
        :
        type === "secondary" ?
        <a 
            href= {href}
            target= {target !== undefined ? target : "_self"} 
            className={`text-slate-900 border border-slate-900 hover:border-opacity-75 ${BTN} ${style}`}>
            {text}
        </a>
        :
        <a 
            href= {href}
            target= {target !== undefined ? target : "_self"} 
            className={`${BTN} ${style}`}>
            {text}
        </a>
  )
}
//Custom buttons will not have dark/light mode switching

export default Button