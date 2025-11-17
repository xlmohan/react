import React from 'react'

const UsingFilter = () => {
 const numbers = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8, 8];

  return (
    <>
        <div>Filter only duplicate values</div>
        {numbers.filter((num,index,arr) => arr.indexOf(num))}
        <br></br>
        <span>Filter numbers lessthan five::: </span>
        {numbers.filter(num => num < 5)}
        <br></br>
        <span>Filter relevance::: </span>
        {numbers.filter((num,index,arr) => arr.indexOf(num) === index)}
        <br></br>
        <span>Filter larger number using Math object</span>
    </>
  )
}

export default UsingFilter