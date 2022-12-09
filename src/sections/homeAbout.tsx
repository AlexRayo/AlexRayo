import React from 'react'
import Text from '../components/text'

function HomeAbout() {
    return (
        <div className="my-8 lg:my-20 flex items-center p-3">
            <div className="md:w-6/12"></div>
            <div className='md:w-6/12'>
                <Text
                    text="About"
                    size="xl"
                />
                <span className='rectangle-button'></span>
                <Text
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."
                />
                <br />
                <Text
                    text="Inventore facere earum nostrum quod illo libero qui minima. Eligendi, explicabo esse."
                />
            </div>
        </div>
    )
}

export default HomeAbout