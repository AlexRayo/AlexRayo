import React from 'react'

function skillItem({svgCode, viewBox, skillName, iconColor}:any) {
  return (
    <div className="block py-2 text-center bg-slate-100 rounded flex items-center justify-center">
        <div className="text-center inline-block">
            <div className="">
                <svg className={`w-10 md:w-12 lg:w-14 mx-auto ${iconColor}`} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><path d={svgCode}/></svg>
            </div>
            <p className="text-xs text-gray-500">{skillName}</p>
        </div>
    </div>
  )
}

export default skillItem