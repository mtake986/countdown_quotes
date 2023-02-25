import React from 'react'
import InputAuthor from './InputAuthor'
import InputSentence from './InputSentence'
import SaveBtn from './SaveBtn'

const QuoteCreate = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <InputSentence />
      <InputAuthor />
      <div className="flex justify-between">
        <SaveBtn />
      </div>
    </div>
  )
}

export default QuoteCreate