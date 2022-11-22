import React from 'react'
import ModalSkill from '../components/modalSkill'

const skillItem =({ modalText, svgCode, viewBox, skillName, iconColor }: any) =>{
    const [showModalSkill, setShowModalSkill] = React.useState(false)

    const modalSkill = () => {
        setShowModalSkill(!showModalSkill);
    }
    return (
        <>
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
            <div onClick={modalSkill} className="block py-2 text-center bg-slate-100 rounded flex items-center justify-center">
                <div className="text-center inline-block">
                    <div className="">
                        <svg className={`w-10 md:w-12 lg:w-14 mx-auto ${iconColor}`} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><path d={svgCode} /></svg>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{skillName}</p>
                </div>
            </div>
        </>
    )
}

export default skillItem