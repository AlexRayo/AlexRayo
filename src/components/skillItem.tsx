import React from 'react'
import ModalSkill from '../components/modalSkill'

const SkillItem =({ modalText, svgCode, viewBox, skillName, iconColor }: any) =>{
    const [showModalSkill, setShowModalSkill] = React.useState(false)

    const modalSkill = () => {
        setShowModalSkill(!showModalSkill);
    }
    return (
        <div className='group'>
            <ModalSkill
                svgCode={svgCode}
                viewBox={viewBox}
                iconColor={iconColor}
                title={skillName}
                text={modalText}
                showModal={showModalSkill}
                setShowModal={setShowModalSkill}
                style={showModalSkill ? 'initial' : 'hidden'}
            />
            <div onClick={modalSkill} className="group-hover:bg-white group-hover:shadow-md group-hover:scale-105 cursor-pointer block py-2 text-center bg-slate-200 rounded flex items-center justify-center">
                <div className="text-center inline-block">
                    <div className="h-16 my-2">
                        <svg className={`group-hover:scale-110 w-10 md:w-12 lg:w-14 mx-auto ${iconColor}`} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><path d={svgCode} /></svg>
                    </div>
                    <p className="text-xs text-gray-500">{skillName}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillItem