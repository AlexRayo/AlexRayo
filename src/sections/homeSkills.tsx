import React from 'react'
import Text from '../components/text'
import Skill from '../components/skillItem'

import { skillIcons } from '../icons/skills'

function Skills() {
    return (
        <div className="">
            <div className="2xl:w-7/12 mx-auto my-8 lg:my-20 p-3">
                <div className='md:w-6/12'>
                    <Text
                        text="Skills"
                        size="xl"
                        color="text-primary"
                    />
                    <span className='rectangle-button'></span>
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."
                        style="mb-2"
                        color="text-primary"
                    />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
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
                        iconColor={'fill-slate-900'}
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