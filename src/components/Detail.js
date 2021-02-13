import React from 'react'

function Detail({ title, detail }) {

  return (
    <div >
      <p className='text-xs text-pale-purple'>{title}</p>
      <h2 className='text-base text-pale-purple'>{detail}</h2>
    </div>
  )
}

export default Detail
