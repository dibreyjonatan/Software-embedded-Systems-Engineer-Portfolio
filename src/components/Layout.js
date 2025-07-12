import React from 'react'

const Layout = ({ children, className="" }) => {
  return (
    <div className={`w-full h-full bg-light  dark:bg-dark ${className}`}>
      {children}
    </div>
  )
}

export default Layout