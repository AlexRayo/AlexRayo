import React from 'react'

function skillItem({size, text, color, style}:any) {
    /* 
    * "style" param add more css classes

    * TAGS SIZES
    ** h1 = xl
    ** h2 = lg
    ** h4 = md 
    ** p = sm and xs

    */
  return (
    size === "xl"?
    <h1 className={`font-bold text-5xl md:text-6xl ${color} ${style}`}>
        {text}
    </h1>
    :
    size === "lg"?
    <h2 className={`font-bold text-4xl md:text-5xl ${color} ${style}`}>
        {text}
    </h2>
    :
    size === "md"?
    <h4 className={`text-2xl md:text-3xl ${color} ${style}`}>
        {text}
    </h4>
    :
    size === "xs"?
    <p className={`text-xs ${color} ${style}`}>
        {text}
    </p>
    :
    <p className={`text-sm ${color} ${style}`}>
        {text}
    </p>
  )
}

export default skillItem