import React from 'react'
import Text from '../components/text'

function HomeCover() {
    return (
        <div className="bg-img md:py-12">
            <div className="xl:w-8/12 mx-auto h-96 flex items-center p-3">
                <div className='md:w-6/12'>
                    <Text
                        text="Asdf Devs"
                        size="2xl"
                        style="text-slate-200"
                    />
                    <Text
                        text="Frontend developer"
                        style="text-slate-400 text-2xl"
                    />
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis omnis pariatur alias vero hic nobis iste, ipsa."
                        style="text-slate-400"
                    />
                    <div className="flex justify-end mt-2">
                        <a href="#" className='btn-secondary'>Contact</a>
                        <a href="#" className='btn-primary bg-sky-400 ml-3'>My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCover