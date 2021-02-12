import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto main-wrapper pt-8 pb-5">
      <div className="container grid px-6 mx-auto pt-6">{children}</div>
    </main>
  )
}

export default Main
