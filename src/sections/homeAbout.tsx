import React from 'react'
import Text from '../components/text'

function HomeAbout() {
    return (
        <div className="">
            <div className="xl:w-8/12 mx-auto mt-8 lg:mt-20 flex items-center py-12 px-3 md:px-12">
                <div className="md:w-6/12"></div>
                <div className='md:w-6/12'>
                    <Text
                        text="About"
                        size="xl"
                        style="text-sky-500"
                    />
                    <span className='rectangle-button bg-sky-500'></span>
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."
                        style="text-slate-300"
                    />
                    <br />
                    <Text
                        text="Inventore facere earum nostrum quod illo libero qui minima. Eligendi, explicabo esse."
                        style="text-slate-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeAbout