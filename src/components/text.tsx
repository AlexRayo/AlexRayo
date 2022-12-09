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
    size === "2xl"?
    <h1 className={`font-bold text-5xl ${color} ${style}`}>
        {text}
    </h1>
    :
    size === "xl"?
    <h2 className={`font-bold text-4xl ${color} ${style}`}>
        {text}
    </h2>
    :
    size === "lg"?
    <h3 className={`text-2xl ${color} ${style}`}>
        {text}
    </h3>
    :
    size === "md"?
    <h4 className={`text-lg ${color} ${style}`}>
        {text}
    </h4>
    :
    size === "xs"?
    <p className={`text-xs ${color} ${style}`}>
        {text}
    </p>
    :
    <p className={`text-base ${color} ${style}`}>
        {text}
    </p>
  )
}

export default skillItem