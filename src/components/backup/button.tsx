import React from 'react'

function Button({type, text, link, style}:any) {
  return (    
        type === "primary" ?
        <a href= {link} className={`btn-secondary ${style}`}>{text}</a>
        :
        <a href= {link} className={`btn-primary ${style}`}>{text}</a>
  )
}

export default Button