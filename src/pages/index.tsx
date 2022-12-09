import Image from 'next/image'

import Cover from '../sections/homeCover'
import About from '../sections/homeAbout'
import Skills from '../sections/homeSkills'
import Projects from '../sections/homeProjects'

export default function Home() {

    return (
        <div className="2xl:w-7/12 mx-auto">

            <Cover/>

            <About/>
            
            <Skills/>  

            <Projects/>
            
        </div>
    )
}
