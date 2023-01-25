import React from 'react'
import { useInView } from 'react-intersection-observer';
import ModalSkill from '../components/modalSkill'

const SkillItem =({ modalText, modalAriaId, svgCode, viewBox, skillName, iconColor }: any) =>{
    const [showModalSkill, setShowModalSkill] = React.useState(false)

    const { ref: textRef, inView:inViewText } = useInView({
        threshold: 0.5,
      });

    return (
        <div ref={textRef} className={`group ${inViewText? "opacity: 1" : "opacity: 0"}`}>
            <ModalSkill
                svgCode={svgCode}
                viewBox={viewBox}
                iconColor={iconColor}
                title={skillName}
                text={modalText}
                modalAriaId={modalAriaId}
                showModal={showModalSkill}
                setShowModal={setShowModalSkill}
                style={showModalSkill ? 'initial' : 'hidden'}
            />
            <div onClick={()=>setShowModalSkill(!showModalSkill)} className="border border-slate-800 group-hover:border-slate-500 group-hover:bg-slate-800 group-hover:scale-105 cursor-pointer block py-2 text-center rounded flex items-center justify-center">
                <div className="text-center inline-block">
                    <div className="h-16 my-2">
                        <svg className={`group-hover:scale-110 w-10 md:w-12 lg:w-14 mx-auto ${iconColor}`} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><path d={svgCode} /></svg>
                    </div>
                    <p className="text-xs text-gray-400">{skillName}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillItem