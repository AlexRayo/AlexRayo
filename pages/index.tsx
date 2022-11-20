import Head from 'next/head'
import Image from 'next/image'

import Text from '../components/text'
import Skill from '../components/skillItem'

import { skillIcons } from '../icons/skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* layout */}
      <main className='container mx-auto'>
        {/* body */}
        <div className="2xl:w-7/12 mx-auto">

            {/* cover */}
            <div className="h-96 border-b border-slate-300 flex items-center p-3">
                <div className='md:w-6/12'>
                    <Text
                        text="Asdf Devs"
                        size="xl"
                    />
                    <Text
                        text="Frontend developer"
                        size="md"
                    />
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis omnis pariatur alias vero hic nobis iste, ipsa."
                    />
                    <div className="flex  justify-end mt-2">                        
                    <a href="#" className='btn-secondary'>Contact</a>
                        <a href="#" className='btn-primary ml-4'>My Resume</a>
                    </div>
                </div>
            </div>

            {/* About */}
            <div className="my-8 lg:my-20 flex items-center p-3">
                <div className="md:w-6/12"></div>
                <div className='md:w-6/12'>
                    <Text
                        text="About"
                        size="lg"
                    />
                    <span className='rectangle-button'></span>
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."
                    />
                    <br/>
                    <Text
                        text="Inventore facere earum nostrum quod illo libero qui minima. Eligendi, explicabo esse."
                    />
                </div>
            </div>

            {/* Skills */}
            <div className="my-8 lg:my-20 p-3">
                <div className='md:w-6/12'>
                    <Text
                        text="Skills"
                        size="lg"
                    />
                    <span className='rectangle-button'></span>
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."
                        style="mb-2"
                    />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    <Skill                    
                        skillName = {'HTML5'}
                        svgCode = {skillIcons.html5.svgCode}
                        viewBox={skillIcons.html5.viewBox}
                        iconColor = {'fill-orange-400'}
                    />
                    <Skill                    
                        skillName = {'CSS3'}
                        svgCode = {skillIcons.css3.svgCode}
                        viewBox={skillIcons.css3.viewBox}
                        iconColor = {'fill-sky-400'}
                    />
                    <Skill                    
                        skillName = {'JavaScript'}
                        svgCode = {skillIcons.javascript.svgCode}
                        viewBox={skillIcons.javascript.viewBox}
                        iconColor = {'fill-amber-400'}
                    />
                    <Skill                    
                        skillName = {'TypeScript'}
                        svgCode = {skillIcons.typescript.svgCode}
                        viewBox={skillIcons.typescript.viewBox}
                        iconColor = {'fill-sky-600'}
                    />
                    <Skill                    
                        skillName = {'MySql'}
                        svgCode = {skillIcons.mysql.svgCode}
                        viewBox={skillIcons.mysql.viewBox}
                        iconColor = {'fill-sky-700'}
                    />
                    <Skill                    
                        skillName = {'Git/Github'}
                        svgCode = {skillIcons.git.svgCode}
                        viewBox={skillIcons.git.viewBox}
                        iconColor = {'fill-slate-900'}
                    />
                    <Skill                    
                        skillName = {'React JS'}
                        svgCode = {skillIcons.react.svgCode}
                        viewBox={skillIcons.react.viewBox}
                        iconColor = {'fill-sky-400'}
                    />
                    <Skill                    
                        skillName = {'React Native'}
                        svgCode = {skillIcons.react.svgCode}
                        viewBox={skillIcons.react.viewBox}
                        iconColor = {'fill-sky-400'}
                    />
                    <Skill                    
                        skillName = {'NodeJS'}
                        svgCode = {skillIcons.node.svgCode}
                        viewBox={skillIcons.node.viewBox}
                        iconColor = {'fill-green-500'}
                    />
                    <Skill                    
                        skillName = {'Wordpress'}
                        svgCode = {skillIcons.wordpress.svgCode}
                        viewBox={skillIcons.wordpress.viewBox}
                        iconColor = {'fill-sky-700'}
                    />
                    <Skill                    
                        skillName = {'UI/UX Design'}
                        svgCode = {skillIcons.uiux.svgCode}
                        viewBox={skillIcons.uiux.viewBox}
                        iconColor = {'fill-violet-500'}
                    />
                </div>
            </div>
        </div>
      </main>

    </div>
  )
}
