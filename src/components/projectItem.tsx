import React from 'react'
import Image from 'next/image'

import { useInView } from 'react-intersection-observer';

import { FaTools, FaEye, FaExternalLinkAlt } from "react-icons/fa";

import Text from '../components/text'

const ProjectItem = ({ srcImg, altImg, title, technologies, description, urlProject }: any) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
      });

    const descriptionRef = React.useRef<HTMLDivElement>(null);
    const btnRef = React.useRef<HTMLDivElement>(null);

    const showDesc = () => {
        if(descriptionRef.current) {
            descriptionRef.current.classList.remove("mt-80")
        }
    }
    const hideDescOnDesk = () => {
        if(descriptionRef.current && window.innerWidth >= 640) {
            descriptionRef.current.classList.add("mt-80")
        }
    }

    /* Hide the description info when user leaves the show more btn on mobile*/
    const hideDescOnMobile = () => {
        if(descriptionRef.current && window.innerWidth < 640) {
            descriptionRef.current.classList.add("mt-80")
        }
    }


    return (
        <div ref={ref} className={`transition-all duration-500 group relative mb-4 md:w-12/12 h-80 md:h-80 overflow-hidden my-4 md:m-3 rounded-b-md ${inView? "opacity-1 pl-0": "opacity-0 pl-12"}`}>

            <div className="absolute w-full">
                
                <div className="relative grid grid-cols-1 h-48 overflow-hidden rounded">
                    <Image
                        src={srcImg}
                        placeholder="blur"
                        alt={altImg}
                        width={1000}
                        height={500}
                        className={'absolute group-hover:scale-105'}
                    />
                    <div className="absolute h-full w-full flex items-end bg-gradient-to-t from-slate-900/95 via-slate-900/30 ">
                        <div className='p-3 md:pl-6'>
                            <Text
                                text={'Proyecto'}
                                size={"sm"}
                                style={"text-white leading-4"}
                            />
                            <Text
                                text={title}
                                size={"md"}
                                style={"text-white font-bold"}
                            />
                        </div>
                    </div>
                </div>
                <div className="h-32 md:h-32 bg-slate-900 flex items-center justify-between">
                    <div className="flex p-3 md:px-6">
                        <FaTools
                            className={"mt-1 mr-2 text-sky-600 min-w-[20px] group-hover:text-sky-500"}                            
                            size={"20px"}
                        />
                        <div className="">
                        <Text
                            text={"Tecnologías:"}
                            size={"sm"}
                            style={"text-sky-600 font-bold group-hover:text-sky-500"}
                        />
                        <Text
                            text={technologies}
                            size={"sm"}
                            style={"text-slate-400 group-hover:text-slate-300"}
                        />
                        </div>
                    </div>
                    <div className="flex justify-end mr-3 min-w-[100px]">
                        <div onClick={showDesc} onMouseLeave={hideDescOnMobile} className="btn-secondary flex pb-3 py-0 border border-slate-800 cursor-pointer group-hover:bg-sky-500">
                            <FaEye
                                className={"mr-1 text-slate-300"}
                            />
                            <Text
                                text={"Ver más"}
                                size={"xs"}
                                style={"text-slate-300"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div ref={descriptionRef}  onMouseLeave={hideDescOnDesk} className="absolute flex items-center justify-center w-full h-full px-6 mt-80 transition-all bg-slate-900 opacity-95 border-t-2 border-sky-500">
                <div>
                    <div>
                        <Text
                            text={title}
                            size={"lg"}
                            style={"text-white font-bold border-b"}
                        />
                        <Text
                            text={"Sobre el proyecto:"}
                            size={"sm"}
                            style={"text-gray font-bold mt-2"}
                        />
                        <Text
                            text={description}
                            size={"sm"}
                            style={"text-gray"}
                        />
                    </div>
                    <div className="flex mt-4">

                        <a
                            href={urlProject}
                            className="flex text-secondary font-bold italic"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaExternalLinkAlt
                                className={"mt-1.5 mr-2 text-secondary"}
                            />
                            Ir al sitio web
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem