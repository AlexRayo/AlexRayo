import React from 'react'
import Text from '../components/text'

function HomeCover() {
    return (
        <div className="h-96 border-b border-slate-300 flex items-center p-3">
            <div className='md:w-6/12'>
                <Text
                    text="Asdf Devs"
                    size="2xl"
                />
                <Text
                    text="Frontend developer"
                    size="lg"
                />
                <Text
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis omnis pariatur alias vero hic nobis iste, ipsa."
                />
                <div className="flex justify-end mt-2">
                    <a href="#" className='btn-secondary'>Contact</a>
                    <a href="#" className='btn-primary ml-4'>My Resume</a>
                </div>
            </div>
        </div>
    )
}

export default HomeCover