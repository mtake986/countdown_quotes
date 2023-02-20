import React from 'react'
import Title from './Title'

const Quote = () => {
  return (
    <div className="border-red-700 border-2">
      <Title />
      <div className="quote">If you can dream it, you can do it.</div>
      <div className="whoSaidThis">by Walt Disney</div>
    </div>
  );
}

export default Quote