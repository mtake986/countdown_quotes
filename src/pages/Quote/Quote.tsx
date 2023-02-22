import React from "react";
import {Sentence, Author } from './index'

const Quote = () => {
  return (
    <div className="w-full font-marck-script relative flex flex-col gap-4 items-center p-5 sm:px-6 sm:py-10">
      <Sentence />
      <Author />
    </div>
  );
};

export default Quote;
