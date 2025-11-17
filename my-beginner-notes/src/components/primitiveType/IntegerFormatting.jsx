import React, { useState } from 'react'

const IntegerFormatting = () => {
  const [price] = useState(115000);
  const [stringPrice] = useState('100');

  let result = Number(price.toFixed(2)).toLocaleString();
  return (
    <div>
      <div>check about wrapper objects as well, but you should not intentionally create wrapper objects, not recommended in React</div>
      <div>Price ToFixed: {price.toFixed(2)}</div>
      <div>Price ToLocalString: {result}</div>
      <p>Verify number(the number can be either in string or integer it will check): {(isNaN(stringPrice)) ? "Price must be an number" : "Price is a number"}</p>
    </div>
  )
}

export default IntegerFormatting