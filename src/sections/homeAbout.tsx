import React from 'react'
import Text from '../components/text'

function HomeAbout() {
    return (
        <div className="">
            <div className="xl:w-8/12 mx-auto my-8 lg:my-20 flex items-center p-12 bg-slate-100 rounded-md shadow-lg">
                <div className="md:w-6/12"></div>
                <div className='md:w-6/12'>
                    <Text
                        text="About"
                        size="xl"
                        style="text-primary"
                    />
                    <span className='rectangle-button'></span>
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."
                        style="text-primary"
                    />
                    <br />
                    <Text
                        text="Inventore facere earum nostrum quod illo libero qui minima. Eligendi, explicabo esse."
                        style="text-primary"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeAbout