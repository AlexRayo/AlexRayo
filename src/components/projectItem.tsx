import React from 'react'
import Image from 'next/image'
import Text from '../components/text'
import Button from '../components/button'

const ProjectItem =({ srcImg, altImg, title, technologies, description, urlProject }: any) =>{

    return (
        <div className="group relative md:w-12/12 h-60 overflow-hidden rounded my-4 md:m-3 drop-shadow-lg">
            <Text 
                text={title}
                size={"md"}
                color={"text-gray"}
                style={"pb-3 bg-primary pl-6 py-3"}
            />
            <Image
                src={srcImg}
                placeholder="blur"
                alt={altImg}
                width={500}
                height={500}
                className={'absolute'}
            />
            <div className="absolute flex justify-center w-full h-full p-6 mt-80 group-hover:mt-0 transition-all bg-primary opacity-95">
                <div>
                    <Text 
                        text={"Tecnologías utilizadas:"}
                        size={"sm"}
                        color={"text-gray mt-2 mb-1"}
                    />
                    <Text 
                        text={technologies}
                        size={"sm"}
                        color={"text-secondary font-bold"}
                    />
                    {
                        description !== undefined && description != "" ?
                            <>
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
                            </>
                        : null
                    }
                    <div className="flex justify-end">
                        <Button
                            text={"Ver proyecto"}
                            href={urlProject}
                            style={"bg-slate-300 mt-4"}
                            target="_blank"
                        />                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem