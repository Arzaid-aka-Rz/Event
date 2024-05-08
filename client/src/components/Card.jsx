import React from 'react'

export default function Card(props) {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative gap-3'>
    
    <div className='text-center '>
      <p className='tracking-wider font-bold text-4xl text-deepBlue capitalize'>{review.name}</p>
    </div>

    <div className='text-center mt-4 gap-2 font-semibold text-deepBlueHead flex flex-col'>
      <div>{review.text1}</div>
      <div>{review.text2}</div>
      <div>{review.text3}</div>
      <div>{review.text4}</div>
      <div>{review.text5}</div>
      <div>{review.text6}</div>
      <div>{review.text7}</div>
      <div>{review.text8}</div>
      <div>{review.text9}</div>
      <div>{review.text11}</div>
      <div>{review.text12}</div>
      <div>{review.text13}</div>
      <div>{review.text14}</div>
      <div>{review.text15}</div>
      <div>{review.text16}</div>
 
    </div>

  </div>
  )
}
