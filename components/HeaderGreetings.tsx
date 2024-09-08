import React from 'react'

// The props are getting imported here from page.tsx
const header = ({type ="title", title, subtext, user}: HeaderBoxProps) => {
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        {title}
        {type === 'greeting' && (
          <span className='text-bankGradient'>
            &nbsp;{user}
          </span>)}
      </h1>
      <p className='header-box-subtext'>
        {subtext}
      </p>
    </div>
  )
}

export default header