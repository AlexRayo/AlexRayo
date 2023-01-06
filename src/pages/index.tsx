import Image from 'next/image'
import Cover from '../sections/homeCover'
import About from '../sections/homeAbout'
import Skills from '../sections/homeSkills'
import Projects from '../sections/homeProjects'

  console.log("API KEY: ", process.env.API_KEY);
export default function Home() {
    return (
        <div>

            <Cover/>

            <About/>
            
            <Skills/>  

            <Projects/>
            
        </div>
    )
}
