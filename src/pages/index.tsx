
import React from 'react'
import CoverSection from '../sections/homeCover'
import AboutSection from '../sections/homeAbout'
import SkillsSection from '../sections/homeSkills'

import ModalSkill from '../components/modalSkill'

export default function Home() {
    const [showModal, setShowModal] = React.useState(false)

    return (
        <div className="2xl:w-7/12 mx-auto">
            <CoverSection style={"h-96 border-b border-slate-300 flex items-center p-3"}/>
            <button onClick={()=>setShowModal(!showModal)}>Open modal</button>

            <AboutSection style={"my-8 lg:my-20 flex items-center p-3"}/>

            <SkillsSection style={"my-8 lg:my-20 p-3"}/>

            <ModalSkill setShowModal={setShowModal} showModal={showModal}
            style={showModal? 'block' : 'hidden'}
            />
           
        </div>
    )
}
