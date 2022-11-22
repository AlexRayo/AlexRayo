import Image from 'next/image'

import Text from '../components/text'
import Skill from '../components/skillItem'

import { skillIcons } from '../icons/skills'

import Cover from '../sections/homeCover'
import About from '../sections/homeAbout'
import Skills from '../sections/homeSkills'

export default function Home() {
    return (
        <div className="2xl:w-7/12 mx-auto">

            {/* cover */}
            <Cover style={"h-96 border-b border-slate-300 flex items-center p-3"}/>

            {/* About */}
            <About style={"my-8 lg:my-20 flex items-center p-3"}/>
            
            {/* Skills */}
            <Skills style="my-8 lg:my-20 p-3"/>            
            
        </div>
    )
}
