import React from 'react'
import { useInView } from 'react-intersection-observer';

import Text from '../components/text'
import Skill from '../components/skillItem'

import { skillIcons } from '../icons/skills'

function Skills() {

    return (
        <div>
            <div className="xl:w-8/12 mx-auto mb-8 lg:mb-20 py-12 px-3 md:px-12">
                <div className='md:w-6/12'>
                    <Text
                        text="Skills"
                        size="xl"
                        style={`transition-all text-sky-500`}
                    />
                    <span className='rectangle-button bg-sky-500'></span>
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."
                        style="mb-4 text-slate-300"
                    />
                </div>
                <div className="grid grid-flow-row grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    <Skill
                        skillName={'HTML5'}
                        svgCode={skillIcons.html5.svgCode}
                        viewBox={skillIcons.html5.viewBox}
                        iconColor={'fill-orange-600'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'CSS3'}
                        svgCode={skillIcons.css3.svgCode}
                        viewBox={skillIcons.css3.viewBox}
                        iconColor={'fill-sky-500'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'JavaScript'}
                        svgCode={skillIcons.javascript.svgCode}
                        viewBox={skillIcons.javascript.viewBox}
                        iconColor={'fill-amber-500'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'TypeScript'}
                        svgCode={skillIcons.typescript.svgCode}
                        viewBox={skillIcons.typescript.viewBox}
                        iconColor={'fill-sky-600'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'MySql'}
                        svgCode={skillIcons.mysql.svgCode}
                        viewBox={skillIcons.mysql.viewBox}
                        iconColor={'fill-sky-700'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'Git/Github'}
                        svgCode={skillIcons.git.svgCode}
                        viewBox={skillIcons.git.viewBox}
                        iconColor={'fill-slate-300'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'React JS'}
                        svgCode={skillIcons.react.svgCode}
                        viewBox={skillIcons.react.viewBox}
                        iconColor={'fill-sky-400'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'React Native'}
                        svgCode={skillIcons.react.svgCode}
                        viewBox={skillIcons.react.viewBox}
                        iconColor={'fill-sky-400'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'NodeJS'}
                        svgCode={skillIcons.node.svgCode}
                        viewBox={skillIcons.node.viewBox}
                        iconColor={'fill-green-500'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'Wordpress'}
                        svgCode={skillIcons.wordpress.svgCode}
                        viewBox={skillIcons.wordpress.viewBox}
                        iconColor={'fill-sky-700'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                    <Skill
                        skillName={'UI/UX Design'}
                        svgCode={skillIcons.uiux.svgCode}
                        viewBox={skillIcons.uiux.viewBox}
                        iconColor={'fill-violet-500'}
                        modalText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills