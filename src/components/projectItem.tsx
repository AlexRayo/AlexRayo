import React from 'react'
import Image from 'next/image'
import { FaTools, FaEye, FaExternalLinkAlt } from "react-icons/fa";

import Text from '../components/text'
import Button from '../components/button'

const ProjectItem = ({ srcImg, altImg, title, technologies, description, urlProject }: any) => {

    return (
        <div className="group relative mb-4 md:w-12/12 h-80 md:h-80 overflow-hidden my-4 md:m-3 rounded-b-md shadow-lg">

            <div className="absolute w-full">
                
                <div className="relative grid grid-cols-1 h-48 overflow-hidden rounded">
                    <Image
                        src={srcImg}
                        placeholder="blur"
                        alt={altImg}
                        width={1000}
                        height={500}
                        className={'absolute'}
                    />
                    <div className="absolute h-full w-full flex items-end bg-gradient-to-t from-slate-900/95 via-slate-900/30 ">
                        <div className='p-3 md:pl-6'>
                            <Text
                                text={'Proyecto'}
                                size={"sm"}
                                color={"text-white leading-4"}
                            />
                            <Text
                                text={title}
                                size={"md"}
                                color={"text-white font-bold"}
                            />
                        </div>
                    </div>
                </div>
                <div className="h-32 md:h-32 bg-slate-200 flex items-center justify-between">
                    <div className="flex p-3 md:px-6">
                        <FaTools
                            className={"mt-1 mr-2 text-secondary min-w-[20px]"}                            
                            size={"20px"}
                        />
                        <div className="">
                        <Text
                            text={"Tecnologías:"}
                            size={"sm"}
                            color={"text-primary font-bold"}
                        />
                        <Text
                            text={technologies}
                            size={"sm"}
                            color={"text-primary italic"}
                        />
                        </div>
                    </div>
                    <div className="flex justify-end mr-3 min-w-[100px]">
                        <div className="btn-secondary flex pb-3 py-0">
                            <FaEye
                                className={"mr-1 text-slate-600"}
                            />
                            <Text
                                text={"Ver más"}
                                size={"xs"}
                                color={"text-slate-600"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute flex items-center justify-center w-full h-full px-6 mt-80 group-hover:mt-0 group-hover:border-t-2 group-hover:border-sky-400 transition-all bg-primary opacity-95">
                <div>
                    <div>
                        <Text
                            text={title}
                            size={"lg"}
                            color={"text-white font-bold border-b"}
                        />
                        <Text
                            text={"Sobre el proyecto:"}
                            size={"sm"}
                            color={"text-gray font-bold"}
                            style={"mt-2"}
                        />
                        <Text
                            text={description}
                            size={"sm"}
                            color={"text-gray"}
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