import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Card from './Card';

export default function Testimonial(props ) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className=' xl:w-[1100px] md:w-[800px] sm:w[550px] bg-[#d7c7c7] flex flex-col justify-center items-center mt-5 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

            {/* <Card review={reviews[index]}></Card> */}

            <div className='flex gap-12 text-deepBlue font-bold mx-auto'>
                <button
                    onClick={leftShiftHandler}
                    className='cursor-pointer text-5xl hover:text-deepBlue '>
                    <FiChevronLeft />
                </button>
                
            <Card review={reviews[index]}></Card>
                <button
                    onClick={rightShiftHandler}
                    className='cursor-pointer text-5xl hover:text-deepBlue '>
                    <FiChevronRight />
                </button>
            </div>

            {/* <div className='mt-6'>
                <button
                    onClick={surpriseHandler}
                    className='bg-deepBlue hover:bg-deepBlueHead transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                    Surprise Me
                </button>
            </div> */}
        </div>
    );
}
