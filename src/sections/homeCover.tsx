import React from 'react'
import Text from '../components/text'

function HomeCover({ style }: any) {
    return (
        <div className={style}>
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
    )
}

export default HomeCover