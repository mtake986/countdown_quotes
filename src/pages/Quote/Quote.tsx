import React from 'react'
import Title from './Title'

const Quote = () => {
  return (
    <div className="w-full font-marck-script">
      <div className="relative flex flex-col gap-4 items-center px-6 py-10">
        <div className="quote text-3xl font-marck-script font-bold">
          If you can dream it, you can do it.
        </div>
        <div className="absolute right-2 bottom-0 flex items-center">
          <span className="text-md mr-1">by</span>
          <span className="text-xl">Walt Disney</span>
        </div>
      </div>
    </div>
  );
}

export default Quote