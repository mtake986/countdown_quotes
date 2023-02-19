import React, { useState } from 'react'

const DaysLeft = () => {
  const [daysLeft, setDaysLeft] = useState<number>(39)
  return (
    <div>
      <span><span>{daysLeft}</span>Days Left</span>
    </div>
  )
}

export default DaysLeft