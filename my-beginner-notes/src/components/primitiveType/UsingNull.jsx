import React, { useState } from 'react'

const UsingNull = () => {
    const [order] = useState(prompt("Enter the order"));
  return (
    <div>{(order == null)? "No Order Placed": order}</div>
  )
}

export default UsingNull